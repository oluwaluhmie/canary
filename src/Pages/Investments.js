import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import InvestmentsHeader from "./Investments/InvestmentsHeader";
import CTASection from "./CTASection";
import InvestmentsContent from "./Investments/InvestmentsContent";

const Investments = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <InvestmentsHeader />
      <InvestmentsContent />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Investments;