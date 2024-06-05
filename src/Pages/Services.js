import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ServicesHeader from "./Services/ServicesHeader";
import ServicesContent from "./Services/ServicesContent";

const Services = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <ServicesHeader />
      <ServicesContent />
      <Footer />
    </div>
  );
};

export default Services;
