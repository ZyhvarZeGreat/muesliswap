import React from "react";
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
import {
  BigNum,
  Value,
  Address,
} from "@emurgo/cardano-serialization-lib-asmjs";
import useStore from "../store/store";

const ConnectWallet = (props) => {
  // eslint-disable-next-line react/prop-types

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
          return asset; // Return ADA asset as is
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
        setState({
          state: {
            address: normalAddress,
            walletName: walletKey,
            isWalletConnected: true,
            balance: balance.toPrecision(3),
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
        <div className="sc-gEvEer eLaKli">
          <button className="sc-gEvEer eWXwvT w-full lg:w-auto">
            Connect wallet
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
