import React, { useEffect, useState } from "react";
import arrow from "../assets/arrowdownorange.svg";
import arrowwhite from "../assets/arrowdownwhite.svg";

function TextWithIcon({ text, alt }) {
  const [hovered, setHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="flex items-center hover:fill-menuHover"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>{text}</span>
      <img
        src={hovered || isScrolled ? arrow : arrowwhite}
        alt={hovered || isScrolled ? "arrow" : "arrowwhite"}
      />
    </div>
  );
}

export default TextWithIcon;
