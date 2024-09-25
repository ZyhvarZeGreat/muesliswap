import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/components/Navbar";
import Markets from "./pages/Markets";
import Staking from "./pages/Staking";
import Migration from "./pages/Migration";
import Farming from "./pages/Farming";
import Governance from "./pages/Governance";
import Footer from "./pages/components/Footer";
import Liquidity from "./pages/Liquidity";
import Yield from "./pages/Yield";
import AddLiquidity from "./pages/AddLiquidity";
import Watchlist from "./pages/Watchlist";
import Expert from "./pages/Expert";
import "./App.css";
function App() {
  return (
    <div className="font-gilroy">
      <Navbar />
      <div height="56" className="sc-gEvEer kvHQza"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/markets" element={<Markets />} />{" "}
        <Route path="/earn/staking" element={<Staking />} />
        <Route path="/token-migration" element={<Migration />} />
        <Route path="/earn/farming" element={<Farming />} />
        <Route path="/watchlist" element={<Watchlist />} />

        <Route path="/earn/liquidity" element={<Liquidity />} />
        <Route path="/expert" element={<Expert />} />
        <Route path="/earn/liquidity/add" element={<AddLiquidity />} />
        <Route path="/earn/myield" element={<Yield />} />
        <Route path="/governance" element={<Governance />} />
      </Routes>
      <div height="56" className="sc-gEvEer hidden lg:block kvHQza"></div>
      <Footer />
    </div>
  );
}

export default App;
