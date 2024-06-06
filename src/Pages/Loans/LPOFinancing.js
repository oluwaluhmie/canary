import React from "react";
import lpofinancingmob from "../../assets/lpofinancingmob.png";
import lpofinancingtab from "../../assets/lpofinancingtab.png";
import lpofinancingweb from "../../assets/lpofinancingweb.png";
import { Link } from "react-router-dom";
import check from "../../assets/check.svg";
import arrowright from "../../assets/arrowright.svg";

const LPOFinancing = () => {
  return (
    <div className="flex flex-col items-center w-97.5 md:w-176 lg:w-300">
      <div className="py-12 md:py-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center">
            <img
              src={lpofinancingmob}
              alt="lpofinancingmob"
              className="block md:hidden lg:hidden object-cover"
            />
            <img
              src={lpofinancingtab}
              alt="lpofinancingtab"
              className="hidden md:block lg:hidden object-cover"
            />
            <img
              src={lpofinancingweb}
              alt="lpofinancingweb"
              className="hidden md:hidden lg:block object-cover"
            />
          </div>
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-1 md:gap-2">
              <span className="font-gotham text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
                LPO Financing
              </span>
              <p className="text-mobileMenuColor text-base">
                At Canary Point Finance, we specialize in offering short-term
                funding solutions to businesses, enabling them to fulfil local
                purchase orders from their customers or clients. Our seamless
                process includes assessment, funding, order fulfillment, and
                repayment, ensuring businesses have access to the necessary
                capital to procure inventory, fulfil orders, and meet their
                sales commitments.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:w-176">
              <div className="flex flex-col gap-2 md:w-126.5">
                <p className="text-menuHover text-lg">Benefits</p>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-3">
                    <img src={check} alt="check" />
                    <p className="text-mobileMenuColor text-base">
                      Short-term funding for purchase orders
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <img src={check} alt="check" />
                    <p className="text-mobileMenuColor text-base">
                      Improve cash flow management
                    </p>
                  </div>
                </div>
              </div>
              <Link to="" className="flex items-end">
                <button className="flex items-center justify-center gap-2 text-lg border-2 border-menuHover text-transparent bg-clip-text bg-gradient-to-b from-linkOrangeButtonText-start to-linkOrangeButtonText-end bg-white w-full md:w-41.5 h-12 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end">
                  Apply Now
                  <img src={arrowright} alt="arrowright" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LPOFinancing;
