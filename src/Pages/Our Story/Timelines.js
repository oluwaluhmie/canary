import React from "react";
import timelinemobileone from "../../assets/timelinemobileone.png";
import timelinemobiletwo from "../../assets/timelinemobiletwo.png";
import timelinemobilethree from "../../assets/timelinemobilethree.png";
import one from "../../assets/one.svg";
import two from "../../assets/two.svg";
import three from "../../assets/three.svg";

const Timelines = () => {
  return (
    <div className="flex flex-col items-center bg-timelinebg bg-cover">
      <div className="flex flex-col w-107.5 md:w-200 lg:w-341.5">
        <div className="px-5 md:px-12">
          <div className="flex flex-col gap-8 md:gap-12 lg:gap-12 py-12 md:py-16 lg:py-24">
            <span className="font-gotham text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-timelineText-start to-timelineText-end">
              Timelines
            </span>
            <div className="grid grid-cols-1 gap-12 md:gap-6 md:w-176 lg:w-300">
              <div className="flex flex-col md:flex-row gap-3 md:gap-6 lg:gap-10 md:opacity-20 md:hover:opacity-100">
                <div className="hidden md:block pt-6 pl-2">
                  <img src={one} alt="one" />
                </div>
                <div className="flex items-end">
                  <p className="text-5xl font-bold text-white/20 absolute p-2">
                    2016
                  </p>
                  <img
                    src={timelinemobileone}
                    alt="timelinemobileone"
                    className="md:w-75 md:h-48 lg:w-90"
                  />
                </div>
                <div className="flex flex-col gap-1 md:w-80 lg:w-128 md:py-3 lg:py-3">
                  <span className="font-gotham text-lg md:text-xl lg:text-2xl text-menuHover">
                    Canary Finance begins operation
                  </span>
                  <p className="text-sm md:text-base lg:text-base text-mobileMenuColor">
                    To provide our clients with exceptional financial services
                    that meet their unique needs, while maintaining the highest
                    standards of professionalism and integrity.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3 md:gap-6 lg:gap-10 md:opacity-20 md:hover:opacity-100">
                <div className="hidden md:block pt-6 pl-2">
                  <img src={two} alt="two" />
                </div>
                <div className="flex items-end">
                  <p className="text-5xl font-bold text-white/20 absolute p-2">
                    2018
                  </p>
                  <img
                    src={timelinemobiletwo}
                    alt="timelinemobiletwo"
                    className="md:w-75 md:h-48 lg:w-90"
                  />
                </div>
                <div className="flex flex-col gap-1 md:w-80 lg:w-128 md:py-3 lg:py-3">
                  <span className="font-gotham text-lg md:text-xl lg:text-2xl text-menuHover">
                    Canary Finance gets $1 million funding
                  </span>
                  <p className="text-sm md:text-base lg:text-base text-mobileMenuColor">
                    To provide our clients with exceptional financial services
                    that meet their unique needs, while maintaining the highest
                    standards of professionalism and integrity.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3 md:gap-6 lg:gap-10 md:opacity-20 md:hover:opacity-100">
                <div className="hidden md:block pt-6 pl-2">
                  <img src={three} alt="three" />
                </div>
                <div className="flex items-end">
                  <p className="text-5xl font-bold text-white/20 absolute p-2">
                    2020
                  </p>
                  <img
                    src={timelinemobilethree}
                    alt="timelinemobilethree"
                    className="md:w-75 md:h-48 lg:w-90"
                  />
                </div>
                <div className="flex flex-col gap-1 md:w-80 lg:w-128 md:py-3 lg:py-3">
                  <span className="font-gotham text-lg md:text-xl lg:text-2xl text-menuHover">
                    Canary Finance makes $2 million in revenue
                  </span>
                  <p className="text-sm md:text-base lg:text-base text-mobileMenuColor">
                    To provide our clients with exceptional financial services
                    that meet their unique needs, while maintaining the highest
                    standards of professionalism and integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timelines;
