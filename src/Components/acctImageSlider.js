import { useEffect, useState } from "react";
import acctslider1 from "../assets/acctslider1.png";
import acctslider2 from "../assets/acctslider2.png";
import acctslider3 from "../assets/acctslider3.png";
import acctslider4 from "../assets/acctslider4.png";

const AcctImageSlider = () => {
  const [sliderNumber, setSliderNumber] = useState(0);
  const sliderImages = [acctslider1, acctslider2, acctslider3, acctslider4];

  function increaseSlider() {
    setSliderNumber((sliderNumber + 1) % sliderImages.length);
  }

  useEffect(() => {
    const interval = setInterval(increaseSlider, 9000);
    return () => clearInterval(interval);
  }, [sliderNumber, sliderImages]);

  return (
    <div className="relative h-full">
      {sliderImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          className={`absolute inset-0 w-full h-screen object-cover transition-none ${
            sliderNumber === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default AcctImageSlider;
