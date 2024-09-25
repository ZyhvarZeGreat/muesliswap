import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
} from "../../components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const NavDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none w-[4rem]">
        <div className="sc-gEvEer eECIqh hidden lg:block">
          <button className="sc-jsJBEP jtrLul" role="button">
            More
            <div className="sc-gEvEer bDMbPZ">
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
      </DropdownMenuTrigger>

      <DropdownMenuContent className="mt-4">
        <div className="sc-gEvEer p-2 flex flex-col items-start text-start ">
          <Link to="/governance" className="sc-bXCLTC jAalxX">
            Governance&nbsp;
            <span color="main" className="sc-gEvEer eEQjAs">
              NEW
            </span>
          </Link>
          <a
            href="https://milkomeda.muesliswap.com/"
            className="sc-bXCLTC jAalxX"
          >
            Milkomeda&nbsp;
            <svg
              width="12px"
              height="18px"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              // Removed xmlns:xlink as it is an unknown property
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
          <a href="https://about.muesliswap.com/" className="sc-bXCLTC jAalxX">
            About&nbsp;
            <svg
              width="12px"
              height="18px"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              // Removed xmlns:xlink as it is an unknown property
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavDropdown;
