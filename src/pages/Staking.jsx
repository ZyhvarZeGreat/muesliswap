import EarnTab from "./components/EarnTab";
import "./Staking.css";
import Milk from "../assets/afbe91c0b44b3040e360057bf8354ead8c49c4979ae6ab7c4fbdc9eb.4d494c4b7632_scaled_100.webp";
import { useCallback, useEffect, useState } from "react";
import { cn } from "../lib/utils";
const Staking = () => {
  const [staking, setStaking] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openDropdown1, setOpenDropdown1] = useState(false);

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
        <div width="100%" className="sc-gEvEer b flex-col lg:flex-row sc-eqUAAy fFsrZy fgprtA">
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
        <div width="100%" className="sc-gEvEer sc-eqUAAy cCJcoR fgprtA">
          <div className="sc-gEvEer sc-eqUAAy fiUlZI fgprtA">
            <div className="sc-gEvEer dMSCJz">Open Vault Positions</div>
            <div className="sc-gEvEer jlEBNW"></div>
            <svg height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" className="sc-gEvEer kUWeho">
              <path d="M.3 11.7a1 1 0 0 1 0-1.4l4.05-4.06a.33.33 0 0 0 0-.48L.29 1.71A1 1 0 1 1 1.71.29l4.05 4.06a2.33 2.33 0 0 1 0 3.3l-4.05 4.06a1 1 0 0 1-1.42 0z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <div overflow="hidden" className="sc-gEvEer bfVwrZ">
            <table role="table" className="sc-gEvEer eTDyuK">
              <thead className="sc-gEvEer kxRsxZ">
                <tr role="row">
                  <th colSpan="1" role="columnheader" className="sc-gEvEer eVeTFp">Name</th>
                  <th colSpan="1" role="columnheader" className="sc-gEvEer eVeTFp">Current Reward</th>
                  <th colSpan="1" role="columnheader" className="sc-gEvEer eVeTFp">Staking APR</th>
                  <th colSpan="1" role="columnheader" className="sc-gEvEer eVeTFp">Current Staked</th>
                  <th colSpan="1" role="columnheader" className="sc-gEvEer eVeTFp"></th>
                </tr>
              </thead>
              <tbody role="rowgroup" className="sc-gEvEer eUgFaS"></tbody>
            </table>
          </div>
          <div className="sc-gEvEer eoaJBo"></div>
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
                    className="sc-gEvEer  text-end eVeTFp"
                  >
                    Rewards per MILK
                  </th>
                  <th
                    colSpan="1"
                    role="columnheader"
                    className="sc-gEvEer hidden lg:table-cell  eVeTFp"
                  >
                    Pool Size
                  </th>
                  <th
                    colSpan="1"
                    role="columnheader"
                    className="sc-gEvEer hidden lg:table-cell  eVeTFp"
                  >
                    Total Staked
                  </th>
                  <th
                    colSpan="1"
                    role="columnheader"
                    className="sc-gEvEer hidden lg:table-cell  eVeTFp"
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
                  <td role="cell" className="sc-gEvEer hidden lg:table-cell dJITOL">
                    <div className="sc-gEvEer jVsTBr">40K LIFI</div>
                  </td>
                  <td role="cell" className="sc-gEvEer hidden lg:table-cell dJITOL">
                    <div className="sc-gEvEer jVsTBr">324.3K MILK</div>
                  </td>
                  <td role="cell" className="sc-gEvEer  hidden lg:table-cell  dJITOL">
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
                  <td role="cell" className="sc-gEvEer  dJITOL">
                    <div onClick={() => {
                      setOpenDropdown(!openDropdown)
                    }} className="sc-gEvEer sc-eqUAAy  gYGjHl fgprtA">
                      <div

                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hidden lg:block hcJuDx"
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
                <tr className="sc-gEvEer dSOvFp ">
                  {openDropdown && <td colSpan="7" className="bg-[rgb(243,245,254)]">
                    <div className="sc-gEvEer flex flex-col  gap-4 p-4 ">
                      <div className="flex gap-8 flex-col sm:flex-row">
                        <span name="stakeMore" className="sc-fBdRDi  w-full lg:w-8/12 kMoELj">
                          <div className="sc-gEvEer flex flex-col  klnLjB">
                            <h4 className="sc-gEvEer jVEjPV">Stake MILK and earn LIFI</h4>
                            <div className="sc-gEvEer flex flex-col gap-4 lg:flex-row  w-full sc-eqUAAy hCOMjc fgprtA">
                              <div className="sc-gEvEer sc-eqUAAy kLqOog fgprtA">
                                <div className="sc-gEvEer sc-eqUAAy hTzphe fgprtA">
                                  <div className="sc-gEvEer sc-eqUAAy kHqsj flex items-center fgprtA">
                                    <div className="sc-gEvEer dweOPY">Balance: 0</div>
                                    <button className="sc-gEvEer cbZYlr">Max</button>
                                  </div>
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
                                  className="sc-gEvEer bOxyja"

                                />
                                <button disabled className="sc-gEvEer dEuKCj">
                                  Stake MILK
                                </button>
                                <a className="sc-gEvEer flex items-center justify-center iTuoGg" href="/swap/">
                                  Buy MILK
                                  <svg height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" className="sc-gEvEer mt-1 dSOvFp">
                                    <path d="M.3 11.7a1 1 0 0 1 0-1.4l4.05-4.06a.33.33 0 0 0 0-.48L.29 1.71A1 1 0 1 1 1.71.29l4.05 4.06a2.33 2.33 0 0 1 0 3.3l-4.05 4.06a1 1 0 0 1-1.42 0z" fill="currentColor" fillRule="evenodd"></path>
                                  </svg>
                                </a>
                              </div>
                              <div className="flex pb-2 flex-col">
                                <svg viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg" color="#5364ff" className="sc-gEvEer rotate-90 lg:rotate-0 h-4 lg:h-3 dubsKy">
                                  <path d="M7.71 11.72a1 1 0 0 1 0-1.42L11 7H1a1 1 0 0 1 0-2h10L7.71 1.71A1 1 0 1 1 9.12.3l4.3 4.3a2 2 0 0 1 .57 1.24L14 6a2 2 0 0 1-.59 1.4l-4.29 4.3a1 1 0 0 1-1.41.02z" fill="currentColor" fillRule="evenodd"></path>
                                </svg>
                                <div className="sc-gEvEer sc-eqUAAy py-2 text-sm lg:text-base flex flex-col gap-1 kpgxOl fgprtA">
                                  <div className="sc-gEvEer sc-eqUAAy dpDhQl fgprtA">
                                    <p className="sc-gEvEer bewDXU">Stake</p>
                                    <p className="sc-gEvEer ekoDEq">0 MILK</p>
                                  </div>
                                  <div className="sc-gEvEer sc-eqUAAy dpDhQl fgprtA">
                                    <p className="sc-gEvEer ceBQeS">Pool ends in</p>
                                    <p className="sc-gEvEer ekoDEq">92 days</p>
                                  </div>
                                  <div className="sc-gEvEer sc-eqUAAy eUHMac fgprtA">
                                    <div className="sc-gEvEer edVtQN">
                                      You will earn
                                      <div className="sc-gEvEer kHHPzW">
                                        <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" color="grey500" className="sc-gEvEer bKmByi">
                                          <path fillRule="evenodd" clipRule="evenodd" d="M9 1.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15ZM9 3a6 6 0 1 0 0 12A6 6 0 0 0 9 3Zm0 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm0-7.5a2.618 2.618 0 0 1 .887 5.086l-.137.044v.87a.75.75 0 0 1-1.495.088L8.25 10.5V9a.75.75 0 0 1 .663-.745L9 8.25a1.125 1.125 0 1 0-1.12-1.233l-.005.108a.75.75 0 0 1-1.5 0A2.625 2.625 0 0 1 9 4.5Z" fill="currentColor"></path>
                                        </svg>
                                        <div className="sc-fxwrCY dGwCMf" style={{ transform: 'translate(-14px, -100%)' }}>
                                          <div className="sc-gEvEer jVsTBr">Estimate if staked until end of the pool</div>
                                        </div>
                                      </div>
                                    </div>
                                    <p className="sc-gEvEer bRPlyf">~0 LIFI</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </span>
                        <span name="tokenInfo" className="sc-fBdRDi w-4/12 hidden lg:flex bltLiv">
                          <div className="sc-gEvEer gaLzlj">
                            <h4 className="sc-gEvEer jVEjPV">Info</h4>
                            <p className="sc-gEvEer delbq">The utility token of Linkage Finance - a Decentralized Index Fund platform for Cardano.</p>
                            <div className="sc-gEvEer sc-eqUAAy kQAORV fgprtA">
                              <a href="/swap?base=.&quote=7914fae20eb2903ed6fd5021a415c1bd2626b64a2d86a304cb40ff5e.4c494649" target="_blank" rel="noopener noreferrer" className="sc-gEvEer jfvWNY">
                                Token Info
                                <svg width="18px" height="12px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className="sc-gEvEer jXcNwI">
                                  <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Data-Display/Icons/external-link" transform="translate(-3.000000, -3.000000)" fill="#0C1629">
                                      <path d="M12,3 C12.5522847,3 13,3.44771525 13,4 C13,4.51283584 12.6139598,4.93550716 12.1166211,4.99327227 L12,5 L6,5 C5.48716416,5 5.06449284,5.38604019 5.00672773,5.88337887 L5,6 L5,18 C5,18.5128358 5.38604019,18.9355072 5.88337887,18.9932723 L6,19 L18,19 C18.5128358,19 18.9355072,18.6139598 18.9932723,18.1166211 L19,18 L19,12 C19,11.4477153 19.4477153,11 20,11 C20.5128358,11 20.9355072,11.3860402 20.9932723,11.8833789 L21,12 L21,18 C21,19.5976809 19.75108,20.9036609 18.1762728,20.9949073 L18,21 L6,21 C4.40231912,21 3.09633912,19.75108 3.00509269,18.1762728 L3,18 L3,6 C3,4.40231912 4.24891996,3.09633912 5.82372721,3.00509269 L6,3 L12,3 Z M20,3 C20.5128358,3 20.9355072,3.38604019 20.9932723,3.88337887 L21,4 L21,8 C21,8.55228475 20.5522847,9 20,9 C19.4871642,9 19.0644928,8.61395981 19.0067277,8.11662113 L19,8 L19,6.42 L12.71,12.7 C12.5222334,12.8893127 12.2666375,12.9957983 12,12.9957983 C11.7333625,12.9957983 11.4777666,12.8893127 11.29,12.7 C11.1006873,12.5122334 10.9942017,12.2566375 10.9942017,11.99 C10.9942017,11.7678021 11.0681501,11.5532719 11.2023555,11.3792728 L11.29,11.28 L17.58,5 L16,5 C15.4477153,5 15,4.55228475 15,4 C15,3.48716416 15.3860402,3.06449284 15.8833789,3.00672773 L16,3 L20,3 Z" fill="currentColor" id="Shape"></path>
                                    </g>
                                  </g>
                                </svg>
                              </a>
                              <a href="https://linkage.finance" target="_blank" rel="noopener noreferrer" className="sc-gEvEer jfvWNY">
                                Token Website
                                <svg width="18px" height="12px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className="sc-gEvEer jXcNwI">
                                  <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Data-Display/Icons/external-link" transform="translate(-3.000000, -3.000000)" fill="#0C1629">
                                      <path d="M12,3 C12.5522847,3 13,3.44771525 13,4 C13,4.51283584 12.6139598,4.93550716 12.1166211,4.99327227 L12,5 L6,5 C5.48716416,5 5.06449284,5.38604019 5.00672773,5.88337887 L5,6 L5,18 C5,18.5128358 5.38604019,18.9355072 5.88337887,18.9932723 L6,19 L18,19 C18.5128358,19 18.9355072,18.6139598 18.9932723,18.1166211 L19,18 L19,12 C19,11.4477153 19.4477153,11 20,11 C20.5128358,11 20.9355072,11.3860402 20.9932723,11.8833789 L21,12 L21,18 C21,19.5976809 19.75108,20.9036609 18.1762728,20.9949073 L18,21 L6,21 C4.40231912,21 3.09633912,19.75108 3.00509269,18.1762728 L3,18 L3,6 C3,4.40231912 4.24891996,3.09633912 5.82372721,3.00509269 L6,3 L12,3 Z M20,3 C20.5128358,3 20.9355072,3.38604019 20.9932723,3.88337887 L21,4 L21,8 C21,8.55228475 20.5522847,9 20,9 C19.4871642,9 19.0644928,8.61395981 19.0067277,8.11662113 L19,8 L19,6.42 L12.71,12.7 C12.5222334,12.8893127 12.2666375,12.9957983 12,12.9957983 C11.7333625,12.9957983 11.4777666,12.8893127 11.29,12.7 C11.1006873,12.5122334 10.9942017,12.2566375 10.9942017,11.99 C10.9942017,11.7678021 11.0681501,11.5532719 11.2023555,11.3792728 L11.29,11.28 L17.58,5 L16,5 C15.4477153,5 15,4.55228475 15,4 C15,3.48716416 15.3860402,3.06449284 15.8833789,3.00672773 L16,3 L20,3 Z" fill="currentColor" id="Shape"></path>
                                    </g>
                                  </g>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </span>
                      </div>

                      <span name="stakePositions" className="sc-fBdRDi  w-full    kmulZg">
                        <div className="sc-gEvEer sc-eqUAAy bg-white dxmzRX flex flex-col fgprtA">
                          <h2 className="sc-gEvEer cERPOg )]">Open LIFI staking positions</h2>
                          <div className="sc-gEvEer sc-eqUAAy dgbgQe  fgprtA">
                            <div className="sc-gEvEer huupnO">
                              <svg height="185" viewBox="0 0 243 231" width="195" xmlns="http://www.w3.org/2000/svg" style={{ height: '105px' }}>
                                <svg height="185" viewBox="0 0 243 231" width="195" xmlns="http://www.w3.org/2000/svg" style={{ height: '105px' }}>
                                  <g fill="none" fillRule="evenodd">
                                    <path d="M207.67 212.49c0-10.46-39.74-18.94-88.76-18.94s-88.76 8.48-88.76 18.94 39.74 18.94 88.76 18.94 88.76-8.48 88.76-18.94" fill="#dde2f8"></path>
                                    <path d="M242.5 96.92a42.93 42.93 0 0 1-1.02 4.32 93.09 93.09 0 0 1-1.46 4.45 179.33 179.33 0 0 1-5.14 12.55l-.02.01-1.27 2.73a374.69 374.69 0 0 1-9.29 18.1l-2.16 3.96a510.08 510.08 0 0 1-17.02 28.64 326.73 326.73 0 0 1-12.62 18.56 171.78 171.78 0 0 1-5.08 6.58c-.27.35-.56.69-.83 1.02a57.18 57.18 0 0 1-7.08 7.54c-2.75 2.33-6.1 3.74-9.44 5.06-11.27 4.51-23.55 6.09-35.6 6.72-16.47.86-33.07-.1-49.2-3.67a97 97 0 0 1-18.39-5.74c-.55-.24-1.07-.5-1.58-.8-.25-.16-.51-.3-.76-.48a19.5 19.5 0 0 1-1.46-1.04l-.63-.53-.15-.12a31.3 31.3 0 0 1-1.17-1.07 47.05 47.05 0 0 1-2.76-2.91 125.03 125.03 0 0 1-2.17-2.56l-.16-.19-.54-.67a8.36 8.36 0 0 1-.41-.5l-.44-.54-.42-.53a49.15 49.15 0 0 0-.84-1.02 225.16 225.16 0 0 1-11.16-15.46 56.1 56.1 0 0 1-.94-1.42l-.01-.03a458.03 458.03 0 0 1-10.04-16.06 490.97 490.97 0 0 1-9.83-17.02 412.33 412.33 0 0 1-10.48-20.16 412.83 412.83 0 0 1-2.5-5.3 188.41 188.41 0 0 1-4.45-10.46C2.46 105 1 101.03.32 96.92c-.34-1.93 2.6-2.75 2.93-.81l.1.4s239.48-1.52 239.15.4" fill="#8090ff"></path>
                                    <path d="M242.5 96.92a42.93 42.93 0 0 1-1.02 4.32c-.44 1.5-.6 3.16-1.46 4.45-17.42 25.7-60.86 39.22-120.69 44.34-43.54 3.73-82.11 1.25-97.92-5.23a412.33 412.33 0 0 1-10.48-20.16 412.83 412.83 0 0 1-2.5-5.3 188.41 188.41 0 0 1-4.45-10.46C2.46 105 1 101.03.32 96.92c-.34-1.93 2.6-2.75 2.93-.81l.1.4s239.48-1.52 239.15.4" fill="#9fafff"></path>
                                    <path d="M67.87 126.08c30.27 4.35 61.17 6.45 91.73 4.18 24.75-1.84 53.21-5.73 75.38-23.03 2.6-2.03 5.86-6.15 6.82-9.33 1.77-5.9-13.6-25.49-117.2-28.7C74.05 67.63 23.83 75.6 5.83 87.97c-13 8.93 3.57 18.15 10.66 22.21 9.55 5.48 20.25 8.76 30.9 11.47 6.76 1.72 13.56 3.43 20.48 4.43" fill="#1841d3"></path>
                                    <path d="M67.55 126.99c25.61 3.67 51.5 5.76 77.4 4.97 21.35-.65 43.52-2.47 63.8-9.65 5-1.76 9.89-3.88 14.55-6.4 4.58-2.47 9.34-5.28 13.2-8.8 2.54-2.31 5.45-5.74 6.2-9.2a4.62 4.62 0 0 0 .02-1.74c-.54-3.38-3.66-6-6.28-7.85-6.14-4.37-13.62-6.93-20.8-9.02-13.7-4-27.92-6.14-42.07-7.73a535.18 535.18 0 0 0-68.88-3.43c-22.9.39-46.05 2.35-68.4 7.46-8.07 1.85-16.12 4.11-23.67 7.54-5.25 2.38-14.16 6.6-12.4 13.73.84 3.38 3.71 6.04 6.35 8.1 2.86 2.25 6 4.1 9.14 5.9 10.48 5.98 22.06 9.34 33.68 12.27 6 1.52 12.03 2.95 18.16 3.85 1.18.17 1.68-1.63.5-1.8-6.13-.9-12.16-2.33-18.16-3.85a212.7 212.7 0 0 1-16.84-4.8c-8.81-3.02-17.75-7.13-25.16-12.89-2.53-1.96-5.73-4.72-6-8.15-.31-3.76 3.46-6.27 6.28-7.96 6.2-3.71 13.21-6.04 20.13-7.99 20.36-5.72 41.74-8.04 62.8-9.1 23.21-1.15 46.54-.25 69.68 1.72 15.6 1.33 31.23 3.24 46.48 6.85 8.4 2 16.96 4.43 24.56 8.62 3.36 1.85 7.09 4.25 8.7 7.64.07.16.11.22.23.63.07.23.12.47.16.71-.04-.25.02.27.02.47-.02.44.05 0-.05.4-1.01 3.89-4.36 7.38-7.47 9.74a87.11 87.11 0 0 1-13.3 8.25c-18.3 9.24-38.97 12.2-59.19 13.75-24.79 1.92-49.7 1-74.4-1.7a561.9 561.9 0 0 1-18.47-2.34c-1.18-.17-1.68 1.63-.5 1.8" fill="#1841d3"></path>
                                    <path d="M232.81 95.2c5.3 4.9-5.73 11.67-15.66 15.53-34.08 13.26-61.45 16.36-97.73 15.56-23.12-.5-56.54-6.35-72.9-10.08-15.02-3.43-37.31-13.14-37.91-21.14.6-7.59 34.12-17.23 60.15-19.76 31.56-3.07 71.17-4.97 126.66 6.22 14.64 2.95 31.25 8 37.4 13.68z" fill="#fff"></path>
                                    <path d="M12.04 120.35c9.16 5.97 19.74 9.37 29.95 13.07 1.13.4 1.62-1.4.5-1.8-10.07-3.64-20.48-7-29.5-12.88-1.01-.66-1.95.96-.95 1.61m6.05 13.08c17.06 8.48 36.11 13.72 54.96 16.26 1.18.16 1.68-1.64.5-1.8-18.68-2.52-37.6-7.66-54.52-16.07-1.07-.53-2.02 1.08-.94 1.61m32.93 2.38a271.2 271.2 0 0 0 27 5.18c1.18.16 1.7-1.63.5-1.8-9.07-1.3-18.1-2.96-27-5.18-1.16-.29-1.66 1.51-.5 1.8" fill="#5165f7"></path>
                                    <path d="M40.43 177.47c.15.2.3.43.43.65a1.4 1.4 0 0 1-.17-.21l-.01-.02a4.41 4.41 0 0 1-.25-.42" fill="#6e86ff"></path>
                                    <path d="M182.19 202.87a36.33 36.33 0 0 1-2.68 2.5c-2.75 2.34-6.1 3.75-9.44 5.07-11.27 4.51-23.55 6.09-35.6 6.72-16.47.86-33.07-.1-49.2-3.66a97 97 0 0 1-18.39-5.75c-4.33-1.9-7.69-5.93-10.68-9.51 1.55 1.65 12.66 12.33 44.32 14.61 34.36 2.46 62.82 1.23 81.64-9.97l.03-.01" fill="#1841d3"></path>
                                    <g fill="#1841d3">
                                      <rect height="20" rx="4" width="8" x="143" y="146"></rect>
                                      <rect height="20" rx="4" width="8" x="92" y="146"></rect>
                                    </g>
                                    <path d="M87 193.14c11.15-10.1 22.55-15.14 34.2-15.14s23.24 5.04 34.8 15.14" stroke="#1841d3" strokeLinecap="round" strokeWidth="4"></path>
                                  </g>
                                </svg>
                              </svg>
                            </div>
                            <div className="sc-gEvEer sc-eqUAAy cxnFvB fgprtA">
                              <h5 className="sc-gEvEer dEOcZr">No open staking positions</h5>
                              <p className="sc-gEvEer idmEbE">Stake now to earn rewards on your provided liquidity!</p>
                            </div>
                          </div>
                        </div>
                      </span>
                    </div>
                  </td>}
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
                  <td role="cell" className="sc-gEvEer dJITOL  hidden lg:table-cell ">
                    <div className="sc-gEvEer jVsTBr">40K OPT</div>
                  </td>
                  <td role="cell" className="sc-gEvEer  hidden lg:table-cell  dJITOL ">
                    <div className="sc-gEvEer jVsTBr">294.7K MILK</div>
                  </td>
                  <td role="cell" className="sc-gEvEer hidden lg:table-cell dJITOL">
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
                    <div onClick={() => {
                      setOpenDropdown1(!openDropdown1)
                    }} className="sc-gEvEer sc-eqUAAy gYGjHl fgprtA">
                      <div

                        color="inherit"
                        fontWeight="semiBold"
                        className="sc-gEvEer hidden lg:block hcJuDx"
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
                {openDropdown1 && <td colSpan="7" className="bg-[rgb(243,245,254)]">
                  <div className="sc-gEvEer flex flex-col  gap-4 p-4 ">
                    <div className="flex gap-8 flex-col sm:flex-row">
                      <span name="stakeMore" className="sc-fBdRDi  w-full lg:w-8/12 kMoELj">
                        <div className="sc-gEvEer flex flex-col  klnLjB">
                          <h4 className="sc-gEvEer jVEjPV">Stake MILK and earn LIFI</h4>
                          <div className="sc-gEvEer flex flex-col gap-4 lg:flex-row  w-full sc-eqUAAy hCOMjc fgprtA">
                            <div className="sc-gEvEer sc-eqUAAy kLqOog fgprtA">
                              <div className="sc-gEvEer sc-eqUAAy hTzphe fgprtA">
                                <div className="sc-gEvEer sc-eqUAAy kHqsj flex items-center fgprtA">
                                  <div className="sc-gEvEer dweOPY">Balance: 0</div>
                                  <button className="sc-gEvEer cbZYlr">Max</button>
                                </div>
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
                                className="sc-gEvEer bOxyja"

                              />
                              <button disabled className="sc-gEvEer dEuKCj">
                                Stake MILK
                              </button>
                              <a className="sc-gEvEer flex items-center justify-center iTuoGg" href="/swap/">
                                Buy MILK
                                <svg height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" className="sc-gEvEer mt-1 dSOvFp">
                                  <path d="M.3 11.7a1 1 0 0 1 0-1.4l4.05-4.06a.33.33 0 0 0 0-.48L.29 1.71A1 1 0 1 1 1.71.29l4.05 4.06a2.33 2.33 0 0 1 0 3.3l-4.05 4.06a1 1 0 0 1-1.42 0z" fill="currentColor" fillRule="evenodd"></path>
                                </svg>
                              </a>
                            </div>
                            <div className="flex pb-2  flex-col">
                              <svg viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg" color="#5364ff" className="sc-gEvEer rotate-90 lg:rotate-0 h-4 lg:h-3 dubsKy">
                                <path d="M7.71 11.72a1 1 0 0 1 0-1.42L11 7H1a1 1 0 0 1 0-2h10L7.71 1.71A1 1 0 1 1 9.12.3l4.3 4.3a2 2 0 0 1 .57 1.24L14 6a2 2 0 0 1-.59 1.4l-4.29 4.3a1 1 0 0 1-1.41.02z" fill="currentColor" fillRule="evenodd"></path>
                              </svg>
                              <div className="sc-gEvEer sc-eqUAAy py-2 text-sm lg:text-base flex flex-col gap-1 kpgxOl fgprtA">
                                <div className="sc-gEvEer sc-eqUAAy dpDhQl fgprtA">
                                  <p className="sc-gEvEer bewDXU">Stake</p>
                                  <p className="sc-gEvEer ekoDEq">0 MILK</p>
                                </div>
                                <div className="sc-gEvEer sc-eqUAAy dpDhQl fgprtA">
                                  <p className="sc-gEvEer ceBQeS">Pool ends in</p>
                                  <p className="sc-gEvEer ekoDEq">92 days</p>
                                </div>
                                <div className="sc-gEvEer sc-eqUAAy eUHMac fgprtA">
                                  <div className="sc-gEvEer edVtQN">
                                    You will earn
                                    <div className="sc-gEvEer kHHPzW">
                                      <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" color="grey500" className="sc-gEvEer bKmByi">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M9 1.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15ZM9 3a6 6 0 1 0 0 12A6 6 0 0 0 9 3Zm0 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm0-7.5a2.618 2.618 0 0 1 .887 5.086l-.137.044v.87a.75.75 0 0 1-1.495.088L8.25 10.5V9a.75.75 0 0 1 .663-.745L9 8.25a1.125 1.125 0 1 0-1.12-1.233l-.005.108a.75.75 0 0 1-1.5 0A2.625 2.625 0 0 1 9 4.5Z" fill="currentColor"></path>
                                      </svg>
                                      <div className="sc-fxwrCY dGwCMf" style={{ transform: 'translate(-14px, -100%)' }}>
                                        <div className="sc-gEvEer jVsTBr">Estimate if staked until end of the pool</div>
                                      </div>
                                    </div>
                                  </div>
                                  <p className="sc-gEvEer bRPlyf">~0 LIFI</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </span>
                      <span name="tokenInfo" className="sc-fBdRDi items-center w-4/12 hidden lg:flex bltLiv">
                        <div className="sc-gEvEer flex flex-col gap-4 items-start gaLzlj">
                          <h4 className="sc-gEvEer jVEjPV">Info</h4>
                          <p className="sc-gEvEer delbq">The utility token of Linkage Finance - a Decentralized Index Fund platform for Cardano.</p>
                          <div className="sc-gEvEer flex flex-col text-[#5346ff]   gap-1 sc-eqUAAy kQAORV fgprtA">
                            <a href="/swap?base=.&quote=7914fae20eb2903ed6fd5021a415c1bd2626b64a2d86a304cb40ff5e.4c494649" target="_blank" rel="noopener noreferrer" className="sc-gEvEer flex items-center gap-1  jfvWNY">
                              Token Info
                              <svg width="18px" height="12px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className="sc-gEvEer jXcNwI">
                                <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                  <g id="Data-Display/Icons/external-link" transform="translate(-3.000000, -3.000000)" fill="#0C1629">
                                    <path d="M12,3 C12.5522847,3 13,3.44771525 13,4 C13,4.51283584 12.6139598,4.93550716 12.1166211,4.99327227 L12,5 L6,5 C5.48716416,5 5.06449284,5.38604019 5.00672773,5.88337887 L5,6 L5,18 C5,18.5128358 5.38604019,18.9355072 5.88337887,18.9932723 L6,19 L18,19 C18.5128358,19 18.9355072,18.6139598 18.9932723,18.1166211 L19,18 L19,12 C19,11.4477153 19.4477153,11 20,11 C20.5128358,11 20.9355072,11.3860402 20.9932723,11.8833789 L21,12 L21,18 C21,19.5976809 19.75108,20.9036609 18.1762728,20.9949073 L18,21 L6,21 C4.40231912,21 3.09633912,19.75108 3.00509269,18.1762728 L3,18 L3,6 C3,4.40231912 4.24891996,3.09633912 5.82372721,3.00509269 L6,3 L12,3 Z M20,3 C20.5128358,3 20.9355072,3.38604019 20.9932723,3.88337887 L21,4 L21,8 C21,8.55228475 20.5522847,9 20,9 C19.4871642,9 19.0644928,8.61395981 19.0067277,8.11662113 L19,8 L19,6.42 L12.71,12.7 C12.5222334,12.8893127 12.2666375,12.9957983 12,12.9957983 C11.7333625,12.9957983 11.4777666,12.8893127 11.29,12.7 C11.1006873,12.5122334 10.9942017,12.2566375 10.9942017,11.99 C10.9942017,11.7678021 11.0681501,11.5532719 11.2023555,11.3792728 L11.29,11.28 L17.58,5 L16,5 C15.4477153,5 15,4.55228475 15,4 C15,3.48716416 15.3860402,3.06449284 15.8833789,3.00672773 L16,3 L20,3 Z" fill="currentColor" id="Shape"></path>
                                  </g>
                                </g>
                              </svg>
                            </a>
                            <a href="https://linkage.finance" target="_blank" rel="noopener noreferrer" className="sc-gEvEer flex items-center jfvWNY">
                              Token Website
                              <svg width="18px" height="12px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className="sc-gEvEer jXcNwI">
                                <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                  <g id="Data-Display/Icons/external-link" transform="translate(-3.000000, -3.000000)" fill="#0C1629">
                                    <path d="M12,3 C12.5522847,3 13,3.44771525 13,4 C13,4.51283584 12.6139598,4.93550716 12.1166211,4.99327227 L12,5 L6,5 C5.48716416,5 5.06449284,5.38604019 5.00672773,5.88337887 L5,6 L5,18 C5,18.5128358 5.38604019,18.9355072 5.88337887,18.9932723 L6,19 L18,19 C18.5128358,19 18.9355072,18.6139598 18.9932723,18.1166211 L19,18 L19,12 C19,11.4477153 19.4477153,11 20,11 C20.5128358,11 20.9355072,11.3860402 20.9932723,11.8833789 L21,12 L21,18 C21,19.5976809 19.75108,20.9036609 18.1762728,20.9949073 L18,21 L6,21 C4.40231912,21 3.09633912,19.75108 3.00509269,18.1762728 L3,18 L3,6 C3,4.40231912 4.24891996,3.09633912 5.82372721,3.00509269 L6,3 L12,3 Z M20,3 C20.5128358,3 20.9355072,3.38604019 20.9932723,3.88337887 L21,4 L21,8 C21,8.55228475 20.5522847,9 20,9 C19.4871642,9 19.0644928,8.61395981 19.0067277,8.11662113 L19,8 L19,6.42 L12.71,12.7 C12.5222334,12.8893127 12.2666375,12.9957983 12,12.9957983 C11.7333625,12.9957983 11.4777666,12.8893127 11.29,12.7 C11.1006873,12.5122334 10.9942017,12.2566375 10.9942017,11.99 C10.9942017,11.7678021 11.0681501,11.5532719 11.2023555,11.3792728 L11.29,11.28 L17.58,5 L16,5 C15.4477153,5 15,4.55228475 15,4 C15,3.48716416 15.3860402,3.06449284 15.8833789,3.00672773 L16,3 L20,3 Z" fill="currentColor" id="Shape"></path>
                                  </g>
                                </g>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </span>
                    </div>

                    <span name="stakePositions" className="sc-fBdRDi  w-full    kmulZg">
                      <div className="sc-gEvEer sc-eqUAAy bg-white dxmzRX flex flex-col fgprtA">
                        <h2 className="sc-gEvEer cERPOg )]">Open LIFI staking positions</h2>
                        <div className="sc-gEvEer sc-eqUAAy dgbgQe  fgprtA">
                          <div className="sc-gEvEer huupnO">
                            <svg height="185" viewBox="0 0 243 231" width="195" xmlns="http://www.w3.org/2000/svg" style={{ height: '105px' }}>
                              <svg height="185" viewBox="0 0 243 231" width="195" xmlns="http://www.w3.org/2000/svg" style={{ height: '105px' }}>
                                <g fill="none" fillRule="evenodd">
                                  <path d="M207.67 212.49c0-10.46-39.74-18.94-88.76-18.94s-88.76 8.48-88.76 18.94 39.74 18.94 88.76 18.94 88.76-8.48 88.76-18.94" fill="#dde2f8"></path>
                                  <path d="M242.5 96.92a42.93 42.93 0 0 1-1.02 4.32 93.09 93.09 0 0 1-1.46 4.45 179.33 179.33 0 0 1-5.14 12.55l-.02.01-1.27 2.73a374.69 374.69 0 0 1-9.29 18.1l-2.16 3.96a510.08 510.08 0 0 1-17.02 28.64 326.73 326.73 0 0 1-12.62 18.56 171.78 171.78 0 0 1-5.08 6.58c-.27.35-.56.69-.83 1.02a57.18 57.18 0 0 1-7.08 7.54c-2.75 2.33-6.1 3.74-9.44 5.06-11.27 4.51-23.55 6.09-35.6 6.72-16.47.86-33.07-.1-49.2-3.67a97 97 0 0 1-18.39-5.74c-.55-.24-1.07-.5-1.58-.8-.25-.16-.51-.3-.76-.48a19.5 19.5 0 0 1-1.46-1.04l-.63-.53-.15-.12a31.3 31.3 0 0 1-1.17-1.07 47.05 47.05 0 0 1-2.76-2.91 125.03 125.03 0 0 1-2.17-2.56l-.16-.19-.54-.67a8.36 8.36 0 0 1-.41-.5l-.44-.54-.42-.53a49.15 49.15 0 0 0-.84-1.02 225.16 225.16 0 0 1-11.16-15.46 56.1 56.1 0 0 1-.94-1.42l-.01-.03a458.03 458.03 0 0 1-10.04-16.06 490.97 490.97 0 0 1-9.83-17.02 412.33 412.33 0 0 1-10.48-20.16 412.83 412.83 0 0 1-2.5-5.3 188.41 188.41 0 0 1-4.45-10.46C2.46 105 1 101.03.32 96.92c-.34-1.93 2.6-2.75 2.93-.81l.1.4s239.48-1.52 239.15.4" fill="#8090ff"></path>
                                  <path d="M242.5 96.92a42.93 42.93 0 0 1-1.02 4.32c-.44 1.5-.6 3.16-1.46 4.45-17.42 25.7-60.86 39.22-120.69 44.34-43.54 3.73-82.11 1.25-97.92-5.23a412.33 412.33 0 0 1-10.48-20.16 412.83 412.83 0 0 1-2.5-5.3 188.41 188.41 0 0 1-4.45-10.46C2.46 105 1 101.03.32 96.92c-.34-1.93 2.6-2.75 2.93-.81l.1.4s239.48-1.52 239.15.4" fill="#9fafff"></path>
                                  <path d="M67.87 126.08c30.27 4.35 61.17 6.45 91.73 4.18 24.75-1.84 53.21-5.73 75.38-23.03 2.6-2.03 5.86-6.15 6.82-9.33 1.77-5.9-13.6-25.49-117.2-28.7C74.05 67.63 23.83 75.6 5.83 87.97c-13 8.93 3.57 18.15 10.66 22.21 9.55 5.48 20.25 8.76 30.9 11.47 6.76 1.72 13.56 3.43 20.48 4.43" fill="#1841d3"></path>
                                  <path d="M67.55 126.99c25.61 3.67 51.5 5.76 77.4 4.97 21.35-.65 43.52-2.47 63.8-9.65 5-1.76 9.89-3.88 14.55-6.4 4.58-2.47 9.34-5.28 13.2-8.8 2.54-2.31 5.45-5.74 6.2-9.2a4.62 4.62 0 0 0 .02-1.74c-.54-3.38-3.66-6-6.28-7.85-6.14-4.37-13.62-6.93-20.8-9.02-13.7-4-27.92-6.14-42.07-7.73a535.18 535.18 0 0 0-68.88-3.43c-22.9.39-46.05 2.35-68.4 7.46-8.07 1.85-16.12 4.11-23.67 7.54-5.25 2.38-14.16 6.6-12.4 13.73.84 3.38 3.71 6.04 6.35 8.1 2.86 2.25 6 4.1 9.14 5.9 10.48 5.98 22.06 9.34 33.68 12.27 6 1.52 12.03 2.95 18.16 3.85 1.18.17 1.68-1.63.5-1.8-6.13-.9-12.16-2.33-18.16-3.85a212.7 212.7 0 0 1-16.84-4.8c-8.81-3.02-17.75-7.13-25.16-12.89-2.53-1.96-5.73-4.72-6-8.15-.31-3.76 3.46-6.27 6.28-7.96 6.2-3.71 13.21-6.04 20.13-7.99 20.36-5.72 41.74-8.04 62.8-9.1 23.21-1.15 46.54-.25 69.68 1.72 15.6 1.33 31.23 3.24 46.48 6.85 8.4 2 16.96 4.43 24.56 8.62 3.36 1.85 7.09 4.25 8.7 7.64.07.16.11.22.23.63.07.23.12.47.16.71-.04-.25.02.27.02.47-.02.44.05 0-.05.4-1.01 3.89-4.36 7.38-7.47 9.74a87.11 87.11 0 0 1-13.3 8.25c-18.3 9.24-38.97 12.2-59.19 13.75-24.79 1.92-49.7 1-74.4-1.7a561.9 561.9 0 0 1-18.47-2.34c-1.18-.17-1.68 1.63-.5 1.8" fill="#1841d3"></path>
                                  <path d="M232.81 95.2c5.3 4.9-5.73 11.67-15.66 15.53-34.08 13.26-61.45 16.36-97.73 15.56-23.12-.5-56.54-6.35-72.9-10.08-15.02-3.43-37.31-13.14-37.91-21.14.6-7.59 34.12-17.23 60.15-19.76 31.56-3.07 71.17-4.97 126.66 6.22 14.64 2.95 31.25 8 37.4 13.68z" fill="#fff"></path>
                                  <path d="M12.04 120.35c9.16 5.97 19.74 9.37 29.95 13.07 1.13.4 1.62-1.4.5-1.8-10.07-3.64-20.48-7-29.5-12.88-1.01-.66-1.95.96-.95 1.61m6.05 13.08c17.06 8.48 36.11 13.72 54.96 16.26 1.18.16 1.68-1.64.5-1.8-18.68-2.52-37.6-7.66-54.52-16.07-1.07-.53-2.02 1.08-.94 1.61m32.93 2.38a271.2 271.2 0 0 0 27 5.18c1.18.16 1.7-1.63.5-1.8-9.07-1.3-18.1-2.96-27-5.18-1.16-.29-1.66 1.51-.5 1.8" fill="#5165f7"></path>
                                  <path d="M40.43 177.47c.15.2.3.43.43.65a1.4 1.4 0 0 1-.17-.21l-.01-.02a4.41 4.41 0 0 1-.25-.42" fill="#6e86ff"></path>
                                  <path d="M182.19 202.87a36.33 36.33 0 0 1-2.68 2.5c-2.75 2.34-6.1 3.75-9.44 5.07-11.27 4.51-23.55 6.09-35.6 6.72-16.47.86-33.07-.1-49.2-3.66a97 97 0 0 1-18.39-5.75c-4.33-1.9-7.69-5.93-10.68-9.51 1.55 1.65 12.66 12.33 44.32 14.61 34.36 2.46 62.82 1.23 81.64-9.97l.03-.01" fill="#1841d3"></path>
                                  <g fill="#1841d3">
                                    <rect height="20" rx="4" width="8" x="143" y="146"></rect>
                                    <rect height="20" rx="4" width="8" x="92" y="146"></rect>
                                  </g>
                                  <path d="M87 193.14c11.15-10.1 22.55-15.14 34.2-15.14s23.24 5.04 34.8 15.14" stroke="#1841d3" strokeLinecap="round" strokeWidth="4"></path>
                                </g>
                              </svg>
                            </svg>
                          </div>
                          <div className="sc-gEvEer sc-eqUAAy cxnFvB fgprtA">
                            <h5 className="sc-gEvEer dEOcZr">No open staking positions</h5>
                            <p className="sc-gEvEer idmEbE">Stake now to earn rewards on your provided liquidity!</p>
                          </div>
                        </div>
                      </div>
                    </span>
                  </div>
                </td>}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Staking;
