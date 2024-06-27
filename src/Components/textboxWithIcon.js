import React from "react";

function TextBoxWithIcon({ placeholder, imageSrc, alt }) {
  return (
    <div className="flex items-center justify-end border-2 relative">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full py-2 pl-5 border border-textboxBorder text-menuTextColor"
      />
      <img
        src={imageSrc}
        alt={alt}
        className="absolute right-5 flex items-center pointer-events-none"
      />
    </div>
  );
}

export default TextBoxWithIcon;
