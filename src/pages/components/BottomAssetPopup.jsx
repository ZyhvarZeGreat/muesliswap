import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "../../components/ui/dialog";
import Milk from "../../assets/afbe91c0b44b3040e360057bf8354ead8c49c4979ae6ab7c4fbdc9eb.4d494c4b7632_scaled_100.webp";
const BottomAssetPopup = ({
  totalAssets,
  setBottomInputValue,
  bottomInputValue,
}) => {
  return (
    <Dialog>
      <DialogTrigger className="lg:w-[90%] w-full">
        <div className="sc-gEvEer sc-eqUAAy bPnuvt fgprtA">
          {bottomInputValue ? (
            <div className="sc-gEvEer w-full sc-eqUAAy bPnuvt fgprtA">
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
                  className="LazyLoad is-visible"
                  style={{ height: "26px", width: "26px" }}
                >
                  <img
                    src={bottomInputValue.info.image}
                    crossOrigin="anonymous"
                    alt="https://static.muesliswap.com/images/tokens/ada.png"
                    className="sc-gEvEer kxeTOB"
                  />
                </div>
                <p fontSize="16px" className="sc-gEvEer p-1 ivXQsU">
                  {bottomInputValue.info.symbol}
                </p>
                <div color="text" className="sc-gEvEer QQCIb">
                  <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="sc-krNlru p-1 gzaCtt"
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
                className="LazyLoad is-visible"
                style={{ height: "26px", width: "26px" }}
              >
                <img
                  src={Milk}
                  crossOrigin="anonymous"
                  alt="https://static.muesliswap.com/images/tokens/ada.png"
                  className="sc-gEvEer kxeTOB"
                />
              </div>
              <p fontSize="16px" className="sc-gEvEer p-1 ivXQsU">
                MILK{" "}
              </p>
              <div color="text" className="sc-gEvEer QQCIb">
                <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
          )}
        </div>
      </DialogTrigger>
      <DialogContent className="p-0">
        <div className="w-full">
          <div className="w-full flex gap-4 flex-col">
            <div className="sc-gEvEer p-4 border-b border-b-gray-300/40 flex py-6 items-center justify-between w-full ">
              <h2 className="sc-gEvEer ihQBzN">Select a token</h2>
              <DialogClose>
                <button height="auto" className="sc-gEvEer cbnyxq">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className="sc-gEvEer dSOvFp"
                  >
                    <path
                      d="M1.76.34 8 6.6 14.24.33a1 1 0 0 1 1.32-.08l.1.08a1 1 0 0 1 .08 1.32l-.08.1L9.4 8l6.25 6.24a1 1 0 1 1-1.42 1.42L8 9.4l-6.24 6.25a1 1 0 0 1-1.32.08l-.1-.08a1 1 0 0 1-.08-1.32l.08-.1L6.58 8 .34 1.76A1 1 0 0 1 1.76.34Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </DialogClose>
            </div>

            <div
              width="100%"
              className="sc-gEvEer  flex items-center justify-between sc-eqUAAy px-4 py-2 jZfuKE fgprtA"
            >
              <div
                width="100%"
                className="sc-gEvEer   relative sc-eqUAAy hcpIXP fgprtA"
              >
                <input
                  placeholder="Search  tokens"
                  className="sc-JrDLc bg-transparent border border-[#5364ff] py-2 rounded-full px-8  w-[303px] "
                  value=""
                />
                <div className="sc-fjvvzt px-2 flex bottom-0 top-0 items-center justify-between w-full absolute jXmKLn">
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m19.7 18.3-3.09-3.1a7 7 0 1 0-1.41 1.41l3.1 3.1a1 1 0 1 0 1.4-1.41ZM11.04 16a4.98 4.98 0 1 1 0-9.96 4.98 4.98 0 0 1 0 9.96Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    color="text"
                    className="sc-gEvEer eFcdgq"
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
                </div>
              </div>
              <div
                width="100%"
                className="sc-gEvEer flex items-center gap-2 sc-eqUAAy hqatpm fgprtA"
              >
                <label
                  aria-label="Toggle show only verified"
                  className="sc-bmzYkS cgGqnT"
                >
                  <input
                    type="checkbox"
                    className="sc-eeDRCY fotkZP"
                    checked=""
                  />
                  <span className="sc-koXPp kAqvkZ"></span>
                </label>
                <div className="sc-gEvEer kpVmdW">Only verified</div>
              </div>
            </div>
            <div className="sc-bbSZdi px-4 w-full flex flex-col dzKiJQ">
              <div
                width="100%"
                className="sc-gEvEer flex items-center justify-between sc-eqUAAy jtdXxo fgprtA"
              >
                <div color="textSubtle" className="sc-gEvEer kxaJFM">
                  Token
                </div>
                <div color="textSubtle" className="sc-gEvEer kxaJFM">
                  Balance
                </div>
              </div>
              <div className="sc-fBWQRz  flex flex-col w-full gBAYwp">
                <div
                  className="flex items-start flex-col g w-full"
                  style={{ height: "1.57229e+06px", width: "100%" }}
                >
                  <button
                    type="button"
                    className="sc-lcIPJg hover:bg-slate-400/30 rounded-xl p-4 mt-4 flex items-center justify-between w-full hbvxMe"
                  >
                    <div className="sc-gEvEer flex items-center gap-4 sc-eqUAAy jQCsrt fgprtA">
                      <img
                        src="/static/media/ada.ae3e320f25e324286ae2.webp"
                        crossOrigin="anonymous"
                        alt="https://static.muesliswap.com/images/tokens/ada.png"
                        className="sc-gEvEer jmJMSZ"
                      />
                      <div className="sc-gEvEer flex flex-col gap-1 sc-eqUAAy ecOcir fgprtA">
                        <div className="sc-gEvEer flex items-center gap-2 sc-eqUAAy kDTRUy fgprtA">
                          <p fontSize="16.5px" className="sc-gEvEer jIQBMP">
                            ADA
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 512 512"
                            color="blue400"
                            className="sc-gEvEer dJsuph"
                          >
                            <g>
                              <path
                                fill="currentcolor"
                                d="M201.22,3.73c2.85,0.97,5.63,2.12,8.33,3.45l32.47,15.99c8.81,4.34,19.14,4.34,27.95,0l32.47-15.99 c34.49-16.98,76.22-2.79,93.2,31.71l1.86,4.11l1.59,4.22l11.66,34.26c3.16,9.3,10.47,16.6,19.76,19.77l34.26,11.66 c36.4,12.38,55.87,51.93,43.49,88.32c-0.97,2.85-2.12,5.63-3.45,8.33l-15.99,32.47c-4.34,8.81-4.34,19.14,0,27.95l15.99,32.47 c16.98,34.49,2.79,76.22-31.71,93.2c-2.7,1.33-5.48,2.48-8.33,3.45l-34.26,11.66c-9.3,3.16-16.6,10.47-19.76,19.76l-11.66,34.26 c-12.38,36.4-51.92,55.87-88.32,43.49c-2.85-0.97-5.63-2.12-8.33-3.45l-32.47-15.99c-8.81-4.34-19.14-4.34-27.95,0l-32.47,15.99 c-34.49,16.98-76.22,2.79-93.2-31.71c-1.33-2.7-2.48-5.48-3.45-8.33l-11.66-34.26c-3.16-9.3-10.47-16.6-19.77-19.76L47.21,399.1 c-36.4-12.38-55.87-51.92-43.48-88.32c0.97-2.85,2.12-5.63,3.45-8.33l15.99-32.47c4.34-8.81,4.34-19.14,0-27.95L7.18,209.55 c-16.98-34.49-2.79-76.22,31.7-93.2c2.7-1.33,5.48-2.48,8.33-3.45l34.26-11.66c9.3-3.16,16.6-10.47,19.77-19.77l11.66-34.26 C125.28,10.81,164.82-8.65,201.22,3.73z M343.83,179.29L206.65,316.47l-49.98-59.97c-6.71-8.06-18.68-9.15-26.74-2.43 c-8.06,6.71-9.14,18.68-2.43,26.74l63.28,75.94c7.15,8.58,20.12,9.17,28.01,1.27l151.88-151.88c7.41-7.41,7.41-19.43,0-26.85 C363.27,171.88,351.25,171.88,343.83,179.29z"
                              ></path>
                            </g>
                          </svg>
                        </div>
                        <p
                          fontSize="13px"
                          color="textSubtle"
                          className="sc-gEvEer cLEGAT"
                        >
                          Cardano native token
                        </p>
                      </div>
                    </div>
                    <div overflow="hidden" className="sc-gEvEer isMjq">
                      <span fontSize="13.5px" className="sc-gEvEer cbkCMp">
                        1.2
                      </span>
                    </div>
                  </button>
                  {totalAssets &&
                    totalAssets.map((asset, i) => {
                      return (
                        <DialogClose className="w-full" key={i}>
                          <button
                            onClick={() => {
                              setBottomInputValue(asset);
                            }}
                            type="button"
                            className="sc-lcIPJg hover:bg-slate-400/30 rounded-xl  p-3 mt-4 flex items-center justify-between w-full hbvxMe"
                          >
                            <div className="sc-gEvEer flex items-center gap-4 sc-eqUAAy jQCsrt fgprtA">
                              <img
                                src={asset.info.image}
                                crossOrigin="anonymous"
                                alt="https://static.muesliswap.com/images/tokens/ada.png"
                                className="sc-gEvEer jmJMSZ"
                              />
                              <div className="sc-gEvEer flex flex-col gap-1 sc-eqUAAy ecOcir fgprtA">
                                <div className="sc-gEvEer flex items-center gap-2 sc-eqUAAy kDTRUy fgprtA">
                                  <p
                                    fontSize="16.5px"
                                    className="sc-gEvEer jIQBMP"
                                  >
                                    {asset.info.symbol}
                                  </p>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 512 512"
                                    color="#5364ff"
                                    className="sc-gEvEer dJsuph"
                                  >
                                    <g>
                                      <path
                                        fill="currentcolor"
                                        d="M201.22,3.73c2.85,0.97,5.63,2.12,8.33,3.45l32.47,15.99c8.81,4.34,19.14,4.34,27.95,0l32.47-15.99 c34.49-16.98,76.22-2.79,93.2,31.71l1.86,4.11l1.59,4.22l11.66,34.26c3.16,9.3,10.47,16.6,19.76,19.77l34.26,11.66 c36.4,12.38,55.87,51.93,43.49,88.32c-0.97,2.85-2.12,5.63-3.45,8.33l-15.99,32.47c-4.34,8.81-4.34,19.14,0,27.95l15.99,32.47 c16.98,34.49,2.79,76.22-31.71,93.2c-2.7,1.33-5.48,2.48-8.33,3.45l-34.26,11.66c-9.3,3.16-16.6,10.47-19.76,19.76l-11.66,34.26 c-12.38,36.4-51.92,55.87-88.32,43.49c-2.85-0.97-5.63-2.12-8.33-3.45l-32.47-15.99c-8.81-4.34-19.14-4.34-27.95,0l-32.47,15.99 c-34.49,16.98-76.22,2.79-93.2-31.71c-1.33-2.7-2.48-5.48-3.45-8.33l-11.66-34.26c-3.16-9.3-10.47-16.6-19.77-19.76L47.21,399.1 c-36.4-12.38-55.87-51.92-43.48-88.32c0.97-2.85,2.12-5.63,3.45-8.33l15.99-32.47c4.34-8.81,4.34-19.14,0-27.95L7.18,209.55 c-16.98-34.49-2.79-76.22,31.7-93.2c2.7-1.33,5.48-2.48,8.33-3.45l34.26-11.66c9.3-3.16,16.6-10.47,19.77-19.77l11.66-34.26 C125.28,10.81,164.82-8.65,201.22,3.73z M343.83,179.29L206.65,316.47l-49.98-59.97c-6.71-8.06-18.68-9.15-26.74-2.43 c-8.06,6.71-9.14,18.68-2.43,26.74l63.28,75.94c7.15,8.58,20.12,9.17,28.01,1.27l151.88-151.88c7.41-7.41,7.41-19.43,0-26.85 C363.27,171.88,351.25,171.88,343.83,179.29z"
                                      ></path>
                                    </g>
                                  </svg>
                                </div>
                                <p
                                  fontSize="13px"
                                  color="textSubtle"
                                  className="sc-gEvEer cLEGAT"
                                >
                                  {`${asset.info.address.policyId.slice(
                                    0,
                                    10
                                  )}...${asset.info.address.policyId.slice(
                                    -10
                                  )}`}
                                </p>
                              </div>
                            </div>
                            <div overflow="hidden" className="sc-gEvEer isMjq">
                              <span
                                fontSize="13.5px"
                                className="sc-gEvEer cbkCMp"
                              >
                                {asset.ingo}
                              </span>
                            </div>
                          </button>
                        </DialogClose>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BottomAssetPopup;
