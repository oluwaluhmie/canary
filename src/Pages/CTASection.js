import React from "react";
import ArrowRight from "../assets/arrowrighttwo.svg";
import ctaline from "../assets/ctaline.svg";

const CTASection = () => {
  return (
    <div className="flex flex-col bg-ctabg bg-cover">
      <div className="flex flex-col w-full md:w-200 lg:w-full">
        <div className="flex flex-col gap-16 pt-32 md:pt-48 lg:pt-96">
          <div className="flex flex-col gap-5 md:gap-8 lg:gap-12 px-5 md:px-12 lg:px-12 py-5 md:py-10 lg:py-12 lg:items-center bg-investorBg/50 backdrop-blur-lg">
            <div className="flex flex-col gap-5 md:gap-6 lg:gap-8 lg:w-300">
              <div className="flex flex-col lg:flex-row gap-3 md:gap-6 items-center md:items-center lg:items-start lg:justify-between">
                <span className="font-gotham text-2xl md:text-3xl lg:text-4xl w-64 md:w-176 text-center lg:text-left text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end">
                  Ready to begin your journey with us?
                </span>
                <button className="flex items-center justify-center text-lg md:text-base border-2 border-menuHover text-white bg-gradient-to-b from-buttonGradient-start to-buttonGradient-end w-97.5 md:w-60 lg:w-66 gap-2 md:gap-1.5 lg:gap-2 px-9 md:px-8 lg:px-9 py-3 h-12 md:h-11 lg:h-12 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end">
                  <p>Create your account</p>
                  <img src={ArrowRight} alt="arrowright" />
                </button>
              </div>
              <div className="hidden lg:flex lg:gap-8 lg:w-full lg:justify-center">
                <img src={ctaline} alt="ctaline" />
                <span>OR</span>
                <img src={ctaline} alt="ctaline" />
              </div>
              <div className="hidden lg:flex lg:w-full lg:justify-center">
                <div className="grid grid-cols-3 gap-5">
                  <div className="flex flex-col gap-15.5 px-5 py-6 bg-white/50 w-96.6675">
                    <span className="font-gotham text-menuHover text-xl">
                      Talk to sales
                    </span>
                    <p className="text-mobileMenuColor text-base">
                      sales@canaryfinance.com
                    </p>
                  </div>
                  <div className="flex flex-col gap-15.5 px-5 py-6 bg-white/50 w-96.6675">
                    <span className="font-gotham text-menuHover text-xl">
                      Contact our support
                    </span>
                    <p className="text-mobileMenuColor text-base">
                      support@canaryfinance.com
                    </p>
                  </div>
                  <div className="flex flex-col gap-10.5 px-5 py-6 bg-white/50 w-96.6675">
                    <span className="font-gotham text-menuHover text-xl">
                      Visit us
                    </span>
                    <p className="text-mobileMenuColor text-base">
                      The Perez, Block 3, Plot 3, Perez Drive,
                      <br />
                      Lekki Phase 1, Lagos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
