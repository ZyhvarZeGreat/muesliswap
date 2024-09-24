import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
const MarketsTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="sc-gFAWRd itlcvQ">
            <span hidden="" className="sc-ddjGPC fRRtfN">
              <div className="sc-aXZVg jrzA-dM">
                <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </span>
          </TableHead>
          <TableHead className="sc-gFAWRd itlcvQ">
            Name
            <span hidden="" className="sc-ddjGPC fRRtfN">
              <div className="sc-aXZVg jrzA-dM">
                <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </span>
          </TableHead>
          <TableHead className="sc-gFAWRd itlcvQ">
            Price (ADA)
            <span hidden="" className="sc-ddjGPC fRRtfN">
              <div className="sc-aXZVg jrzA-dM">
                <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </span>
          </TableHead>
          <TableHead className="sc-gFAWRd itlcvQ">
            24h %
            <span hidden="" className="sc-ddjGPC fRRtfN">
              <div className="sc-aXZVg jrzA-dM">
                <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </span>
          </TableHead>
          <TableHead className="sc-gFAWRd itlcvQ">
            7d %
            <span hidden="" className="sc-ddjGPC fRRtfN">
              <div className="sc-aXZVg jrzA-dM">
                <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </span>
          </TableHead>
          <TableHead className="sc-gFAWRd itlcvQ">
            Volume 24h (ADA)
            <span className="sc-ddjGPC dtONNa">
              <div className="sc-aXZVg jrzA-dM">
                <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </span>
          </TableHead>
          <TableHead className="sc-gFAWRd itlcvQ">
            Market Cap (ADA)
            <span hidden="" className="sc-ddjGPC fRRtfN">
              <div className="sc-aXZVg jrzA-dM">
                <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </span>
          </TableHead>
          <TableHead className="sc-gFAWRd itlcvQ">
            Last 10 Days
            <span hidden="" className="sc-ddjGPC fRRtfN">
              <div className="sc-aXZVg jrzA-dM">
                <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-white">
        <TableRow className="hover:bg-slate-200">
          <TableCell className="">
            <label className="sc-brPLxw eZzSoG">
              <input type="checkbox" className="sc-gFVvzn cikrM" />
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.91 18.32a1.68 1.68 0 0 1-1.65-1.95l.65-3.97-2.77-2.86a1.68 1.68 0 0 1 .95-2.82l3.74-.58 1.65-3.53a1.69 1.69 0 0 1 3.03 0l1.65 3.53 3.75.58a1.68 1.68 0 0 1 .95 2.82L15.1 12.4l.64 3.98a1.67 1.67 0 0 1-2.47 1.74L10 16.29l-3.27 1.82a1.67 1.67 0 0 1-.82.21Zm4.09-3.7c.28 0 .56.08.81.22l3.27 1.81-.63-3.98a1.69 1.69 0 0 1 .45-1.44l2.76-2.85-3.75-.6a1.67 1.67 0 0 1-1.26-.94l-1.64-3.52-1.66 3.52a1.67 1.67 0 0 1-1.26.95l-3.75.57 2.76 2.87c.37.38.54.91.45 1.44l-.64 3.97 3.28-1.8c.25-.14.53-.21.81-.22Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </label>
          </TableCell>
          <TableCell className=" text-center border-red-500 ">
            <Link className="sc-iHbSHJ bwYSnM" to="/">
              <div
                className="LazyLoad is-visible"
                style={{ height: "32px", width: "59.2px" }}
              >
                <div width="59.2px" height="32px" className="sc-cWSHoV dazaWi">
                  <img
                    src="https://tokens.muesliswap.com/static/img/tokens/f43a62fdc3965df486de8a0d32fe800963589c41b38946602a0dc535.41474958_scaled_100.webp"
                    crossOrigin="anonymous"
                    alt="Token"
                    className="sc-gEvEer ceiwSH"
                  />
                  <img
                    src="/static/media/ada.ae3e320f25e324286ae2.webp"
                    crossOrigin="anonymous"
                    alt="ADA"
                    className="sc-gEvEer gUHNA-d"
                  />
                </div>
              </div>
              <span className="sc-Nxspf ebZgeq">AGIX</span>
              <span className="sc-klVQfs cErbak">Verified</span>
              <span className="sc-klVQfs bRcUix"> Other </span>
            </Link>
          </TableCell>
          <TableCell className=" text-center border-red-500 ">
            <p className="sc-gEvEer dSOvFp">1.919917</p>
            <div className="sc-gEvEer bdDaQC" style={{ color: "grey500" }}>
              0.667€
            </div>
          </TableCell>
          <TableCell className=" text-center border-red-500 ">
            <div value="-3.938407719468273" className="sc-uVWWZ ejrJPX">
              ↓&nbsp;3.94%
            </div>
          </TableCell>
          <TableCell className=" text-center border-red-500 ">
            <div value="13.971553434201756" className="sc-uVWWZ lcUsoT">
              ↑&nbsp;13.97%
            </div>
          </TableCell>
          <TableCell className=" text-center border-red-500 ">
            <p className="sc-gEvEer dSOvFp">27,700</p>
            <div className="sc-gEvEer bdDaQC" style={{ color: "grey500" }}>
              9,617€
            </div>
          </TableCell>
          <TableCell className=" text-center border-red-500 ">
            <p className="sc-gEvEer dSOvFp">994,160,375</p>
            <div className="sc-gEvEer bdDaQC" style={{ color: "grey500" }}>
              345,144,646€
            </div>
          </TableCell>
          <TableCell className=" text-center border-red-500 ">
            <div className="sc-gEvEer fiARsy">
              <canvas
                height="48"
                width="112"
                id="markets-graph-cell-a8102151506a8a81dc1763ee05cdd01d787f50dfeb6f843071e1c6a0.484f5749"
                style={{ width: "112px", height: "48px" }}
              ></canvas>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default MarketsTable;
