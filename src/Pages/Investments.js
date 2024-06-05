import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import InvestmentsHeader from "./Investments/InvestmentsHeader";

const Investments = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <InvestmentsHeader />
      <Footer />
    </div>
  );
};

export default Investments;