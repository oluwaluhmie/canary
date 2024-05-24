import React from "react";

const BlueWhiteButton = ({ buttonText, imageSrc, alt }) => {
  return (
    <div>
      <button className="flex justify-center items-center gap-1.5 lg:gap-2 text-base lg:text-lg border-2 border-blueBorderStroke text-transparent bg-clip-text bg-gradient-to-b from-linkBlueButtonText-start to-linkBlueButtonText-end bg-white w-100 md:w-48.25 lg:w-48.25 px-8 md:px-9 lg:px-9 h-11 md:h-12 lg:h-12 hover:bg-gradient-to-b hover:from-blueButton-start hover:to-blueButton-end hover:gap-2">
        {buttonText}
        <img
          src={imageSrc}
          alt={alt}
        />
      </button>
    </div>
  );
};

export default BlueWhiteButton;
