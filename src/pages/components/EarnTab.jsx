import { Link } from "react-router-dom";

const EarnTab = () => {
  return (
    <nav className="sc-gEvEer ghSrlG">
      <ul width="fit-content" className="sc-gEvEer sc-eqUAAy hqwCPJ fgprtA">
        <li id="selector-tab-0-1727008588833" className="sc-gEvEer ikUdpz">
          <button
            height="fit-content"
            width="fit-content"
            className="sc-gEvEer hJlQux"
          >
            <Link className="sc-gEvEer bmouGq" to="/earn/liquidity">
              Liquidity
            </Link>
          </button>
        </li>
        <li id="selector-tab-1-1727008588833" className="sc-gEvEer fRIgFc">
          <button
            height="fit-content"
            width="fit-content"
            className="sc-gEvEer hJlQux"
          >
            <Link className="sc-gEvEer bmouGq" to="/earn/farming">
              Farms
            </Link>
          </button>
        </li>
        <li id="selector-tab-2-1727008588833" className="sc-gEvEer fRIgFc">
          <button
            height="fit-content"
            width="fit-content"
            className="sc-gEvEer hJlQux"
          >
            <Link className="sc-gEvEer bmouGq" to="/earn/staking">
              Staking
            </Link>
          </button>
        </li>
        <li id="selector-tab-3-1727008588833" className="sc-gEvEer fRIgFc">
          <button
            height="fit-content"
            width="fit-content"
            className="sc-gEvEer hJlQux"
          >
            <Link className="sc-gEvEer bmouGq" to="/earn/myield">
              MYield
            </Link>
          </button>
        </li>
      </ul>
      <div className="sc-gEvEer fekvdd"></div>
      <div
        id="selector-tab-underline-reference-1727008588833"
        className="sc-gEvEer xgTHf"
      ></div>
    </nav>
  );
};

export default EarnTab;
