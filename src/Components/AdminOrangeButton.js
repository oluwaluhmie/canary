import React from "react";

const AdminOrangeButton = ({ buttonText, imgSrc, alt, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div>
      <button
        type="submit"
        onClick={handleClick}
        className="flex items-center justify-center text-base border-2 border-menuHover text-white bg-gradient-to-b from-buttonGradient-start to-buttonGradient-end w-35.25 gap-2 h-12 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end"
      >
        {buttonText}
        <img src={imgSrc} alt={alt} />
      </button>
    </div>
  );
};

export default AdminOrangeButton;
