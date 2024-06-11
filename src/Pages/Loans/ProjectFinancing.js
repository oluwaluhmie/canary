import React from "react";
import projectfinancemob from "../../assets/projectfinancemob.png";
import projectfinancetab from "../../assets/projectfinancetab.png";
import projectfinanceweb from "../../assets/projectfinanceweb.png";
import { Link } from "react-router-dom";
import check from "../../assets/check.svg";
import arrowright from "../../assets/arrowright.svg";

const ProjectFinancing = () => {
  return (
    <div
      id="projectSection"
      className="flex flex-col items-center w-97.5 md:w-176 lg:w-300"
    >
      <div className="py-12 md:py-16 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-x-16 lg:w-300">
          {/* Mobile/Tab */}
          <div className="flex flex-col items-center lg:hidden">
            <img
              src={projectfinancemob}
              alt="projectfinancemob"
              className="block md:hidden lg:hidden object-cover"
            />
            <img
              src={projectfinancetab}
              alt="projectfinancetab"
              className="hidden md:block lg:hidden object-cover"
            />
          </div>
          <div className="flex flex-col gap-6 md:gap-8 lg:hidden">
            <div className="flex flex-col gap-1 md:gap-2 lg:gap-3 lg:w-128">
              <span className="font-gotham text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
                Project Financing
              </span>
              <p className="text-mobileMenuColor text-base">
                Finance large scale projects without having to worry about the
                funds at the development stage. Canary Point Finance makes it
                possible to fund projects and payback with the money that is
                generated from the project that was initially funded. With this
                financing solution, the project assets, rights and interests may
                be held by the bank as collateral until the loan is fully paid
                back.
              </p>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-col gap-8 lg:gap-24.5 md:w-176 lg:w-142">
              <div className="flex flex-col gap-2 md:w-126.5 lg:w-142">
                <p className="text-menuHover text-lg">Benefits</p>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-3">
                    <img src={check} alt="check" />
                    <p className="text-mobileMenuColor text-base">
                      Medium to long term financing
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <img src={check} alt="check" />
                    <p className="text-mobileMenuColor text-base">
                      Structured drawdown available
                    </p>
                  </div>
                </div>
              </div>
              <Link to="/account" className="flex items-end ">
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
                <span className="font-gotham text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
                  Project Financing
                </span>
                <p className="text-mobileMenuColor text-base">
                  Finance large scale projects without having to worry about the
                  funds at the development stage. Canary Point Finance makes it
                  possible to fund projects and payback with the money that is
                  generated from the project that was initially funded. With
                  this financing solution, the project assets, rights and
                  interests may be held by the bank as collateral until the loan
                  is fully paid back.
                </p>
              </div>
              <div className="flex flex-col gap-2 md:w-126.5 lg:w-142">
                <p className="text-menuHover text-lg">Benefits</p>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-3">
                    <img src={check} alt="check" />
                    <p className="text-mobileMenuColor text-base">
                      Medium to long term financing
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <img src={check} alt="check" />
                    <p className="text-mobileMenuColor text-base">
                      Structured drawdown available
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/account" className="flex items-end ">
              <button className="flex items-center justify-center gap-2 text-lg border-2 border-menuHover text-transparent bg-clip-text bg-gradient-to-b from-linkOrangeButtonText-start to-linkOrangeButtonText-end bg-white w-full md:w-41.5 h-12 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end">
                Apply Now
                <img src={arrowright} alt="arrowright" />
              </button>
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-col items-center lg:w-142">
            <img
              src={projectfinanceweb}
              alt="projectfinanceweb"
              className="hidden md:hidden lg:block object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFinancing;
