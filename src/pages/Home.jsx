import { useState, useEffect, useCallback } from "react";
import AssetPopup from "./components/AssetPopup";
import BottomAssetPopup from "./components/BottomAssetPopup";
import ConnectWallet from "./components/ConnectWallet";
import img from "../assets/muesliswap.86e5affdd1cbde9ed769.webp";
import useStore from "./store/store";
import { useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";
import SettingsPopup from "./components/SettingsPopup";
const Home = () => {
  const [topInputValue, setTopInputValue] = useState(null);
  const [bottomInputValue, setBottomInputValue] = useState(null);
  const { state } = useStore();
  const [totalAssets, setTotalAssets] = useState();
  const [walletBalance, setWalletBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [buyValue, setBuyValue] = useState("")
  const [sellValue, setSellValue] = useState("")
  const [activeTab, setActiveTab] = useState(false)
  const navigate = useNavigate()
  console.log(topInputValue)
  const getAllPossibleAssets = useCallback(async () => {
    try {
      const response = await fetch("https://api.muesliswap.com/list", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTotalAssets(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching assets:", error);
      return [];
    }
  }, []);

  useEffect(() => {
    getAllPossibleAssets();
  }, [getAllPossibleAssets]);

  const handleSellValueChange = (e) => {
    setSellValue(e.target.value);
  };

  const handleBuyValueChange = (e) => {
    setBuyValue(e.target.value);
  };
  // console.log(totalAssets);
  return (
    <div>
      <div className="font-gilroy">
        <div className="Toastify"></div>

        <div height="56" className="sc-gEvEer kvHQza hidden lg:flex "></div>
        <main className="sc-kOPcWz mb-0 hierkx">
          <div className="sc-iHGNWf mb-0 hQvJpi">
            <div className="sc-gEvEer mb-0   gap-8 jAgWcu">
              <div className="sc-gEvEer hidden xl:flex  sc-eqUAAy eUTSiE fgprtA">
                <nav width="fit-content" className="sc-gEvEer bBbSyu">
                  <div className="sc-gEvEer MVEyt">
                    <p className="sc-gEvEer dTIZMK">1H</p>
                  </div>
                  <span className="sc-gEvEer jdNfMa"></span>
                  <div className="sc-gEvEer bnWzbS">
                    <p className="sc-gEvEer dTIZMK">2H</p>
                  </div>
                  <span className="sc-gEvEer boAZoc"></span>
                  <div className="sc-gEvEer gdioPD">
                    <p className="sc-gEvEer dTIZMK">12H</p>
                  </div>
                  <span className="sc-gEvEer dXFWUW"></span>
                  <div className="sc-gEvEer eElQjc">
                    <p className="sc-gEvEer dTIZMK">1D</p>
                  </div>
                  <span className="sc-gEvEer fuLCfR"></span>
                </nav>
              </div>
              <div className="sc-gEvEer col-span-3  w-full   lg:w-auto xl:w-full  lg:mx-auto  xl:col-span-1  sc-eqUAAy bugrHU fgprtA">
                <div width="100%" className="sc-gEvEer sc-eqUAAy jiukso fgprtA">
                  <div
                    width="100%"
                    className="sc-gEvEer sc-eqUAAy lkKqPm fgprtA"
                  >
                    <nav className="sc-gEvEer relative jTZppj">
                      <ul
                        width="fit-content"
                        className="sc-gEvEer sc-eqUAAy hqwCPJ fgprtA"
                      >
                        <li
                          onClick={() => {
                            setActiveTab(false)
                          }}
                          id="selector-tab-0-1726992618004"
                          className="sc-gEvEer ikUdpz"
                        >
                          <button
                            height="fit-content"
                            width="fit-content"
                            className="sc-gEvEer brOJcM"
                          >
                            <div
                              height="32px"
                              className="sc-gEvEer sc-eqUAAy jVfJTA fgprtA"
                            >
                              <div className="sc-gEvEer PezVM">Instant</div>
                            </div>
                          </button>
                        </li>
                        <li

                          id="selector-tab-1-1726992618004"
                          className="sc-gEvEer fRIgFc"
                        >
                          <button
                            onClick={() => {
                              setActiveTab(true)
                            }}
                            height="fit-content"
                            width="fit-content"
                            className="sc-gEvEer brOJcM"
                          >
                            <div
                              height="32px"
                              className={"sc-gEvEer sc-eqUAAy jVfJTA fgprtA"}
                            >
                              <div className={cn("sc-gEvEer hGNUub",
                                activeTab ? 'text-[#5364ff]' : 'text-current'
                              )} >Limit</div>
                            </div>
                          </button>
                        </li>
                      </ul>
                      <div className={cn("sc-gEvEer  top-1.5 mr-2  bottom-0 left-0  w-1/2  bosMzF",
                        activeTab ? 'translate-x-[67px]  w-[44px]  ' : 'translate-x-0 ml-2 '
                      )}></div>
                      <div
                        id="selector-tab-underline-reference-1726992618004"
                        className="sc-gEvEer xgTHf"
                      ></div>
                    </nav>
                    <SettingsPopup />
                  </div>
                  <div className="sc-gEvEer sc-eqUAAy eLudzR fgprtA">
                    <div width="100%" className="sc-gEvEer w-full  fzYVaO">
                      <div className="sc-gEvEer sc-eqUAAy gWGqxJ w-full fgprtA">
                        <p fontSize="12px" className="sc-gEvEer gkVEcg">
                          You pay
                        </p>
                        {state.isWalletConnected && (
                          <div className="sc-gEvEer sc-eqUAAy text-sm items-center flex gap-2 dtTpup fgprtA">
                            <p
                              fontSize="12px"
                              className="sc-gEvEer  mt-[0.7px]  hCjJOA"
                            >
                              Balance:{" "}
                              <span
                                fontSize="12px"
                                fontWeight="500"
                                className="sc-gEvEer p-0 dsiPeK"
                              >
                                {topInputValue && Number(topInputValue.quantity) / 1000000}
                              </span>
                            </p>
                            <button
                              onClick={() => {
                                topInputValue && setBuyValue((Number((topInputValue.quantity) / 1000000) * 0.1).toFixed(2))
                              }}
                              color="main"
                              className="sc-gEvEer bg-[#dfddff] text-[#5346ff] rounded-md  h-[18px] w-[35.02px] jYQNMQ"
                            >
                              1%
                            </button>
                            <button
                              onClick={() => {
                                topInputValue && setBuyValue((Number((topInputValue.quantity) / 1000000) * 0.75).toFixed(2))
                              }}
                              color="main"
                              className="sc-gEvEer bg-[#dfddff] text-[#5346ff] rounded-md  h-[18px] w-[35.02px] jYQNMQ"
                            >
                              75%
                            </button>
                            <button
                              onClick={() => {
                                topInputValue && setBuyValue((Number(topInputValue.quantity) / 1000000).toFixed(2))
                              }}
                              color="main"
                              className="sc-gEvEer bg-[#dfddff] text-[#5346ff] rounded-md  h-[18px] w-[35.02px] jYQNMQ"
                            >
                              MAX
                            </button>
                          </div>
                        )}
                      </div>
                      <div className="w-full bPnuvt flex">
                        <AssetPopup
                          walletBalance={walletBalance}
                          topInputValue={topInputValue}
                          totalAssets={totalAssets}
                          setTopInputValue={setTopInputValue}
                        />
                        <div className="sc-gEvEer sc-eqUAAy bmYucd fgprtA">
                          <input
                            onChange={(e) => {
                              setBuyValue(e.target.value)
                            }}
                            type="string"
                            placeholder="0"
                            inputMode="decimal"
                            max={topInputValue && Number((topInputValue.quantity) / 1000000).toFixed(2)}
                            autoComplete="off"
                            autoCorrect="off"
                            spellCheck="false"
                            minLength="1"
                            maxLength="79"
                            pattern="^[0-9,0-9]*[.]?[0-9,0-9]*$"
                            className="sc-fTFjTM dvGUNi"
                            value={buyValue}
                          />
                          <span fontSize="12px" className="sc-gEvEer gINIKT">
                            0 $
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        const tempValue = topInputValue;
                        setTopInputValue(bottomInputValue);
                        setBottomInputValue(tempValue);
                      }}
                      color="main"
                      className="sc-gEvEer sc-eqUAAy cursor-pointer igGESK fgprtA"
                    >
                      <svg
                        viewBox="0 0 14 12"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20px"
                        width="20px"
                        // Removed invalid 'sx' property
                        className="sc-gEvEer kvdNRd"
                      >
                        <path
                          d="M7.71 11.72a1 1 0 0 1 0-1.42L11 7H1a1 1 0 0 1 0-2h10L7.71 1.71A1 1 0 1 1 9.12.3l4.3 4.3a2 2 0 0 1 .57 1.24L14 6a2 2 0 0 1-.59 1.4l-4.29 4.3a1 1 0 0 1-1.41.02z"
                          fill="currentColor"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div width="100%" className="sc-gEvEer  w-full mt-4  fzYVaO">
                      <div className="sc-gEvEer sc-eqUAAy gWGqxJ w-full fgprtA">
                        <p fontSize="12px" className="sc-gEvEer gkVEcg">
                          You get
                        </p>
                        {state.isWalletConnected && (
                          <div className="sc-gEvEer sc-eqUAAy text-sm items-center flex gap-2 dtTpup fgprtA">
                            <p
                              fontSize="12px"
                              className="sc-gEvEer  mt-[0.7px]  hCjJOA"
                            >
                              Balance:{" "}
                              <span
                                fontSize="12px"
                                fontWeight="500"
                                className="sc-gEvEer p-0 dsiPeK"
                              >
                                {bottomInputValue && Number(bottomInputValue.quantity) / 1000000}
                              </span>
                            </p>
                            <button
                              onClick={() => {
                                bottomInputValue && setSellValue(Number(((bottomInputValue.quantity) / 1000000) * 0.1).toFixed(2))
                              }}
                              color="main"
                              className="sc-gEvEer bg-[#dfddff] text-[#5346ff] rounded-md  h-[18px] w-[35.02px] jYQNMQ"
                            >
                              1%
                            </button>
                            <button
                              onClick={() => {
                                bottomInputValue && setSellValue(Number(((bottomInputValue.quantity) / 1000000) * 0.75).toFixed(2))
                              }}
                              color="main"
                              className="sc-gEvEer bg-[#dfddff] text-[#5346ff] rounded-md  h-[18px] w-[35.02px] jYQNMQ"
                            >
                              75%
                            </button>
                            <button
                              onClick={() => {
                                bottomInputValue && setSellValue(Number((bottomInputValue.quantity) / 1000000).toFixed(2))
                              }}
                              color="main"
                              className="sc-gEvEer bg-[#dfddff] text-[#5346ff] rounded-md  h-[18px] w-[35.02px] jYQNMQ"
                            >
                              MAX
                            </button>
                          </div>
                        )}
                      </div>
                      <div className="w-full bPnuvt flex">
                        <BottomAssetPopup
                          walletBalance={walletBalance}
                          setBottomInputValue={setBottomInputValue}
                          bottomInputValue={bottomInputValue}
                          totalAssets={totalAssets}
                        />
                        <div className="sc-gEvEer sc-eqUAAy bmYucd fgprtA">
                          <input
                            onChange={(e) => {
                              setSellValue(e.target.value)
                            }}
                            type="numeric"
                            placeholder="0"
                            inputMode="decimal"
                            autoComplete="off"
                            autoCorrect="off"
                            max={bottomInputValue && Number((bottomInputValue.quantity) / 1000000).toFixed(2)}
                            spellCheck="false"
                            minLength="1"
                            maxLength="79"
                            pattern="^[0-9,0-9]*[.]?[0-9,0-9]*$"
                            className="sc-fTFjTM dvGUNi"
                            value={sellValue}
                          />
                          <span fontSize="12px" className="sc-gEvEer gINIKT">
                            0 $
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      display="none"
                      width="100%"
                      className="sc-gEvEer iyqwKD"
                    >
                      <div
                        width="100%"
                        className="sc-gEvEer sc-eqUAAy dfMKPk fgprtA"
                      >
                        <div fontSize="12px" className="sc-gEvEer gINIKT">
                          Limit price (ADA)
                        </div>
                        <button type="button" className="sc-jGKxIK AypgS">
                          <svg
                            width="18"
                            height="18"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                          >
                            <defs>
                              <path id="a" d="M0 0h1600v5824H0z"></path>
                            </defs>
                            <g fill="none" fillRule="evenodd">
                              <path d="M-895-538H705V764H-895z"></path>
                              <use
                                fill="#EEF3FD"
                                fillOpacity="0"
                                xlinkHref="#a"
                                transform="translate(-895 -538)"
                              ></use>
                              <g transform="translate(-307 -378)">
                                <rect width="424" height="596" rx="16"></rect>
                                <path
                                  d="M311.5 386.34a4.54 4.54 0 0 1 7.45-2.76l-.58.58a.5.5 0 0 0 0 .7c.1.1.22.15.35.15h2.31a.5.5 0 0 0 .5-.5v-2.29a.5.5 0 0 0-.86-.35l-.65.65a6.09 6.09 0 0 0-8.54.48 5.97 5.97 0 0 0-1.47 3.12.76.76 0 0 0 .74.88c.38 0 .7-.28.75-.66Zm9.75.66c-.38 0-.7.28-.75.66a4.54 4.54 0 0 1-7.45 2.76l.58-.58a.5.5 0 0 0 0-.7.5.5 0 0 0-.35-.15h-2.31a.5.5 0 0 0-.5.5v2.29c0 .27.22.5.5.5a.5.5 0 0 0 .36-.15l.65-.65a6.09 6.09 0 0 0 8.54-.48 5.97 5.97 0 0 0 1.47-3.12.76.76 0 0 0-.74-.88Z"
                                  fill="currentColor"
                                ></path>
                              </g>
                            </g>
                          </svg>
                          <div
                            color="currentColor"
                            fontSize="12px"
                            className="sc-gEvEer kBjPbY"
                          >
                            market price
                          </div>
                        </button>
                      </div>
                      <div
                        width="100%"
                        className="sc-gEvEer sc-eqUAAy ftBtFf fgprtA"
                      >
                        <button
                          type="button"
                          className="sc-krNlru gzaCtt"
                          style={{ cursor: "pointer" }}
                        >
                          <div width="16px" className="sc-gEvEer jDNYAs">
                            <svg
                              viewBox="0 0 24 24"
                              width="100%"
                              height="100%"
                              fill="var(--toastify-icon-color-error)"
                            >
                              <path d="M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"></path>
                            </svg>
                          </div>
                          <div
                            className="LazyLoad"
                            style={{ height: "26px", width: "26px" }}
                          ></div>
                          <p fontSize="16px" className="sc-gEvEer ivXQsU">
                            Orderbook
                          </p>
                          <div color="text" className="sc-gEvEer QQCIb">
                            <svg
                              width="10"
                              height="6"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z"
                                fill="currentColor"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </button>
                        <div className="sc-gEvEer sc-eqUAAy ddAbJc fgprtA">
                          <input
                            type="string"
                            placeholder="0"
                            inputMode="decimal"
                            autoComplete="off"
                            autoCorrect="off"
                            spellCheck="false"
                            minLength="1"
                            maxLength="79"
                            pattern="^[0-9,0-9]*[.]?[0-9,0-9]*$"
                            className="sc-guJBdh iPWtKo"
                          />
                          <button type="button" className="sc-hZDyAQ gqFsoE">
                            <svg
                              fill="none"
                              height="16"
                              viewBox="0 0 24 24"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                stroke="currentColor"
                                strokeLinecap="round"
                                transform="translate(3.960488)"
                              >
                                <path
                                  d="m5.1719575 18.870708v-6.24668c0-.98577.764251-1.784781 1.707008-1.784781h10.2420625c.942801 0 1.707014.799011 1.707014 1.784781v6.24668c0 .985762-.764213 1.784783-1.707014 1.784783h-10.2420625c-.942757 0-1.707008-.799021-1.707008-1.784783z"
                                  fill="currentColor"
                                  strokeWidth="1.62134"
                                ></path>
                                <path
                                  d="m-2.721071 10.839149v-2.6771329c0-2.9571173 2.2927928-5.3543357 5.121071-5.3543357 2.828341 0 5.121071 2.3972184 5.121071 5.3543357v2.6771329"
                                  strokeWidth="1.62136"
                                ></path>
                              </g>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sc-gEvEer ggfJnL">
                    <div
                      width="100%"
                      className="sc-gEvEer sc-eqUAAy kwjYES fgprtA"
                    >
                      <p fontSize="12px" className="sc-gEvEer gkVEcg">
                        Protocol
                      </p>
                      <div
                        width="100%"
                        className="sc-gEvEer sc-eqUAAy hvGnHG fgprtA"
                      >
                        <div className="sc-gEvEer sc-eqUAAy bRPYeD fgprtA">
                          <button
                            type="button"
                            disabled=""
                            className="sc-krNlru p-2 gzaCtt"
                            style={{ cursor: "pointer" }}
                          >
                            <div width="16px" className="sc-gEvEer  jDNYAs">
                              <svg
                                viewBox="0 0 24 24"
                                width="100%"
                                height="100%"
                                fill="var(--toastify-icon-color-error)"
                              >
                                <path d="M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"></path>
                              </svg>
                            </div>
                            <div
                              className="LazyLoad is-visible"
                              style={{ height: "26px", width: "26px" }}
                            >
                              <img
                                src={img}
                                crossOrigin="anonymous"
                                alt="/static/media/muesliswap.86e5affdd1cbde9ed769.webp"
                                className="sc-gEvEer kxeTOB"
                              />
                            </div>
                            <p
                              style={{ fontSize: "16px" }}
                              className="sc-gEvEer ivXQsU"
                            >
                              Orderbook
                            </p>
                            <div color="text" className="sc-gEvEer QQCIb"></div>
                          </button>
                        </div>
                        <div
                          height="42px"
                          className="sc-gEvEer sc-eqUAAy koLDOl fgprtA"
                        >
                          <div className="sc-gEvEer hUUmgk">
                            Price:
                            <span className="sc-ibQAlb buTpPT">
                              <span>-</span>
                              <div
                                color="#6b5fff"
                                className="sc-jaXxmE euZplJ"
                              ></div>
                              <div className="sc-fxwrCY dGwCMf">
                                <div className="sc-gEvEer kpVmdW">
                                  Data updating real-time
                                </div>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        height="0"
                        overflow="hidden"
                        className="sc-gEvEer sc-eqUAAy KIRqE fgprtA"
                      ></div>
                    </div>
                    <div display="flex" className="sc-gEvEer inczKp">
                      <div
                        width="100%"
                        className="sc-gEvEer sc-eqUAAy cPZWaT fgprtA"
                      >
                        <button
                          height="14px"
                          type="button"
                          className="sc-gEvEer bgWxOy"
                        >
                          <div fontSize="12px" className="sc-gEvEer eXizvC">
                            Total Fee&nbsp;
                          </div>
                          <svg
                            height="12"
                            viewBox="0 0 7 12"
                            xmlns="http://www.w3.org/2000/svg"
                            // Removed invalid 'sx' property
                            className="sc-gEvEer hfxPYJ"
                          >
                            <path
                              d="M.3 11.7a1 1 0 0 1 0-1.4l4.05-4.06a.33.33 0 0 0 0-.48L.29 1.71A1 1 0 1 1 1.71.29l4.05 4.06a2.33 2.33 0 0 1 0 3.3l-4.05 4.06a1 1 0 0 1-1.42 0z"
                              fill="currentColor"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </button>
                        <div
                          fontSize="12px"
                          fontWeight="700"
                          className="sc-gEvEer eJxbyY"
                        >
                          0.95 ₳
                        </div>
                      </div>
                      <div
                        height="0"
                        overflow="hidden"
                        className="sc-gEvEer sc-eqUAAy KIRqE fgprtA"
                      >
                        <div className="sc-gEvEer sc-eqUAAy burvyR fgprtA">
                          <div className="sc-gEvEer sc-eqUAAy dSOvFp fgprtA">
                            <div
                              fontWeight="500"
                              fontSize="12px"
                              className="sc-gEvEer fCYFpm"
                            >
                              Matchmaker Fee
                            </div>
                          </div>
                          <div fontSize="12px" className="sc-gEvEer joccZj">
                            0.95 ₳
                          </div>
                        </div>
                        <div className="sc-gEvEer sc-eqUAAy burvyR fgprtA">
                          <div className="sc-gEvEer sc-eqUAAy dSOvFp fgprtA">
                            <div
                              fontWeight="500"
                              fontSize="12px"
                              className="sc-gEvEer fCYFpm"
                            >
                              Frontend Fee
                            </div>
                          </div>
                          <div fontSize="12px" className="sc-gEvEer joccZj">
                            0 ₳
                          </div>
                        </div>
                        <div className="sc-gEvEer sc-eqUAAy burvyR fgprtA">
                          <div className="sc-gEvEer sc-eqUAAy dSOvFp fgprtA">
                            <div
                              fontWeight="500"
                              fontSize="12px"
                              className="sc-gEvEer fCYFpm"
                            >
                              Milk-Holder Discount
                            </div>
                            <div
                              display="inline-flex"
                              className="sc-gEvEer dFSrfB"
                            >
                              <svg
                                width="18"
                                height="18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                color="grey500"
                                // This property 'sx' is not valid and should be removed.
                                className="sc-gEvEer ghqiAU"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M9 1.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15ZM9 3a6 6 0 1 0 0 12A6 6 0 0 0 9 3Zm0 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm0-7.5a2.618 2.618 0 0 1 .887 5.086l-.137.044v.87a.75.75 0 0 1-1.495.088L8.25 10.5V9a.75.75 0 0 1 .663-.745L9 8.25a1.125 1.125 0 1 0-1.12-1.233l-.005.108a.75.75 0 0 1-1.5 0A2.625 2.625 0 0 1 9 4.5Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                              <div
                                className="sc-fxwrCY dGwCMf"
                                style={{ transform: "translate(-16px, -100%)" }}
                              >
                                <div className="sc-gEvEer kpVmdW">
                                  If you hold more than 100 MILK you will enjoy
                                  reduced fees.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div fontSize="12px" className="sc-gEvEer joccZj">
                            0 ₳
                          </div>
                        </div>
                      </div>
                      <div
                        width="100%"
                        className="sc-gEvEer sc-eqUAAy bHkCOW fgprtA"
                      >
                        <div fontSize="12px" className="sc-gEvEer gkVEcg">
                          Deposit (Returned)
                        </div>
                        <div
                          fontSize="12px"
                          fontWeight="500"
                          className="sc-gEvEer jJprKx"
                        >
                          1.7 ₳
                        </div>
                      </div>
                    </div>
                    <div
                      width="100%"
                      className="sc-gEvEer sc-eqUAAy cPZWaT fgprtA"
                    >
                      <span fontSize="12px" className="sc-gEvEer gkVEcg">
                        Price after fee
                      </span>
                      <span
                        fontSize="12px"
                        fontWeight="500"
                        className="sc-gEvEer iGFvc"
                      >
                        -
                      </span>
                    </div>
                  </div>
                  <ConnectWallet
                    custom_text='Swap Instantly'
                    text='Connect Wallet'
                    width='full'
                    walletBalance={walletBalance}
                    setWalletBalance={setWalletBalance}
                  />
                </div>
                <div className="sc-gEvEer flex flex-col items-center justify-center sc-eqUAAy eFyWOq fgprtA">
                  <div width="90%" className="sc-gEvEer gyzkDw"></div>
                  <button
                    onClick={() => {
                      navigate('/expert')
                    }}
                    width="98%"
                    className="sc-gEvEer flex items-center justify-center dkqKlv"
                  >
                    <svg
                      width="10"
                      height="6"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "10px" }}
                      className="sc-gEvEer hYrVyJ"
                    >
                      <path
                        d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z"
                        fill="currentColor"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                    Go to Expert View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="sc-gEvEer sc-eqUAAy hidden lg:block  fSNpul fgprtA"></div>
      </div>
    </div>
  );
};

export default Home;
