import React from "react";
import guidanceimage from "../../assets/guidanceimage.png";
import orangearrowright from "../../assets/arrowright.svg";
import { Link } from "react-router-dom";

const Guidance = () => {
  return (
    <div className="flex flex-col items-center bg-guidancebg bg-cover overflow-hidden">
      <div className="flex flex-col w-97.5 md:w-176 lg:w-300">
        <div className="flex flex-col py-16 md:py-16 lg:py-32 gap-16 w-97.5 md:w-176 lg:w-300">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <img
              src={guidanceimage}
              alt="guidanceimage"
              className="w-97.5 md:w-176 lg:w-144"
            />
            <div className="flex flex-col gap-6 lg:py-6 lg:justify-between">
              <div className="flex flex-col gap-2 lg:gap-3 w-97.5 md:w-176 lg:w-144">
                <span className="text-blueBorderStroke text-base md:text-lg lg:text-xl">
                  Services
                </span>
                <span className="font-gotham text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end">
                  Expert Financial Guidance
                </span>
                <p className="text-base md:text-base lg:text-lg text-mobileMenuColor lg:w-128">
                  Direct financial support and tailored solutions for personal
                  finance and business challenges. Sustainable value in capital
                  raising, business restructuring, and project financing.
                </p>
              </div>
              <Link to="/">
                <button className="flex justify-center items-center gap-1.5 lg:gap-2 text-base md:text-lg lg:text-lg border-2 border-menuHover text-transparent bg-clip-text bg-gradient-to-b from-linkOrangeButtonText-start to-linkOrangeButtonText-end bg-white w-97.5 md:w-57 lg:w-57 h-11 md:h-12 lg:h-12 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end hover:gap-2">
                  <p>Reach out to us</p>
                  <img src={orangearrowright} alt="arrowright" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidance;
