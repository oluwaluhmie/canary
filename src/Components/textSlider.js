import React, { useEffect, useState } from "react";
import OrangeButton from "./orangeButton";
import ArrowRight from "../assets/arrowrighttwo.svg";

const TextSlider = () => {
  const text1 = (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2 lg:gap-3 w-97.5 md:w-128 lg:w-150">
        <h1 className="font-gotham text-transparent bg-clip-text bg-gradient-to-b from-footerGradient-start to-footerGradient-end text-3xl md:text-4xl lg:text-5xl">
          Your Path to Prosperity Starts Here
        </h1>
        <p className="text-searchBoxText text-lg lg:text-xl">
          Explore our curated investment options tailored for individuals and
          corporations alike, guided by expert advice and market insights.
        </p>
      </div>
      <OrangeButton
        buttonText="Get Started"
        imgSrc={ArrowRight}
        alt="arrowright"
      />
    </div>
  );
  const text2 = (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2 lg:gap-3 w-97.5 md:w-128 lg:w-150">
        <h1 className="font-gotham text-transparent bg-clip-text bg-gradient-to-b from-footerGradient-start to-footerGradient-end text-3xl md:text-4xl lg:text-5xl">
          Empowering Growth through Flexible Financing
        </h1>
        <p className="text-searchBoxText text-lg lg:text-xl">
          Access bespoke loan solutions designed to fuel growth for both
          individuals and corporate entities, supported by streamlined processes
          and personalized service.
        </p>
      </div>
      <OrangeButton
        buttonText="Get Started"
        imgSrc={ArrowRight}
        alt="arrowright"
      />
    </div>
  );
  const text3 = (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2 lg:gap-3 w-97.5 md:w-128 lg:w-150">
        <h1 className="font-gotham text-transparent bg-clip-text bg-gradient-to-b from-footerGradient-start to-footerGradient-end text-3xl md:text-4xl lg:text-5xl">
          Strategic Guidance for Financial Success
        </h1>
        <p className="text-searchBoxText text-lg lg:text-xl">
          Benefit from personalized financial advisory services tailored to your
          unique needs, helping individuals and corporate firms alike navigate
          the complexities of the financial landscape with confidence.
        </p>
      </div>
      <OrangeButton
        buttonText="Get Started"
        imgSrc={ArrowRight}
        alt="arrowright"
      />
    </div>
  );
  const text4 = (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2 lg:gap-3 w-97.5 md:w-128 lg:w-150">
        <h1 className="font-gotham text-transparent bg-clip-text bg-gradient-to-b from-footerGradient-start to-footerGradient-end text-3xl md:text-4xl lg:text-5xl">
          Effortless Transactions for Individuals and Businesses
        </h1>
        <p className="text-searchBoxText text-lg lg:text-xl">
          Streamline your financial transactions with our seamless payment
          solutions, delivering efficiency and reliability for individuals and
          corporate entities alike.
        </p>
      </div>
      <OrangeButton
        buttonText="Get Started"
        imgSrc={ArrowRight}
        alt="arrowright"
      />
    </div>
  );
  const sliderText = [text1, text2, text3, text4];
  const [sliderNumber, setSliderNumber] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const increaseSlider = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setSliderNumber((sliderNumber + 1) % sliderText.length);
      setIsFadingOut(false);
    }, 1000); // Duration of the fade-out effect
  };

  useEffect(() => {
    const interval = setInterval(increaseSlider, 8000);
    return () => clearInterval(interval);
  }, [sliderNumber]);

  return (
    <div className="overflow-hidden">
      {sliderText.map((text, index) => (
        <div
          key={index}
          className={`absolute bottom-12 md:bottom-12 lg:bottom-24 transition-opacity duration-1000 ease-out ${
            sliderNumber === index && !isFadingOut ? "opacity-100" : "opacity-0"
          } ${isFadingOut && sliderNumber === index ? "opacity-0" : ""}`}
        >
          <div>{text}</div>
        </div>
      ))}
    </div>
  );
};

export default TextSlider;
