import React from "react";
import logomob from "../../../assets/logomob.png";
import logotab from "../../../assets/logotab.png";
import checkmob from "../../../assets/checkmob.png";
import { Link } from "react-router-dom";
import AcctTextSlider from "../../../Components/acctTextSlider";
import AcctImageSlider from "../../../Components/acctImageSlider";
import logoweb from "../../../assets/logoweb.png";

const Ccomplete = () => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-full lg:flex lg:flex-row">
        {/* Image Slider */}
        <div className="relative hidden lg:flex lg:flex-col lg:justify-between lg:w-1/2 lg:px-16 lg:h-full overflow-y-hidden">
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
        <div className="flex flex-col items-center bg-white w-full h-screen lg:w-1/2 overflow-hidden">
          <div className="flex flex-col px-5 md:px-12 lg:px-16 md:gap-16 lg:gap-12 md:py-12 lg:py-20">
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
            {/* Content */}
            <div className="flex flex-col items-center gap-16 pt-12 md:pt-0 pb-16 md:pb-0">
              {/* Heading */}
              <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 w-full max-w-160">
                <div>
                  <img
                    src={checkmob}
                    alt="checkmob"
                    className="w-24 h-24 lg:w-32 lg:h-32"
                  />
                </div>
                <span className="font-gotham text-xl md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
                  You have successfully filled your Corporate Account Opening
                  Form.
                </span>
                <p className="text-mobileMenuColor text-base">
                  Your information has been sent to Canary Point and you will be
                  notified on the creation of your account as soon as all your
                  details have been verified. This will take about 2-3 days.{" "}
                  <br />
                  <br />
                  If you have any questions or wish to speak to us directly,
                  feel free to{" "}
                  <Link
                    to="/contact"
                    className="text-menuHover underline underline-offset-2"
                  >
                    Contact Us
                  </Link>
                  {"."}
                  <br />
                  <br /> In the meantime, you can continue going through our
                  website to explore all the benefits you get to enjoy with us.
                </p>
              </div>
              {/* Button */}
              <Link
                to="/"
                className="w-full md:flex md:flex-col md:items-end md:w-160"
              >
                <button className="flex items-center justify-center text-lg border-2 border-menuHover text-white bg-gradient-to-b from-buttonGradient-start to-buttonGradient-end h-12 w-full md:w-54.75 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end">
                  Back to homepage
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ccomplete;
