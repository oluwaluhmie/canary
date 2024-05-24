import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import Hero from "./Pages/Hero";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import DiscoverCanary from "./Pages/DiscoverCanary";
import BusinessGrowth from "./Pages/BusinessGrowth";
import Investor from "./Pages/Investor";
import Guidance from "./Pages/Guidance";
import CTASection from "./Pages/CTASection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
