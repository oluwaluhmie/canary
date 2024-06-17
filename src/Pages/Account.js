import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logomob from "../assets/logomob.png";
import logotab from "../assets/logotab.png";
import logoweb from "../assets/logoweb.png";
import individualImg from "../assets/individual.png";
import corporateImg from "../assets/corporate.png";
import ArrowRight from "../assets/arrowrighttwo.svg";
import AccountOrangeButton from "../Components/AccountOrangeButton";
import AcctImageSlider from "../Components/acctImageSlider";
import AcctTextSlider from "../Components/acctTextSlider";

const Account = () => {
  const [activeLink, setActiveLink] = useState(null);
  const navigate = useNavigate();

  const handleClick = (linkType) => {
    setActiveLink(linkType);
  };

  const handleButtonClick = () => {
    if (activeLink === "individual") {
      navigate("/individual-account");
    } else if (activeLink === "corporate") {
      navigate("/corporate-account"); // Ensure you have this route if needed
    }
  };

  return (
    <div className="flex flex-col w-full lg:flex lg:flex-row">
      {/* Image Slider */}
      <div className="relative hidden lg:flex lg:flex-col lg:justify-between lg:w-1/2 lg:px-16 lg:h-full">
        <AcctImageSlider />
        <div className="flex flex-col justify-between w-full h-screen relative">
          <Link to="/" className="py-12">
            <img src={logoweb} alt="logoweb" />
          </Link>
          <div className="py-20">
            <AcctTextSlider />
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col md:gap-8 md:py-12 lg:py-20 items-center w-full h-screen lg:w-1/2 bg-white">
        {/* Header Section */}
        <div className="flex flex-row md:justify-center lg:hidden px-4 py-4 md:py-0 w-full border-b border-textboxBorder md:border-b-0 lg:border-b-0">
          <img
            src={logomob}
            alt="logomob"
            className="block md:hidden"
          />
          <img
            src={logotab}
            alt="logotab"
            className="hidden md:block"
          />
        </div>
        {/* Content Section */}
        <div className="flex flex-col gap-8 lg:gap-12 px-4 md:px-16 pt-12 md:pt-0 pb-16 w-full max-w-160">
          <div className="flex justify-end gap-1 md:gap-2">
            <p className="text-mobileMenuColor text-sm md:text-base">
              Having troubles?
            </p>
            <Link to="">
              <p className="text-menuHover text-sm md:text-base">Get Help</p>
            </Link>
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <span className="font-gotham text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
              Select Account Type
            </span>
            <p className="text-mobileMenuColor text-base md:text-xl w-full">
              Choose the type of account you want to open at this time.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div
              className={`flex flex-col justify-center h-20 md:h-24 w-full md:w-77 lg:w-76 bg-teamsBg ${
                activeLink === "individual"
                  ? "bg-accountSelected shadow-products border-2 border-productsBorder"
                  : ""
              }`}
              onClick={() => handleClick("individual")}
            >
              <div className="flex flex-row items-center gap-4 md:gap-5 px-4 md:px-5 py-6">
                <img
                  src={individualImg}
                  alt="individual"
                  className="h-8 w-8 md:h-12 md:w-12"
                />
                <p className="font-gotham text-xl text-menuTextColor">
                  Individual
                </p>
              </div>
            </div>
            <div
              className={`flex flex-col justify-center h-20 md:h-24 w-full md:w-77 lg:w-76 bg-teamsBg ${
                activeLink === "corporate"
                  ? "bg-accountSelected shadow-products border-2 border-productsBorder"
                  : ""
              }`}
              onClick={() => handleClick("corporate")}
            >
              <div className="flex flex-row items-center gap-4 md:gap-5 px-4 md:px-5 py-6">
                <img
                  src={corporateImg}
                  alt="corporate"
                  className="h-8 w-8 md:h-12 md:w-12"
                />
                <p className="font-gotham text-xl text-menuTextColor">
                  Corporate
                </p>
              </div>
            </div>
          </div>
          {activeLink && (
            <div className="md:flex md:justify-end w-full">
              <AccountOrangeButton
                buttonText="Next"
                imgSrc={ArrowRight}
                alt="arrowright"
                onClick={handleButtonClick}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
