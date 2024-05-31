import React from "react";

const OrangeButtonWoutIcon = ({ buttonText }) => {
  return (
    <div className="w-full">
      <button className="flex items-center justify-center text-lg border-2 border-menuHover text-white bg-gradient-to-b from-buttonGradient-start to-buttonGradient-end w-full gap-1.5 h-11 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end">
        {buttonText}
      </button>
    </div>
  );
};

export default OrangeButtonWoutIcon;
