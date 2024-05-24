import React from "react";
import ImagesSlider from "../Components/imagesSlider";
import TextSlider from "../Components/textSlider";
import LineSlider from "../Components/lineSlider";

const Hero = () => {
  return (
    <div className="mb-188 md:mb-164 lg:mb-125">
      <ImagesSlider />
      <div className="relative px-5 md:px-12 lg:px-16 py-16 md:py-20 lg:py-25">
        <div className="absolute flex flex-col py-12 md:py-12 lg:py-24 mt-82 md:mt-84 lg:mt-20">
          <div className="py-6 md:py-6 lg:py-24">
            <div className="flex flex-col">
              <TextSlider />
            </div>
          </div>
          <div className="mt-63 md:mt-59 lg:mt-34">
            <LineSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
