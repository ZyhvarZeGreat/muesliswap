import "./Farming.css";
import EarnTab from "./components/EarnTab";
const Farming = () => {
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
                    className="sc-gEvEer iEcklH"
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
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
                            src="https://tokens.muesliswap.com/static/img/tokens/2a80c713e0d518f84e0553957e3d581c9326cfc5931ea1f4dd0fb292.0014df107374616b65636f696e_scaled_100.webp"
                            crossOrigin="anonymous"
                            alt="https://tokens.muesliswap.com/static/img/tokens/2a80c713e0d518f84e0553957e3d581c9326cfc5931ea1f4dd0fb292.0014df107374616b65636f696e_scaled_100.webp"
                            className="sc-gEvEer ceiwSH"
                          />
                          <img
                            src="/static/media/ada.ae3e320f25e324286ae2.webp"
                            crossOrigin="anonymous"
                            alt=""
                            className="sc-gEvEer gUHNA-d"
                          />
                        </div>
                      </div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          STK
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
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
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          400 MYIELD
                        </div>
                        <div
                          className="LazyLoad is-visible"
                          style={{ height: "24px", width: "24px" }}
                        >
                          <img
                            src="https://tokens.muesliswap.com/static/img/tokens/2a80c713e0d518f84e0553957e3d581c9326cfc5931ea1f4dd0fb292.0014df107374616b65636f696e_scaled_100.webp"
                            crossOrigin="anonymous"
                            alt="https://tokens.muesliswap.com/static/img/tokens/2a80c713e0d518f84e0553957e3d581c9326cfc5931ea1f4dd0fb292.0014df107374616b65636f696e_scaled_100.webp"
                            className="sc-gEvEer fFqlxh"
                          />
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          1,000 STK
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      64.439%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      5K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=.&amp;quote=a0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235.484f534b59"
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
                            src="https://tokens.muesliswap.com/static/img/tokens/a0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235.484f534b59_scaled_100.webp"
                            crossOrigin="anonymous"
                            alt="https://tokens.muesliswap.com/static/img/tokens/a0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235.484f534b59_scaled_100.webp"
                            className="sc-gEvEer ceiwSH"
                          />
                          <img
                            src="/static/media/ada.ae3e320f25e324286ae2.webp"
                            crossOrigin="anonymous"
                            alt=""
                            className="sc-gEvEer gUHNA-d"
                          />
                        </div>
                      </div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          HOSKY
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
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
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          1,250 MYIELD
                        </div>
                        <div
                          className="LazyLoad is-visible"
                          style={{ height: "24px", width: "24px" }}
                        >
                          <img
                            src="https://tokens.muesliswap.com/static/img/tokens/a0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235.484f534b59_scaled_100.webp"
                            crossOrigin="anonymous"
                            alt="https://tokens.muesliswap.com/static/img/tokens/a0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235.484f534b59_scaled_100.webp"
                            className="sc-gEvEer fFqlxh"
                          />
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          6,849,315,068 HOSKY
                        </div>
                        <div
                          className="LazyLoad is-visible"
                          style={{ height: "24px", width: "24px" }}
                        >
                          <img
                            src="/static/media/ada.ae3e320f25e324286ae2.webp"
                            crossOrigin="anonymous"
                            alt=""
                            className="sc-gEvEer fFqlxh"
                          />
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          1 ₳
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      37.262%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      248K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=.&amp;quote=c48cbb3d5e57ed56e276bc45f99ab39abe94e6cd7ac39fb402da47ad.0014df105553444d"
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
                            src="https://tokens.muesliswap.com/static/img/tokens/c48cbb3d5e57ed56e276bc45f99ab39abe94e6cd7ac39fb402da47ad.0014df105553444d_scaled_100.webp"
                            crossOrigin="anonymous"
                            alt="https://tokens.muesliswap.com/static/img/tokens/c48cbb3d5e57ed56e276bc45f99ab39abe94e6cd7ac39fb402da47ad.0014df105553444d_scaled_100.webp"
                            className="sc-gEvEer ceiwSH"
                          />
                          <img
                            src="/static/media/ada.ae3e320f25e324286ae2.webp"
                            crossOrigin="anonymous"
                            alt=""
                            className="sc-gEvEer gUHNA-d"
                          />
                        </div>
                      </div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          USDM
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
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
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          200 MYIELD
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      35.509%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      2K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
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
                            src="/static/media/ada.ae3e320f25e324286ae2.webp"
                            crossOrigin="anonymous"
                            alt=""
                            className="sc-gEvEer gUHNA-d"
                          />
                        </div>
                      </div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          OPT
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
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
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          7,000 MYIELD
                        </div>
                        <div
                          className="LazyLoad is-visible"
                          style={{ height: "24px", width: "24px" }}
                        >
                          <img
                            src="https://tokens.muesliswap.com/static/img/tokens/1ddcb9c9de95361565392c5bdff64767492d61a96166cb16094e54be.4f5054_scaled_100.webp"
                            crossOrigin="anonymous"
                            alt="https://tokens.muesliswap.com/static/img/tokens/1ddcb9c9de95361565392c5bdff64767492d61a96166cb16094e54be.4f5054_scaled_100.webp"
                            className="sc-gEvEer fFqlxh"
                          />
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          4,500 OPT
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      33.451%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      363K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
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
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          iUSD
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / DJED
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
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
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          2,000 MYIELD
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      32.719%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      23K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
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
                            src="/static/media/ada.ae3e320f25e324286ae2.webp"
                            crossOrigin="anonymous"
                            alt=""
                            className="sc-gEvEer gUHNA-d"
                          />
                        </div>
                      </div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          LIFI
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
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
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          2,000 MYIELD
                        </div>
                        <div
                          className="LazyLoad is-visible"
                          style={{ height: "24px", width: "24px" }}
                        >
                          <img
                            src="https://tokens.muesliswap.com/static/img/tokens/7914fae20eb2903ed6fd5021a415c1bd2626b64a2d86a304cb40ff5e.4c494649_scaled_100.webp"
                            crossOrigin="anonymous"
                            alt="https://tokens.muesliswap.com/static/img/tokens/7914fae20eb2903ed6fd5021a415c1bd2626b64a2d86a304cb40ff5e.4c494649_scaled_100.webp"
                            className="sc-gEvEer fFqlxh"
                          />
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          2,000 LIFI
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      30.172%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      211K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=.&amp;quote=279f842c33eed9054b9e3c70cd6a3b32298259c24b78b895cb41d91a.54554e41"
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
                            src="https://tokens.muesliswap.com/static/img/tokens/279f842c33eed9054b9e3c70cd6a3b32298259c24b78b895cb41d91a.54554e41_scaled_100.webp"
                            crossOrigin="anonymous"
                            alt="https://tokens.muesliswap.com/static/img/tokens/279f842c33eed9054b9e3c70cd6a3b32298259c24b78b895cb41d91a.54554e41_scaled_100.webp"
                            className="sc-gEvEer ceiwSH"
                          />
                          <img
                            src="/static/media/ada.ae3e320f25e324286ae2.webp"
                            crossOrigin="anonymous"
                            alt=""
                            className="sc-gEvEer gUHNA-d"
                          />
                        </div>
                      </div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          V1TUNA
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
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
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          200 MYIELD
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      29.114%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      3K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=.&amp;quote=533bb94a8850ee3ccbe483106489399112b74c905342cb1792a797a0.494e4459"
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
                            src="https://tokens.muesliswap.com/static/img/tokens/533bb94a8850ee3ccbe483106489399112b74c905342cb1792a797a0.494e4459_scaled_100.webp"
                            crossOrigin="anonymous"
                            alt="https://tokens.muesliswap.com/static/img/tokens/533bb94a8850ee3ccbe483106489399112b74c905342cb1792a797a0.494e4459_scaled_100.webp"
                            className="sc-gEvEer ceiwSH"
                          />
                          <img
                            src="/static/media/ada.ae3e320f25e324286ae2.webp"
                            crossOrigin="anonymous"
                            alt=""
                            className="sc-gEvEer gUHNA-d"
                          />
                        </div>
                      </div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          INDY
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
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
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          1,884 MYIELD
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      24.628%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      32K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
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
                            src="/static/media/ada.ae3e320f25e324286ae2.webp"
                            crossOrigin="anonymous"
                            alt=""
                            className="sc-gEvEer gUHNA-d"
                          />
                        </div>
                      </div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          DJED
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
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
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          7,500 MYIELD
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      24.456%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      159K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=.&amp;quote=804f5544c1962a40546827cab750a88404dc7108c0f588b72964754f.56594649"
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
                            src="https://tokens.muesliswap.com/static/img/tokens/804f5544c1962a40546827cab750a88404dc7108c0f588b72964754f.56594649_scaled_100.webp"
                            crossOrigin="anonymous"
                            alt="https://tokens.muesliswap.com/static/img/tokens/804f5544c1962a40546827cab750a88404dc7108c0f588b72964754f.56594649_scaled_100.webp"
                            className="sc-gEvEer ceiwSH"
                          />
                          <img
                            src="/static/media/ada.ae3e320f25e324286ae2.webp"
                            crossOrigin="anonymous"
                            alt=""
                            className="sc-gEvEer gUHNA-d"
                          />
                        </div>
                      </div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          VYFI
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
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
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          1,500 MYIELD
                        </div>
                        <div
                          className="LazyLoad is-visible"
                          style={{ height: "24px", width: "24px" }}
                        >
                          <img
                            src="https://tokens.muesliswap.com/static/img/tokens/804f5544c1962a40546827cab750a88404dc7108c0f588b72964754f.56594649_scaled_100.webp"
                            crossOrigin="anonymous"
                            alt="https://tokens.muesliswap.com/static/img/tokens/804f5544c1962a40546827cab750a88404dc7108c0f588b72964754f.56594649_scaled_100.webp"
                            className="sc-gEvEer fFqlxh"
                          />
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          0 VYFI
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      22.812%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      25K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=.&amp;quote=8f52f6a88acf6127bc4758a16b6047afc4da7887feae121ec217b75a.534e4f57"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          SNOW
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          694 MYIELD
                        </div>
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          14 SNOW
                        </div>
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          0 ₳
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      22.564%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      23K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=.&amp;quote=20cd68533b47565f3c61efb39c30fdace9963bfa4c0060b613448e3c.50524f584945"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          PROXIE
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          62 MYIELD
                        </div>
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          685 PROXIE
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      19.992%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      7K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=.&amp;quote=db30c7905f598ed0154de14f970de0f61f0cb3943ed82c891968480a.434c4150"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          CLAP
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          201 MYIELD
                        </div>
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          0 ₳
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      19.711%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      4K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=.&amp;quote=b34b3ea80060ace9427bda98690a73d33840e27aaa8d6edb7f0c757a.634e455441"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          cNETA
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          102 MYIELD
                        </div>
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          0 cNETA
                        </div>
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          0 ₳
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      19.108%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      2K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=.&amp;quote=10a49b996e2402269af553a8a96fb8eb90d79e9eca79e2b4223057b6.4745524f"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          GERO
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          514 MYIELD
                        </div>
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          0 ₳
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      18.802%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      11K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=.&amp;quote=8f9c32977d2bacb87836b64f7811e99734c6368373958da20172afba.4d5949454c44"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          MYIELD
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          1,198 MYIELD
                        </div>
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          1 ₳
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      18.318%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      32K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=.&amp;quote=f43a62fdc3965df486de8a0d32fe800963589c41b38946602a0dc535.41474958"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          AGIX
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          1,884 MYIELD
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      17.980%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      71K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=.&amp;quote=af2e27f580f7f08e93190a81f72462f153026d06450924726645891b.44524950"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          DRIP
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          602 MYIELD
                        </div>
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          0 DRIP
                        </div>
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          0 ₳
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      17.418%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      14K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61.446a65644d6963726f555344&amp;quote=a0028f350aaabe0545fdcb56b039bfb08e4bb4d8c4d7c3c7d481c235.484f534b59"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          HOSKY
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / DJED
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          324 MYIELD
                        </div>
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          0 HOSKY
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      16.568%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      7K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=.&amp;quote=afbe91c0b44b3040e360057bf8354ead8c49c4979ae6ab7c4fbdc9eb.4d494c4b7632"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          MILK
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          45,542 MYIELD
                        </div>
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          17 ₳
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      16.277%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      1M ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=.&amp;quote=a2944573e99d2ed3055b808eaa264f0bf119e01fc6b18863067c63e4.4d454c44"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          MELD
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          2,884 MYIELD
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      15.247%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      84K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=.&amp;quote=da8c30857834c6ae7203935b89278c532b3995245295456f993e1d24.4c51"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          LQ
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          1,000 MYIELD
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      15.159%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      29K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=.&amp;quote=5dac8536653edc12f6f5e1045d8164b9f59998d3bdc300fc92843489.4e4d4b52"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          NMKR
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          592 MYIELD
                        </div>
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          0 NMKR
                        </div>
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          0 ₳
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      14.207%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      20K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=.&amp;quote=8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61.5368656e4d6963726f555344"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          SHEN
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          7,500 MYIELD
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      11.485%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      248K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=.&amp;quote=1d7f33bd23d85e1a25d87d86fac4f199c3197a2f7afeb662a0f34e1e.776f726c646d6f62696c65746f6b656e"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          WMT
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          2,884 MYIELD
                        </div>
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          4 ₳
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      9.789%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      203K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=.&amp;quote=cc8d1b026353022abbfcc2e1e71159f9e308d9c6e905ac1db24c7fb6.50617269627573"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          PBX
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          500 MYIELD
                        </div>
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          0 PBX
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      8.885%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      112K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=.&amp;quote=6c8642400e8437f737eb86df0fc8a8437c760f48592b1ba8f5767e81.456d706f7761"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          EMP
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          3,503 MYIELD
                        </div>
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          0 EMP
                        </div>
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          6 ₳
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      8.792%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      185K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=.&amp;quote=edfd7a1d77bcb8b884c474bdc92a16002d1fb720e454fa6e99344479.4e5458"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          NTX
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          1,500 MYIELD
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      3.307%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      325K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=.&amp;quote=f66d78b4a3cb3d37afa0ec36461e51ecbde00f26c8f0a68f94b69880.69555344"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          iUSD
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                        <span
                          color="main"
                          title="Organic Farm"
                          className="sc-gEvEer kRztpG"
                        >
                          🌱
                        </span>
                        <span className="sc-gEvEer kgjCYW">
                          <div
                            display="inline-flex"
                            className="sc-gEvEer jXZgNG"
                          >
                            <svg
                              width="18"
                              height="18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              color="grey500"
                              className="sc-gEvEer SHRHu"
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
                              style={{ transform: "translate(-12px, -100%)" }}
                            >
                              <div className="sc-gEvEer jVsTBr">
                                This pool is governed by Organic APR.
                                <br />
                                More stakers = More APR up to goal liquidity
                              </div>
                            </div>
                          </div>
                        </span>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          240 MYIELD
                          <div color="main" className="sc-gEvEer kjxQrk">
                            <span
                              display="inline-block"
                              className="sc-gEvEer joyBUY"
                            >
                              GOAL:&nbsp;
                            </span>
                            <span
                              display="inline-block"
                              color="grey700"
                              className="sc-gEvEer jFNvCm"
                            >
                              25,000 MYIELD
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      2.698%
                    </div>
                    <div color="main" className="sc-gEvEer kjxQrk">
                      <div display="inline-block" className="sc-gEvEer joyBUY">
                        GOAL:&nbsp;
                      </div>
                      <div
                        display="inline-block"
                        color="grey700"
                        className="sc-gEvEer jFNvCm"
                      >
                        10.655%
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      42K ₳
                    </div>
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div color="main" className="sc-gEvEer iqGhzw">
                        <div
                          display="inline-block"
                          className="sc-gEvEer joyBUY"
                        >
                          GOAL:&nbsp;
                        </div>
                        <div
                          display="inline-block"
                          color="grey700"
                          className="sc-gEvEer jFNvCm"
                        >
                          926K
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=.&amp;quote=6ac8ef33b510ec004fe11585f7c5a9f0c07f0c23428ab4f29c1d7d10.4d454c44"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          MELD
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          0 MYIELD
                        </div>
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          0 ₳
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      0.938%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      1K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=.&amp;quote=078eafce5cd7edafdf63900edef2c1ea759e77f30ca81d6bbdeec924.79756d6d69"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          YUMMI
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          0 MYIELD
                        </div>
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          0 YUMMI
                        </div>
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          0 ₳
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      0.695%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      4K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=.&amp;quote=8a1cfae21368b8bebbbed9800fec304e95cce39a2a57dc35e2e3ebaa.4d494c4b"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          MILK
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          0 MYIELD
                        </div>
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          0 ₳
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      0.573%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      134K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
                <tr height="64px" role="row" className="sc-gEvEer hKoCKV">
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <a
                      className="sc-iHbSHJ bwYSnM"
                      href="/swap?base=.&amp;quote=8a1cfae21368b8bebbbed9800fec304e95cce39a2a57dc35e2e3ebaa.4d494c4b"
                    >
                      <div
                        className="LazyLoad"
                        style={{ height: "32px", width: "59.2px" }}
                      ></div>
                      <div className="sc-gEvEer fLROuh">
                        <div
                          display="inline-block"
                          className="sc-gEvEer cSVFGB"
                        >
                          MILK
                        </div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer kfkWNd"
                        >
                          / ADA
                        </div>
                        <span color="main" className="sc-gEvEer fUsefI">
                          LBE
                        </span>
                      </div>
                    </a>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy kQnNKG fgprtA">
                      <div display="grid" className="sc-gEvEer hoROyV">
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          0 MYIELD
                        </div>
                        <div
                          className="LazyLoad"
                          style={{ height: "24px", width: "24px" }}
                        ></div>
                        <div
                          display="inline-block"
                          className="sc-gEvEer chgUfk"
                        >
                          0 ₳
                        </div>
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer cSVFGB">
                      0.573%
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div display="inline-block" className="sc-gEvEer chgUfk">
                      2K ₳
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer fZHjpi">
                    <div className="sc-gEvEer sc-eqUAAy egzmya fgprtA">
                      <div
                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hHeQDs"
                      >
                        Details
                      </div>
                      <div className="sc-gEvEer kafyRl">
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
      </main>
    </>
  );
};

export default Farming;
