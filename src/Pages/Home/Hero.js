import React from "react";
import ImageSlider from "../../Components/imagesSlider";
import TextSlider from "../../Components/textSlider";
import LineSlider from "../../Components/lineSlider";

const Hero = () => {
  return (
    <div className="h-full">
      <ImageSlider />
      <div className="px-5 md:px-12 lg:px-32 py-16 lg:py-24 relative">
        <div className="relative h-170 lg:h-132">
          <div className="absolute bottom-0 left-0 h-full w-full">
            <div className="flex items-end h-169 lg:h-131">
              <TextSlider />
            </div>
            <LineSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
