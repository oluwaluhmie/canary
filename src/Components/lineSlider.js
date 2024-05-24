import React, { useEffect, useState } from "react";
import linea from "../assets/line1.svg";
import lineb from "../assets/line2.svg";
import linec from "../assets/line3.svg";
import lined from "../assets/line4.svg";

const LineSlider = () => {
  const line1 = <img src={linea} alt="" />;
  const line2 = <img src={lineb} alt="" />;
  const line3 = <img src={linec} alt="" />;
  const line4 = <img src={lined} alt="" />;
  const sliderLine = [line1, line2, line3, line4];
  const [sliderNumber, setSliderNumber] = useState(0);

  function increaseSlider() {
    setSliderNumber((sliderNumber + 1) % sliderLine.length);
  }

  useEffect(() => {
    const interval = setInterval(increaseSlider, 8000);
    return () => clearInterval(interval);
  }, [sliderNumber]);

  return (
    <div className="transition-opacity duration-2000">
      <div>{sliderLine[sliderNumber]}</div>
    </div>
  );
};

export default LineSlider;
