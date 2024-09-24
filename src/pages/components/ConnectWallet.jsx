import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogClose,
} from "../../components/ui/dialog";
import { X } from "lucide-react";
import "../../App.css";
import { Buffer } from "buffer";
import {
  BigNum,
  Value,
  Address,
} from "@emurgo/cardano-serialization-lib-asmjs";

const ConnectWallet = ({ setIsWalletState, walletState }) => {
  const [walletsArray, setWalletsArray] = React.useState([]);

  React.useEffect(() => {
    const pollWallets = (count = 0) => {
      const wallets = [];
      for (const key in window.cardano) {
        if (window.cardano[key].enable && wallets.indexOf(key) === -1) {
          wallets.push(key);
        }
      }
      if (wallets.length === 0 && count < 3) {
        setTimeout(() => {
          pollWallets(count + 1);
        }, 1000);
        return;
      }
      setWalletsArray(wallets);
    };
    pollWallets();
    // loadWasm();
  }, []);
  const order = ["okxwallet", "vespr", "nami", "eternl", "typhon"];

  async function updateBalance(walletApi) {
    try {
      const balanceInLovelace = await walletApi.getBalance();
      console.log("Raw balance from API:", balanceInLovelace);

      const isHex = /^[0-9A-Fa-f]+$/.test(balanceInLovelace);
      console.log("Is balance in hex format?", isHex);

      let balanceInAda;
      if (isHex) {
        balanceInAda = Value.from_bytes(Buffer.from(balanceInLovelace, "hex"));
      } else {
        balanceInAda = Number(balanceInLovelace) / 1000000;
      }
      console.log("Calculated ADA balance:", balanceInAda.coin().to_str());
      const newBalance = parseInt(balanceInAda.coin().to_str()) / 1000000;
      console.log(newBalance);
      // const lovelaceBalance = parseInt(balanceInAda.coin().to_str())

      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=usd"
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

  const connectToWallet = async (walletKey) => {
    if (
      window.cardano &&
      window.cardano[walletKey] &&
      window.cardano[walletKey].enable
    ) {
      try {
        const wallet = await window.cardano[walletKey].enable();

        console.log(`Connected to ${walletKey}`);

        // Get balance
        const balance = await updateBalance(wallet);
        console.log(`Balance: ${balance} ADA`);

        // Get network
        const network = await wallet.getNetworkId();
        console.log(`Network: ${network}`);

        // Get address
        const addresses = await wallet.getUsedAddresses();
        const address =
          addresses.length > 0 ? addresses[0] : "No address found";
        console.log(`Address: ${address}`);
        const normalAddress = Address.from_bytes(
          Buffer.from(address, "hex")
        ).to_bech32();
        console.log(`Normal Address: ${normalAddress}`);
        setIsWalletState({
          address: normalAddress,
          walletName: walletKey,
          isWalletConnected: true,
          balance: balance.toPrecision(3),
        });

        return wallet;
      } catch (error) {
        console.error(`Failed to connect to ${walletKey}:`, error);
        setIsWalletState({ isWalletConnected: false }, ...walletState);
      }
    } else {
      console.error(`Wallet ${walletKey} is not available`);
      setIsWalletState({ isWalletConnected: false }, ...walletState);
    }
  };

  const filteredWalletNames = walletsArray
    .sort((a, b) => {
      return order.indexOf(a.toLowerCase()) - order.indexOf(b.toLowerCase());
    })
    .filter((wallet) => order.includes(wallet.toLowerCase()));

  console.log(filteredWalletNames);

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <div className="sc-gEvEer eLaKli">
          <button className="sc-gEvEer eWXwvT w-full lg:w-auto">
            Connect wallet
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[412px]  p-0 ">
        <DialogHeader className="   p-5 border-b border-[#e5e9f1]">
          <div className="sc-gEvEer sc-eqUAAy flex justify-between items-center  fgprtA">
            <div className="sc-gEvEer ihQBzN">Connect your Wallet</div>
            <DialogClose>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path
                  d="M1.76.34 8 6.6 14.24.33a1 1 0 0 1 1.32-.08l.1.08a1 1 0 0 1 .08 1.32l-.08.1L9.4 8l6.25 6.24a1 1 0 1 1-1.42 1.42L8 9.4l-6.24 6.25a1 1 0 0 1-1.32.08l-.1-.08a1 1 0 0 1-.08-1.32l.08-.1L6.58 8 .34 1.76A1 1 0 0 1 1.76.34Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </DialogClose>
          </div>
        </DialogHeader>
        <div className="px-5  ">
          <p className="text-sm text-gray-500 mb-4">
            By connecting your wallet, you agree to our{" "}
            <a href="/terms" className="text-blue-500 hover:underline">
              Terms of Service
            </a>{" "}
            and our{" "}
            <a href="/privacy" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
          <div className="space-y-4 ">
            {filteredWalletNames.map((key) => (
              <div
                onClick={() => {
                  connectToWallet(key);
                }}
                key={key}
                className="flex cursor-pointer  items-center justify-between border border-slate-300 w-full h-[3.4rem] px-3  rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <img
                    src={window.cardano[key].icon}
                    alt={window.cardano[key].name}
                    className="w-8 h-8 mr-3"
                  />
                  <span>{window.cardano[key].name}</span>
                </div>
                {(window.cardano[key].name === "OKX Wallet" ||
                  window.cardano[key].name === "VESPR") && (
                  <div className="flex items-center justify-center gap-12">
                    <p>({key})</p>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      height="16px"
                      color="rgb(83, 70, 255)"
                      className="sc-gEvEer mr-[10px] eGyXng"
                    >
                      <title>Experimental support only</title>
                      <path
                        fill="currentColor"
                        d="M437.2 403.5L320 215V64h8c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h8v151L10.8 403.5C-18.5 450.6 15.3 512 70.9 512h306.2c55.7 0 89.4-61.5 60.1-108.5zM137.9 320l48.2-77.6c3.7-5.2 5.8-11.6 5.8-18.4V64h64v160c0 6.9 2.2 13.2 5.8 18.4l48.2 77.6h-172z"
                      ></path>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className=" py-3 border-t border-[#e5e9f1] text-center">
          <p className="text-sm text-gray-500">New to Cardano?</p>
          <a
            href="https://docs.muesliswap.com/cardano/cardano-wallets"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline inline-flex items-center"
          >
            Learn about Cardano wallets
            <svg
              width="18px"
              height="18px"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
            >
              <path
                d="M16 16H2V2h7V0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V9h-2v7zM11 0v2h3.59l-9.83 9.83 1.41 1.41L16 3.41V7h2V0h-7z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConnectWallet;
