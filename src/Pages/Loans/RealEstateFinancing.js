import React from "react";
import realestatefinancemob from "../../assets/realestatefinancemob.png";
import realestatefinancetab from "../../assets/realestatefinancetab.png";
import realestatefinanceweb from "../../assets/realestatefinanceweb.png";
import { Link } from "react-router-dom";
import check from "../../assets/check.svg";
import arrowright from "../../assets/arrowright.svg";

const RealEstateFinancing = () => {
  return (
    <div
      id="realSection"
      className="flex flex-col items-center w-97.5 md:w-176 lg:w-300"
    >
      <div className="py-12 md:py-16 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-x-16 lg:w-300">
          {/* Mobile/Tab */}
          <div className="flex flex-col items-center lg:hidden">
            <img
              src={realestatefinancemob}
              alt="realestatefinancemob"
              className="block md:hidden lg:hidden object-cover"
            />
            <img
              src={realestatefinancetab}
              alt="realestatefinancetab"
              className="hidden md:block lg:hidden object-cover"
            />
          </div>
          <div className="flex flex-col gap-6 md:gap-8 lg:hidden">
            <div className="flex flex-col gap-1 md:gap-2">
              <span className="font-gotham text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
                Real Estate Financing
              </span>
              <p className="text-mobileMenuColor text-base">
                From financing shopping centres, office developments, and the
                completion of housing projects to structuring long-term debt
                solutions, Canary Point Finance is involved in every facet of
                the real estate finance industry. It includes an extensive array
                of financial tools and approaches designed specifically to
                address the peculiarities of the real estate market.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:w-176">
              <div className="flex flex-col gap-2 md:w-126.5">
                <p className="text-menuHover text-lg">Benefits</p>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-3">
                    <img src={check} alt="check" />
                    <p className="text-mobileMenuColor text-base">
                      Financing for real estate projects
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <img src={check} alt="check" />
                    <p className="text-mobileMenuColor text-base">
                      Structuring long-term debt solutions
                    </p>
                  </div>
                </div>
              </div>
              <Link to="" className="flex items-end">
                <button className="flex items-center justify-center gap-2 text-lg border-2 border-menuHover text-transparent bg-clip-text bg-gradient-to-b from-linkOrangeButtonText-start to-linkOrangeButtonText-end bg-white w-full md:w-41.5 h-12 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end">
                  Apply Now
                  <img src={arrowright} alt="arrowright" />
                </button>
              </Link>
            </div>
          </div>
          {/* Web */}
          <div className="hidden lg:flex lg:flex-col lg:justify-between lg:w-142 lg:py-6">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3 w-128">
                <span className="font-gotham text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
                  Real Estate Financing
                </span>
                <p className="text-mobileMenuColor text-base">
                  From financing shopping centres, office developments, and the
                  completion of housing projects to structuring long-term debt
                  solutions, Canary Point Finance is involved in every facet of
                  the real estate finance industry. It includes an extensive
                  array of financial tools and approaches designed specifically
                  to address the peculiarities of the real estate market.
                </p>
              </div>
              <div className="flex flex-col gap-2 md:w-126.5 lg:w-142">
                <div className="flex flex-col gap-2 md:w-126.5">
                  <p className="text-menuHover text-lg">Benefits</p>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-3">
                      <img src={check} alt="check" />
                      <p className="text-mobileMenuColor text-base">
                        Financing for real estate projects
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <img src={check} alt="check" />
                      <p className="text-mobileMenuColor text-base">
                        Structuring long-term debt solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link to="" className="flex items-end">
              <button className="flex items-center justify-center gap-2 text-lg border-2 border-menuHover text-transparent bg-clip-text bg-gradient-to-b from-linkOrangeButtonText-start to-linkOrangeButtonText-end bg-white w-full md:w-41.5 h-12 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end">
                Apply Now
                <img src={arrowright} alt="arrowright" />
              </button>
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-col items-center lg:w-142">
            <img
              src={realestatefinanceweb}
              alt="realestatefinanceweb"
              className="hidden md:hidden lg:block object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateFinancing;
