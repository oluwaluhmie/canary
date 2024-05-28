import React, { useState } from "react";
import arrowright from "../../assets/arrowrightone.svg";
import { Link } from "react-router-dom";
import OrangeWhiteButton from "../../Components/orangeWhiteButton";

const BusinessGrowth = () => {
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const [isTradeHovered, setIsTradeHovered] = useState(false);
  const [isContractHovered, setIsContractHovered] = useState(false);
  const [isCapitalHovered, setIsCapitalHovered] = useState(false);
  const [isRealHovered, setIsRealHovered] = useState(false);
  const [isLpoHovered, setIsLpoHovered] = useState(false);
  const [isInvoiceHovered, setIsInvoiceHovered] = useState(false);

  return (
    <div className="flex flex-col items-center bg-businessbg bg-cover">
      <div className="flex flex-col w-97.5 md:w-176 lg:w-300">
        <div className="flex flex-col items-center py-16 md:py-12 lg:py-32 gap-12 md:gap-12 lg:gap-16">
          <div className="flex flex-col gap-6 md:gap-6 lg:gap-x-3">
            {/* Mobile & Tab */}
            <div className="flex flex-col py-3 gap-2 lg:hidden">
              <span className="font-gotham text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end">
                Fuel Your Business Growth
              </span>
              <p className="text-base lg:text-lg text-mobileMenuColor lg:w-160">
                With our range of loan products, businesses can access medium to
                long-term financing solutions tailored to their needs. Our
                structured financing options provide the flexibility and support
                to propel your business forward.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden py-3 gap-6 md:gap-y-6 md:gap-x-3">
              <div className="flex flex-col px-5 py-6 gap-3 bg-projectimage bg-cover w-97.5 md:w-86.5 h-86.5">
                <div className="flex flex-col justify-between">
                  <div className="h-45"></div>
                  <div className="flex flex-col gap-1 w-87.5 md:w-76.5">
                    <span className="text-white font-gotham text-xl">
                      Project Finance
                    </span>
                    <p className="text-productsText text-base">
                      Fund large-scale projects and pay back using generated
                      project revenue.
                    </p>
                  </div>
                </div>
                <div className="text-menuHover">
                  <Link
                    to="/"
                    className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                  >
                    <p className="text-sm md:text-base lg:text-base text-menuHover">
                      Apply Now
                    </p>
                    <img src={arrowright} alt="arrowright" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col px-5 py-6 gap-3 bg-tradeimage bg-cover w-97.5 md:w-86.5 h-86.5">
                <div className="flex flex-col justify-between">
                  <div className="h-45"></div>
                  <div className="flex flex-col gap-1 w-87.5 md:w-76.5">
                    <span className="text-white font-gotham text-xl">
                      Trade Finance
                    </span>
                    <p className="text-productsText text-base">
                      Access strategic funding to expedite business growth and
                      transactions.
                    </p>
                  </div>
                </div>
                <div className="text-menuHover">
                  <Link
                    to="/"
                    className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                  >
                    <p className="text-sm md:text-base lg:text-base text-menuHover">
                      Apply Now
                    </p>
                    <img src={arrowright} alt="arrowright" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col px-5 py-6 gap-3 bg-contractimage bg-cover w-97.5 md:w-86.5 h-86.5">
                <div className="flex flex-col justify-between">
                  <div className="h-45"></div>
                  <div className="flex flex-col gap-1 w-87.5 md:w-76.5">
                    <span className="text-white font-gotham text-xl">
                      Contract Finance
                    </span>
                    <p className="text-productsText text-base">
                      Fast-track contract progress with stable working capital
                      financing.
                    </p>
                  </div>
                </div>
                <div className="text-menuHover">
                  <Link
                    to="/"
                    className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                  >
                    <p className="text-sm md:text-base lg:text-base text-menuHover">
                      Apply Now
                    </p>
                    <img src={arrowright} alt="arrowright" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col px-5 py-6 gap-3 bg-capitalimage bg-cover w-97.5 md:w-86.5 h-86.5">
                <div className="flex flex-col justify-between">
                  <div className="h-45"></div>
                  <div className="flex flex-col gap-1 w-87.5 md:w-76.5">
                    <span className="text-white font-gotham text-xl">
                      Working Capital Finance
                    </span>
                    <p className="text-productsText text-base">
                      Gain access to extra funds to support day-to-day financial
                      requirements.
                    </p>
                  </div>
                </div>
                <div className="text-menuHover">
                  <Link
                    to="/"
                    className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                  >
                    <p className="text-sm md:text-base lg:text-base text-menuHover">
                      Apply Now
                    </p>
                    <img src={arrowright} alt="arrowright" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col px-5 py-6 gap-3 bg-realestateimage bg-cover w-97.5 md:w-86.5 h-86.5">
                <div className="flex flex-col justify-between">
                  <div className="h-45"></div>
                  <div className="flex flex-col gap-1 w-87.5 md:w-76.5">
                    <span className="text-white font-gotham text-xl">
                      Real Estate Finance
                    </span>
                    <p className="text-productsText text-base">
                      Real estate offers, ranging from shopping centres to
                      long-term debt solutions.
                    </p>
                  </div>
                </div>
                <div className="text-menuHover">
                  <Link
                    to="/"
                    className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                  >
                    <p className="text-sm md:text-base lg:text-base text-menuHover">
                      Apply Now
                    </p>
                    <img src={arrowright} alt="arrowright" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col px-5 py-6 gap-3 bg-lpoimage bg-cover w-97.5 md:w-86.5 h-86.5">
                <div className="flex flex-col justify-between">
                  <div className="h-45"></div>
                  <div className="flex flex-col gap-1 w-87.5 md:w-76.5">
                    <span className="text-white font-gotham text-xl">
                      LPO Finance
                    </span>
                    <p className="text-productsText text-base">
                      Access short-term funding to settle local purchase orders
                      swiftly.
                    </p>
                  </div>
                </div>
                <div className="text-menuHover">
                  <Link
                    to="/"
                    className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                  >
                    <p className="text-sm md:text-base lg:text-base text-menuHover">
                      Apply Now
                    </p>
                    <img src={arrowright} alt="arrowright" />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col px-5 py-6 gap-3 bg-invoiceimage bg-cover w-97.5 md:w-86.5 h-86.5">
                <div className="flex flex-col justify-between">
                  <div className="h-45"></div>
                  <div className="flex flex-col gap-1 w-87.5 md:w-76.5">
                    <span className="text-white font-gotham text-xl">
                      Invoice Discounting Facility
                    </span>
                    <p className="text-productsText text-base">
                      Optimize working capital by accessing immediate funds
                      against accepted invoices.
                    </p>
                  </div>
                </div>
                <div className="text-menuHover">
                  <Link
                    to="/"
                    className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                  >
                    <p className="text-sm md:text-base lg:text-base text-menuHover">
                      Apply Now
                    </p>
                    <img src={arrowright} alt="arrowright" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Web */}
            <div className="hidden md:hidden lg:grid lg:grid-cols-3 gap-3">
              <div className="col-span-2">
                <div className="lg:flex lg:flex-col lg:py-3 lg:gap-3 lg:w-199">
                  <span className="font-gotham lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end">
                    Fuel Your Business Growth
                  </span>
                  <p className="text-base lg:text-lg text-mobileMenuColor lg:w-160">
                    With our range of loan products, businesses can access
                    medium to long-term financing solutions tailored to their
                    needs. Our structured financing options provide the
                    flexibility and support to propel your business forward.
                  </p>
                </div>
              </div>
              <div
                className="group flex flex-col lg:px-5 lg:py-6 bg-projectweb bg-cover hover:bg-projectwebdark lg:w-98 lg:h-54 relative overflow-hidden"
                onMouseEnter={() => setIsProductsHovered(true)}
                onMouseLeave={() => setIsProductsHovered(false)}
              >
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-1 w-87.5 mt-34.5 group-hover:mt-22.5">
                    <span className="text-white font-gotham text-xl">
                      Project Finance
                    </span>
                    <p
                      className={`text-productsText text-base ${
                        isProductsHovered ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Fund large-scale projects and pay back using generated
                      project revenue.
                    </p>
                  </div>
                </div>
                <div
                  className={`absolute top-6 right-5 ${
                    isProductsHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Link
                    to="/"
                    className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                  >
                    <p className="text-sm md:text-base lg:text-base text-menuHover">
                      Apply Now
                    </p>
                    <img src={arrowright} alt="arrowright" />
                  </Link>
                </div>
              </div>
              <div
                className="group flex flex-col lg:px-5 lg:py-6 bg-tradeweb bg-cover hover:bg-tradewebdark lg:w-98 lg:h-54 relative overflow-hidden"
                onMouseEnter={() => setIsTradeHovered(true)}
                onMouseLeave={() => setIsTradeHovered(false)}
              >
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-1 w-87.5 mt-34.5 group-hover:mt-22.5">
                    <span className="text-white font-gotham text-xl">
                      Trade Finance
                    </span>
                    <p
                      className={`text-productsText text-base ${
                        isTradeHovered ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Access strategic funding to expedite business growth and
                      transactions.
                    </p>
                  </div>
                </div>
                <div
                  className={`absolute top-6 right-5 ${
                    isTradeHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Link
                    to="/"
                    className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                  >
                    <p className="text-sm md:text-base lg:text-base text-menuHover">
                      Apply Now
                    </p>
                    <img src={arrowright} alt="arrowright" />
                  </Link>
                </div>
              </div>
              <div
                className="group flex flex-col lg:px-5 lg:py-6 bg-contractweb bg-cover hover:bg-contractwebdark lg:w-98 lg:h-54 relative overflow-hidden"
                onMouseEnter={() => setIsContractHovered(true)}
                onMouseLeave={() => setIsContractHovered(false)}
              >
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-1 w-87.5 mt-34.5 group-hover:mt-22.5">
                    <span className="text-white font-gotham text-xl">
                      Contract Finance
                    </span>
                    <p
                      className={`text-productsText text-base ${
                        isContractHovered ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Fast-track contract progress with stable working capital
                      financing.
                    </p>
                  </div>
                </div>
                <div
                  className={`absolute top-6 right-5 ${
                    isContractHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Link
                    to="/"
                    className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                  >
                    <p className="text-sm md:text-base lg:text-base text-menuHover">
                      Apply Now
                    </p>
                    <img src={arrowright} alt="arrowright" />
                  </Link>
                </div>
              </div>
              <div
                className="group flex flex-col lg:px-5 lg:py-6 bg-capitalweb bg-cover hover:bg-capitalwebdark lg:w-98 lg:h-54 relative overflow-hidden"
                onMouseEnter={() => setIsCapitalHovered(true)}
                onMouseLeave={() => setIsCapitalHovered(false)}
              >
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-1 w-87.5 mt-34.5 group-hover:mt-22.5">
                    <span className="text-white font-gotham text-xl">
                      Working Capital Finance
                    </span>
                    <p
                      className={`text-productsText text-base ${
                        isCapitalHovered ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Gain access to extra funds to support day-to-day financial
                      requirements.
                    </p>
                  </div>
                </div>
                <div
                  className={`absolute top-6 right-5 ${
                    isCapitalHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Link
                    to="/"
                    className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                  >
                    <p className="text-sm md:text-base lg:text-base text-menuHover">
                      Apply Now
                    </p>
                    <img src={arrowright} alt="arrowright" />
                  </Link>
                </div>
              </div>
              <div
                className="group flex flex-col lg:px-5 lg:py-6 bg-realestateweb bg-cover hover:bg-realestatewebdark lg:w-98 lg:h-54 relative overflow-hidden"
                onMouseEnter={() => setIsRealHovered(true)}
                onMouseLeave={() => setIsRealHovered(false)}
              >
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-1 w-87.5 mt-34.5 group-hover:mt-22.5">
                    <span className="text-white font-gotham text-xl">
                      Real Estate Finance
                    </span>
                    <p
                      className={`text-productsText text-base ${
                        isRealHovered ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Real estate offers, ranging from shopping centres to
                      long-term debt solutions.
                    </p>
                  </div>
                </div>
                <div
                  className={`absolute top-6 right-5 ${
                    isRealHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Link
                    to="/"
                    className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                  >
                    <p className="text-sm md:text-base lg:text-base text-menuHover">
                      Apply Now
                    </p>
                    <img src={arrowright} alt="arrowright" />
                  </Link>
                </div>
              </div>
              <div
                className="group flex flex-col lg:px-5 lg:py-6 bg-lpoweb bg-cover hover:bg-lpowebdark lg:w-98 lg:h-54 relative overflow-hidden"
                onMouseEnter={() => setIsLpoHovered(true)}
                onMouseLeave={() => setIsLpoHovered(false)}
              >
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-1 w-87.5 mt-34.5 group-hover:mt-22.5">
                    <span className="text-white font-gotham text-xl">
                      LPO Finance
                    </span>
                    <p
                      className={`text-productsText text-base ${
                        isLpoHovered ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Access short-term funding to settle local purchase orders
                      swiftly.
                    </p>
                  </div>
                </div>
                <div
                  className={`absolute top-6 right-5 ${
                    isLpoHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Link
                    to="/"
                    className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                  >
                    <p className="text-sm md:text-base lg:text-base text-menuHover">
                      Apply Now
                    </p>
                    <img src={arrowright} alt="arrowright" />
                  </Link>
                </div>
              </div>
              <div
                className="group flex flex-col lg:px-5 lg:py-6 bg-invoiceweb bg-cover hover:bg-invoicewebdark lg:w-98 lg:h-54 relative overflow-hidden"
                onMouseEnter={() => setIsInvoiceHovered(true)}
                onMouseLeave={() => setIsInvoiceHovered(false)}
              >
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-1 w-87.5 mt-34.5 group-hover:mt-22.5">
                    <span className="text-white font-gotham text-xl">
                      Invoice Discounting Finance
                    </span>
                    <p
                      className={`text-productsText text-base ${
                        isInvoiceHovered ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Optimize working capital by accessing immediate funds
                      against accepted invoices.
                    </p>
                  </div>
                </div>
                <div
                  className={`absolute top-6 right-5 ${
                    isInvoiceHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Link
                    to="/"
                    className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                  >
                    <p className="text-sm md:text-base lg:text-base text-menuHover">
                      Apply Now
                    </p>
                    <img src={arrowright} alt="arrowright" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link to="/">
            <OrangeWhiteButton
              buttonText="Learn more"
              imageSrc={arrowright}
              alt="arrowright"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessGrowth;
