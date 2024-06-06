import React from "react";
import contractfinancemob from "../../assets/contractfinancemob.png";
import contractfinancetab from "../../assets/contractfinancetab.png";
import contractfinanceweb from "../../assets/contractfinanceweb.png";
import { Link } from "react-router-dom";
import check from "../../assets/check.svg";
import arrowright from "../../assets/arrowright.svg";

const ContractFinancing = () => {
  return (
    <div className="flex flex-col items-center w-97.5 md:w-176 lg:w-300">
      <div className="py-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center">
            <img
              src={contractfinancemob}
              alt="contractfinancemob"
              className="block md:hidden lg:hidden object-cover"
            />
            <img
              src={contractfinancetab}
              alt="contractfinancetab"
              className="hidden md:block lg:hidden object-cover"
            />
            <img
              src={contractfinanceweb}
              alt="contractfinanceweb"
              className="hidden md:hidden lg:block object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <span className="font-gotham text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
                Contract Financing
              </span>
              <p className="text-mobileMenuColor text-base">
                Canary Point Finance offers special solutions for contract
                financing associated with the implementation of construction
                contracts or other contracting of all types, where projects have
                been assigned from governmental or semi-governmental
                organizations as well as private sector, and must have been
                granted letters of guarantee with sufficient liquidity to
                finance the costs of the project.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-menuHover text-lg">Benefits</p>
              <div className="flex flex-col gap-1">
                <div className="flex gap-3">
                  <img src={check} alt="check" />
                  <p className="text-mobileMenuColor text-base">
                    Fast money deposit for urgent needs
                  </p>
                </div>
                <div className="flex gap-3">
                  <img src={check} alt="check" />
                  <p className="text-mobileMenuColor text-base">
                    Stable working capital financing
                  </p>
                </div>
              </div>
            </div>
            <Link>
              <button className="flex items-center justify-center gap-2 text-lg border-2 border-menuHover text-transparent bg-clip-text bg-gradient-to-b from-linkOrangeButtonText-start to-linkOrangeButtonText-end bg-white w-full md:w-70.25 h-12 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end">
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

export default ContractFinancing;
