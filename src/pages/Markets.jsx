import React from "react";
import "./Markets.css";
import img from "../assets/ada.webp";
import MarketsTable from "./components/MarketsTable";
const Markets = () => {
  return (
    <div id="root">
      <div className="Toastify"></div>

      <div height="56" className="sc-gEvEer kvHQza"></div>
      <main className="sc-kOPcWz font-inter hierkx">
        <div className="sc-iHGNWf hQvJpi">
          <h2
            style={{
              fontFamily: "gilroy",
              fontWeight: 600,
              fontSize: "40px",
              letterSpacing: "-0.64px",
            }}
            color="text"
            className="sc-gEvEer fgSxLa"
          >
            <span color="main" className="sc-gEvEer hRDVRe">
              Cardano
            </span>{" "}
            Featured Markets
          </h2>
          <div className="sc-ibQAlb fZnOPv">
            <div className="sc-krNlru iDYjIk">
              <div className="sc-jaXxmE eizVwN">
                <h2 className="sc-gEvEer fUmKfJ">🔥 Top Volume</h2>
                <a
                  aria-label="Show 🔥 Top Volume"
                  className="sc-hwdzOV jzRhqN"
                  href="/markets?sortBy=volume1d&amp;sortDir=true"
                >
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
                </a>
              </div>
              <div className="sc-jGKxIK bnCkIr">
                <div className="sc-jMakVo gehSvw">
                  <div
                    className="LazyLoad is-visible"
                    style={{ height: "24px", width: "24px" }}
                  >
                    <img
                      src={img}
                      crossOrigin="anonymous"
                      alt={img}
                      className="sc-gEvEer fFqlxh"
                    />
                  </div>
                  <a
                    // Assuming 'tx' is meant to indicate a button style
                    style={{ display: "inline-block", height: "min-content" }} // Replacing 'sx' and '__css' with inline styles
                    className="sc-gEvEer KEfyk button"
                    href="/swap?base=.&amp;quote=cc8d1b026353022abbfcc2e1e71159f9e308d9c6e905ac1db24c7fb6.50617269627573"
                  >
                    <div className="sc-gEvEer jVsTBr">PBX</div>
                  </a>
                  <div className="sc-gEvEer jVsTBr">0.002472</div>
                  <p className="sc-iMTnTL iNflre">↑0.68%</p>
                  <div
                    className="LazyLoad is-visible"
                    style={{ height: "24px", width: "24px" }}
                  >
                    <img
                      src="https://tokens.muesliswap.com/static/img/tokens/5d16cc1a177b5d9ba9cfa9793b07e60f1fb70fea1f8aef064415d114.494147_scaled_100.webp"
                      crossOrigin="anonymous"
                      alt="https://tokens.muesliswap.com/static/img/tokens/5d16cc1a177b5d9ba9cfa9793b07e60f1fb70fea1f8aef064415d114.494147_scaled_100.webp"
                      className="sc-gEvEer fFqlxh"
                    />
                  </div>
                  <a
                    style={{ display: "inline-block", height: "min-content" }} // Replacing 'tx', 'variant', 'sx', and '__css' with inline styles
                    className="sc-gEvEer KEfyk button"
                    href="/swap?base=.&amp;quote=5d16cc1a177b5d9ba9cfa9793b07e60f1fb70fea1f8aef064415d114.494147"
                  >
                    <div className="sc-gEvEer jVsTBr">IAG</div>
                  </a>
                  <div className="sc-gEvEer jVsTBr">0.334745</div>
                  <p className="sc-iMTnTL iNflre">0.00%</p>
                  <div
                    className="LazyLoad is-visible"
                    style={{ height: "24px", width: "24px" }}
                  >
                    <img
                      src="https://tokens.muesliswap.com/static/img/tokens/1d7f33bd23d85e1a25d87d86fac4f199c3197a2f7afeb662a0f34e1e.776f726c646d6f62696c65746f6b656e_scaled_100.webp"
                      crossOrigin="anonymous"
                      alt="https://tokens.muesliswap.com/static/img/tokens/1d7f33bd23d85e1a25d87d86fac4f199c3197a2f7afeb662a0f34e1e.776f726c646d6f62696c65746f6b656e_scaled_100.webp"
                      className="sc-gEvEer fFqlxh"
                    />
                  </div>
                  <a
                    style={{ display: "inline-block", height: "min-content" }} // Replacing 'tx', 'variant', 'sx', and '__css' with inline styles
                    className="sc-gEvEer KEfyk"
                    href="/swap?base=.&amp;quote=1d7f33bd23d85e1a25d87d86fac4f199c3197a2f7afeb662a0f34e1e.776f726c646d6f62696c65746f6b656e"
                  >
                    <div className="sc-gEvEer jVsTBr">WMT</div>
                  </a>
                  <div className="sc-gEvEer jVsTBr">0.576245</div>
                  <p className="sc-iMTnTL iNflre">0.00%</p>
                </div>
              </div>
            </div>
            <div className="sc-krNlru iDYjIk">
              <div className="sc-jaXxmE eizVwN">
                <h2 className="sc-gEvEer fUmKfJ">📈 Top Gainers</h2>
                <a
                  aria-label="Show 📈 Top Gainers"
                  className="sc-hwdzOV jzRhqN"
                  href="/markets?sortBy=priceChange1d&amp;sortDir=true"
                >
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
                </a>
              </div>
              <div className="sc-jGKxIK bnCkIr">
                <div className="sc-jMakVo gehSvw">
                  <div
                    className="LazyLoad is-visible"
                    style={{ height: "24px", width: "24px" }}
                  >
                    <img
                      src="https://tokens.muesliswap.com/static/img/tokens/5dac8536653edc12f6f5e1045d8164b9f59998d3bdc300fc92843489.4e4d4b52_scaled_100.webp"
                      crossOrigin="anonymous"
                      alt="https://tokens.muesliswap.com/static/img/tokens/5dac8536653edc12f6f5e1045d8164b9f59998d3bdc300fc92843489.4e4d4b52_scaled_100.webp"
                      className="sc-gEvEer fFqlxh"
                    />
                  </div>
                  <a
                    style={{ display: "inline-block", height: "min-content" }} // Replacing 'tx', 'variant', 'sx', and '__css' with inline styles
                    className="sc-gEvEer KEfyk"
                    href="/swap?base=.&amp;quote=5dac8536653edc12f6f5e1045d8164b9f59998d3bdc300fc92843489.4e4d4b52"
                  >
                    <div className="sc-gEvEer jVsTBr">NMKR</div>
                  </a>
                  <div className="sc-gEvEer jVsTBr">0.003189</div>
                  <p className="sc-iMTnTL iNflre">↑1.85%</p>
                  <div
                    className="LazyLoad is-visible"
                    style={{ height: "24px", width: "24px" }}
                  >
                    <img
                      src="https://tokens.muesliswap.com/static/img/tokens/edfd7a1d77bcb8b884c474bdc92a16002d1fb720e454fa6e99344479.4e5458_scaled_100.webp"
                      crossOrigin="anonymous"
                      alt="https://tokens.muesliswap.com/static/img/tokens/edfd7a1d77bcb8b884c474bdc92a16002d1fb720e454fa6e99344479.4e5458_scaled_100.webp"
                      className="sc-gEvEer fFqlxh"
                    />
                  </div>
                  <a
                    style={{ display: "inline-block", height: "min-content" }} // Replacing 'tx', 'variant', 'sx', and '__css' with inline styles
                    className="sc-gEvEer KEfyk"
                    href="/swap?base=.&amp;quote=edfd7a1d77bcb8b884c474bdc92a16002d1fb720e454fa6e99344479.4e5458"
                  >
                    <div className="sc-gEvEer jVsTBr">NTX</div>
                  </a>
                  <div className="sc-gEvEer jVsTBr">0.09295</div>
                  <p className="sc-iMTnTL iNflre">↑1.21%</p>
                  <div
                    className="LazyLoad is-visible"
                    style={{ height: "24px", width: "24px" }}
                  >
                    <img
                      src={img}
                      crossOrigin="anonymous"
                      alt={img}
                      className="sc-gEvEer fFqlxh"
                    />
                  </div>
                  <a
                    className="sc-gEvEer KEfyk"
                    href="/swap?base=.&amp;quote=cc8d1b026353022abbfcc2e1e71159f9e308d9c6e905ac1db24c7fb6.50617269627573"
                  >
                    <div className="sc-gEvEer jVsTBr">PBX</div>
                  </a>
                  <div className="sc-gEvEer jVsTBr">0.002472</div>
                  <p className="sc-iMTnTL iNflre">↑0.68%</p>
                </div>
              </div>
            </div>
            <div className="sc-krNlru iDYjIk">
              <div className="sc-jaXxmE eizVwN">
                <h2 className="sc-gEvEer fUmKfJ">📉 Top Losers</h2>
                <a
                  aria-label="Show 📉 Top Losers"
                  className="sc-hwdzOV jzRhqN"
                  href="/markets?sortBy=priceChange1d&amp;sortDir=false"
                >
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
                </a>
              </div>
              <div className="sc-jGKxIK bnCkIr">
                <div className="sc-jMakVo gehSvw">
                  <div
                    className="LazyLoad is-visible"
                    style={{ height: "24px", width: "24px" }}
                  >
                    <img
                      src="https://tokens.muesliswap.com/static/img/tokens/43b07d4037f0d75ee10f9863097463fc02ff3c0b8b705ae61d9c75bf.4d796e746820546f6b656e_scaled_100.webp"
                      crossOrigin="anonymous"
                      alt="https://tokens.muesliswap.com/static/img/tokens/43b07d4037f0d75ee10f9863097463fc02ff3c0b8b705ae61d9c75bf.4d796e746820546f6b656e_scaled_100.webp"
                      className="sc-gEvEer fFqlxh"
                    />
                  </div>
                  <a
                    // Assuming 'tx' is for button styling
                    style={{ display: "inline-block", height: "min-content" }} // Replacing 'sx' and '__css' with inline styles
                    className="sc-gEvEer KEfyk button"
                    href="/swap?base=.&amp;quote=43b07d4037f0d75ee10f9863097463fc02ff3c0b8b705ae61d9c75bf.4d796e746820546f6b656e"
                  >
                    <div className="sc-gEvEer jVsTBr">MNT</div>
                  </a>
                  <div className="sc-gEvEer jVsTBr">0</div>
                  <p className="sc-iMTnTL dJNOmi">↓16.71%</p>
                  <div
                    className="LazyLoad is-visible"
                    style={{ height: "24px", width: "24px" }}
                  >
                    <img
                      src="https://tokens.muesliswap.com/static/img/tokens/8f9c32977d2bacb87836b64f7811e99734c6368373958da20172afba.4d5949454c44_scaled_100.webp"
                      crossOrigin="anonymous"
                      alt="https://tokens.muesliswap.com/static/img/tokens/8f9c32977d2bacb87836b64f7811e99734c6368373958da20172afba.4d5949454c44_scaled_100.webp"
                      className="sc-gEvEer fFqlxh"
                    />
                  </div>
                  <a
                    style={{ display: "inline-block", height: "min-content" }} // Replacing 'tx', 'variant', 'sx', and '__css' with inline styles
                    className="sc-gEvEer KEfyk"
                    href="/swap?base=.&amp;quote=8f9c32977d2bacb87836b64f7811e99734c6368373958da20172afba.4d5949454c44"
                  >
                    <div className="sc-gEvEer jVsTBr">MYIELD</div>
                  </a>
                  <div className="sc-gEvEer jVsTBr">0.00845</div>
                  <p className="sc-iMTnTL dJNOmi">↓1.69%</p>
                  <div
                    className="LazyLoad is-visible"
                    style={{ height: "24px", width: "24px" }}
                  >
                    <img
                      src="https://tokens.muesliswap.com/static/img/tokens/8f52f6a88acf6127bc4758a16b6047afc4da7887feae121ec217b75a.534e4f57_scaled_100.webp"
                      crossOrigin="anonymous"
                      alt="https://tokens.muesliswap.com/static/img/tokens/8f52f6a88acf6127bc4758a16b6047afc4da7887feae121ec217b75a.534e4f57_scaled_100.webp"
                      className="sc-gEvEer fFqlxh"
                    />
                  </div>
                  <a
                    style={{ display: "inline-block", height: "min-content" }} // Replacing 'tx', 'variant', 'sx', and '__css' with inline styles
                    className="sc-gEvEer KEfyk"
                    href="/swap?base=.&amp;quote=8f52f6a88acf6127bc4758a16b6047afc4da7887feae121ec217b75a.534e4f57"
                  >
                    <div className="sc-gEvEer jVsTBr">SNOW</div>
                  </a>
                  <div className="sc-gEvEer jVsTBr">0.415899</div>
                  <p className="sc-iMTnTL dJNOmi">↓1.38%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sc-ihgnxF gQhDKT">
            <div className="sc-gFVvzn gap-4 xl:gap-2 xl:h-[5rem]  iyWJYO">
              <nav className="sc-brPLxw fwqDkj" style={{ display: "grid" }}>
                <div className="sc-gEvEer iKsSNG">
                  <a href="/markets?cat=all" style={{ textDecoration: "none" }}>
                    <div className="sc-gEvEer buwCeh">All</div>
                  </a>
                </div>
                <span className="sc-gEvEer jPzTRY"></span>
                <div className="sc-gEvEer iYpAFJ">
                  <a
                    href="/markets?cat=defi"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="sc-gEvEer dTIZMK">DeFi</div>
                  </a>
                </div>
                <span className="sc-gEvEer jphDfC"></span>
                <div className="sc-gEvEer edKMow">
                  <a
                    href="/markets?cat=meme"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="sc-gEvEer dTIZMK">Meme</div>
                  </a>
                </div>
                <span className="sc-gEvEer behshM"></span>
                <div className="sc-gEvEer eXjzAX">
                  <a
                    href="/markets?cat=bridge"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="sc-gEvEer dTIZMK">Bridge</div>
                  </a>
                </div>
                <span className="sc-gEvEer eVxHgS"></span>
                <div className="sc-gEvEer cELjK">
                  <a
                    href="/markets?cat=other"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="sc-gEvEer dTIZMK">Other</div>
                  </a>
                </div>
                <span className="sc-gEvEer cmUieI"></span>
              </nav>
              <div className="sc-gEvEer sc-eqUAAy jeSAXr fgprtA">
                <input
                  placeholder="Search token by name"
                  className="sc-gEvEer jdxaSg"

                />
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  color="text"
                  className="sc-gEvEer eILgRW"
                >
                  <g
                    id="Symbols"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g id="Data-Display/Icons/cancel" fill="currentColor">
                      <path
                        d="M19.0742438,4.92574392 C15.1724148,1.02475203 8.82694036,1.02475203 4.92511138,4.92574392 C1.02496287,8.82673582 1.02496287,15.173825 4.92511138,19.0748169 C6.87602587,21.0249025 9.43804713,21.9994959 12.0001075,21.9994959 C14.5621678,21.9994959 17.1233293,21.0248634 19.0742438,19.0748169 C22.9752521,15.1738641 22.9752521,8.82673582 19.0742438,4.92574392 Z M16.9514186,15.5375449 C17.3425864,15.9287127 17.3425864,16.5610247 16.9514186,16.9521924 C16.7563272,17.1472839 16.5002228,17.2453455 16.2440714,17.2453455 C15.987967,17.2453455 15.7318157,17.1472839 15.5367242,16.9521924 L12.0000821,13.4145185 L8.46442473,16.9511607 C8.26834844,17.1462521 8.01219712,17.2443137 7.75707754,17.2443137 C7.50097311,17.2443137 7.24482179,17.1462521 7.04973034,16.9511607 C6.65856261,16.559993 6.65856261,15.9266961 7.04973034,15.5365132 L10.5853877,11.999871 L7.04874551,8.46322886 C6.65757777,8.07206112 6.65757777,7.43876426 7.04874551,7.04858137 C7.4389284,6.65741363 8.07222526,6.65741363 8.463393,7.04858137 L12.0000352,10.5852235 L15.5366773,7.04858137 C15.9278451,6.65741363 16.5601571,6.65741363 16.9513248,7.04858137 C17.3424926,7.43876426 17.3424926,8.07206112 16.9513248,8.46322886 L13.4146827,11.999871 L16.9514186,15.5375449 Z"
                        id="Shape"
                      ></path>
                    </g>
                  </g>
                </svg>
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  color="text"
                  // Removed invalid 'sx' property
                  className="sc-gEvEer ivHxAC"
                >
                  <path
                    d="m19.7 18.3-3.09-3.1a7 7 0 1 0-1.41 1.41l3.1 3.1a1 1 0 1 0 1.4-1.41ZM11.04 16a4.98 4.98 0 1 1 0-9.96 4.98 4.98 0 0 1 0 9.96Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="sc-gEvEer sc-eqUAAy  p-0 h-full iLeEgO fgprtA">
                <div className="sc-gEvEer h-full sc-eqUAAy jQCsrt fgprtA">
                  <p className="sc-gEvEer iZRsmm">Only&nbsp;verified</p>
                  <label className="sc-bmzYkS cgGqnT">
                    <input
                      type="checkbox"
                      className="sc-eeDRCY fotkZP"
                      checked=""
                    />
                    <span className="sc-koXPp kAqvkZ"></span>
                  </label>
                </div>
                <div className="sc-gEvEer sc-eqUAAy jQCsrt gap-2  h-full fgprtA">
                  <div className="sc-gEvEer kpVmdW">Bases:</div>
                  <div className="sc-gEvEer sc-eqUAAy bUvvFL fgprtA">
                    <button className="flex  gap-2" disabled="">
                      <div
                        className="LazyLoad is-visible"
                        style={{ height: "20px", width: "20px" }}
                      >
                        <img
                          src={img}
                          crossOrigin="anonymous"
                          alt="/static/media/ada.ae3e320f25e324286ae2.webp"
                          className="sc-gEvEer iYGsOJ"
                        />
                      </div>
                      <div className="sc-gEvEer font-semibold fffdtI">
                        ADA
                      </div>
                    </button>
                    <button className="flex  gap-2">
                      <div
                        className="LazyLoad is-visible"
                        style={{ height: "20px", width: "20px" }}
                      >
                        <img
                          src="https://tokens.muesliswap.com/static/img/tokens/8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61.446a65644d6963726f555344.png"
                          crossOrigin="anonymous"
                          alt="https://tokens.muesliswap.com/static/img/tokens/8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61.446a65644d6963726f555344.png"
                          className="sc-gEvEer eBzULB"
                        />
                      </div>
                      <div opacity="0.8" className="sc-gEvEer dVZlJT">
                        DJED
                      </div>
                    </button>
                    <button className="flex  gap-2">
                      <div
                        className="LazyLoad is-visible"
                        style={{ height: "20px", width: "20px" }}
                      >
                        <img
                          src="https://tokens.muesliswap.com/static/img/tokens/f66d78b4a3cb3d37afa0ec36461e51ecbde00f26c8f0a68f94b69880.69555344.png"
                          crossOrigin="anonymous"
                          alt="https://tokens.muesliswap.com/static/img/tokens/f66d78b4a3cb3d37afa0ec36461e51ecbde00f26c8f0a68f94b69880.69555344.png"
                          className="sc-gEvEer eBzULB"
                        />
                      </div>
                      <div opacity="0.8" className="sc-gEvEer dVZlJT">
                        iUSD
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <MarketsTable />
            </div>
            <div title="Page Navigation" className="sc-ggpjZQ iWGVXG">
              <label className="sc-gEvEer sc-eqUAAy ejbbHR fgprtA">
                <label width="max-content" className="sc-gEvEer ZpyKi">
                  Show Rows
                </label>
                <div className="sc-gEvEer eLiPBP">
                  <div className="sc-gEvEer sc-eqUAAy iqGkHt fgprtA">
                    <select className="sc-dZoequ kBoiaJ">
                      <option>10</option>
                      <option>20</option>
                      <option>50</option>
                      <option>100</option>
                    </select>
                    <div className="sc-jnOGJG fKMeQu">
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
                  </div>
                </div>
              </label>
              <div width="100%" className="sc-gEvEer sc-eqUAAy beaxRO fgprtA">
                <button
                  type="button"
                  aria-label="previous page"
                  disabled=""
                  value="-1"
                  className="sc-hIUJlX CGLGu"
                >
                  <svg viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.71 11.72a1 1 0 0 1 0-1.42L11 7H1a1 1 0 0 1 0-2h10L7.71 1.71A1 1 0 1 1 9.12.3l4.3 4.3a2 2 0 0 1 .57 1.24L14 6a2 2 0 0 1-.59 1.4l-4.29 4.3a1 1 0 0 1-1.41.02z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <iframe
                  style={{
                    background: "transparent",
                    border: "none",
                    height: "100%",
                    left: 0,
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    zIndex: -1,
                  }}
                ></iframe>
                <button type="button" className="sc-fxwrCY lcFNFd">
                  1
                </button>
                <button type="button" value="1" className="sc-fxwrCY bqoKix">
                  2
                </button>
                <button type="button" value="2" className="sc-fxwrCY bqoKix">
                  3
                </button>
                <div className="sc-dSCufp hSZqBO">
                  <div className="sc-gEvEer jSnzCT">...</div>
                </div>
                <button type="button" value="17" className="sc-fxwrCY bqoKix">
                  18
                </button>
                <button type="button" value="18" className="sc-fxwrCY bqoKix">
                  19
                </button>
                <button type="button" value="19" className="sc-fxwrCY bqoKix">
                  20
                </button>
                <button
                  type="button"
                  aria-label="next page"
                  value="1"
                  className="sc-hIUJlX hAswTQ"
                >
                  <svg viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.71 11.72a1 1 0 0 1 0-1.42L11 7H1a1 1 0 0 1 0-2h10L7.71 1.71A1 1 0 1 1 9.12.3l4.3 4.3a2 2 0 0 1 .57 1.24L14 6a2 2 0 0 1-.59 1.4l-4.29 4.3a1 1 0 0 1-1.41.02z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="sc-gEvEer sc-eqUAAy fSNpul fgprtA"></div>
    </div>
  );
};

export default Markets;
