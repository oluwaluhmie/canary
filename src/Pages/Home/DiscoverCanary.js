import React from "react";
import discovermobile from "../../assets/discovermobile.png";
import discovertab from "../../assets/discovertab.png";
import discoverweb from "../../assets/discoverweb.png";
import arrowright from "../../assets/arrowrightone.svg";
import { Link } from "react-router-dom";

const DiscoverCanary = () => {
  return (
    <div className="flex flex-col items-center bg-menuTextHover overflow-hidden">
      <div className="flex flex-col w-97.5 md:w-176 lg:w-300">
        <div className="flex flex-col md:flex-row gap-8 md:gap-8 lg:gap-24 py-16 md:py-16 lg:py-24 w-97.5 md:w-176 lg:w-300">
          <img
            src={discovermobile}
            alt="discovermobile"
            className="block md:hidden lg:hidden drop-shadow-sm"
          />
          <img
            src={discovertab}
            alt="discovertab"
            className="hidden md:block lg:hidden drop-shadow-sm"
          />
          <img
            src={discoverweb}
            alt="discoverweb"
            className="hidden md:hidden lg:block drop-shadow-sm"
          />
          <div className="flex flex-col gap-6 md:gap-10 w-97.5 md:w-176 lg:w-138">
            <div className="flex flex-col gap-1 md:gap-2 lg:gap-3 lg:py-6">
              <span className="font-gotham text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-orangeTextGradient-start to-orangeTextGradient-end">
                Discover Canary Point Finance
              </span>
              <p className="text-mobileMenuColor text-base lg:text-xl">
                Canary Point Finance Limited is a trusted CBN-licensed Finance
                House in Nigeria. Backed by seasoned professionals with
                extensive industry experience, and with a deep understanding of
                local markets and client expectations, we bridge financing gaps
                and deliver top-tier services.
              </p>
            </div>
            <Link
              to=""
              className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
            >
              <p className="text-base md:text-base lg:text-lg text-menuHover">
                Learn More About Canary Point Finance
              </p>
              <img src={arrowright} alt="arrowright" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCanary;
