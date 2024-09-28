import "./Farming.css";
import EarnTab from "./components/EarnTab";
import Ada from "../assets/ada.webp";
import { useCallback, useEffect, useState } from "react";
import { cn } from "../lib/utils";

const Farming = () => {
  const [farmingPools, setFarmingPools] = useState([]);
  const [openDropdowns, setOpenDropdowns] = useState([]);

  const toggleDropdown = (index) => {
    setOpenDropdowns(prevState => {
      if (prevState.includes(index)) {
        return prevState.filter(i => i !== index);
      } else {
        return [...prevState, index];
      }
    });
  };
  const getFarmingPools = useCallback(async () => {
    try {
      const response = await fetch('https://api.muesliswap.com/staking/farming-pools', {
        method: 'GET',
        headers: {},
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setFarmingPools(data.slice(0, 20));
      console.log(data.slice(0, 20));
    } catch (error) {
      console.error("Error fetching assets:", error);
      return [];
    }
  }, []);

  useEffect(() => {
    getFarmingPools();
  }, [getFarmingPools]);

  console.log(farmingPools)
  return (
    <>
      <main className="sc-kOPcWz hierkx">
        <div className="sc-iHGNWf hQvJpi">
          <div className="sc-gEvEer sc-eqUAAy dqTbFd fgprtA">
            <EarnTab />
          </div>
          <div className="sc-gEvEer sc-eqUAAy bJVedh fgprtA">
            <div className="sc-gEvEer sc-eqUAAy dpDhQl fgprtA">
              <div className="sc-gEvEer sc-eqUAAy jsTqeJ fgprtA">
                <div
                  color="text"
                  fontSize="calc(32px + (100vw - 750px) / 146.25)"
                  className="sc-gEvEer gRtkjr"
                >
                  Yield Farms
                </div>
                <div
                  fontFamily="inter"
                  color="text"
                  className="sc-gEvEer iTDrPV"
                >
                  Stake your LP tokens and earn farming rewards!
                </div>
              </div>
            </div>
          </div>
          <div className="sc-gEvEer cUhvNc">
            <div className="sc-gEvEer sc-eqUAAy fiUlZI fgprtA">
              <div className="sc-gEvEer jlEBNW"></div>
              <div className="sc-gEvEer lbUmFf">My Farms</div>
              <label
                aria-label="Only show entries with open positions"
                className="sc-bmzYkS iWLcNb"
              >
                <input type="checkbox" className="sc-eeDRCY fotkZP" />
                <span className="sc-koXPp kAqvkZ"></span>
              </label>
            </div>
            <table role="table" className="sc-gEvEer gRJxBs">
              <thead className="sc-gEvEer crOMDz">
                <tr role="row">
                  <th
                    colSpan="1"
                    role="columnheader"
                    title="Toggle SortBy"
                    className="sc-gEvEer iEcklH"
                    style={{ cursor: "pointer" }}
                  >
                    Liquidity Pool
                    <span hidden="" className="sc-ddjGPC fRRtfN">
                      <div className="sc-aXZVg dKyMbx">
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
                    </span>
                  </th>
                  <th
                    colSpan="1"
                    role="columnheader"
                    title="Toggle SortBy"
                    className="sc-gEvEer iEcklH"
                    style={{ cursor: "pointer" }}
                  >
                    My Stake
                    <span hidden="" className="sc-ddjGPC fRRtfN">
                      <div className="sc-aXZVg dKyMbx">
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
                    </span>
                  </th>
                  <th
                    colSpan="1"
                    role="columnheader"
                    className="sc-gEvEer hidden lg:table-cell iEcklH"
                  >
                    Total Rewards per Day
                    <span hidden="" className="sc-ddjGPC fRRtfN">
                      <div className="sc-aXZVg dKyMbx">
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
                    </span>
                  </th>
                  <th
                    colSpan="1"
                    role="columnheader"
                    title="Toggle SortBy"
                    className="sc-gEvEer iEcklH"
                    style={{ cursor: "pointer" }}
                  >
                    <span className="sc-gEvEer dSOvFp">Farming APR</span>
                    <div display="inline-flex" className="sc-gEvEer brmwU">
                      <svg
                        width="18"
                        height="18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        color="grey500"
                        style={{ marginLeft: "2px" }}
                        className="sc-gEvEer dIjCGl"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9 1.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15ZM9 3a6 6 0 1 0 0 12A6 6 0 0 0 9 3Zm0 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm0-7.5a2.618 2.618 0 0 1 .887 5.086l-.137.044v.87a.75.75 0 0 1-1.495.088L8.25 10.5V9a.75.75 0 0 1 .663-.745L9 8.25a1.125 1.125 0 1 0-1.12-1.233l-.005.108a.75.75 0 0 1-1.5 0A2.625 2.625 0 0 1 9 4.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <div
                        className="sc-hIUJlX kfowhQ"
                        style={{ transform: "translate(-14px, -100%)" }}
                      >
                        <div className="sc-gEvEer bcvAXg">
                          This is an estimate calculated using current trading
                          volume and staked tokens, and may not correspond to
                          realized gains or losses. <br />
                          The value updates dynamically.
                        </div>
                      </div>
                    </div>
                    <span className="sc-ddjGPC dtONNa">
                      <div className="sc-aXZVg jrzA-dM">
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
                    </span>
                  </th>
                  <th
                    colSpan="1"
                    role="columnheader"
                    title="Toggle SortBy"
                    className="sc-gEvEer iEcklH"
                    style={{ cursor: "pointer" }}
                  >
                    Total Locked
                    <span hidden="" className="sc-ddjGPC fRRtfN">
                      <div className="sc-aXZVg dKyMbx">
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
                    </span>
                  </th>
                  <th
                    colSpan="1"
                    role="columnheader"
                    title="Toggle SortBy"
                    className="sc-gEvEer iEcklH"
                    style={{ cursor: "pointer" }}
                  >
                    <span hidden="" className="sc-ddjGPC fRRtfN">
                      <div className="sc-aXZVg dKyMbx">
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
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody role="rowgroup" className="sc-gEvEer dSOvFp">

                {farmingPools.map((asset, index) => {

                  return (
                    <>
                      <tr key={index} height="64px" role="row" className="sc-gEvEer hKoCKV">
                        <td role="cell" className={cn("sc-gEvEer fZHjpi",
                          openDropdowns.includes(index) && ' bg-[#f3f5fe]'
                        )}
                        >
                          <a
                            className="sc-iHbSHJ bwYSnM"
                            href="/swap?base=.&amp;quote=2a80c713e0d518f84e0553957e3d581c9326cfc5931ea1f4dd0fb292.0014df107374616b65636f696e"
                          >
                            <div
                              className="LazyLoad is-visible"
                              style={{ height: "32px", width: "59.2px" }}
                            >
                              <div
                                width="59.2px"
                                height="32px"
                                className="sc-cWSHoV dazaWi"
                              >
                                <img
                                  src={asset.pool.tokenB.image}
                                  crossOrigin="anonymous"
                                  alt="https://tokens.muesliswap.com/static/img/tokens/2a80c713e0d518f84e0553957e3d581c9326cfc5931ea1f4dd0fb292.0014df107374616b65636f696e_scaled_100.webp"
                                  className="sc-gEvEer ceiwSH"
                                />
                                <img
                                  src={Ada}
                                  crossOrigin="anonymous"
                                  alt=""
                                  className="sc-gEvEer gUHNA-d"
                                />
                              </div>
                            </div>
                            <div className="sc-gEvEer flex fLROuh">
                              <div
                                display="inline-block"
                                className="sc-gEvEer cSVFGB"
                              >
                                {asset.pool.tokenB.symbol}
                              </div>
                              <div
                                display="inline-block flex"
                                className="sc-gEvEer kfkWNd"
                              >
                                /    {asset.pool.tokenA.symbol}
                              </div>
                            </div>
                          </a>
                        </td>
                        <td role="cell" className={cn("sc-gEvEer fZHjpi",
                          openDropdowns.includes(index) && 'bg-[#f3f5fe]'
                        )}
                        >
                          <div className="sc-gEvEer jVsTBr">-</div>
                        </td>
                        <td role="cell" className={cn("sc-gEvEer hidden lg:flex  fZHjpi",
                          openDropdowns.includes(index) && ' bg-[#f3f5fe]'
                        )}
                        >
                          <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                            <div display="grid" className="sc-gEvEer gap-1  hoROyV">
                              {asset.rewardTokens.map((token, i) => {
                                return (
                                  <>
                                    <div
                                      key={i}
                                      className="LazyLoad  is-visible"
                                      style={{ height: "24px", width: "24px" }}
                                    >
                                      <img
                                        src={token.rewardToken.image}
                                        crossOrigin="anonymous"
                                        alt="https://tokens.muesliswap.com/static/img/tokens/8f9c32977d2bacb87836b64f7811e99734c6368373958da20172afba.4d5949454c44_scaled_100.webp"
                                        className="sc-gEvEer fFqlxh"
                                      />
                                    </div>
                                    <div
                                      className="sc-gEvEer chgUfk "
                                    >
                                      {(Number(token.rewardEmittedPerDay) / 1000000).toFixed()} {token.rewardToken.symbol}
                                    </div>

                                  </>
                                )
                              })}
                            </div>
                          </div>
                        </td>
                        <td role="cell" className={cn("sc-gEvEer fZHjpi",
                          openDropdowns.includes(index) && ' bg-[#f3f5fe]'
                        )}
                        >
                          <div display="inline-block" className="sc-gEvEer cSVFGB">
                            {(Number(asset.farmingApr) * 100).toFixed(1)}%
                          </div>
                        </td>
                        <td role="cell" className={cn("sc-gEvEer fZHjpi",
                          openDropdowns.includes(index) && ' bg-[#f3f5fe]'
                        )}
                        >
                          <div display="inline-block" className="sc-gEvEer chgUfk">
                            {(Number(asset.totalStaked) / 1000000).toFixed()} ₳
                          </div>
                        </td>
                        <td role="cell" className={cn("sc-gEvEer fZHjpi",
                          openDropdowns.includes(index) && ' bg-[#f3f5fe]'
                        )}
                        >
                          <div onClick={() => {
                            toggleDropdown(index)
                          }} className="sc-gEvEer  flex items-center justify-center sc-eqUAAy egzmya fgprtA">
                            <div
                              color="inherit"
                              fontWeight="semiBold"
                              className="sc-gEvEer hidden lg:table-cell hHeQDs"

                            >
                              Details
                            </div>
                            <div className="sc-gEvEer  kafyRl">
                              <svg
                                height="12"
                                viewBox="0 0 7 12"
                                className="mx-auto"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M.3 11.7a1 1 0 0 1 0-1.4l4.05-4.06a.33.33 0 0 0 0-.48L.29 1.71A1 1 0 1 1 1.71.29l4.05 4.06a2.33 2.33 0 0 1 0 3.3l-4.05 4.06a1 1 0 0 1-1.42 0z"
                                  fill="currentColor"
                                  fillRule="evenodd"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </td>
                      </tr>

                      {
                        openDropdowns.includes(index) && (
                          <tr className={cn("sc-gEvEer dSOvFp",
                            openDropdowns.includes(index) && ' bg-[#f3f5fe]'
                          )} >
                            <td colSpan="6">
                              <div className="sc-gEvEer p-3   flex flex-col lg:flex-row gap-4 ebhujK">
                                <span name="stakeMore" className="sc-dSCuf p-3 bg-white rounded-lg w-full  lg:w-8/12  ">
                                  <div width="100%" className="sc-gEvEer itSkMx">
                                    <h4 fontFamily="gilroy" color="text" fontSize="18px" fontWeight="600" className="sc-gEvEer jVEjPV">Stake STK/ADA LP tokens</h4>
                                    <div className="sc-gEvEer flex flex-col lg:flex-row sc-eqUAAy fsMeKA fgprtA">
                                      <div width="100%" className="sc-gEvEer sc-eqUAAy gxEYNe fgprtA">
                                        <div className="sc-gEvEer sc-eqUAAy kHqsj fgprtA">
                                          <div fontSize="12px" fontFamily="inter" color="text" className="sc-gEvEer dweOPY">Balance: -</div>
                                          <button disabled className="sc-gEvEer kLtOSu">MAX</button>
                                        </div>
                                        <input type="string" placeholder="0" inputMode="decimal" autoComplete="off" autoCorrect="off" spellCheck="false" minLength="1" maxLength="79" pattern="^[0-9,0-9]*[.]?[0-9,0-9]*$" className="sc-gEvEer bOxyja" />
                                        <button height="40px" disabled className="sc-gEvEer dEuKCj">Select a Hungry Cow</button>
                                        <button disabled height="40px" className="sc-gEvEer dEuKCj">Stake</button>
                                      </div>
                                      <svg viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg" height="24px" m="50px 20px auto" color="main" className="sc-gEvEer rotate-90 lg:rotate-0 h-4 lg:h-auto uzYEF">
                                        <path d="M7.71 11.72a1 1 0 0 1 0-1.42L11 7H1a1 1 0 0 1 0-2h10L7.71 1.71A1 1 0 1 1 9.12.3l4.3 4.3a2 2 0 0 1 .57 1.24L14 6a2 2 0 0 1-.59 1.4l-4.29 4.3a1 1 0 0 1-1.41.02z" fill="currentColor" fillRule="evenodd"></path>
                                      </svg>
                                      <div width="100%" className="sc-gEvEer  sc-eqUAAy  kpgxOl fgprtA">
                                        <div className="sc-gEvEer sc-eqUAAy dpDhQl   fgprtA">
                                          <p className="sc-gEvEer jVsTBr">Stake</p>
                                          <p fontWeight="500" className="sc-gEvEer cwvpAF">0 LP tokens</p>
                                        </div>
                                        <div className="sc-gEvEer jlEBNW"></div>
                                        <div className="sc-gEvEer sc-eqUAAy bnaciH justify-between lg:justify-center fgprtA">
                                          <div className="sc-gEvEer hHuoiF">Nothing to stake?</div>
                                          <button className="sc-gEvEer hetGKv">Add Liquidity</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </span>
                                <span name="stakeInfo" className="sc-gEvEer rounded-lg p-3 w-full  lg:w-4/12 bg-white ">
                                  <div width="100%" height="100%" className="sc-gEvEer sc-eqUAAy jHyGok fgprtA">
                                    <h4 fontFamily="gilroy" color="text" fontSize="18px" fontWeight="600" width="min-content" className="sc-gEvEer jnBQpD">Pool&nbsp;Information</h4>
                                    <div className="sc-gEvEer imKmWV">
                                      Stake STK/ADA LP token to earn yield farming rewards! <br />
                                      <br />
                                      Use any of your HungryCows to get additional rewards according to the boosting factor!
                                    </div>
                                  </div>
                                </span>
                              </div>
                            </td>
                          </tr>
                        )
                      }
                    </>)
                })}

              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default Farming;
