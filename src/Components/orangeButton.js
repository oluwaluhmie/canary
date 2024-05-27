import React from "react";

const OrangeButton = ({ buttonText, imgSrc, alt }) => {
  return (
    <div className="w-full md:w-128 lg:w-150">
      <button className="flex items-center justify-center text-base border-2 border-menuHover text-white bg-gradient-to-b from-buttonGradient-start to-buttonGradient-end w-full md:w-44 lg:w-44 gap-1.5 px-8 py-3 h-11 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end">
        {buttonText}
        <img src={imgSrc} alt={alt} />
      </button>
    </div>
  );
};

export default OrangeButton;
