import { useEffect, useState } from "react";
import mobileslider1 from "../assets/mobileslider1.png";
import mobileslider2 from "../assets/mobileslider2.png";
import mobileslider3 from "../assets/mobileslider3.png";
import mobileslider4 from "../assets/mobileslider4.png";
import tabslider1 from "../assets/tabslider1.png";
import tabslider2 from "../assets/tabslider2.png";
import tabslider3 from "../assets/tabslider3.png";
import tabslider4 from "../assets/tabslider4.png";
import webslider1 from "../assets/webslider1.png";
import webslider2 from "../assets/webslider2.png";
import webslider3 from "../assets/webslider3.png";
import webslider4 from "../assets/webslider4.png";

const ImageSlider = () => {
  const [sliderNumber, setSliderNumber] = useState(0);
  const [sliderImages, setSliderImages] = useState([]);

  const images = {
    mobile: [mobileslider1, mobileslider2, mobileslider3, mobileslider4],
    tab: [tabslider1, tabslider2, tabslider3, tabslider4],
    web: [webslider1, webslider2, webslider3, webslider4],
  };

  // Change slider images based on device width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setSliderImages(images.mobile);
      } else if (width <= 1024) {
        setSliderImages(images.tab);
      } else {
        setSliderImages(images.web);
      }
    };

    handleResize(); // Initial call to set correct images based on initial width
    window.addEventListener("resize", handleResize); // Listen for window resize events
    return () => window.removeEventListener("resize", handleResize); // Clean up on component unmount
  }, []);

  function increaseSlider() {
    setSliderNumber((sliderNumber + 1) % sliderImages.length);
  }

  useEffect(() => {
    const interval = setInterval(increaseSlider, 8000);
    return () => clearInterval(interval);
  }, [sliderNumber, sliderImages]);

  return (
    <div className="relative h-full">
      {sliderImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          className={`absolute inset-0 w-full object-cover transition-none duration-2000 ease-out ${
            sliderNumber === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
