import React, { useState } from "react";
import logomob from "../assets/logomob.png";
import logotab from "../assets/logotab.png";
import { Link } from "react-router-dom";
import arrowleft from "../assets/arrowleft.svg";
import ArrowRight from "../assets/arrowrighttwo.svg";
import AccountOrangeButton from "../Components/AccountOrangeButton";

const Individual = ({ formData, onFormChange }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [clickedSteps, setClickedSteps] = useState([]);

  const handleNextClick = () => {
    if (currentStep < 4) {
      setClickedSteps([...clickedSteps, currentStep]);
      setCurrentStep(currentStep + 1);
    }
  };

  const getButtonClasses = (step) => {
    if (step === currentStep) {
      return "bg-white text-menuHover border-menuHover";
    } else if (clickedSteps.includes(step)) {
      return "bg-formBg text-white";
    } else {
      return "border-textboxBorder text-textboxBorder bg-white";
    }
  };

  return (
    <div className="flex flex-col items-center bg-white w-full overflow-hidden">
      <div className="flex flex-col w-full">
        {/* Header Section */}
        <div className="flex flex-row md:justify-center lg:hidden px-4 py-4 md:py-0 w-full border-b border-textboxBorder md:border-b-0 lg:border-b-0">
          <img
            src={logomob}
            alt="logomob"
            className="block md:hidden lg:hidden"
          />
          <img
            src={logotab}
            alt="logotab"
            className="hidden md:block lg:hidden"
          />
        </div>
        {/* Content */}
        <div className="flex flex-col gap-10 px-5 pt-12 pb-16">
          {/* Back Link */}
          <div className="flex flex-row justify-between">
            <Link
              to=""
              className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
            >
              <img src={arrowleft} alt="arrowleft" />
              <p className="text-base text-menuHover">Back</p>
            </Link>
            <div className="flex justify-end gap-1 md:gap-2">
              <p className="text-mobileMenuColor text-sm md:text-base">
                Having troubles?
              </p>
              <Link to="">
                <p className="text-menuHover text-sm md:text-base">Get Help</p>
              </Link>
            </div>
          </div>
          {/* Heading Text */}
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-1 md:gap-2">
              <span className="font-gotham text-xl md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
                Individual Account Opening
              </span>
              <p className="text-mobileMenuColor text-base md:text-xl w-80 md:w-160 lg:w-158">
                Complete all information or{" "}
                <Link
                  to=""
                  className="text-menuHover underline underline-offset-2"
                >
                  Download Form
                </Link>{" "}
                and fill offline.
              </p>
            </div>
          </div>
          {/* Form */}
          <div className="flex flex-col gap-10">
            {/* Form Page Title */}
            <div className="flex flex-row gap-2 pb-1 border-b">
              <div className="flex flex-row gap-1">
                <button
                  className={`flex justify-center items-center rounded-full h-6 w-6 border ${getButtonClasses(
                    1
                  )}`}
                >
                  1
                </button>
                {currentStep === 1 && (
                  <p className="text-mobileMenuColor text-base">
                    Personal Information
                  </p>
                )}
              </div>
              <p className="text-mobileMenuColor">-</p>
              <div className="flex flex-row gap-1">
                <button
                  className={`flex justify-center items-center rounded-full h-6 w-6 border ${getButtonClasses(
                    2
                  )}`}
                >
                  2
                </button>
                {currentStep === 2 && (
                  <p className="text-mobileMenuColor text-base">
                    Work Information
                  </p>
                )}
              </div>
              <p className="text-mobileMenuColor">-</p>
              <div className="flex flex-row gap-1">
                <button
                  className={`flex justify-center items-center rounded-full h-6 w-6 border ${getButtonClasses(
                    3
                  )}`}
                >
                  3
                </button>
                {currentStep === 3 && (
                  <p className="text-mobileMenuColor text-base">
                    Next of Kin Information
                  </p>
                )}
              </div>
              <p className="text-mobileMenuColor">-</p>
              <div className="flex flex-row gap-1">
                <button
                  className={`flex justify-center items-center rounded-full h-6 w-6 border ${getButtonClasses(
                    4
                  )}`}
                >
                  4
                </button>
                {currentStep === 4 && (
                  <p className="text-mobileMenuColor text-base">
                    Final Information
                  </p>
                )}
              </div>
            </div>
            {/* Forms */}
            <div className="flex flex-col gap-6"></div>
            {/* Next Button */}
            <Link
              to=""
              className="md:flex md:justify-end w-full md:w-160 lg:w-158"
              onClick={handleNextClick}
            >
              <AccountOrangeButton
                buttonText="Next"
                imgSrc={ArrowRight}
                alt="arrowright"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Individual;
