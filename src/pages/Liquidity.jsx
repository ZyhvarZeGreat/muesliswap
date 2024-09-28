import EarnTab from "./components/EarnTab";
import "./Liquidity.css";
import Ada from "../assets/ada.webp";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { cn } from "../lib/utils";

const Liquidity = () => {
  const [liquidityPools, setLiquidityPools] = useState([]);
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
  const getLiquidityPools = useCallback(async () => {
    try {
      const response = await fetch('https://api.muesliswap.com/liquidity/pools?perPage=100', {
        method: 'GET',
        headers: {},
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setLiquidityPools(data.slice(0, 20));
      console.log(data.slice(0, 20));
    } catch (error) {
      console.error("Error fetching assets:", error);
      return [];
    }
  }, []);

  useEffect(() => {
    getLiquidityPools();
  }, [getLiquidityPools]);

  console.log(liquidityPools)

  return (
    <main className="sc-kOPcWz hierkx">
      <div className="sc-iHGNWf hQvJpi">
        <div className="sc-gEvEer sc-eqUAAy dqTbFd fgprtA">
          <EarnTab />
          <a
            width="fit-content"
            href="https://docs.muesliswap.com/cardano/liquidity"
            target="_blank"
            rel="noopener noreferrer"
            className="sc-gEvEer kIGgoa sc-gEvEer kIGgoa"
          >
            Learn how to earn
            <svg
              width="18px"
              height="18px"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            // The 'xmlns:xlink' attribute is not needed and should be removed.
            >
              <title>Shape</title>
              <g
                id="Symbols"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Data-Display/Icons/external-link"
                  transform="translate(-3.000000, -3.000000)"
                  fill="#0C1629"
                >
                  <path
                    d="M12,3 C12.5522847,3 13,3.44771525 13,4 C13,4.51283584 12.6139598,4.93550716 12.1166211,4.99327227 L12,5 L6,5 C5.48716416,5 5.06449284,5.38604019 5.00672773,5.88337887 L5,6 L5,18 C5,18.5128358 5.38604019,18.9355072 5.88337887,18.9932723 L6,19 L18,19 C18.5128358,19 18.9355072,18.6139598 18.9932723,18.1166211 L19,18 L19,12 C19,11.4477153 19.4477153,11 20,11 C20.5128358,11 20.9355072,11.3860402 20.9932723,11.8833789 L21,12 L21,18 C21,19.5976809 19.75108,20.9036609 18.1762728,20.9949073 L18,21 L6,21 C4.40231912,21 3.09633912,19.75108 3.00509269,18.1762728 L3,18 L3,6 C3,4.40231912 4.24891996,3.09633912 5.82372721,3.00509269 L6,3 L12,3 Z M20,3 C20.5128358,3 20.9355072,3.38604019 20.9932723,3.88337887 L21,4 L21,8 C21,8.55228475 20.5522847,9 20,9 C19.4871642,9 19.0644928,8.61395981 19.0067277,8.11662113 L19,8 L19,6.42 L12.71,12.7 C12.5222334,12.8893127 12.2666375,12.9957983 12,12.9957983 C11.7333625,12.9957983 11.4777666,12.8893127 11.29,12.7 C11.1006873,12.5122334 10.9942017,12.2566375 10.9942017,11.99 C10.9942017,11.7678021 11.0681501,11.5532719 11.2023555,11.3792728 L11.29,11.28 L17.58,5 L16,5 C15.4477153,5 15,4.55228475 15,4 C15,3.48716416 15.3860402,3.06449284 15.8833789,3.00672773 L16,3 L20,3 Z"
                    fill="currentColor"
                    id="Shape"
                  ></path>
                </g>
              </g>
            </svg>
          </a>
        </div>
        <div className="sc-gEvEer sc-eqUAAy bJVedh fgprtA">
          <div className="sc-gEvEer sc-eqUAAy dpDhQl fgprtA">
            <div className="sc-gEvEer sc-eqUAAy fWnKpP fgprtA">
              <div
                color="text"
                fontSize="calc(32px + (100vw - 750px) / 146.25)"
                className="sc-gEvEer gRtkjr"
              >
                Liquidity
              </div>
              <div fontFamily="inter" color="text" className="sc-gEvEer iTDrPV">
                Add your tokens to liquidity pools and earn from transaction
                fees.
              </div>
            </div>

            <Link
              className="sc-gEvEer flex h-6 mt-12 px-4  py-6 items-center rounded-xl text-white font-semibold bg-[#5346ff]"
              // style={{ padding: "10px 16px 10px 12px", marginTop: "24px" }}
              to="/earn/liquidity/add"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ margin: "0px 8px 0px 0px", color: "white" }}>
                <path d="M12 4c.55 0 1 .51 1 1.14V11h6a1 1 0 0 1 0 2h-6v5.86c0 .63-.45 1.14-1 1.14s-1-.51-1-1.14V13H5a1 1 0 0 1 0-2h6V5.14c0-.63.45-1.14 1-1.14Z" fill="currentColor" fillRule="evenodd" />
              </svg>
              Add Liqudity
            </Link>
          </div>
          <div width="100%" className="sc-gEvEer fOzfof">
            <div className="sc-gEvEer sc-eqUAAy fiUlZI fgprtA">
              <div className="sc-gEvEer dMSCJz">
                Concentrated Liquidity Pools
              </div>
              <div className="sc-gEvEer jlEBNW"></div>
              <div className="sc-gEvEer lbUmFf">My Pools</div>
              <label className="sc-bmzYkS iWLcNb">
                <input type="checkbox" className="sc-eeDRCY fotkZP" />
                <span className="sc-koXPp kAqvkZ"></span>
              </label>
            </div>
            <table role="table" className="sc-gEvEer gcfgxO">
              <thead className="sc-gEvEer fIMUDY">
                <tr role="row">
                  <th
                    colSpan="1"
                    role="columnheader"
                    className="sc-gEvEer hhHPem"
                  >
                    Pair Name
                    <span className="sc-ddjGPC fRRtfN">
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
                    className="sc-gEvEer hidden lg:table-cell hhHPem"
                    style={{ cursor: "pointer" }}
                  >
                    Liquidity Range
                    <span className="sc-ddjGPC fRRtfN">
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
                    className="sc-gEvEer hhHPem"
                    style={{ cursor: "pointer" }}
                  >
                    Price
                    <span className="sc-ddjGPC fRRtfN">
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
                    className="sc-gEvEer hidden lg:table-cell hhHPem"
                    style={{ cursor: "pointer" }}
                  >
                    Liquidity Locked
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
                    className="sc-gEvEer hidden lg:table-cell hhHPem"
                    style={{ cursor: "pointer" }}
                  >
                    Volume 24h
                    <span className="sc-ddjGPC fRRtfN">
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
                    className="sc-gEvEer hhHPem"
                    style={{ cursor: "pointer" }}
                  >
                    <span className="sc-gEvEer dSOvFp">Liquidity APY</span>
                    <div className="sc-gEvEer ebwaLP">
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
                        className="sc-fxwrCY dGwCMf"
                        style={{ transform: "translate(-14px, -100%)" }}
                      >
                        <div className="sc-gEvEer bcvAXg">
                          This is an estimate calculated using current trading
                          volume, and may not correspond to realized gains or
                          losses.
                        </div>
                      </div>
                    </div>
                    <span className="sc-ddjGPC fRRtfN">
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
                    className="sc-gEvEer hhHPem"
                  >
                    <span className="sc-ddjGPC fRRtfN">
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
              <tbody role="rowgroup" className="sc-gEvEer px-4 eUgFaS">
                <tr role="row" className="sc-gEvEer gFEUUI ">
                  <td role="cell" className="sc-gEvEer  faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61.5368656e4d6963726f555344"
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
                            src="https://tokens.muesliswap.com/static/img/tokens/8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61.5368656e4d6963726f555344_scaled_100.webp"
                            crossOrigin="anonymous"
                            alt="https://tokens.muesliswap.com/static/img/tokens/8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61.5368656e4d6963726f555344_scaled_100.webp"
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
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          SHEN
                        </p>
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          fontSize="12"
                          className="sc-gEvEer gTyoIZ"
                        >
                          / ADA
                        </p>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer hidden lg:table-cell  faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy iRguQF fgprtA">
                      <div display="grid" className="sc-gEvEer ihaJeT">
                        <div className="sc-gEvEer hoppPw">from:</div>
                        <div className="sc-gEvEer jVsTBr">0.1 ADA</div>
                        <div className="sc-gEvEer hoppPw">to:</div>
                        <div className="sc-gEvEer jVsTBr">10.03 ADA</div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer  faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      1.02 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer hidden lg:table-cell  faiYBU">
                    <div className="sc-gEvEer jVsTBr">249,331 ₳</div>
                    <p className="sc-gEvEer   jLfEph">~87,878 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer hidden lg:table-cell   faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer   jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer  faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.13 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer  faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer  hidden lg:table-cell  hcJuDx"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer eXsOiX">
                        <svg
                          height="12"
                          viewBox="0 0 7 12"
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
                <tr role="row" className="sc-gEvEer gFEUUI ">
                  <td role="cell" className="sc-gEvEer  faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61.446a65644d6963726f555344"
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
                            src="https://tokens.muesliswap.com/static/img/tokens/8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61.446a65644d6963726f555344_scaled_100.webp"
                            crossOrigin="anonymous"
                            alt="https://tokens.muesliswap.com/static/img/tokens/8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61.446a65644d6963726f555344_scaled_100.webp"
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
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          DJED
                        </p>
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          fontSize="12"
                          className="sc-gEvEer gTyoIZ"
                        >
                          / ADA
                        </p>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer hidden lg:table-cell    faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy iRguQF fgprtA">
                      <div display="grid" className="sc-gEvEer ihaJeT">
                        <div className="sc-gEvEer hoppPw">from:</div>
                        <div className="sc-gEvEer jVsTBr">0.1 ADA</div>
                        <div className="sc-gEvEer hoppPw">to:</div>
                        <div className="sc-gEvEer jVsTBr">10.03 ADA</div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer  faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      2.84 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer hidden lg:table-cell   faiYBU">
                    <div className="sc-gEvEer jVsTBr">169,390 ₳</div>
                    <p className="sc-gEvEer   jLfEph">~59,702 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer hidden lg:table-cell   faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer   jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer  faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      1.62 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer  faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer  hidden lg:table-cell  hcJuDx"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer eXsOiX">
                        <svg
                          height="12"
                          viewBox="0 0 7 12"
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
                <tr role="row" className="sc-gEvEer gFEUUI ">
                  <td role="cell" className="sc-gEvEer  faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61.446a65644d6963726f555344&amp;quote=f66d78b4a3cb3d37afa0ec36461e51ecbde00f26c8f0a68f94b69880.69555344"
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
                            src="https://tokens.muesliswap.com/static/img/tokens/f66d78b4a3cb3d37afa0ec36461e51ecbde00f26c8f0a68f94b69880.69555344_scaled_100.webp"
                            crossOrigin="anonymous"
                            alt="https://tokens.muesliswap.com/static/img/tokens/f66d78b4a3cb3d37afa0ec36461e51ecbde00f26c8f0a68f94b69880.69555344_scaled_100.webp"
                            className="sc-gEvEer ceiwSH"
                          />
                          <img
                            src="https://tokens.muesliswap.com/static/img/tokens/8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61.446a65644d6963726f555344_scaled_100.webp"
                            crossOrigin="anonymous"
                            alt="https://tokens.muesliswap.com/static/img/tokens/8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61.446a65644d6963726f555344_scaled_100.webp"
                            className="sc-gEvEer gUHNA-d"
                          />
                        </div>
                      </div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          iUSD
                        </p>
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          fontSize="12"
                          className="sc-gEvEer gTyoIZ"
                        >
                          / DJED
                        </p>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer hidden lg:table-cell  faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy iRguQF fgprtA">
                      <div display="grid" className="sc-gEvEer ihaJeT">
                        <div className="sc-gEvEer hoppPw">from:</div>
                        <div className="sc-gEvEer jVsTBr">0.95 DJED</div>
                        <div className="sc-gEvEer hoppPw">to:</div>
                        <div className="sc-gEvEer jVsTBr">1.05 DJED</div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer  faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.95 DJED
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer hidden lg:table-cell  faiYBU">
                    <div className="sc-gEvEer jVsTBr">25,560 ₳</div>
                    <p className="sc-gEvEer   jLfEph">~9,009 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer hidden lg:table-cell   faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer   jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer  faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer  faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer  hidden lg:table-cell  hcJuDx"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer eXsOiX">
                        <svg
                          height="12"
                          viewBox="0 0 7 12"
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
                <tr role="row" className="sc-gEvEer gFEUUI ">
                  <td role="cell" className="sc-gEvEer  faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=94cbb4fcbcaa2975779f273b263eb3b5f24a9951e446d6dc4c135864.52455655"
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
                            src="https://tokens.muesliswap.com/static/img/tokens/94cbb4fcbcaa2975779f273b263eb3b5f24a9951e446d6dc4c135864.52455655_scaled_100.webp"
                            crossOrigin="anonymous"
                            alt="https://tokens.muesliswap.com/static/img/tokens/94cbb4fcbcaa2975779f273b263eb3b5f24a9951e446d6dc4c135864.52455655_scaled_100.webp"
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
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          REVU
                        </p>
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          fontSize="12"
                          className="sc-gEvEer gTyoIZ"
                        >
                          / ADA
                        </p>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer  hidden lg:table-cell  faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy iRguQF fgprtA">
                      <div display="grid" className="sc-gEvEer ihaJeT">
                        <div className="sc-gEvEer hoppPw">from:</div>
                        <div className="sc-gEvEer jVsTBr">0.01 ADA</div>
                        <div className="sc-gEvEer hoppPw">to:</div>
                        <div className="sc-gEvEer jVsTBr">2 ADA</div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer  faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.03 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer hidden lg:table-cell   faiYBU">
                    <div className="sc-gEvEer jVsTBr">4,128 ₳</div>
                    <p className="sc-gEvEer   jLfEph">~1,455 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer hidden lg:table-cell   faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer   jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer  faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer  faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer  hidden lg:table-cell  hcJuDx"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer eXsOiX">
                        <svg
                          height="12"
                          viewBox="0 0 7 12"
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
              </tbody>
            </table>
            <div height="20px" className="sc-gEvEer eXAwFt"></div>
            <div className="sc-gEvEer sc-eqUAAy fiUlZI fgprtA">
              <div className="sc-gEvEer dMSCJz">Liquidity Pools</div>
              <div className="sc-gEvEer jlEBNW"></div>
              <div className="sc-gEvEer lbUmFf">My Pools</div>
              <label className="sc-bmzYkS iWLcNb">
                <input type="checkbox" className="sc-eeDRCY fotkZP" />
                <span className="sc-koXPp kAqvkZ"></span>
              </label>
            </div>
            <table role="table" className="sc-gEvEer gcfgxO">
              <thead className="sc-gEvEer fIMUDY">
                <tr role="row">
                  <th colSpan="1" role="columnheader" className="sc-gEvEer hhHPem">
                    Pair Name
                    <span hidden="" className="sc-ddjGPC fRRtfN">
                      <div className="sc-aXZVg dKyMbx">
                        <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                          <path d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                      </div>
                    </span>
                  </th>
                  <th colSpan="1" role="columnheader" title="Toggle SortBy" className="sc-gEvEer hhHPem" style={{ cursor: "pointer" }}>
                    Price
                    <span hidden="" className="sc-ddjGPC fRRtfN">
                      <div className="sc-aXZVg dKyMbx">
                        <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                          <path d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                      </div>
                    </span>
                  </th>
                  <th colSpan="1" role="columnheader" title="Toggle SortBy" className="sc-gEvEer hidden sm:table-cell text-center hhHPem" style={{ cursor: "pointer" }}>
                    Liquidity Locked
                    <span className="sc-ddjGPC dtONNa">
                      <div className="sc-aXZVg jrzA-dM">
                        <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                          <path d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                      </div>
                    </span>
                  </th>
                  <th colSpan="1" role="columnheader" title="Toggle SortBy" className="sc-gEvEer hidden md:table-cell text-center hhHPem" style={{ cursor: "pointer" }}>
                    Volume 24h
                    <span hidden="" className="sc-ddjGPC fRRtfN">
                      <div className="sc-aXZVg dKyMbx">
                        <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                          <path d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                      </div>
                    </span>
                  </th>
                  <th colSpan="1" role="columnheader" title="Toggle SortBy" className="sc-gEvEer text-center hhHPem" style={{ cursor: "pointer" }}>
                    <span className="sc-gEvEer dSOvFp">Liquidity APY</span>
                    <div className="sc-gEvEer ebwaLP" style={{ display: "inline-flex" }}>
                      <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" color="grey500" className="sc-gEvEer dIjCGl" style={{ marginLeft: "2px" }}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M9 1.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15ZM9 3a6 6 0 1 0 0 12A6 6 0 0 0 9 3Zm0 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm0-7.5a2.618 2.618 0 0 1 .887 5.086l-.137.044v.87a.75.75 0 0 1-1.495.088L8.25 10.5V9a.75.75 0 0 1 .663-.745L9 8.25a1.125 1.125 0 1 0-1.12-1.233l-.005.108a.75.75 0 0 1-1.5 0A2.625 2.625 0 0 1 9 4.5Z" fill="currentColor"></path>
                      </svg>
                      <div className="sc-fxwrCY dGwCMf" style={{ transform: "translate(-14px, -100%)" }}>
                        <div className="sc-gEvEer bcvAXg">This is an estimate calculated using current trading volume, and may not correspond to realized gains or losses.</div>
                      </div>
                    </div>
                    <span hidden="" className="sc-ddjGPC fRRtfN">
                      <div className="sc-aXZVg dKyMbx">
                        <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                          <path d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                      </div>
                    </span>
                  </th>
                  <th colSpan="1" role="columnheader" className="sc-gEvEer hhHPem">
                    <span hidden="" className="sc-ddjGPC fRRtfN">
                      <div className="sc-aXZVg dKyMbx">
                        <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                          <path d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                      </div>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody role="rowgroup" className="sc-gEvEer text-[14px]  ">
                {liquidityPools.map((asset, index) => (
                  <>
                    <tr key={index} role="row" className={cn("sc-gEvEer gFEUUI",

                    )}>
                      <td role="cell" className={cn("sc-gEvEer  faiYBU",
                        openDropdowns.includes(index) && ' bg-[#eff2f8]'
                      )} >
                        <a
                          className="sc-iHbSHJ px-4 bwYSnM"
                          href="/swap?base=.&amp;quote=afbe91c0b44b3040e360057bf8354ead8c49c4979ae6ab7c4fbdc9eb.4d494c4b7632"
                        >
                          <div
                            className="LazyLoad is-visible "
                            style={{ height: "32px", width: "59.2px" }}
                          >
                            <div
                              width="59.2px"
                              height="32px"
                              className="sc-cWSHoV dazaWi"
                            >
                              <img
                                src={asset.tokenB.image}
                                crossOrigin="anonymous"
                                alt={asset.tokenB.image} className="sc-gEvEer ceiwSH"
                              />
                              <img
                                src={Ada}
                                crossOrigin="anonymous"
                                alt={asset.tokenA.image}
                                className="sc-gEvEer gUHNA-d"
                              />
                            </div>
                          </div>
                          <div className="sc-gEvEer text-center   fLROuh">
                            <p
                              display="inline-block"
                              fontFamily="inter"
                              color="text"
                              fontWeight="500"
                              className="sc-gEvEer jrlnEx"
                            >
                              {asset.tokenB.symbol}
                            </p>
                            <p
                              display="inline-block"
                              fontFamily="inter"
                              color="text"
                              fontWeight="500"
                              fontSize="12"
                              className="sc-gEvEer gTyoIZ"
                            >
                              /{asset.tokenA.symbol}
                            </p>
                          </div>
                        </a>
                      </td>
                      <td role="cell" className={cn("sc-gEvEer  faiYBU",
                        openDropdowns.includes(index) && ' bg-[#eff2f8]'
                      )}>
                        <div color="text" className={cn("sc-gEvEer text-center  flex items-center justify-center  faiYBU",
                          openDropdowns.includes(index) && ' bg-[#eff2f8]'
                        )}>
                          {(Number(asset.tokenB.priceAda) / 1000000).toFixed(2)} ADA
                        </div>
                      </td>
                      <td role="cell" className={cn("sc-gEvEer text-center hidden sm:table-cell   faiYBU",
                        openDropdowns.includes(index) && 'bg-[#eff2f8]'
                      )}>
                        <div className="sc-gEvEer  text-sm jVsTBr">{(Number(asset.lpToken.amount) / 1000000).toFixed(1).toLocaleString()}₳</div>

                      </td>
                      <td role="cell" className={cn("sc-gEvEer text-center hidden md:table-cell faiYBU",
                        openDropdowns.includes(index) && ' bg-[#eff2f8]'
                      )}>
                        <div className="sc-gEvEer   text-sm jVsTBr">{(Number(asset.volume24h)).toFixed().toLocaleString()} ₳</div>

                      </td>
                      <td role="cell" className={cn("sc-gEvEer  text-center text-sm  faiYBU",
                        openDropdowns.includes(index) && ' bg-[#eff2f8]'
                      )}>
                        <div color="text" className="sc-gEvEer  VQoKn">
                          {asset.liquidityApy.toFixed(1)} %
                        </div>
                      </td>
                      <td role="cell" className={cn("sc-gEvEer flex    faiYBU",
                        openDropdowns.includes(index) && ' bg-[#eff2f8]  border-none  '
                      )}>
                        <div
                          onClick={() => toggleDropdown(index)}
                          className="sc-gEvEer sc-eqUAAy  gYGjHl fgprtA">
                          <div
                            color="inherit"
                            fontWeight="semiBold"
                            className="sc-gEvEer hidden md:block  hcJuDx"

                          >
                            Details
                          </div>
                          <div className="sc-gEvEer  eXsOiX">
                            <svg
                              height="12"
                              viewBox="0 0 7 12"

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
                    </tr >
                    {
                      openDropdowns.includes(index) && (
                        <tr className="sc-gEvEer py-4     items-center justify-center w-full dSOvFp">
                          <td colSpan="6" >
                            <div className="sc-gEvEer py-6 flex flex-col lg:flex-row sc-eqUAAy caqVIz fgprtA">
                              <div className="sc-gEvEer ipETLm ">
                                <h4 fontFamily="gilroy" color="text" fontSize="18px" fontWeight="600" className="sc-gEvEer  jVEjPV">Your Liquidity Position</h4>
                                <div className="sc-gEvEer sc-eqUAAy gsUTSe  fgprtA">
                                  <p className="sc-gEvEer hBexKU">0 <span style={{ fontSize: '16px' }}>₳</span></p>
                                  <p className="sc-gEvEer bOSdkX">0 ADA <span className="sc-jnOGJG cLDdoA jQkNxn">50%</span></p>
                                  <p className="sc-gEvEer bOSdkX">0 OPT <span className="sc-jnOGJG cLDdoA jQkNxn">50%</span></p>
                                </div>
                                <div className="sc-gEvEer sc-eqUAAy gjRtJv fgprtA">
                                  <button className="sc-gEvEer eWXwvT">Connect wallet</button>
                                </div>
                              </div>
                              <div className="sc-gEvEer gap-2  flex flex-col   ipETLm">
                                <h4 fontFamily="gilroy" color="text" fontSize="18px" fontWeight="600" className="sc-gEvEer jVEjPV">Pool Information</h4>
                                <div className="sc-gEvEer w-full p-0 m-0 sc-eqUAAy bjmCVl fgprtA">
                                  <div className="sc-gEvEer sc-eqUAAy fEQVqC fgprtA">
                                    <div className="sc-gEvEer sc-eqUAAy p-0 AbBwJ fgprtA">
                                      <p className="sc-gEvEer kpVmdW">Matchmaker Fee:</p>
                                      <p fontWeight="500" className="sc-gEvEer cFqvxQ">0.95 ADA</p>
                                    </div>
                                    <div className="sc-gEvEer sc-eqUAAy AbBwJ fgprtA">
                                      <p className="sc-gEvEer kpVmdW">Locked ADA:</p>
                                      <p fontWeight="500" className="sc-gEvEer cFqvxQ">206,330</p>
                                    </div>
                                    <div className="sc-gEvEer sc-eqUAAy AbBwJ fgprtA">
                                      <p className="sc-gEvEer kpVmdW">Locked OPT:</p>
                                      <p fontWeight="500" className="sc-gEvEer cFqvxQ">4,660,990</p>
                                    </div>
                                  </div>
                                  <div className="sc-gEvEer sc-eqUAAy fEQVqC fgprtA">
                                    <div className="sc-gEvEer sc-eqUAAy AbBwJ fgprtA">
                                      <p className="sc-gEvEer kpVmdW">UTxO Deposit:</p>
                                      <p fontWeight="500" className="sc-gEvEer cFqvxQ">2 ₳</p>
                                    </div>
                                    <div className="sc-gEvEer sc-eqUAAy AbBwJ fgprtA">
                                      <p className="sc-gEvEer kpVmdW">Trading Fee:</p>
                                      <p fontWeight="500" className="sc-gEvEer cFqvxQ">0.30&nbsp;%</p>
                                    </div>
                                    <div className="sc-gEvEer sc-eqUAAy AbBwJ fgprtA">
                                      <p className="sc-gEvEer kpVmdW">Trading Fee APR:</p>
                                      <p fontWeight="500" className="sc-gEvEer cFqvxQ">0.69&nbsp;%</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )
                    }
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main >
  );
};

export default Liquidity;
