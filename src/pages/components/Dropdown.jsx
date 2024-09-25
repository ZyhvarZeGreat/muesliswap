import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import useStore from "../store/store";

const Dropdown = ({ disconnect }) => {
  const { state } = useStore();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {" "}
        <button type="button" className="sc-dcJsrY cWNorh flex gap-2">
          <svg
            width="20"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: "rgb(83, 70, 255)" }}
          >
            <path
              d="M18 8.18V5a1 1 0 0 0-1-1H3a1 1 0 1 1 0-2h14a1 1 0 0 0 0-2H3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a1 1 0 0 0 1-1v-3.19a2.98 2.98 0 0 0 0-5.63ZM16 16H3a1 1 0 0 1-1-1V5.82c.32.11.66.18 1 .18h13v2h-3a3 3 0 0 0 0 6h3v2Zm1-4h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2Z"
              fill="currentColor"
              fillRule="evenodd"
            ></path>
          </svg>
          <div className="sc-gEvEer qzmtu">
            {state.address
              ? `${state?.address.slice(0, 3)}...${state?.address.slice(-4)}`
              : ""}
          </div>
          <div className="sc-aXZVg jrzA-dM">
            <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px] p-2  mt-4 rounded-xl">
        <div className="w-full flex flex-col items-center  justify-center gap-0.5">
          <DropdownMenuItem className="w-full font-inter">
            <div className="sc-gEvEer sc-eqUAAy w-full  flex items-center justify-between  fgprtA">
              <div className="sc-gEvEer kpVmdW">Connected with</div>
              <div className="sc-gEvEer sc-eqUAAy iqGkHt fgprtA gap-1">
                <div className="sc-gEvEer sc-eqUAAy iRguQF fgprtA">
                  <img
                    className=" rounded-full "
                    src={window.cardano[state.walletName].icon}
                    width={24}
                    height={24}
                    alt={window.cardano[state.walletName].icon}
                  />
                </div>
                <div
                  style={{ fontWeight: 500 }}
                  className="sc-gEvEer capitalize cFqvxQ"
                >
                  {state.walletName}
                </div>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="w-full font-inter">
            <div className="sc-gEvEer sc-eqUAAy w-full flex items-center justify-between   fgprtA">
              <div className="sc-gEvEer kpVmdW">Network</div>
              <div style={{ fontWeight: 500 }} className="sc-gEvEer cFqvxQ">
                <div
                  style={{ display: "inline-block" }}
                  className="sc-gEvEer ceznuQ"
                ></div>
                Mainnet
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="w-full font-inter">
            <div className="sc-gEvEer sc-eqUAAy kgXXzQ  w-full items-center justify-between  fgprtA">
              <div className="sc-gEvEer kpVmdW">Balance</div>
              <div style={{ fontWeight: 500 }} className="sc-gEvEer cFqvxQ">
                {state.balance} ₳
              </div>
            </div>
          </DropdownMenuItem>
        </div>

        <DropdownMenuSeparator className="p-0 mt-0 my-1" />
        <DropdownMenuItem>
          {" "}
          <div className="sc-gEvEer sc-eqUAAy font-gilroy font-semibold bfNBmO w-full flex items-center justify-center fgprtA">
            <button
              onClick={() => {
                disconnect();
              }}
              style={{ width: "100%" }}
              className="sc-gEvEer w-full flex  items-center justify-center  py-3 text-white text-base  rounded-lg bg-[#5364ff] dDooPC"
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{
                  display: "inline-block",
                  marginRight: "10px",
                  color: "white",
                }}
                className="sc-gEvEer ezrdyn"
              >
                <g
                  id="Symbols"
                  stroke="none"
                  strokeWidth="1"
                  fill="currentColor"
                  fillRule="evenodd"
                >
                  <g id="Data-Display/Icons/logout" fill="currentColor">
                    <path
                      d="M9.33397534,4 C9.88632523,4 10.3340996,4.44777439 10.3340996,5.00012428 C10.3340996,5.51302061 9.94800844,5.93574725 9.45061031,5.99351995 L9.33397534,6.00024857 L6.2729387,6.00024857 C6.14397625,6.00054325 6.03602406,6.09013729 6.00757628,6.2104775 L6.00024857,6.2729387 L6.00024857,17.7290498 C6.00054325,17.8580123 6.09013729,17.9659645 6.2104775,17.9944122 L6.2729387,18.00174 L9.33397534,18.00174 C9.88632523,18.00174 10.3340996,18.4495144 10.3340996,19.0018642 C10.3340996,19.5147606 9.94800844,19.9374872 9.45061031,19.9952599 L9.33397534,20.0019885 L6.2729387,20.0019885 C5.07050022,20.0005808 4.08661135,19.0667062 4.00541532,17.8845629 L4,17.7290186 L4,6.2729387 C4.00140773,5.07053017 4.93525365,4.08661384 6.11739454,4.00541547 L6.2729387,4 L9.33397534,4 Z M16.1205971,7.29284623 L19.4118055,10.5940574 C19.7457553,10.9260178 19.950556,11.3636653 19.993513,11.8288655 L20.0019716,12.0044545 C19.9971037,12.5307075 19.7850663,13.0338471 19.4118055,13.4048489 L16.1205971,16.70606 C15.7332062,17.0966735 15.1030923,17.1011424 14.7102,16.7160628 C14.520834,16.5282433 14.4143183,16.2725755 14.4143183,16.0058628 C14.4143183,15.7391502 14.520834,15.4834823 14.7102,15.2956629 L17.0011266,13.0047362 L8.99831003,13.0047362 C8.44586972,13.0047362 7.99802837,12.5568948 7.99802837,12.0044545 C7.99802837,11.4520142 8.44586972,11.0041729 8.99831003,11.0041729 L17.0011266,11.0041729 L14.7102,8.71324619 C14.520834,8.52542671 14.4143183,8.26975885 14.4143183,8.00304621 C14.4143183,7.73633358 14.520834,7.48066572 14.7102,7.29284623 C15.1003473,6.90501343 15.7304498,6.90501343 16.1205971,7.29284623 Z"
                      id="Shape"
                    ></path>
                  </g>
                </g>
              </svg>
              Disconnect
            </button>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-3">
          <a
            className="sc-gEvEer fRAMSJ font-gilroy  text-base font-semibold text-[#5364ff] flex w-full items-center justify-center gap-2 "
            href="https://docs.muesliswap.com/cardano/cardano-wallets#4.-disconnecting"
            target="_blank"
            rel="noopener noreferrer"
          >
            How to fully disconnect
            <svg
              width="18px"
              height="18px"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
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
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
