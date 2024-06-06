import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CTASection from "./CTASection";
import LoansHeader from "./Loans/LoansHeader";
import LoansContent from "./Loans/LoansContent";

const Loans = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <LoansHeader />
      <LoansContent />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Loans;