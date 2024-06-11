import React from "react";
import tradefinancemob from "../../assets/tradefinancemob.png";
import tradefinancetab from "../../assets/tradefinancetab.png";
import tradefinanceweb from "../../assets/tradefinanceweb.png";
import { Link } from "react-router-dom";
import check from "../../assets/check.svg";
import arrowright from "../../assets/arrowright.svg";

const TradeFinancing = () => {
  return (
    <div
      id="tradeSection"
      className="flex flex-col items-center w-97.5 md:w-176 lg:w-300"
    >
      <div className="py-12 md:py-16 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-x-16 lg:w-300">
          <div className="flex flex-col items-center lg:w-142">
            <img
              src={tradefinancemob}
              alt="tradefinancemob"
              className="block md:hidden lg:hidden object-cover"
            />
            <img
              src={tradefinancetab}
              alt="tradefinancetab"
              className="hidden md:block lg:hidden object-cover"
            />
            <img
              src={tradefinanceweb}
              alt="tradefinanceweb"
              className="hidden md:hidden lg:block object-cover"
            />
          </div>
          {/* Mobile/Tab */}
          <div className="flex flex-col gap-6 md:gap-8 lg:hidden">
            <div className="flex flex-col gap-1 md:gap-2">
              <span className="font-gotham text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
                Trade Financing
              </span>
              <p className="text-mobileMenuColor text-base">
                Our finance equips SMEs and other businesses with the necessary
                market information, resources, tools and technical support
                required to help fast track business growth. We facilitate
                domestic and international trade finance, providing strategic
                finance solutions to meet funding needs of the classes of
                transactions. <br />
                <br /> Whatever your trade needs, you need a financial partner
                who can enhance your business transactions by financing the
                trade.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:w-176">
              <div className="flex flex-col gap-2 md:w-126.5">
                <p className="text-menuHover text-lg">Benefits</p>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-3">
                    <img src={check} alt="check" />
                    <p className="text-mobileMenuColor text-base">
                      Strategic funding for trade transactions
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <img src={check} alt="check" />
                    <p className="text-mobileMenuColor text-base">
                      Facilitate domestic and international trade
                    </p>
                  </div>
                </div>
              </div>
              <Link to="/account" className="flex items-end">
                <button className="flex items-center justify-center gap-2 text-lg border-2 border-menuHover text-transparent bg-clip-text bg-gradient-to-b from-linkOrangeButtonText-start to-linkOrangeButtonText-end bg-white w-full md:w-41.5 h-12 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end">
                  Apply Now
                  <img src={arrowright} alt="arrowright" />
                </button>
              </Link>
            </div>
          </div>
          {/* Web */}
          <div className="hidden lg:flex lg:flex-col lg:justify-between lg:w-142 lg:py-6">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3 w-128">
                <span className="font-gotham text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
                  Trade Financing
                </span>
                <p className="text-mobileMenuColor text-base">
                  Our finance equips SMEs and other businesses with the
                  necessary market information, resources, tools and technical
                  support required to help fast track business growth. We
                  facilitate domestic and international trade finance, providing
                  strategic finance solutions to meet funding needs of the
                  classes of transactions. <br />
                  <br /> Whatever your trade needs, you need a financial partner
                  who can enhance your business transactions by financing the
                  trade.
                </p>
              </div>
              <div className="flex flex-col gap-2 w-142">
                <p className="text-menuHover text-lg">Benefits</p>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-3">
                    <img src={check} alt="check" />
                    <p className="text-mobileMenuColor text-base">
                      Strategic funding for trade transactions
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <img src={check} alt="check" />
                    <p className="text-mobileMenuColor text-base">
                      Facilitate domestic and international trade
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/account" className="flex items-end">
              <button className="flex items-center justify-center gap-2 text-lg border-2 border-menuHover text-transparent bg-clip-text bg-gradient-to-b from-linkOrangeButtonText-start to-linkOrangeButtonText-end bg-white w-full md:w-41.5 h-12 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end">
                Apply Now
                <img src={arrowright} alt="arrowright" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeFinancing;
