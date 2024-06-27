import React from "react";

const CultureCTA = () => {
  return (
    <div className="flex flex-col bg-ctacul-sm md:bg-ctacul-md lg:bg-ctacul-lg bg-cover bg-center">
      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-16 pt-32 md:pt-48 lg:pt-96 overflow-hidden">
          <div className="flex flex-col px-5 md:px-12 lg:px-12 py-5 md:py-10 lg:py-16 lg:items-center bg-investorBg/50 backdrop-blur-lg">
            <div className="flex flex-col">
              <div className="flex flex-col gap-3 md:gap-6 lg:gap-10 items-center">
                <span className="font-gotham text-2xl md:text-3xl lg:text-4xl w-97.5 md:w-128 lg:w-234 text-center lg:text-left text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end lg:h-12">
                  Interested in Starting an Exciting Career With Us?
                </span>
                <p
                  className="text-menuHover text-sm md:text-base lg:text-lg cursor-pointer"
                  onClick={() =>
                    (window.location = "mailto:info@canarypointfcl.com")
                  }
                >
                  Send us an email today
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultureCTA;
