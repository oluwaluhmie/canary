import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ContactHeader from "./Contact/ContactHeader";
import ContactContent from "./Contact/ContactContent";
import CTASection from "./CTASection";

const Contact = () => {
  return (
    <div>
      <Header />
      <ContactHeader />
      <ContactContent />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Contact;
