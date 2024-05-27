import React from "react";
import pressone from "../../assets/pressone.png";
import presstwo from "../../assets/presstwo.png";
import pressthree from "../../assets/pressthree.png";
import pressfour from "../../assets/pressfour.png";
import presstabone from "../../assets/presstabone.png";
import presstabtwo from "../../assets/presstabtwo.png";
import presstabthree from "../../assets/presstabthree.png";
import presstabfour from "../../assets/presstabfour.png";
import presswebone from "../../assets/presswebone.png";
import presswebtwo from "../../assets/presswebtwo.png";
import presswebthree from "../../assets/presswebthree.png";
import presswebfour from "../../assets/presswebfour.png";

const Press = () => {
  return (
    <div className="flex flex-col items-center bg-menuTextHover">
      <div className="flex flex-col w-107.5 md:w-200 lg:w-341.5">
        <div className="px-5 md:px-12 py-12 md:py-16 lg:py-24">
          <div className="flex flex-col gap-12 lg:gap-16">
            <div className="flex flex-col gap-1 md:gap-2 lg:gap-3">
              <p className="text-menuHover text-base md:text-lg lg:text-2xl">
                Press
              </p>
              <span className="font-gotham text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-timelineText-start to-timelineText-end">
                What news outlets say about us
              </span>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex flex-col gap-6">
                <div className="bg-white md:w-176 lg:w-147 md:flex">
                  <div className="flex flex-col justify-between px-4 md:px-8 lg:px-8 py-5 md:py-6 lg:py-6 h-40 lg:h-49 md:w-112 lg:w-98">
                    <span className="font-gotham text-base lg:text-lg text-pressText">
                      Canary Point Finance Launches Small Business Support
                      Platform
                    </span>
                    <div className="flex justify-between text-base text-mobileMenuColor">
                      <p>CNN</p>
                      <p>2018</p>
                    </div>
                  </div>
                  <img src={pressone} alt="pressone" className="block md:hidden lg:hidden" />
                  <img src={presstabone} alt="pressone" className="hidden md:block lg:hidden" />
                  <img src={presswebone} alt="pressone" className="hidden md:hidden lg:block" />
                </div>
                <div className="bg-white md:w-176 lg:w-147 md:flex">
                  <div className="flex flex-col justify-between px-4 md:px-8 lg:px-8 py-5 md:py-6 lg:py-6 h-40 lg:h-49 md:w-112 lg:w-98">
                    <span className="font-gotham text-base lg:text-lg text-pressText">
                      Insights: Exploring Nigerian Financial Market Trends
                    </span>
                    <div className="flex justify-between text-base text-mobileMenuColor">
                      <p>BBC</p>
                      <p>2018</p>
                    </div>
                  </div>
                  <img src={presstwo} alt="presstwo" className="block md:hidden lg:hidden" />
                  <img src={presstabtwo} alt="presstwo" className="hidden md:block lg:hidden" />
                  <img src={presswebtwo} alt="presstwo" className="hidden md:hidden lg:block" />
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="bg-white md:w-176 lg:w-147 md:flex">
                  <div className="flex flex-col justify-between px-4 md:px-8 lg:px-8 py-5 md:py-6 lg:py-6 h-40 lg:h-49 md:w-112 lg:w-98">
                    <span className="font-gotham text-base lg:text-lg text-pressText">
                      Canary Point Finance Partners For Financial Inclusion
                    </span>
                    <div className="flex justify-between text-base text-mobileMenuColor">
                      <p>AIT</p>
                      <p>2018</p>
                    </div>
                  </div>
                  <img src={pressthree} alt="pressthree" className="block md:hidden lg:hidden" />
                  <img src={presstabthree} alt="pressthree" className="hidden md:block lg:hidden" />
                  <img src={presswebthree} alt="pressthree" className="hidden md:hidden lg:block" />
                </div>
                <div className="bg-white md:w-176 lg:w-147 md:flex">
                  <div className="flex flex-col justify-between px-4 md:px-8 lg:px-8 py-5 md:py-6 lg:py-6 h-40 lg:h-49 md:w-112 lg:w-98">
                    <span className="font-gotham text-base lg:text-lg text-pressText">
                      Breaking Boundaries: Sustainable Investments by Canary
                      Point Finance
                    </span>
                    <div className="flex justify-between text-base text-mobileMenuColor">
                      <p>Arise News</p>
                      <p>2018</p>
                    </div>
                  </div>
                  <img src={pressfour} alt="pressfour" className="block md:hidden lg:hidden" />
                  <img src={presstabfour} alt="pressfour" className="hidden md:block lg:hidden" />
                  <img src={presswebfour} alt="pressfour" className="hidden md:hidden lg:block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press;
