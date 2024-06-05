import React from "react";
import loan from "../../assets/loanProducts.png";
import investments from "../../assets/investmentsProducts.png";
import services from "../../assets/servicesProducts.png";
import arrowright from "../../assets/arrowrightone.svg";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="flex flex-col items-center bg-productsbg bg-cover relative overflow-hidden">
      <div className="flex flex-col w-97.5 md:w-176 lg:w-300 py-16 md:py-16 lg:py-32 gap-8 md:gap-12 lg:gap-16">
        <div className="flex flex-col gap-2 md:gap-2 lg:gap-3 lg:w-240">
          <span className="text-base md:text-lg lg:text-xl text-blueBorderStroke">
            Our Products
          </span>
          <h1 className="font-gotham text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end">
            Begin Your Journey With Our Range of Financial Solutions
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-5 md:gap-5 lg:gap-6 md:grid-cols-1 lg:grid-cols-3">
          <div className="flex flex-col md:flex-row lg:flex-col md:w-176 lg:w-96 bg-gradient-to-b from-productsBg-start to-productsBg-end shadow-products border-b-2 border-productsBorder hover:bg-gradient-to-b hover:from-productsHover-start hover:to-productsHover-end transition-all duration-300 ease-out">
            <img src={loan} alt="loan" className="md:w-88 lg:w-96" />
            <div className="flex flex-col gap-4 md:gap-5 lg:gap-5 px-4 md:px-6 lg:px-6 pt-5 md:pt-6 lg:pt-6 pb-6 md:pb-6 lg:pb-9">
              <div className="flex flex-col gap-1 w-87.5 md:w-76 lg:w-84">
                <span className="font-gotham text-xl md:text-xl lg:text-2xl text-menuTextColor">
                  Loans
                </span>
                <p className="text-base text-mobileMenuColor">
                  Unlock financing solutions tailored to your business needs. We
                  provide medium to long-term funding options with flexible
                  repayment terms.
                </p>
              </div>
              <Link
                to=""
                className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
              >
                <p className="text-sm md:text-base lg:text-base text-menuHover">
                  Learn More
                </p>
                <img src={arrowright} alt="arrowright" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col md:w-176 lg:w-96 bg-gradient-to-b from-productsBg-start to-productsBg-end shadow-products border-b-2 border-productsBorder hover:bg-gradient-to-b hover:from-productsHover-start hover:to-productsHover-end transition-all duration-300 ease-out">
            <img
              src={investments}
              alt="investments"
              className="md:w-88 lg:w-96"
            />
            <div className="flex flex-col gap-4 md:gap-5 lg:gap-5 px-4 md:px-6 lg:px-6 pt-5 md:pt-6 lg:pt-6 pb-6 md:pb-6 lg:pb-9">
              <div className="flex flex-col gap-1 w-87.5 md:w-76 lg:w-84">
                <span className="font-gotham text-xl md:text-xl lg:text-2xl text-menuTextColor">
                  Investments
                </span>
                <p className="text-base text-mobileMenuColor">
                  Grow your wealth with our investment opportunities. We offer
                  investment plans designed to suit your short or long term
                  financial goals and objectives.
                </p>
              </div>
              <Link
                to=""
                className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
              >
                <p className="text-sm md:text-base lg:text-base text-menuHover">
                  Learn More
                </p>
                <img src={arrowright} alt="arrowright" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col md:w-176 lg:w-96 bg-gradient-to-b from-productsBg-start to-productsBg-end shadow-products border-b-2 border-productsBorder hover:bg-gradient-to-b hover:from-productsHover-start hover:to-productsHover-end transition-all duration-300 ease-out">
            <img src={services} alt="services" className="md:w-88 lg:w-96" />
            <div className="flex flex-col gap-4 md:gap-5 lg:gap-5 px-4 md:px-6 lg:px-6 pt-5 md:pt-6 lg:pt-6 pb-6 md:pb-6 lg:pb-9">
              <div className="flex flex-col gap-1 w-87.5 md:w-76 lg:w-84">
                <span className="font-gotham text-xl md:text-xl lg:text-2xl text-menuTextColor">
                  Services
                </span>
                <p className="text-base text-mobileMenuColor">
                  Access expert financial guidance for your business needs. From
                  capital management to project financing, our team provides
                  specialized solutions across diverse sectors of the economy.
                </p>
              </div>
              <Link
                to=""
                className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
              >
                <p className="text-sm md:text-base lg:text-base text-menuHover">
                  Learn More
                </p>
                <img src={arrowright} alt="arrowright" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
