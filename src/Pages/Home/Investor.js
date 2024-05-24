import React from "react";
import targetinvestment from "../../assets/targetinvestment.svg";
import fixedinvestment from "../../assets/fixedinvestment.svg";
import canaryvault from "../../assets/canaryvault.svg";
import { Link } from "react-router-dom";
import arrowright from "../../assets/arrowrightone.svg";
import bluearrowright from "../../assets/bluearrowright.svg";
import BlueWhiteButton from "../../Components/blueWhiteButton";

const Investor = () => {
  return (
    <div className="flex flex-col items-center bg-investorbg bg-cover">
      <div className="flex flex-col w-97.5 md:w-200 lg:w-300">
        <div className="flex flex-col items-center py-16 md:py-12 lg:py-24 gap-12 md:gap-12 lg:gap-16">
          <div className="flex flex-col gap-12 md:gap-12 lg:gap-12">
            <div className="flex flex-col gap-2 lg:gap-3">
              <span className="text-blueBorderStroke text-base md:text-lg lg:text-xl">
                The Investor's Suite
              </span>
              <span className="font-gotham text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end">
                Building Financial Security
              </span>
              <p className="text-base md:text-base lg:text-lg text-mobileMenuColor w-97.5 md:w-176 lg:w-160">
                Secure your financial future with our investment solutions
                designed to build long-term wealth and security. Our investment
                plans provide stability and growth potential to help you achieve
                financial security.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-x-6">
              <div className="flex flex-col gap-4 lg:gap-16 px-5 lg:px-6 py-6 lg:py-8 bg-white w-97.5 md:w-176 lg:w-96 lg:h-96">
                <img
                  src={targetinvestment}
                  alt="targetinvestment"
                  className="w-16 h-16"
                />
                <div className="flex flex-col md:flex-row lg:flex-col md:justify-between lg:items-end gap-5 lg:gap-16">
                  <div className="w-87.5 md:w-128 lg:w-84 lg:flex lg:flex-col lg:gap-1">
                    <span className="font-gotham text-menuTextColor text-lg lg:text-xl">
                      Target Investment Plan
                    </span>
                    <p className="text-base text-mobileMenuColor">
                      Goal-oriented investment product helping investors build
                      savings culture through periodic contributions towards set
                      goals.
                    </p>
                  </div>
                  <div className="flex items-end">
                    <Link
                      to="/"
                      className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                    >
                      <p className="text-base text-menuHover">
                        Apply Now
                      </p>
                      <img src={arrowright} alt="arrowright" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 lg:gap-16 px-5 lg:px-6 py-6 lg:py-8 bg-white w-97.5 md:w-176 lg:w-96 lg:h-96">
                <img
                  src={fixedinvestment}
                  alt="fixedinvestment"
                  className="w-16 h-16"
                />
                <div className="flex flex-col md:flex-row lg:flex-col md:justify-between lg:items-end gap-5 lg:gap-16">
                  <div className="w-87.5 md:w-128 lg:w-84 lg:flex lg:flex-col lg:gap-1">
                    <span className="font-gotham text-menuTextColor text-lg lg:text-xl">
                      Fixed Investment Plan
                    </span>
                    <p className="text-base text-mobileMenuColor">
                      Commit a sum for a specific duration, receive principal
                      amount and accrued interest disbursed in one lump sum.
                    </p>
                  </div>
                  <div className="flex items-end">
                    <Link
                      to="/"
                      className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                    >
                      <p className="text-base text-menuHover">
                        Apply Now
                      </p>
                      <img src={arrowright} alt="arrowright" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 lg:gap-16 px-5 lg:px-6 py-6 lg:py-8 bg-white w-97.5 md:w-176 lg:w-96 lg:h-96">
                <img
                  src={canaryvault}
                  alt="canaryvault"
                  className="w-16 h-16"
                />
                <div className="flex flex-col md:flex-row lg:flex-col md:justify-between lg:items-end gap-5 lg:gap-16">
                  <div className="w-87.5 md:w-128 lg:w-84 lg:flex lg:flex-col lg:gap-1">
                    <span className="font-gotham text-menuTextColor text-lg lg:text-xl">
                      Canary Vault
                    </span>
                    <p className="text-base text-mobileMenuColor">
                      Tailored to instil financial discipline among investors by
                      locking away their investment, only accessible after a
                      predetermined date.
                    </p>
                  </div>
                  <div className="flex items-end">
                    <Link
                      to="/"
                      className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                    >
                      <p className="text-base text-menuHover">
                        Apply Now
                      </p>
                      <img src={arrowright} alt="arrowright" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/">
            <BlueWhiteButton
              buttonText="Learn more"
              imageSrc={bluearrowright}
              alt="arrowright"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Investor;
