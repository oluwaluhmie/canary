import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import TermsHeader from "./Terms/TermsHeader";
import TermsContent from "./Terms/TermsContent";

const Terms = () => {
  return (
    <div>
      <Header />
      <TermsHeader />
      <TermsContent />
      <Footer />
    </div>
  );
};

export default Terms;
