import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PrivacyHeader from "./Privacy/PrivacyHeader";
import PrivacyContent from "./Privacy/PrivacyContent";

const Policy = () => {
  return (
    <div>
      <Header />
      <PrivacyHeader />
      <PrivacyContent />
      <Footer />
    </div>
  );
};

export default Policy;
