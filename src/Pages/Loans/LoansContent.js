import React from "react";
import loanmob from "../../assets/loanmob.png";
import loantab from "../../assets/loantab.png";
import loanweb from "../../assets/loanweb.png";
import { Link } from "react-router-dom";
import arrowright from "../../assets/arrowright.svg";
import ProjectFinancing from "./ProjectFinancing";
import TradeFinancing from "./TradeFinancing";
import ContractFinancing from "./ContractFinancing";
import WorkingCapitalFinancing from "./WorkingCapitalFinancing";
import RealEstateFinancing from "./RealEstateFinancing";
import LPOFinancing from "./LPOFinancing";
import InvoiceDiscounting from "./InvoiceDiscounting";

const LoansContent = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-full md:w-200 lg:w-full">
        <div className="flex flex-col items-center">
          {/* Unlock your Business Potential  */}
          <div className="flex flex-col items-center w-full bg-businesspotentialng bg-cover">
            <div className="px-5 md:px-12 pt-12 pb-16">
              <div className="flex flex-col gap-12 w-97.5 md:w-176 lg:w-300">
                <div className="flex flex-col items-center lg:w-142">
                  <img
                    src={loanmob}
                    alt="loanmob"
                    className="block md:hidden lg:hidden object-cover"
                  />
                  <img
                    src={loantab}
                    alt="loantab"
                    className="hidden md:block lg:hidden object-cover"
                  />
                  <img
                    src={loanweb}
                    alt="loanweb"
                    className="hidden md:hidden lg:block object-cover"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2 md:gap-3 lg:gap-5">
                    <span className="font-gotham text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
                      Unlock your Business Potential
                    </span>
                    <p className="text-mobileMenuColor text-lg lg:text-xl">
                      At Canary Point Finance, we understand that behind every
                      thriving enterprise lies a story of determination,
                      resilience, and strategic financial decision-making. As
                      you navigate the intricate pathways of business growth, we
                      will be your steadfast companion, offering a suite of
                      tailored loan solutions designed to fuel your aspirations
                      and transform your dreams into reality.
                    </p>
                  </div>
                  <Link
                    to=""
                    className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                  >
                    <p className="text-lg text-menuHover">
                      Explore our loan offerings
                    </p>
                    <img src={arrowright} alt="arrowright" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Fixed bar */}
          <div className="hidden lg:flex lg:flex-col pt-25 w-full">
            <div className="flex flex-col justify-center items-center w-full bg-investorBg py-8 gap-4">
              <div className="flex justify-center gap-x-4 items-center w-300">
                <Link
                  to=""
                  className="flex items-center justify-center bg-gradient-to-b from-loansOffers-start to to-loansOffers-end border border-productsText w-48 h-13 shadow-loan"
                >
                  <button className="text-sm text-menuTextColor">
                    Project Finance
                  </button>
                </Link>
                <Link
                  to=""
                  className="flex items-center justify-center bg-gradient-to-b from-loansOffers-start to to-loansOffers-end border border-productsText w-48 h-13 shadow-loan"
                >
                  <button className="text-sm text-menuTextColor">
                    Trade Finance
                  </button>
                </Link>
                <Link
                  to=""
                  className="flex items-center justify-center bg-gradient-to-b from-loansOffers-start to to-loansOffers-end border border-productsText w-48 h-13 shadow-loan"
                >
                  <button className="text-sm text-menuTextColor">
                    Contract Finance
                  </button>
                </Link>
                <Link
                  to=""
                  className="flex items-center justify-center bg-gradient-to-b from-loansOffers-start to to-loansOffers-end border border-productsText w-48 h-13 shadow-loan"
                >
                  <button className="text-sm text-menuTextColor">
                    Working Capital Finance
                  </button>
                </Link>
                <Link
                  to=""
                  className="flex items-center justify-center bg-gradient-to-b from-loansOffers-start to to-loansOffers-end border border-productsText w-48 h-13 shadow-loan"
                >
                  <button className="text-sm text-menuTextColor">
                    Real Estate Finance
                  </button>
                </Link>
              </div>
              <div className="flex justify-center gap-x-4 items-center w-300">
              <Link
                  to=""
                  className="flex items-center justify-center bg-gradient-to-b from-loansOffers-start to to-loansOffers-end border border-productsText w-48 h-13 shadow-loan"
                >
                  <button className="text-sm text-menuTextColor">
                    LPO Finance
                  </button>
                </Link>
                <Link
                  to=""
                  className="flex items-center justify-center bg-gradient-to-b from-loansOffers-start to to-loansOffers-end border border-productsText w-48 h-13 shadow-loan"
                >
                  <button className="text-sm text-menuTextColor">
                    Invoice Discount
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Loans Offers */}
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center w-full">
              <ProjectFinancing />
              <TradeFinancing />
              <ContractFinancing />
              <WorkingCapitalFinancing />
              <RealEstateFinancing />
              <LPOFinancing />
              <InvoiceDiscounting />
            </div>
          </div>
          {/* Finance Calculator */}
          <div>Finance Calculator</div>
        </div>
      </div>
    </div>
  );
};

export default LoansContent;
