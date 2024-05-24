import React from "react";

function TextBoxWithIcon({ placeholder, imageSrc, alt }) {
  return (
    <div className="flex items-center justify-center border-2 relative">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full py-2 pl-10 border border-textboxBorder text-searchBoxText"
      />
      <img
        src={imageSrc}
        alt={alt}
        className="absolute inset-y-0 left-0 pl-3 py-2 flex items-center pointer-events-none"
      />
    </div>
  );
}

export default TextBoxWithIcon;
