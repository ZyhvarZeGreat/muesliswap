import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
} from "../../components/ui/dropdown-menu";
import { cn } from "../../lib/utils";

const CurrencyDropdown = () => {
  const [rotate, setRotate] = useState(false);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" border  cursor-pointer w-auto">
        <div
          onClick={() => {
            setRotate(!rotate);
          }}
          className="flex justify-center border-1  items-center bg-transparent rounded-xl w-[6rem] shadow-sm border-gray-200 text-gray-900 font-medium text-sm"
        >
          <span>USD ($)</span>
          <div className="sc-aXZVg   ">
            <svg
              className={cn(
                " h-8  w-8 mt-6 ml-2 ",
                rotate ? "rotate-180" : "rotate-0"
              )}
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
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-transparent mt-5 border-0 bg-white  ">
        <div className="sc-gEvEer  p-2  border-0 rounded-xl flex ">
          <div className="sc-gEvEer w-[119px]   ">
            <div role="button" className="sc-gEvEer sc-eqUAAy bGeKTJ fgprtA">
              <div className="sc-gEvEer jVsTBr">ADA (₳)</div>
              <div className="sc-gEvEer jJTxKv">
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 0a10 10 0 0 1 10 10A10 10 0 1 1 10 0Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm2.69 4.39a1 1 0 0 1 1.67 1.11l-.07.11-4.57 6a1 1 0 0 1-1.5.1l-.08-.09-2.43-3.11a1 1 0 0 1 1.5-1.32l.08.09 1.63 2.11 3.78-5h-.01Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div role="button" className="sc-gEvEer sc-eqUAAy bGeKTJ fgprtA">
              <div className="sc-gEvEer jVsTBr">USD ($)</div>
              <div className="sc-gEvEer eEdYKg">
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 0a10 10 0 0 1 10 10A10 10 0 1 1 10 0Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm2.69 4.39a1 1 0 0 1 1.67 1.11l-.07.11-4.57 6a1 1 0 0 1-1.5.1l-.08-.09-2.43-3.11a1 1 0 0 1 1.5-1.32l.08.09 1.63 2.11 3.78-5h-.01Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div role="button" className="sc-gEvEer sc-eqUAAy bGeKTJ fgprtA">
              <div className="sc-gEvEer jVsTBr">EUR (€)</div>
              <div className="sc-gEvEer jJTxKv">
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 0a10 10 0 0 1 10 10A10 10 0 1 1 10 0Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm2.69 4.39a1 1 0 0 1 1.67 1.11l-.07.11-4.57 6a1 1 0 0 1-1.5.1l-.08-.09-2.43-3.11a1 1 0 0 1 1.5-1.32l.08.09 1.63 2.11 3.78-5h-.01Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div role="button" className="sc-gEvEer sc-eqUAAy bGeKTJ fgprtA">
              <div className="sc-gEvEer jVsTBr">CHF (Fr.)</div>
              <div className="sc-gEvEer jJTxKv">
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 0a10 10 0 0 1 10 10A10 10 0 1 1 10 0Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm2.69 4.39a1 1 0 0 1 1.67 1.11l-.07.11-4.57 6a1 1 0 0 1-1.5.1l-.08-.09-2.43-3.11a1 1 0 0 1 1.5-1.32l.08.09 1.63 2.11 3.78-5h-.01Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div role="button" className="sc-gEvEer sc-eqUAAy bGeKTJ fgprtA">
              <div className="sc-gEvEer jVsTBr">GBP (£)</div>
              <div className="sc-gEvEer jJTxKv">
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 0a10 10 0 0 1 10 10A10 10 0 1 1 10 0Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm2.69 4.39a1 1 0 0 1 1.67 1.11l-.07.11-4.57 6a1 1 0 0 1-1.5.1l-.08-.09-2.43-3.11a1 1 0 0 1 1.5-1.32l.08.09 1.63 2.11 3.78-5h-.01Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="sc-fqkvVR jHDHXy"></div>
            <div
              fontSize="12px"
              color="textSubtle"
              className="sc-gEvEer eorkNb"
            >
              Fiat price data provided by CoinGecko.
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CurrencyDropdown;
