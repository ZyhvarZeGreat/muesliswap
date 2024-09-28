import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import img from '../../assets/ada.webp'
const MarketsTable = () => {
  return (
    <Table>
      <TableHeader >
        <TableRow className="font-gilroy font-semibold">
          <TableHead className="sc-gFAWRd font-semibold itlcvQ">
            <span hidden className="sc-ddjGPC fRRtfN">
              <div className="sc-aXZVg jrzA-dM">
                <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </span>
          </TableHead>
          <TableHead className="sc-gFAWRd font-semibold  text-center itlcvQ">
            Name
            <span hidden className="sc-ddjGPC fRRtfN">
              <div className="sc-aXZVg jrzA-dM">
                <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </span>
          </TableHead>
          <TableHead className="sc-gFAWRd font-semibold  text-center itlcvQ">
            Price
            <span hidden className="sc-ddjGPC fRRtfN">
              <div className="sc-aXZVg jrzA-dM">
                <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </span>
          </TableHead>
          <TableHead className="sc-gFAWRd font-semibold  text-center itlcvQ">
            24h
            <span hidden className="sc-ddjGPC fRRtfN">
              <div className="sc-aXZVg jrzA-dM">
                <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </span>
          </TableHead>
          <TableHead className="sc-gFAWRd font-semibold text-center  itlcvQ">
            7d
            <span hidden className="sc-ddjGPC fRRtfN">
              <div className="sc-aXZVg jrzA-dM">
                <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </span>
          </TableHead>
          <TableHead className="sc-gFAWRd font-semibold text-center  itlcvQ">
            Volume 24h
            <span className="sc-ddjGPC dtONNa">
              <div className="sc-aXZVg jrzA-dM">
                <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </span>
          </TableHead>
          <TableHead className="sc-gFAWRd font-semibold text-center  itlcvQ">
            Market Cap
            <span hidden className="sc-ddjGPC fRRtfN">
              <div className="sc-aXZVg jrzA-dM">
                <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </span>
          </TableHead>
          <TableHead className="sc-gFAWRd font-semibold text-center  itlcvQ">
            Last 10 Days
            <span hidden className="sc-ddjGPC fRRtfN">
              <div className="sc-aXZVg jrzA-dM">
                <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M.76 6h8.48a.76.76 0 0 0 .7-.5.81.81 0 0 0-.17-.85L5.54.23A.74.74 0 0 0 5 0a.74.74 0 0 0-.54.23L.22 4.65a.81.81 0 0 0-.16.86.76.76 0 0 0 .7.49Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-white">

        <TableRow className="sc-gmPhUn FCgni">
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <label className="sc-kAkpmW cRPsKG">
              <input type="checkbox" className="sc-cmaqmh iwhYbG" />
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.91 18.32a1.68 1.68 0 0 1-1.65-1.95l.65-3.97-2.77-2.86a1.68 1.68 0 0 1 .95-2.82l3.74-.58 1.65-3.53a1.69 1.69 0 0 1 3.03 0l1.65 3.53 3.75.58a1.68 1.68 0 0 1 .95 2.82L15.1 12.4l.64 3.98a1.67 1.67 0 0 1-2.47 1.74L10 16.29l-3.27 1.82a1.67 1.67 0 0 1-.82.21Zm4.09-3.7c.28 0 .56.08.81.22l3.27 1.81-.63-3.98a1.69 1.69 0 0 1 .45-1.44l2.76-2.85-3.75-.6a1.67 1.67 0 0 1-1.26-.94l-1.64-3.52-1.66 3.52a1.67 1.67 0 0 1-1.26.95l-3.75.57 2.76 2.87c.37.38.54.91.45 1.44l-.64 3.97 3.28-1.8c.25-.14.53-.21.81-.22Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </label>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <Link className="sc-iHbSHJ bwYSnM" to="/swap?base=.&quote=279c909f348e533da5808898f87f9a14bb2c3dfbbacccd631d927a3f.534e454b">
              <div className="LazyLoad is-visible" style={{ height: "32px", width: "59.2px" }}>
                <div width="59.2px" height="32px" className="sc-cWSHoV dazaWi">
                  <img
                    src="https://tokens.muesliswap.com/static/img/tokens/279c909f348e533da5808898f87f9a14bb2c3dfbbacccd631d927a3f.534e454b_scaled_100.webp"
                    crossOrigin="anonymous"
                    alt="Token"
                    className="sc-gEvEer ceiwSH"
                  />
                  <img
                    src={img}
                    crossOrigin="anonymous"
                    alt="img"
                    className="sc-gEvEer gUHNA-d"
                  />
                </div>
              </div>
              <span className="sc-Nxspf ebZgeq">SNEK</span>
              <span className="sc-klVQfs cErbak">Verified</span>
              <span className="sc-klVQfs bRcUix"> Popular </span>
              <span className="sc-klVQfs bRcUix"> Meme </span>
            </Link>
          </TableCell>
          <TableCell className="sc-hRJfrW  text-center  iUJzLW">
            <p className="sc-gEvEer dSOvFp">0.002091</p>
            <div color="grey500" className="sc-gEvEer bdDaQC">7.391E-4$</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <div className="sc-uVWWZ eJsMUQ">&nbsp;0%</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <div value="2.2880112709918965" className="sc-uVWWZ lcUsoT">↑&nbsp;2.29%</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <p className="sc-gEvEer dSOvFp">6,832</p>
            <div color="grey500" className="sc-gEvEer bdDaQC">2,415$</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <p className="sc-gEvEer dSOvFp">155,000,882</p>
            <div color="grey500" className="sc-gEvEer bdDaQC">54,787,387$</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <div className="sc-gEvEer fiARsy">
              <canvas
                height="48"
                width="112"
                id="markets-graph-cell-279c909f348e533da5808898f87f9a14bb2c3dfbbacccd631d927a3f.534e454b"
                style={{ width: "112px", height: "48px" }}
              ></canvas>
            </div>
          </TableCell>
        </TableRow>
        <TableRow className="sc-gmPhUn FCgni">
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <label className="sc-kAkpmW cRPsKG">
              <input type="checkbox" className="sc-cmaqmh iwhYbG" />
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.91 18.32a1.68 1.68 0 0 1-1.65-1.95l.65-3.97-2.77-2.86a1.68 1.68 0 0 1 .95-2.82l3.74-.58 1.65-3.53a1.69 1.69 0 0 1 3.03 0l1.65 3.53 3.75.58a1.68 1.68 0 0 1 .95 2.82L15.1 12.4l.64 3.98a1.67 1.67 0 0 1-2.47 1.74L10 16.29l-3.27 1.82a1.67 1.67 0 0 1-.82.21Zm4.09-3.7c.28 0 .56.08.81.22l3.27 1.81-.63-3.98a1.69 1.69 0 0 1 .45-1.44l2.76-2.85-3.75-.6a1.67 1.67 0 0 1-1.26-.94l-1.64-3.52-1.66 3.52a1.67 1.67 0 0 1-1.26.95l-3.75.57 2.76 2.87c.37.38.54.91.45 1.44l-.64 3.97 3.28-1.8c.25-.14.53-.21.81-.22Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </label>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <Link className="sc-iHbSHJ bwYSnM" to="/swap?base=.&quote=f43a62fdc3965df486de8a0d32fe800963589c41b38946602a0dc535.41474958">
              <div className="LazyLoad is-visible" style={{ height: "32px", width: "59.2px" }}>
                <div width="59.2px" height="32px" className="sc-cWSHoV dazaWi">
                  <img
                    src="https://tokens.muesliswap.com/static/img/tokens/f43a62fdc3965df486de8a0d32fe800963589c41b38946602a0dc535.41474958_scaled_100.webp"
                    crossOrigin="anonymous"
                    alt="Token"
                    className="sc-gEvEer ceiwSH"
                  />
                  <img
                    src={img}
                    crossOrigin="anonymous"
                    alt="img"
                    className="sc-gEvEer gUHNA-d"
                  />
                </div>
              </div>
              <span className="sc-Nxspf ebZgeq">AGIX</span>
              <span className="sc-klVQfs cErbak">Verified</span>
              <span className="sc-klVQfs bRcUix"> Other </span>
            </Link>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <p className="sc-gEvEer dSOvFp">1.943124</p>
            <div color="grey500" className="sc-gEvEer bdDaQC">0.687$</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <div value="-0.40867356055985793" className="sc-uVWWZ ejrJPX">↓&nbsp;0.41%</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <div value="13.56304569713469" className="sc-uVWWZ lcUsoT">↑&nbsp;13.56%</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <p className="sc-gEvEer dSOvFp">6,244</p>
            <div color="grey500" className="sc-gEvEer bdDaQC">2,207$</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <p className="sc-gEvEer dSOvFp">1,006,177,474</p>
            <div color="grey500" className="sc-gEvEer bdDaQC">355,648,521$</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <div className="sc-gEvEer fiARsy">
              <canvas
                height="48"
                width="112"
                id="markets-graph-cell-f43a62fdc3965df486de8a0d32fe800963589c41b38946602a0dc535.41474958"
                style={{ width: "112px", height: "48px" }}
              ></canvas>
            </div>
          </TableCell>
        </TableRow>
        <TableRow className="sc-gmPhUn FCgni">
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <label className="sc-kAkpmW cRPsKG">
              <input type="checkbox" className="sc-cmaqmh iwhYbG" />
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.91 18.32a1.68 1.68 0 0 1-1.65-1.95l.65-3.97-2.77-2.86a1.68 1.68 0 0 1 .95-2.82l3.74-.58 1.65-3.53a1.69 1.69 0 0 1 3.03 0l1.65 3.53 3.75.58a1.68 1.68 0 0 1 .95 2.82L15.1 12.4l.64 3.98a1.67 1.67 0 0 1-2.47 1.74L10 16.29l-3.27 1.82a1.67 1.67 0 0 1-.82.21Zm4.09-3.7c.28 0 .56.08.81.22l3.27 1.81-.63-3.98a1.69 1.69 0 0 1 .45-1.44l2.76-2.85-3.75-.6a1.67 1.67 0 0 1-1.26-.94l-1.64-3.52-1.66 3.52a1.67 1.67 0 0 1-1.26.95l-3.75.57 2.76 2.87c.37.38.54.91.45 1.44l-.64 3.97 3.28-1.8c.25-.14.53-.21.81-.22Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </label>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <Link className="sc-iHbSHJ bwYSnM" to="/swap?base=.&quote=8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61.446a65644d6963726f555344">
              <div className="LazyLoad is-visible" style={{ height: "32px", width: "59.2px" }}>
                <div width="59.2px" height="32px" className="sc-cWSHoV dazaWi">
                  <img
                    src="https://tokens.muesliswap.com/static/img/tokens/8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61.446a65644d6963726f555344_scaled_100.webp"
                    crossOrigin="anonymous"
                    alt="Token"
                    className="sc-gEvEer ceiwSH"
                  />
                  <img
                    src={img}
                    crossOrigin="anonymous"
                    alt="img"
                    className="sc-gEvEer gUHNA-d"
                  />
                </div>
              </div>
              <span className="sc-Nxspf ebZgeq">DJED</span>
              <span className="sc-klVQfs cErbak">Verified</span>
              <span className="sc-klVQfs bRcUix"> Popular </span>
              <span className="sc-klVQfs bRcUix"> DeFi </span>
            </Link>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <p className="sc-gEvEer dSOvFp">2.794819</p>
            <div color="grey500" className="sc-gEvEer bdDaQC">0.988$</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <div className="sc-uVWWZ eJsMUQ">&nbsp;0%</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <div value="2.3916483232951258" className="sc-uVWWZ lcUsoT">↑&nbsp;2.39%</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <p className="sc-gEvEer dSOvFp">5,460</p>
            <div color="grey500" className="sc-gEvEer bdDaQC">1,930$</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <p className="sc-gEvEer dSOvFp">7,160,083</p>
            <div color="grey500" className="sc-gEvEer bdDaQC">2,530,839$</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <div className="sc-gEvEer fiARsy">
              <canvas
                height="48"
                width="112"
                id="markets-graph-cell-8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61.446a65644d6963726f555344"
                style={{ width: "112px", height: "48px" }}
              ></canvas>
            </div>
          </TableCell>
        </TableRow>
        <TableRow className="sc-gmPhUn FCgni">
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <label className="sc-kAkpmW cRPsKG">
              <input type="checkbox" className="sc-cmaqmh iwhYbG" />
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.91 18.32a1.68 1.68 0 0 1-1.65-1.95l.65-3.97-2.77-2.86a1.68 1.68 0 0 1 .95-2.82l3.74-.58 1.65-3.53a1.69 1.69 0 0 1 3.03 0l1.65 3.53 3.75.58a1.68 1.68 0 0 1 .95 2.82L15.1 12.4l.64 3.98a1.67 1.67 0 0 1-2.47 1.74L10 16.29l-3.27 1.82a1.67 1.67 0 0 1-.82.21Zm4.09-3.7c.28 0 .56.08.81.22l3.27 1.81-.63-3.98a1.69 1.69 0 0 1 .45-1.44l2.76-2.85-3.75-.6a1.67 1.67 0 0 1-1.26-.94l-1.64-3.52-1.66 3.52a1.67 1.67 0 0 1-1.26.95l-3.75.57 2.76 2.87c.37.38.54.91.45 1.44l-.64 3.97 3.28-1.8c.25-.14.53-.21.81-.22Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </label>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <Link
              className="sc-iHbSHJ bwYSnM"
              to="/swap?base=.&quote=92776616f1f32c65a173392e4410a3d8c39dcf6ef768c73af164779c.4d79555344"
            >
              <div className="LazyLoad is-visible" style={{ height: "32px", width: "59.2px" }}>
                <div width="59.2px" height="32px" className="sc-cWSHoV dazaWi">
                  <img
                    src="https://tokens.muesliswap.com/static/img/tokens/92776616f1f32c65a173392e4410a3d8c39dcf6ef768c73af164779c.4d79555344_scaled_100.webp"
                    crossOrigin="anonymous"
                    alt="https://tokens.muesliswap.com/static/img/tokens/92776616f1f32c65a173392e4410a3d8c39dcf6ef768c73af164779c.4d79555344_scaled_100.webp"
                    className="sc-gEvEer ceiwSH"
                  />
                  <img
                    src={img}
                    crossOrigin="anonymous"
                    alt="https://static.muesliswap.com/images/tokens/img.png"
                    className="sc-gEvEer gUHNA-d"
                  />
                </div>
              </div>
              <span className="sc-Nxspf ebZgeq">MyUSD</span>
              <span className="sc-klVQfs cErbak">Verified</span>
              <span className="sc-klVQfs bRcUix"> DeFi </span>
            </Link>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <p className="sc-gEvEer dSOvFp">-</p>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <div className="sc-uVWWZ eJsMUQ">&nbsp;0%</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <div className="sc-uVWWZ eJsMUQ">&nbsp;0%</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <p className="sc-gEvEer dSOvFp">4,936</p>
            <div color="grey500" className="sc-gEvEer bdDaQC">1,745$</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <p className="sc-gEvEer dSOvFp">-</p>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <div className="sc-gEvEer fiARsy">
              <canvas
                height="48"
                width="112"
                id="markets-graph-cell-92776616f1f32c65a173392e4410a3d8c39dcf6ef768c73af164779c.4d79555344"
                style={{ width: "112px", height: "48px" }}
              ></canvas>
            </div>
          </TableCell>
        </TableRow>
        <TableRow className="sc-gmPhUn FCgni">
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <label className="sc-kAkpmW cRPsKG">
              <input type="checkbox" className="sc-cmaqmh iwhYbG" />
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.91 18.32a1.68 1.68 0 0 1-1.65-1.95l.65-3.97-2.77-2.86a1.68 1.68 0 0 1 .95-2.82l3.74-.58 1.65-3.53a1.69 1.69 0 0 1 3.03 0l1.65 3.53 3.75.58a1.68 1.68 0 0 1 .95 2.82L15.1 12.4l.64 3.98a1.67 1.67 0 0 1-2.47 1.74L10 16.29l-3.27 1.82a1.67 1.67 0 0 1-.82.21Zm4.09-3.7c.28 0 .56.08.81.22l3.27 1.81-.63-3.98a1.69 1.69 0 0 1 .45-1.44l2.76-2.85-3.75-.6a1.67 1.67 0 0 1-1.26-.94l-1.64-3.52-1.66 3.52a1.67 1.67 0 0 1-1.26.95l-3.75.57 2.76 2.87c.37.38.54.91.45 1.44l-.64 3.97 3.28-1.8c.25-.14.53-.21.81-.22Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </label>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <Link
              className="sc-iHbSHJ bwYSnM"
              to="/swap?base=.&quote=b6a7467ea1deb012808ef4e87b5ff371e85f7142d7b356a40d9b42a0.436f726e75636f70696173205b76696120436861696e506f72742e696f5d"
            >
              <div className="LazyLoad" style={{ height: "32px", width: "59.2px" }}>
                <div width="59.2px" height="32px" className="sc-cWSHoV dazaWi">
                  <img
                    src="https://tokens.muesliswap.com/static/img/tokens/b6a7467ea1deb012808ef4e87b5ff371e85f7142d7b356a40d9b42a0.436f726e75636f70696173205b76696120436861696e506f72742e696f5d_scaled_100.webp"
                    crossOrigin="anonymous"
                    alt="COPI Token"
                    className="sc-gEvEer ceiwSH"
                  />
                  <img
                    src={img}
                    crossOrigin="anonymous"
                    alt="ADA Token"
                    className="sc-gEvEer gUHNA-d"
                  />
                </div>
              </div>
              <span className="sc-Nxspf ebZgeq">COPI</span>
              <span className="sc-klVQfs cErbak">Verified</span>
              <span className="sc-klVQfs bRcUix"> Other </span>
            </Link>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <p className="sc-gEvEer dSOvFp">0.070054</p>
            <div color="grey500" className="sc-gEvEer bdDaQC">0.025$</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <div className="sc-uVWWZ eJsMUQ">&nbsp;0%</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <div className="sc-uVWWZ eJsMUQ">&nbsp;0%</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <p className="sc-gEvEer dSOvFp">1,581</p>
            <div color="grey500" className="sc-gEvEer bdDaQC">559$</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <p className="sc-gEvEer dSOvFp">64,092,344</p>
            <div color="grey500" className="sc-gEvEer bdDaQC">22,654,400$</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <div className="sc-gEvEer fiARsy">
              <canvas
                height="48"
                width="112"
                id="markets-graph-cell-b6a7467ea1deb012808ef4e87b5ff371e85f7142d7b356a40d9b42a0.436f726e75636f70696173205b76696120436861696e506f72742e696f5d"
                style={{ width: "112px", height: "48px" }}
              ></canvas>
            </div>
          </TableCell>
        </TableRow>
        <TableRow className="sc-gmPhUn FCgni">
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <label className="sc-kAkpmW cRPsKG">
              <input type="checkbox" className="sc-cmaqmh iwhYbG" />
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.91 18.32a1.68 1.68 0 0 1-1.65-1.95l.65-3.97-2.77-2.86a1.68 1.68 0 0 1 .95-2.82l3.74-.58 1.65-3.53a1.69 1.69 0 0 1 3.03 0l1.65 3.53 3.75.58a1.68 1.68 0 0 1 .95 2.82L15.1 12.4l.64 3.98a1.67 1.67 0 0 1-2.47 1.74L10 16.29l-3.27 1.82a1.67 1.67 0 0 1-.82.21Zm4.09-3.7c.28 0 .56.08.81.22l3.27 1.81-.63-3.98a1.69 1.69 0 0 1 .45-1.44l2.76-2.85-3.75-.6a1.67 1.67 0 0 1-1.26-.94l-1.64-3.52-1.66 3.52a1.67 1.67 0 0 1-1.26.95l-3.75.57 2.76 2.87c.37.38.54.91.45 1.44l-.64 3.97 3.28-1.8c.25-.14.53-.21.81-.22Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </label>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <Link
              className="sc-iHbSHJ bwYSnM"
              to="/swap?base=.&quote=edfd7a1d77bcb8b884c474bdc92a16002d1fb720e454fa6e99344479.4e5458"
            >
              <div className="LazyLoad" style={{ height: "32px", width: "59.2px" }}>
                <div width="59.2px" height="32px" className="sc-cWSHoV dazaWi">
                  <img
                    src="https://tokens.muesliswap.com/static/img/tokens/edfd7a1d77bcb8b884c474bdc92a16002d1fb720e454fa6e99344479.4e5458_scaled_100.webp"
                    crossOrigin="anonymous"
                    alt="NTX Token"
                    className="sc-gEvEer ceiwSH"
                  />
                  <img
                    src={img}
                    crossOrigin="anonymous"
                    alt="ADA Token"
                    className="sc-gEvEer gUHNA-d"
                  />
                </div>
              </div>
              <span className="sc-Nxspf ebZgeq">NTX</span>
              <span className="sc-klVQfs cErbak">Verified</span>
            </Link>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <p className="sc-gEvEer dSOvFp">0.09295</p>
            <div color="grey500" className="sc-gEvEer bdDaQC">0.033$</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <div value="1.2097806073788409" className="sc-uVWWZ lcUsoT">↑&nbsp;1.21%</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <div value="5.423489120883174" className="sc-uVWWZ lcUsoT">↑&nbsp;5.42%</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <p className="sc-gEvEer dSOvFp">1,300</p>
            <div color="grey500" className="sc-gEvEer bdDaQC">460$</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <p className="sc-gEvEer dSOvFp">61,780,269</p>
            <div color="grey500" className="sc-gEvEer bdDaQC">21,837,163$</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <div className="sc-gEvEer fiARsy">
              <canvas
                height="48"
                width="112"
                id="markets-graph-cell-edfd7a1d77bcb8b884c474bdc92a16002d1fb720e454fa6e99344479.4e5458"
                style={{ width: "112px", height: "48px" }}
              ></canvas>
            </div>
          </TableCell>
        </TableRow>
        <TableRow className="sc-gmPhUn FCgni">
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <label className="sc-kAkpmW cRPsKG">
              <input type="checkbox" className="sc-cmaqmh iwhYbG" />
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.91 18.32a1.68 1.68 0 0 1-1.65-1.95l.65-3.97-2.77-2.86a1.68 1.68 0 0 1 .95-2.82l3.74-.58 1.65-3.53a1.69 1.69 0 0 1 3.03 0l1.65 3.53 3.75.58a1.68 1.68 0 0 1 .95 2.82L15.1 12.4l.64 3.98a1.67 1.67 0 0 1-2.47 1.74L10 16.29l-3.27 1.82a1.67 1.67 0 0 1-.82.21Zm4.09-3.7c.28 0 .56.08.81.22l3.27 1.81-.63-3.98a1.69 1.69 0 0 1 .45-1.44l2.76-2.85-3.75-.6a1.67 1.67 0 0 1-1.26-.94l-1.64-3.52-1.66 3.52a1.67 1.67 0 0 1-1.26.95l-3.75.57 2.76 2.87c.37.38.54.91.45 1.44l-.64 3.97 3.28-1.8c.25-.14.53-.21.81-.22Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </label>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <Link
              className="sc-iHbSHJ bwYSnM"
              to="/swap?base=.&quote=7507734918533b3b896241b4704f3d4ce805256b01da6fcede430436.42616279534e454b"
            >
              <div className="LazyLoad" style={{ height: "32px", width: "59.2px" }}>
                <div width="59.2px" height="32px" className="sc-cWSHoV dazaWi">
                  <img
                    src="https://tokens.muesliswap.com/static/img/tokens/7507734918533b3b896241b4704f3d4ce805256b01da6fcede430436.42616279534e454b_scaled_100.webp"
                    crossOrigin="anonymous"
                    alt="BabySNEK Token"
                    className="sc-gEvEer ceiwSH"
                  />
                  <img
                    src={img}
                    crossOrigin="anonymous"
                    alt="ADA Token"
                    className="sc-gEvEer gUHNA-d"
                  />
                </div>
              </div>
              <span className="sc-Nxspf ebZgeq">BabySNEK</span>
              <span className="sc-klVQfs cErbak">Verified</span>
              <span className="sc-klVQfs bRcUix"> Meme </span>
            </Link>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <p className="sc-gEvEer dSOvFp">0.000008</p>
            <div color="grey500" className="sc-gEvEer bdDaQC">2.755E-6$</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <div className="sc-uVWWZ eJsMUQ">&nbsp;0%</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <div className="sc-uVWWZ eJsMUQ">&nbsp;0%</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <p className="sc-gEvEer dSOvFp">531</p>
            <div color="grey500" className="sc-gEvEer bdDaQC">188$</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <p className="sc-gEvEer dSOvFp">583,983</p>
            <div color="grey500" className="sc-gEvEer bdDaQC">206,418$</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <div className="sc-gEvEer fiARsy">
              <canvas
                height="48"
                width="112"
                id="markets-graph-cell-7507734918533b3b896241b4704f3d4ce805256b01da6fcede430436.42616279534e454b"
                style={{ width: "112px", height: "48px" }}
              ></canvas>
            </div>
          </TableCell>
        </TableRow>
        <TableRow className="sc-gmPhUn FCgni">
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <label className="sc-kAkpmW cRPsKG">
              <input type="checkbox" className="sc-cmaqmh iwhYbG" />
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.91 18.32a1.68 1.68 0 0 1-1.65-1.95l.65-3.97-2.77-2.86a1.68 1.68 0 0 1 .95-2.82l3.74-.58 1.65-3.53a1.69 1.69 0 0 1 3.03 0l1.65 3.53 3.75.58a1.68 1.68 0 0 1 .95 2.82L15.1 12.4l.64 3.98a1.67 1.67 0 0 1-2.47 1.74L10 16.29l-3.27 1.82a1.67 1.67 0 0 1-.82.21Zm4.09-3.7c.28 0 .56.08.81.22l3.27 1.81-.63-3.98a1.69 1.69 0 0 1 .45-1.44l2.76-2.85-3.75-.6a1.67 1.67 0 0 1-1.26-.94l-1.64-3.52-1.66 3.52a1.67 1.67 0 0 1-1.26.95l-3.75.57 2.76 2.87c.37.38.54.91.45 1.44l-.64 3.97 3.28-1.8c.25-.14.53-.21.81-.22Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </label>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <Link
              className="sc-iHbSHJ bwYSnM"
              to="/swap?base=.&quote=a2944573e99d2ed3055b808eaa264f0bf119e01fc6b18863067c63e4.4d454c44"
            >
              <div className="LazyLoad" style={{ height: "32px", width: "59.2px" }}>
                <div width="59.2px" height="32px" className="sc-cWSHoV dazaWi">
                  <img
                    src="https://tokens.muesliswap.com/static/img/tokens/a2944573e99d2ed3055b808eaa264f0bf119e01fc6b18863067c63e4.4d454c44_scaled_100.webp"
                    crossOrigin="anonymous"
                    alt="MELD Token"
                    className="sc-gEvEer ceiwSH"
                  />
                  <img
                    src={img}
                    crossOrigin="anonymous"
                    alt="ADA Token"
                    className="sc-gEvEer gUHNA-d"
                  />
                </div>
              </div>
              <span className="sc-Nxspf ebZgeq">MELD</span>
              <span className="sc-klVQfs cErbak">Verified</span>
            </Link>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <p className="sc-gEvEer dSOvFp">0.036328</p>
            <div color="grey500" className="sc-gEvEer bdDaQC">0.013$</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <div className="sc-uVWWZ eJsMUQ">&nbsp;0%</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <div value="2.3218683704619103" className="sc-uVWWZ lcUsoT">↑&nbsp;2.32%</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <p className="sc-gEvEer dSOvFp">440</p>
            <div color="grey500" className="sc-gEvEer bdDaQC">156$</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <p className="sc-gEvEer dSOvFp">44,663,193</p>
            <div color="grey500" className="sc-gEvEer bdDaQC">15,786,876$</div>
          </TableCell>
          <TableCell className="sc-hRJfrW text-center  iUJzLW">
            <div className="sc-gEvEer fiARsy">
              <canvas
                height="48"
                width="112"
                id="markets-graph-cell-a2944573e99d2ed3055b808eaa264f0bf119e01fc6b18863067c63e4.4d454c44"
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
