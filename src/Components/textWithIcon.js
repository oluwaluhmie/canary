import React, { useState } from "react";
import arrow from "../assets/arrowdownorange.svg";
import arrowwhite from "../assets/arrowdownwhite.svg";

function TextWithIcon({ text, alt }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="flex items-center hover:fill-menuHover"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>{text}</span>
      <img
        src={hovered ? arrow : arrowwhite}
        alt={hovered ? "arrow" : "arrowwhite"}
      />
    </div>
  );
}

export default TextWithIcon;
