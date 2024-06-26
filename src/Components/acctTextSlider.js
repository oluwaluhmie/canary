import React, { useEffect, useState } from "react";

const AcctTextSlider = () => {
  const text1 = (
    <>
      <div className="flex flex-col gap-5 max-w-160">
        <h1 className="font-gotham text-transparent bg-clip-text bg-gradient-to-b from-footerGradient-start to-footerGradient-end lg:text-4xl">
          Your Path to Prosperity Starts Here
        </h1>
        <p className="text-searchBoxText lg:text-xl">
          Explore our curated investment options tailored for individuals and
          corporations alike, guided by expert advice and market insights.
        </p>
      </div>
    </>
  );
  const text2 = (
    <>
      <div className="flex flex-col gap-5 max-w-160">
        <h1 className="font-gotham text-transparent bg-clip-text bg-gradient-to-b from-footerGradient-start to-footerGradient-end text-4xl">
          Empowering Growth through Flexible Financing
        </h1>
        <p className="text-searchBoxText text-xl">
          Access bespoke loan solutions designed to fuel growth for both
          individuals and corporate entities, supported by streamlined processes
          and personalized service.
        </p>
      </div>
    </>
  );
  const text3 = (
    <>
      <div className="flex flex-col gap-5 max-w-160">
        <h1 className="font-gotham text-transparent bg-clip-text bg-gradient-to-b from-footerGradient-start to-footerGradient-end text-4xl">
          Strategic Guidance for Financial Success
        </h1>
        <p className="text-searchBoxText text-xl">
          Benefit from personalized financial advisory services tailored to your
          unique needs, helping individuals and corporate firms alike navigate
          the complexities of the financial landscape with confidence.
        </p>
      </div>
    </>
  );
  const text4 = (
    <>
      <div className="flex flex-col gap-5 max-w-160">
        <h1 className="font-gotham text-transparent bg-clip-text bg-gradient-to-b from-footerGradient-start to-footerGradient-end text-4xl">
          Effortless Transactions for Individuals and Businesses
        </h1>
        <p className="text-searchBoxText text-xl">
          Streamline your financial transactions with our seamless payment
          solutions, delivering efficiency and reliability for individuals and
          corporate entities alike.
        </p>
      </div>
    </>
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
    <div className="overflow-hidden flex flex-col-reverse">
      {sliderText.map((text, index) => (
        <div
          key={index}
          className={`absolute transition-opacity duration-1000 ease-out ${
            sliderNumber === index && !isFadingOut ? "opacity-100" : "opacity-0"
          } ${isFadingOut && sliderNumber === index ? "opacity-0" : ""}`}
        >
          <div>{text}</div>
        </div>
      ))}
    </div>
  );
};

export default AcctTextSlider;
