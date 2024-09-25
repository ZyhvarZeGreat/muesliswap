import EarnTab from "./components/EarnTab";
import "./Liquidity.css";
import Ada from "../assets/ada.webp";
import { Link } from "react-router-dom";
const Liquidity = () => {
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
                    className="sc-gEvEer hhHPem"
                    style={{ cursor: "pointer" }}
                  >
                    Liquidity Range
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
                    className="sc-gEvEer hhHPem"
                    style={{ cursor: "pointer" }}
                  >
                    Price
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
                    className="sc-gEvEer hhHPem"
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
                    className="sc-gEvEer hhHPem"
                    style={{ cursor: "pointer" }}
                  >
                    Volume 24h
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
                    className="sc-gEvEer hhHPem"
                    style={{ cursor: "pointer" }}
                  >
                    <span className="sc-gEvEer dSOvFp">Liquidity APY</span>
                    <div display="inline-flex" className="sc-gEvEer ebwaLP">
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
                    className="sc-gEvEer hhHPem"
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
              <tbody role="rowgroup" className="sc-gEvEer px-4 eUgFaS">
                <tr role="row" className="sc-gEvEer gFEUUI ">
                  <td role="cell" className="sc-gEvEer faiYBU">
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy iRguQF fgprtA">
                      <div display="grid" className="sc-gEvEer ihaJeT">
                        <div className="sc-gEvEer hoppPw">from:</div>
                        <div className="sc-gEvEer jVsTBr">0.1 ADA</div>
                        <div className="sc-gEvEer hoppPw">to:</div>
                        <div className="sc-gEvEer jVsTBr">10.03 ADA</div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      1.02 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">249,331 ₳</div>
                    <p className="sc-gEvEer jLfEph">~87,878 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.13 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy iRguQF fgprtA">
                      <div display="grid" className="sc-gEvEer ihaJeT">
                        <div className="sc-gEvEer hoppPw">from:</div>
                        <div className="sc-gEvEer jVsTBr">0.1 ADA</div>
                        <div className="sc-gEvEer hoppPw">to:</div>
                        <div className="sc-gEvEer jVsTBr">10.03 ADA</div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      2.84 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">169,390 ₳</div>
                    <p className="sc-gEvEer jLfEph">~59,702 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      1.62 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy iRguQF fgprtA">
                      <div display="grid" className="sc-gEvEer ihaJeT">
                        <div className="sc-gEvEer hoppPw">from:</div>
                        <div className="sc-gEvEer jVsTBr">0.95 DJED</div>
                        <div className="sc-gEvEer hoppPw">to:</div>
                        <div className="sc-gEvEer jVsTBr">1.05 DJED</div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.95 DJED
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">25,560 ₳</div>
                    <p className="sc-gEvEer jLfEph">~9,009 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy iRguQF fgprtA">
                      <div display="grid" className="sc-gEvEer ihaJeT">
                        <div className="sc-gEvEer hoppPw">from:</div>
                        <div className="sc-gEvEer jVsTBr">0.01 ADA</div>
                        <div className="sc-gEvEer hoppPw">to:</div>
                        <div className="sc-gEvEer jVsTBr">2 ADA</div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.03 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">4,128 ₳</div>
                    <p className="sc-gEvEer jLfEph">~1,455 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <th
                    colSpan="1"
                    role="columnheader"
                    className="sc-gEvEer hhHPem"
                  >
                    Pair Name
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
                    className="sc-gEvEer hhHPem"
                    style={{ cursor: "pointer" }}
                  >
                    Price
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
                    className="sc-gEvEer hhHPem"
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
                    className="sc-gEvEer hhHPem"
                    style={{ cursor: "pointer" }}
                  >
                    Volume 24h
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
                    className="sc-gEvEer hhHPem"
                    style={{ cursor: "pointer" }}
                  >
                    <span className="sc-gEvEer dSOvFp">Liquidity APY</span>
                    <div display="inline-flex" className="sc-gEvEer ebwaLP">
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
                    className="sc-gEvEer hhHPem"
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
              <tbody role="rowgroup" className="sc-gEvEer  ">
                <tr role="row" className="sc-gEvEer gFEUUI  ">
                  <td role="cell" className="sc-gEvEer faiYBU ">
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
                            src="https://tokens.muesliswap.com/static/img/tokens/afbe91c0b44b3040e360057bf8354ead8c49c4979ae6ab7c4fbdc9eb.4d494c4b7632_scaled_100.webp"
                            crossOrigin="anonymous"
                            alt="https://tokens.muesliswap.com/static/img/tokens/afbe91c0b44b3040e360057bf8354ead8c49c4979ae6ab7c4fbdc9eb.4d494c4b7632_scaled_100.webp"
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
                          MILK
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      1.54 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">1,477,809 ₳</div>
                    <p className="sc-gEvEer jLfEph">~520,863 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">4,795 ₳</div>
                    <p className="sc-gEvEer jLfEph">~1,690 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      1.18 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=1ddcb9c9de95361565392c5bdff64767492d61a96166cb16094e54be.4f5054"
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
                            src="https://tokens.muesliswap.com/static/img/tokens/1ddcb9c9de95361565392c5bdff64767492d61a96166cb16094e54be.4f5054_scaled_100.webp"
                            crossOrigin="anonymous"
                            alt="https://tokens.muesliswap.com/static/img/tokens/1ddcb9c9de95361565392c5bdff64767492d61a96166cb16094e54be.4f5054_scaled_100.webp"
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
                          OPT
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.04 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">413,193 ₳</div>
                    <p className="sc-gEvEer jLfEph">~145,632 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">1,823 ₳</div>
                    <p className="sc-gEvEer jLfEph">~642 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      1.54 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=7914fae20eb2903ed6fd5021a415c1bd2626b64a2d86a304cb40ff5e.4c494649"
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
                            src="https://tokens.muesliswap.com/static/img/tokens/7914fae20eb2903ed6fd5021a415c1bd2626b64a2d86a304cb40ff5e.4c494649_scaled_100.webp"
                            crossOrigin="anonymous"
                            alt="https://tokens.muesliswap.com/static/img/tokens/7914fae20eb2903ed6fd5021a415c1bd2626b64a2d86a304cb40ff5e.4c494649_scaled_100.webp"
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
                          LIFI
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.06 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">410,040 ₳</div>
                    <p className="sc-gEvEer jLfEph">~144,521 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">2,161 ₳</div>
                    <p className="sc-gEvEer jLfEph">~761 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.51 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=edfd7a1d77bcb8b884c474bdc92a16002d1fb720e454fa6e99344479.4e5458"
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
                            src="https://tokens.muesliswap.com/static/img/tokens/edfd7a1d77bcb8b884c474bdc92a16002d1fb720e454fa6e99344479.4e5458_scaled_100.webp"
                            crossOrigin="anonymous"
                            alt="https://tokens.muesliswap.com/static/img/tokens/edfd7a1d77bcb8b884c474bdc92a16002d1fb720e454fa6e99344479.4e5458_scaled_100.webp"
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
                          NTX
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.09 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">323,736 ₳</div>
                    <p className="sc-gEvEer jLfEph">~114,103 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">1,957 ₳</div>
                    <p className="sc-gEvEer jLfEph">~690 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      1.37 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=a0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235.484f534b59"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          HOSKY
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">253,029 ₳</div>
                    <p className="sc-gEvEer jLfEph">~89,182 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">1,723 ₳</div>
                    <p className="sc-gEvEer jLfEph">~607 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.94 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=cc8d1b026353022abbfcc2e1e71159f9e308d9c6e905ac1db24c7fb6.50617269627573"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          PBX
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">241,640 ₳</div>
                    <p className="sc-gEvEer jLfEph">~85,167 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">10,532 ₳</div>
                    <p className="sc-gEvEer jLfEph">~3,712 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      5.94 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=8a1cfae21368b8bebbbed9800fec304e95cce39a2a57dc35e2e3ebaa.4d494c4b"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          MILK
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      1.58 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">214,397 ₳</div>
                    <p className="sc-gEvEer jLfEph">~75,566 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.47 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=1d7f33bd23d85e1a25d87d86fac4f199c3197a2f7afeb662a0f34e1e.776f726c646d6f62696c65746f6b656e"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          WMT
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.58 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">209,511 ₳</div>
                    <p className="sc-gEvEer jLfEph">~73,843 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">5,707 ₳</div>
                    <p className="sc-gEvEer jLfEph">~2,012 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      3.67 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=6c8642400e8437f737eb86df0fc8a8437c760f48592b1ba8f5767e81.456d706f7761"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          EMP
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.17 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">192,377 ₳</div>
                    <p className="sc-gEvEer jLfEph">~67,804 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">740 ₳</div>
                    <p className="sc-gEvEer jLfEph">~261 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      1.55 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=a2944573e99d2ed3055b808eaa264f0bf119e01fc6b18863067c63e4.4d454c44"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          MELD
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.04 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">86,114 ₳</div>
                    <p className="sc-gEvEer jLfEph">~30,351 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">350 ₳</div>
                    <p className="sc-gEvEer jLfEph">~123 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      1.56 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=f43a62fdc3965df486de8a0d32fe800963589c41b38946602a0dc535.41474958"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          AGIX
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      1.95 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">75,579 ₳</div>
                    <p className="sc-gEvEer jLfEph">~26,638 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">2,673 ₳</div>
                    <p className="sc-gEvEer jLfEph">~942 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      6 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=f66d78b4a3cb3d37afa0ec36461e51ecbde00f26c8f0a68f94b69880.69555344"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
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
                          / ADA
                        </p>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      2.47 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">47,355 ₳</div>
                    <p className="sc-gEvEer jLfEph">~16,691 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">217 ₳</div>
                    <p className="sc-gEvEer jLfEph">~77 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.45 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=db30c7905f598ed0154de14f970de0f61f0cb3943ed82c891968480a.434c4150"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          CLAP
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">46,525 ₳</div>
                    <p className="sc-gEvEer jLfEph">~16,398 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=804f5544c1962a40546827cab750a88404dc7108c0f588b72964754f.56594649"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          VYFI
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.12 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">36,335 ₳</div>
                    <p className="sc-gEvEer jLfEph">~12,807 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">379 ₳</div>
                    <p className="sc-gEvEer jLfEph">~133 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.67 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=8f9c32977d2bacb87836b64f7811e99734c6368373958da20172afba.4d5949454c44"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          MYIELD
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.01 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">33,271 ₳</div>
                    <p className="sc-gEvEer jLfEph">~11,727 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">213 ₳</div>
                    <p className="sc-gEvEer jLfEph">~75 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      3.49 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=533bb94a8850ee3ccbe483106489399112b74c905342cb1792a797a0.494e4459"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          INDY
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      1.16 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">32,306 ₳</div>
                    <p className="sc-gEvEer jLfEph">~11,386 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      2.25 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=da8c30857834c6ae7203935b89278c532b3995245295456f993e1d24.4c51"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          LQ
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      2.29 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">29,004 ₳</div>
                    <p className="sc-gEvEer jLfEph">~10,223 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">373 ₳</div>
                    <p className="sc-gEvEer jLfEph">~131 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      1.88 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=8f52f6a88acf6127bc4758a16b6047afc4da7887feae121ec217b75a.534e4f57"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          SNOW
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.42 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">23,081 ₳</div>
                    <p className="sc-gEvEer jLfEph">~8,135 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">3 ₳</div>
                    <p className="sc-gEvEer jLfEph">~1 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=5dac8536653edc12f6f5e1045d8164b9f59998d3bdc300fc92843489.4e4d4b52"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          NMKR
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">20,386 ₳</div>
                    <p className="sc-gEvEer jLfEph">~7,185 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">207 ₳</div>
                    <p className="sc-gEvEer jLfEph">~73 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      2.63 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=af2e27f580f7f08e93190a81f72462f153026d06450924726645891b.44524950"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          DRIP
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">17,926 ₳</div>
                    <p className="sc-gEvEer jLfEph">~6,318 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">40 ₳</div>
                    <p className="sc-gEvEer jLfEph">~14 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      1.1 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=10a49b996e2402269af553a8a96fb8eb90d79e9eca79e2b4223057b6.4745524f"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          GERO
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.01 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">11,679 ₳</div>
                    <p className="sc-gEvEer jLfEph">~4,116 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      1.08 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=6ac8ef33b510ec004fe11585f7c5a9f0c07f0c23428ab4f29c1d7d10.4d454c44"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          MELD
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.04 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">10,892 ₳</div>
                    <p className="sc-gEvEer jLfEph">~3,839 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.49 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=2a80c713e0d518f84e0553957e3d581c9326cfc5931ea1f4dd0fb292.0014df107374616b65636f696e"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          STK
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">9,950 ₳</div>
                    <p className="sc-gEvEer jLfEph">~3,507 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=20cd68533b47565f3c61efb39c30fdace9963bfa4c0060b613448e3c.50524f584945"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          PROXIE
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">7,634 ₳</div>
                    <p className="sc-gEvEer jLfEph">~2,691 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      1.01 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61.446a65644d6963726f555344&amp;quote=a0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235.484f534b59"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          HOSKY
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0 DJED
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">7,528 ₳</div>
                    <p className="sc-gEvEer jLfEph">~2,653 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=078eafce5cd7edafdf63900edef2c1ea759e77f30ca81d6bbdeec924.79756d6d69"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          YUMMI
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">4,915 ₳</div>
                    <p className="sc-gEvEer jLfEph">~1,732 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">66 ₳</div>
                    <p className="sc-gEvEer jLfEph">~23 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.57 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=279f842c33eed9054b9e3c70cd6a3b32298259c24b78b895cb41d91a.54554e41"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          V1TUNA
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.04 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">3,155 ₳</div>
                    <p className="sc-gEvEer jLfEph">~1,112 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">60 ₳</div>
                    <p className="sc-gEvEer jLfEph">~21 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      2.35 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=c48cbb3d5e57ed56e276bc45f99ab39abe94e6cd7ac39fb402da47ad.0014df105553444d"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          USDM
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      2.81 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">2,629 ₳</div>
                    <p className="sc-gEvEer jLfEph">~927 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      1.35 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=8fef2d34078659493ce161a6c7fba4b56afefa8535296a5743f69587.41414441"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          LENFI
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      1.05 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">2,579 ₳</div>
                    <p className="sc-gEvEer jLfEph">~909 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">113 ₳</div>
                    <p className="sc-gEvEer jLfEph">~40 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      13.26 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=b8b57f3bb13f0d4c1cbf8a1a89432b1e117778c49feec29102ea044b.564953494f4e"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          VISION
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">2,568 ₳</div>
                    <p className="sc-gEvEer jLfEph">~905 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=b34b3ea80060ace9427bda98690a73d33840e27aaa8d6edb7f0c757a.634e455441"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          cNETA
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">2,132 ₳</div>
                    <p className="sc-gEvEer jLfEph">~751 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.97 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=32cc9c6c3456bc048d14a4a8e4ee3592e9664e8daac921a8ef52d92a.4752415353"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          GRASS
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">1,314 ₳</div>
                    <p className="sc-gEvEer jLfEph">~463 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      1.14 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=f66d78b4a3cb3d37afa0ec36461e51ecbde00f26c8f0a68f94b69880.69425443"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          iBTC
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      159,580.57 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">1,273 ₳</div>
                    <p className="sc-gEvEer jLfEph">~449 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=43b07d4037f0d75ee10f9863097463fc02ff3c0b8b705ae61d9c75bf.4d796e746820546f6b656e"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          MNT
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.16 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">952 ₳</div>
                    <p className="sc-gEvEer jLfEph">~336 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">6 ₳</div>
                    <p className="sc-gEvEer jLfEph">~2 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      12.69 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=9a9693a9a37912a5097918f97918d15240c92ab729a0b7c4aa144d77.53554e444145"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          SUNDAE
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.01 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">738 ₳</div>
                    <p className="sc-gEvEer jLfEph">~260 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.28 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=29d222ce763455e3d7a09a665ce554f00ac89d2e99a1a83d267170c6.4d494e"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          MIN
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.05 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">616 ₳</div>
                    <p className="sc-gEvEer jLfEph">~217 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      4.36 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=d030b626219d81673bd32932d2245e0c71ae5193281f971022b23a78.436172646f67656f"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          CDOG
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">582 ₳</div>
                    <p className="sc-gEvEer jLfEph">~205 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=5612bee388219c1b76fd527ed0fa5aa1d28652838bcab4ee4ee63197.446973636f696e"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          DIS
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">456 ₳</div>
                    <p className="sc-gEvEer jLfEph">~161 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=a8a1dccea2e378081f2d500d98d022dd3c0bd77afd9dbc7b55a9d21b.63544f5349"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          cTOSI
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">352 ₳</div>
                    <p className="sc-gEvEer jLfEph">~124 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.49 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=dda5fdb1002f7389b33e036b6afee82a8189becb6cba852e8b79b4fb.0014df1047454e53"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          GENS
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.04 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">334 ₳</div>
                    <p className="sc-gEvEer jLfEph">~118 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      12.28 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=b6a7467ea1deb012808ef4e87b5ff371e85f7142d7b356a40d9b42a0.436f726e75636f70696173205b76696120436861696e506f72742e696f5d"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          COPI
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.07 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">241 ₳</div>
                    <p className="sc-gEvEer jLfEph">~85 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=f66d78b4a3cb3d37afa0ec36461e51ecbde00f26c8f0a68f94b69880.69455448"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          iETH
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      7,604.41 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">206 ₳</div>
                    <p className="sc-gEvEer jLfEph">~73 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      1.03 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=279c909f348e533da5808898f87f9a14bb2c3dfbbacccd631d927a3f.534e454b"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          SNEK
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">169 ₳</div>
                    <p className="sc-gEvEer jLfEph">~59 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      2.86 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=a8102151506a8a81dc1763ee05cdd01d787f50dfeb6f843071e1c6a0.484f5749"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          HOWI
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">116 ₳</div>
                    <p className="sc-gEvEer jLfEph">~41 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">25 ₳</div>
                    <p className="sc-gEvEer jLfEph">~9 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.15 %
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=048ee598172481f98d613fc9fb6a03fd6ec3edccb75f8e4afc993b66.45584f"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          EXO
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.01 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">60 ₳</div>
                    <p className="sc-gEvEer jLfEph">~21 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=884892bcdc360bcef87d6b3f806e7f9cd5ac30d999d49970e7a903ae.5041564941"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          PAVIA
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">55 ₳</div>
                    <p className="sc-gEvEer jLfEph">~19 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=420000029ad9527271b1b1e3c27ee065c18df70a4a4cfc3093a41a44.41584f"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          AXO
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      2.06 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">36 ₳</div>
                    <p className="sc-gEvEer jLfEph">~13 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=6cfbfedd8c8ea23d264f5ae3ef039217100c210bb66de8711f21c903.434e4654"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          $CNFT
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">29 ₳</div>
                    <p className="sc-gEvEer jLfEph">~10 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=8e51398904a5d3fc129fbf4f1589701de23c7824d5c90fdb9490e15a.434841524c4933"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          C3
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.22 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">23 ₳</div>
                    <p className="sc-gEvEer jLfEph">~8 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=2d420236ffaada336c21e3f4520b799f6e246d8618f2fc89a4907da6.4564756c6164646572546f6b656e"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          ELADR
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">21 ₳</div>
                    <p className="sc-gEvEer jLfEph">~8 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=75fcc276057db5fc48eae0e11453c773c8a54604c3086bf9d95ac1b7.43485259"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          NOVA
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.05 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">19 ₳</div>
                    <p className="sc-gEvEer jLfEph">~7 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=38ad9dc3aec6a2f38e220142b9aa6ade63ebe71f65e7cc2b7d8a8535.434c4159"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          CLAY
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.02 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">14 ₳</div>
                    <p className="sc-gEvEer jLfEph">~5 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=961f2cac0bb1967d74691af179350c1e1062c7298d1f7be1e4696e31.2444455250"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          DERP
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.12 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">12 ₳</div>
                    <p className="sc-gEvEer jLfEph">~4 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=cd5b9dd91319edbb19477ad00cbef673a221e70a17ef043951fc6786.52656465656d61626c65"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          RUSD
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      2.23 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">10 ₳</div>
                    <p className="sc-gEvEer jLfEph">~4 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=9abf0afd2f236a19f2842d502d0450cbcd9c79f123a9708f96fd9b96.454e4353"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          ENCS
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      1.83 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">10 ₳</div>
                    <p className="sc-gEvEer jLfEph">~3 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=c5609c4800c05e82c4219ccf14c7fdf5212e11f83dbbb57ac716e98e.666c756666"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          $fluff
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.02 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">9 ₳</div>
                    <p className="sc-gEvEer jLfEph">~3 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=628436be6fa349ebf4ac3d749e87a36981b930d4bb4319c11e64042c.464c5a"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          FLZ
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">8 ₳</div>
                    <p className="sc-gEvEer jLfEph">~3 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=52489ea87bbceaf6375cc22f74c19382a3d5da3f8b9b15d2537044b9.5052535052"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          PRSPR
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">8 ₳</div>
                    <p className="sc-gEvEer jLfEph">~3 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=c88bbd1848db5ea665b1fffbefba86e8dcd723b5085348e8a8d2260f.44414e41"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          DANA
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">7 ₳</div>
                    <p className="sc-gEvEer jLfEph">~3 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=25f0fc240e91bd95dcdaebd2ba7713fc5168ac77234a3d79449fc20c.534f4349455459"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          SOC
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.08 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">5 ₳</div>
                    <p className="sc-gEvEer jLfEph">~2 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=ce5b9e0f8a88255b65f2e4d065c6e716e9fa9a8a86dfb86423dd1ac0.44494e47"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          DING
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.02 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">5 ₳</div>
                    <p className="sc-gEvEer jLfEph">~2 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <a
                      className="sc-iHbSHJ px-4 bwYSnM"
                      href="/swap?base=.&amp;quote=5b01968867e13432afaa2f814e1d15e332d6cd0aa77e350972b0967d.4144414f476f7665726e616e6365546f6b656e"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <p
                          display="inline-block"
                          fontFamily="inter"
                          color="text"
                          fontWeight="500"
                          className="sc-gEvEer jrlnEx"
                        >
                          ADAO
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
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div color="text" className="sc-gEvEer VQoKn">
                      0.03 ADA
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">4 ₳</div>
                    <p className="sc-gEvEer jLfEph">~2 $</p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr">0 ₳</div>
                    <p className="sc-gEvEer jLfEph"></p>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer jVsTBr"></div>
                  </td>
                  <td role="cell" className="sc-gEvEer faiYBU">
                    <div className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hcJuDx"
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default Liquidity;
