import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CultureHeader from "./Culture/CultureHeader";
import CultureContent from "./Culture/CultureContent";
import CultureCTA from "./CultureCTA";

const Culture = () => {
  return (
    <div>
      <Header />
      <CultureHeader />
      <CultureContent />
      <CultureCTA />
      <Footer />
    </div>
  );
};

export default Culture;
