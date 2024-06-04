import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CTASection from "./CTASection";
import TeamsHeader from "./Teams/TeamsHeader";
import TeamsContent from "./Teams/TeamsContent";

const Teams = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <TeamsHeader />
      <TeamsContent />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Teams;