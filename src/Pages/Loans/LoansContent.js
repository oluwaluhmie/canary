import React, { useEffect, useRef, useState } from "react";
import loanmob from "../../assets/loanmob.png";
import loantab from "../../assets/loantab.png";
import loanweb from "../../assets/loanweb.png";
import { Link } from "react-router-dom";
import arrowright from "../../assets/arrowright.svg";
import bluearrowright from "../../assets/bluearrowright.svg";
import ProjectFinancing from "./ProjectFinancing";
import TradeFinancing from "./TradeFinancing";
import ContractFinancing from "./ContractFinancing";
import WorkingCapitalFinancing from "./WorkingCapitalFinancing";
import RealEstateFinancing from "./RealEstateFinancing";
import LPOFinancing from "./LPOFinancing";
import InvoiceDiscounting from "./InvoiceDiscounting";
import TextBox from "../../Components/textBox";

const LoansContent = () => {
  const barRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [barTop, setBarTop] = useState(0);
  const unstickPoint = 6200;
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTerm, setLoanTerm] = useState(null);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const handleLoanAmountChange = (e) => {
    setLoanAmount(e.target.value);
  };

  const handleLoanTermClick = (term) => {
    setLoanTerm(term);
    calculateLoan(loanAmount, term);
  };

  const calculateLoan = (amount, term) => {
    const principal = parseFloat(amount);
    const annualInterestRate = 0.1; // Example annual interest rate of 5%
    const monthlyInterestRate = annualInterestRate / 12;
    const numberOfPayments = term * 12;

    const monthlyPaymentCalc =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    const totalInterestCalc = monthlyPaymentCalc * numberOfPayments - principal;

    setMonthlyPayment(monthlyPaymentCalc.toFixed(2));
    setTotalInterest(totalInterestCalc.toFixed(2));
  };

  useEffect(() => {
    if (barRef.current) {
      setBarTop(barRef.current.offsetTop);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (barRef.current) {
        const scrollPosition = window.scrollY;
        if (scrollPosition >= barTop && scrollPosition < unstickPoint) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [barTop, unstickPoint]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center">
          {/* Unlock your Business Potential  */}
          <div className="flex flex-col items-center w-full bg-businesspotentialng bg-cover">
            <div className="px-5 md:px-12 pt-12 pb-16 lg:py-24">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-x-16 w-97.5 md:w-176 lg:w-300">
                <div className="flex flex-col items-center lg:hidden">
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
                </div>
                <div className="flex flex-col gap-5 lg:w-142 lg:py-12 lg:justify-between">
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
                <div className="hidden lg:flex lg:flex-col items-center lg:w-142">
                  <img
                    src={loanweb}
                    alt="loanweb"
                    className="hidden md:hidden lg:block object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Fixed bar */}
          <div
            className={`hidden lg:flex w-full ${
              isFixed ? "fixed top-0 pt-25" : ""
            }`}
            ref={barRef}
          >
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
          <div className="flex flex-col items-center w-full bg-financecalculatorbg bg-cover">
            <div className="px-5 md:px-12 py-12 md:py-16 lg:py-24">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-x-16 w-97.5 md:w-176 lg:w-300">
                <div className="flex flex-col gap-6 lg:justify-between lg:py-6 lg:w-139">
                  <div className="flex flex-col gap-2 lg:gap-3">
                    <p className="text-blueBorderStroke md:text-lg lg:text-xl">
                      Finance Calculator
                    </p>
                    <span className="font-gotham text-2xl md:text-3xl lg:text-4xl lg:w-106 text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
                      Estimate your Financial Options
                    </span>
                    <p className="text-mobileMenuColor lg:text-lg">
                      Use our finance calculator to get a quick estimate of the
                      financing options available for your business needs.
                      Simply input your desired loan amount, term, and interest
                      rate to discover potential repayment options and explore
                      the best fit for your financial requirements.
                    </p>
                  </div>
                  <Link to="" className="">
                    <button className="flex items-center justify-center gap-2 text-lg md:text-base lg:text-lg border-2 border-blueBorderStroke text-transparent bg-clip-text bg-gradient-to-b from-linkBlueButtonText-start to-linkBlueButtonText-end bg-white w-full md:w-41.5 lg:w-47.25 h-12 hover:bg-gradient-to-b hover:from-linkBlueButtonText-start hover:to-linkBlueButtonText-end">
                      Apply Now
                      <img src={bluearrowright} alt="bluearrowright" />
                    </button>
                  </Link>
                </div>
                <div className="bg-white lg:w-145">
                  <div className="flex flex-col gap-5 md:gap-6 px-5 md:px-6 lg:px-8 py-5 md:py-6 lg:py-8">
                    <div className="flex flex-col gap-1.5 lg:gap-2">
                      <p className="text-mobileMenuColor text-base">
                        Loan Amount
                      </p>
                      <div>
                        <TextBox
                          placeholder="Amount"
                          value={loanAmount}
                          onChange={handleLoanAmountChange}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 md:justify-between md:items-center">
                      <p className="text-mobileMenuColor text-base">
                        Loan Term (In Years)
                      </p>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5, 6].map((term) => (
                          <button
                            key={term}
                            className={`flex justify-center items-center rounded-full h-11 w-11.6675 text-calculatorBorder bg-white border border-calculatorBorder ${
                              loanTerm === term ? "text-menuHover" : ""
                            }`}
                            onClick={() => handleLoanTermClick(term)}
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 md:gap-4 px-5 md:px-6 lg:px-8 py-5 md:py-6 lg:py-8">
                    <div className="flex justify-between">
                      <p className="text-mobileMenuColor text-base">
                        Monthly Payment:
                      </p>
                      <p className="text-menuHover font-bold text-xl">
                        NGN {monthlyPayment}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-mobileMenuColor text-base">
                        Total Interest
                      </p>
                      <p className="text-menuHover font-bold text-xl">
                        NGN {totalInterest}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col text-center px-5 md:px-6 lg:px-8 py-5 md:py-6 lg:py-8">
                    <p className="text-mobileMenuColor text-sm">
                      Note: The Approximate Monthly Repayment figure for Canary
                      Point Finance's Loan is indicative and is not meant to be
                      final or binding on the Finance House. The Finance House
                      reserves the right to determine the final interest rate in
                      accordance with applicable laws and amount that can be
                      borrowed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoansContent;
