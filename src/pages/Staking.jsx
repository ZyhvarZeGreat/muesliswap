import EarnTab from "./components/EarnTab";
import "./Staking.css";
import Milk from "../assets/afbe91c0b44b3040e360057bf8354ead8c49c4979ae6ab7c4fbdc9eb.4d494c4b7632_scaled_100.webp";
import { useCallback, useEffect, useState } from "react";
import { cn } from "../lib/utils";
const Staking = () => {
  const [staking, setStaking] = useState([]);
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
  const getStaking = useCallback(async () => {
    try {
      const response = await fetch('https://api.muesliswap.com/staking/token-pools', {
        method: 'GET',
        headers: {},
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setStaking(data.slice(0, 20));
      console.log(data.slice(0, 20));
    } catch (error) {
      console.error("Error fetching assets:", error);
      return [];
    }
  }, []);

  useEffect(() => {
    getStaking();
  }, [getStaking]);

  console.log(staking)
  return (
    <main className="sc-kOPcWz hierkx">
      <div className="sc-iHGNWf hQvJpi">
        <div className="sc-gEvEer sc-eqUAAy dqTbFd fgprtA">
          <EarnTab />
        </div>
        <div className="sc-gEvEer sc-eqUAAy laAThB fgprtA">
          <div className="sc-gEvEer cYQgWB">
            <div
              style={{ fontSize: "calc(32px + (100vw - 750px) / 146.25)" }}
              className="sc-gEvEer jdtyET"
            >
              MILK&nbsp;Staking
            </div>
            <div
              style={{ fontFamily: "inter", color: "text" }}
              className="sc-gEvEer iTDrPV"
            >
              Stake your MILK in our various staking pools!
            </div>
          </div>
        </div>
        <div width="100%" className="sc-gEvEer sc-eqUAAy fFsrZy fgprtA">
          <div width="100%" className="sc-gEvEer fzYVaO">
            <div className="sc-gEvEer sc-eqUAAy bFBtsG fgprtA">
              <div className="sc-gEvEer sc-eqUAAy fIWPvs fgprtA">
                <div className="sc-gEvEer sc-eqUAAy bsKOPc fgprtA"></div>
                <div className="sc-gEvEer dMSCJz">
                  MILK Vault - Lock to earn MILK
                </div>
              </div>
            </div>
            <div className="sc-gEvEer kHZpJQ">
              <div className="sc-gEvEer sc-eqUAAy eQsRIo fgprtA">
                <div className="sc-gEvEer sc-eqUAAy fALClO fgprtA">
                  <div
                    fontSize="15px"
                    fontFamily="inter"
                    color="text"
                    className="sc-gEvEer cWTudz"
                    style={{ paddingRight: "5px", marginBottom: "0px" }}
                  >
                    MILK Amount
                  </div>
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
                    className="sc-gEvEer dmPgbw"
                  />
                  <div className="sc-gEvEer sc-eqUAAy hpsLIh fgprtA">
                    <div
                      fontSize="12px"
                      fontFamily="inter"
                      color="text"
                      className="sc-gEvEer dweOPY"
                    >
                      Balance: -
                    </div>
                    <button
                      color="main"
                      disabled=""
                      className="sc-gEvEer eviLpx"
                    >
                      MAX
                    </button>
                  </div>
                </div>
                <div className="sc-gEvEer sc-eqUAAy fALClO fgprtA">
                  <div
                    fontSize="15px"
                    fontFamily="inter"
                    color="text"
                    className="sc-gEvEer jigYcB"
                    style={{ paddingRight: "5px" }}
                  >
                    Locking Period: 26 Weeks
                    <div display="inline-flex" className="sc-gEvEer kPXZER">
                      <svg
                        width="18"
                        height="18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        color="grey500"
                        className="sc-gEvEer bKmByi"
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
                          Locked MILK tokens can not be unlocked before the
                          specified date. All tokens are held in a smart
                          contract. There is no emergency unlocking
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sc-gEvEer dSOvFp">
                    <div className="sc-gEvEer sc-eqUAAy bPYUql fgprtA">
                      <div className="sc-fhzFiK lnvRWp">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value="0"
                          style={{ backgroundSize: "0% 100%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sc-gEvEer sc-eqUAAy bJVedh fgprtA">
                  <div
                    fontSize="15px"
                    fontFamily="inter"
                    color="text"
                    width="180px"
                    className="sc-gEvEer fWbARs"
                    style={{ paddingRight: "5px" }}
                  >
                    Locking APR: 8%
                  </div>
                  <div
                    fontSize="15px"
                    fontFamily="inter"
                    color="text"
                    className="sc-gEvEer cWTudz"
                    style={{ paddingRight: "5px" }}
                  >
                    Unlock Date: 23/03/2025
                  </div>
                </div>
                <button disabled="" height="40px" className="sc-gEvEer esMSjW">
                  Lock&nbsp;MILK
                </button>
              </div>
            </div>
          </div>
          <div className="sc-gEvEer emcwAi">
            <div className="sc-gEvEer sc-eqUAAy bFBtsG fgprtA">
              <div className="sc-gEvEer sc-eqUAAy fIWPvs fgprtA">
                <div className="sc-gEvEer sc-eqUAAy bsKOPc fgprtA"></div>
                <div className="sc-gEvEer dMSCJz">MILK Vault Size</div>
              </div>
            </div>
            <div className="sc-gEvEer kHZpJQ">
              <p className="sc-gEvEer gWtCjc">Total Amount Locked:</p>
              <div width="100%" className="sc-gEvEer sc-eqUAAy fvshqV fgprtA">
                <div className="sc-gEvEer sc-eqUAAy jQCsrt fgprtA">
                  <div
                    className="LazyLoad is-visible"
                    style={{ height: "32px", width: "32px" }}
                  >
                    <img
                      src={Milk}
                      crossOrigin="anonymous"
                      alt="/static/media/Milk.dcbf140ce23703c22293.webp"
                      className="sc-gEvEer jmJMSZ"
                    />
                  </div>
                  <span className="sc-gEvEer Mglgv">1,368,596</span>
                </div>
                <span className="sc-gEvEer hHuoiF">MILK</span>
              </div>
            </div>
          </div>
        </div>
        <div width="100%" className="sc-gEvEer fOzfof">
          <div className="sc-gEvEer sc-eqUAAy fiUlZI fgprtA">
            <div className="sc-gEvEer dMSCJz">
              Flexible Staking - Stake to earn tokens
            </div>
            <div className="sc-gEvEer jlEBNW"></div>
            <div className="sc-gEvEer lbUmFf">Staked only</div>
            <label className="sc-bmzYkS iWLcNb">
              <input type="checkbox" className="sc-eeDRCY fotkZP" />
              <span className="sc-koXPp kAqvkZ"></span>
            </label>
          </div>
          <div className="sc-gEvEer dOYfuY">
            <table role="table" className="sc-gEvEer gcfgxO">
              <thead className="sc-gEvEer kxRsxZ">
                <tr role="row">
                  <th
                    colSpan="1"
                    role="columnheader"
                    className="sc-gEvEer eVeTFp"
                  >
                    Name
                  </th>
                  <th
                    colSpan="1"
                    role="columnheader"
                    className="sc-gEvEer eVeTFp"
                  >
                    Staked
                  </th>
                  <th
                    colSpan="1"
                    role="columnheader"
                    className="sc-gEvEer eVeTFp"
                  >
                    Rewards per MILK
                  </th>
                  <th
                    colSpan="1"
                    role="columnheader"
                    className="sc-gEvEer eVeTFp"
                  >
                    Pool Size
                  </th>
                  <th
                    colSpan="1"
                    role="columnheader"
                    className="sc-gEvEer eVeTFp"
                  >
                    Total Staked
                  </th>
                  <th
                    colSpan="1"
                    role="columnheader"
                    className="sc-gEvEer eVeTFp"
                  >
                    End of pool
                  </th>
                  <th
                    colSpan="1"
                    role="columnheader"
                    className="sc-gEvEer eVeTFp"
                  ></th>
                </tr>
              </thead>
              <tbody role="rowgroup" className="sc-gEvEer fsUIic">
                <tr role="row" className="sc-gEvEer fcwZOf">
                  <td role="cell" className="sc-gEvEer dJITOL">
                    <div className="sc-iHbSHJ bwYSnM">
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
                            src="https://tokens.muesliswap.com/static/img/tokens/afbe91c0b44b3040e360057bf8354ead8c49c4979ae6ab7c4fbdc9eb.4d494c4b7632_scaled_100.webp"
                            crossOrigin="anonymous"
                            alt="https://tokens.muesliswap.com/static/img/tokens/afbe91c0b44b3040e360057bf8354ead8c49c4979ae6ab7c4fbdc9eb.4d494c4b7632_scaled_100.webp"
                            className="sc-gEvEer gUHNA-d"
                          />
                        </div>
                      </div>
                      <span className="sc-Nxspf ebZgeq">
                        Earn LIFI <br />{" "}
                      </span>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer dJITOL">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer dJITOL">
                    <div className="sc-gEvEer sc-eqUAAy bKxLsR fgprtA">
                      <div fontWeight="500" className="sc-gEvEer cwvpAF">
                        0.098 LIFI
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer dJITOL">
                    <div className="sc-gEvEer jVsTBr">40K LIFI</div>
                  </td>
                  <td role="cell" className="sc-gEvEer dJITOL">
                    <div className="sc-gEvEer jVsTBr">324.3K MILK</div>
                  </td>
                  <td role="cell" className="sc-gEvEer dJITOL">
                    <div
                      color="text"
                      className="sc-gEvEer sc-eqUAAy iUuNAu fgprtA"
                    >
                      <div color="inherit" className="sc-gEvEer ioXiye">
                        28/12/2024
                      </div>
                      <div color="inherit" className="sc-gEvEer ioXiye">
                        13:00
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer dJITOL">
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
                <tr role="row" className="sc-gEvEer fcwZOf">
                  <td role="cell" className="sc-gEvEer dJITOL">
                    <div className="sc-iHbSHJ bwYSnM">
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
                            src="https://tokens.muesliswap.com/static/img/tokens/afbe91c0b44b3040e360057bf8354ead8c49c4979ae6ab7c4fbdc9eb.4d494c4b7632_scaled_100.webp"
                            crossOrigin="anonymous"
                            alt="https://tokens.muesliswap.com/static/img/tokens/afbe91c0b44b3040e360057bf8354ead8c49c4979ae6ab7c4fbdc9eb.4d494c4b7632_scaled_100.webp"
                            className="sc-gEvEer gUHNA-d"
                          />
                        </div>
                      </div>
                      <span className="sc-Nxspf ebZgeq">
                        Earn OPT <br />{" "}
                      </span>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer dJITOL">
                    <div className="sc-gEvEer jVsTBr">-</div>
                  </td>
                  <td role="cell" className="sc-gEvEer dJITOL">
                    <div className="sc-gEvEer sc-eqUAAy bKxLsR fgprtA">
                      <div fontWeight="500" className="sc-gEvEer cwvpAF">
                        0.108 OPT
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer dJITOL">
                    <div className="sc-gEvEer jVsTBr">40K OPT</div>
                  </td>
                  <td role="cell" className="sc-gEvEer dJITOL">
                    <div className="sc-gEvEer jVsTBr">294.7K MILK</div>
                  </td>
                  <td role="cell" className="sc-gEvEer dJITOL">
                    <div
                      color="text"
                      className="sc-gEvEer sc-eqUAAy iUuNAu fgprtA"
                    >
                      <div color="inherit" className="sc-gEvEer ioXiye">
                        28/12/2024
                      </div>
                      <div color="inherit" className="sc-gEvEer ioXiye">
                        13:00
                      </div>
                    </div>
                  </td>
                  <td role="cell" className="sc-gEvEer dJITOL">
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

export default Staking;
