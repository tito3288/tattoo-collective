import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "./pages/Contact";
import AltPage from "./pages/Alt-page";
import AreasWeServe from "./pages/AreasWeServe";
import MortgageCalculator from "./pages/MortgageCalculator";
import About from "./pages/About";
import Popups from "./components/Popups";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AltPage />} />
        <Route path="Contact" element={<Contact />} />
        {/* <Route path="LandingPage" element={<LandingPage />} /> */}
        <Route path="AreasWeServe" element={<AreasWeServe />} />
        <Route path="MortgageCalculator" element={<MortgageCalculator />} />
        <Route path="About" element={<About />} />
      </Routes>
      <Popups />
    </BrowserRouter>
  );
}

export default App;
