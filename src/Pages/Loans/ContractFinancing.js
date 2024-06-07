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
      <div className="py-12 md:py-16 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-x-16 lg:w-300">
          {/* Mobile/Tab */}
          <div className="flex flex-col items-center lg:hidden">
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
          </div>
          <div className="flex flex-col gap-6 md:gap-8 lg:hidden">
            <div className="flex flex-col gap-1 md:gap-2 lg:gap-3 lg:w-128">
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
            <div className="flex flex-col md:flex-row lg:flex-col gap-8 lg:gap-24.5 md:w-176 lg:w-142">
              <div className="flex flex-col gap-2 md:w-126.5">
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
              <Link to="" className="flex items-end">
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
                  Contract Financing
                </span>
                <p className="text-mobileMenuColor text-base">
                  Canary Point Finance offers special solutions for contract
                  financing associated with the implementation of construction
                  contracts or other contracting of all types, where projects
                  have been assigned from governmental or semi-governmental
                  organizations as well as private sector, and must have been
                  granted letters of guarantee with sufficient liquidity to
                  finance the costs of the project.
                </p>
              </div>
              <div className="flex flex-col gap-2 md:w-126.5">
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
            </div>
            <Link to="" className="flex items-end">
              <button className="flex items-center justify-center gap-2 text-lg border-2 border-menuHover text-transparent bg-clip-text bg-gradient-to-b from-linkOrangeButtonText-start to-linkOrangeButtonText-end bg-white w-full md:w-41.5 h-12 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end">
                Apply Now
                <img src={arrowright} alt="arrowright" />
              </button>
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-col items-center lg:w-142">
            <img
              src={contractfinanceweb}
              alt="contractfinanceweb"
              className="hidden md:hidden lg:block object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractFinancing;
