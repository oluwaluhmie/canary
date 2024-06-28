import React from "react";

const BlueButton = ({ buttonText }) => {
  return (
    <div>
      <button className="text-base items-center justify-center lg:text-lg border-2 border-blueBorderStroke text-white bg-gradient-to-b from-blueGradient-start to-blueGradient-end w-full md:w-33.5 lg:w-37.5 h-11 hover:bg-gradient-to-b hover:from-blueButton-start hover:to-blueButton-end">
        {buttonText}
      </button>
    </div>
  );
};

export default BlueButton;