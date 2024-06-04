import React from "react";
import StoryHeader from "./Our Story/StoryHeader";
import Header from "./Header";
import Footer from "./Footer";
import CTASection from "./CTASection";
import Financial from "./Our Story/Financial";
import Timelines from "./Our Story/Timelines";
import Press from "./Our Story/Press";

const Story = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <StoryHeader />
      <Financial />
      <Timelines />
      <Press />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Story;
