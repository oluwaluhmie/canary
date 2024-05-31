import React, { useState, useEffect } from "react";
import md from "../../assets/mdmobile.png";
import mdtab from "../../assets/mdtab.png";
import mdweb from "../../assets/mdweb.png";
import cfo from "../../assets/cfomobile.png";
import cfotab from "../../assets/cfotab.png";
import cfoweb from "../../assets/cfoweb.png";
import hrm from "../../assets/hrmmobile.png";
import hrmtab from "../../assets/hrmtab.png";
import hrmweb from "../../assets/hrmweb.png";
import hhr from "../../assets/hhrmobile.png";
import hhrtab from "../../assets/hhrtab.png";
import hhrweb from "../../assets/hhrweb.png";
import hoo from "../../assets/hoomobile.png";
import hootab from "../../assets/hootab.png";
import hooweb from "../../assets/hooweb.png";
import defaultimage from "../../assets/image.png";
import defaultimagetab from "../../assets/imagetab.png";
import defaultimageweb from "../../assets/imageweb.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ManagementContent = () => (
  <div className="flex flex-col gap-12">
    <div className="flex flex-col gap-8 w-97.5 md:w-176 lg:w-200">
      <span className="text-mobileMenuColor text-base md:text-xl">
        Our management consists of qualified individuals who are responsible for
        the daily strategic planning, financial operations, regulatory
        compliance, client relationships, and workforce development within our
        financial service company.
      </span>
    </div>
    <div className="flex flex-col gap-6 lg:gap-12 gap-x-3 md:gap-x-4 lg:gap-x-6 w-97.5 md:w-176 lg:w-300">
      <div className="grid grid-cols-2">
        <div className="flex flex-col bg-teamsBg border-b-2 border-productsBorder md:border-productsBorder/0 hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-opacity duration-1000 w-43.5 md:w-85 lg:w-147">
          <img src={md} alt="md" className="block md:hidden lg:hidden" />
          <img src={mdtab} alt="mdtab" className="hidden md:block lg:hidden" />
          <img src={mdweb} alt="mdweb" className="hidden md:hidden lg:block" />
          <div className="md:flex md:flex-col md:gap-1 px-3 md:px-4 lg:px-6 py-3 md:pt-4 lg:pt-8 md:pb-5 lg:pb-10">
            <span className="font-gotham text-sm md:text-xl lg:text-2xl text-menuTextColor">
              Ayo Banjoko, FCIB
            </span>
            <p className="text-mobileMenuColor text-xs md:text-sm lg:text-base">
              Managing Director
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-teamsBg border-b-2 border-productsBorder md:border-productsBorder/0 hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-opacity duration-1000 w-43.5 md:w-85 lg:w-147">
          <img src={cfo} alt="cfo" className="block md:hidden lg:hidden" />
          <img
            src={cfotab}
            alt="cfotab"
            className="hidden md:block lg:hidden"
          />
          <img
            src={cfoweb}
            alt="cfoweb"
            className="hidden md:hidden lg:block"
          />
          <div className="md:flex md:flex-col md:gap-1 px-3 md:px-4 lg:px-6 py-3 md:pt-4 lg:pt-8 md:pb-5 lg:pb-10">
            <span className="font-gotham text-sm md:text-xl lg:text-2xl text-menuTextColor">
              Adewale Ogunlolu
            </span>
            <p className="text-mobileMenuColor text-xs md:text-sm lg:text-base">
              Chief Financial Officer
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col bg-teamsBg border-b-2 border-productsBorder md:border-productsBorder/0 hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-opacity duration-1000 w-43.5 md:w-85 lg:w-147">
          <img src={hrm} alt="hrm" className="block md:hidden lg:hidden" />
          <img
            src={hrmtab}
            alt="hrmtab"
            className="hidden md:block lg:hidden"
          />
          <img
            src={hrmweb}
            alt="hrmweb"
            className="hidden md:hidden lg:block"
          />
          <div className="md:flex md:flex-col md:gap-1 px-3 md:px-4 lg:px-6 py-3 md:pt-4 lg:pt-8 md:pb-5 lg:pb-10">
            <span className="font-gotham text-sm md:text-xl lg:text-2xl text-menuTextColor">
              Victor Udochi
            </span>
            <p className="text-mobileMenuColor text-xs md:text-sm lg:text-base">
              Head, Risk Management
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-teamsBg border-b-2 border-productsBorder md:border-productsBorder/0 hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-opacity duration-1000 w-43.5 md:w-85 lg:w-147">
          <img src={hhr} alt="hhr" className="block md:hidden lg:hidden" />
          <img
            src={hhrtab}
            alt="hhrtab"
            className="hidden md:block lg:hidden"
          />
          <img
            src={hhrweb}
            alt="hhrweb"
            className="hidden md:hidden lg:block"
          />
          <div className="md:flex md:flex-col md:gap-1 px-3 md:px-4 lg:px-6 py-3 md:pt-4 lg:pt-8 md:pb-5 lg:pb-10">
            <span className="font-gotham text-sm md:text-xl lg:text-2xl text-menuTextColor">
              Joy Anyanwu
            </span>
            <p className="text-mobileMenuColor text-xs md:text-sm lg:text-base">
              Head, Human Resources
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="flex flex-col bg-teamsBg border-b-2 border-productsBorder md:border-productsBorder/0 hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-opacity duration-1000 w-43.5 md:w-85 lg:w-147">
          <img src={hoo} alt="hoo" className="block md:hidden lg:hidden" />
          <img
            src={hootab}
            alt="hootab"
            className="hidden md:block lg:hidden"
          />
          <img
            src={hooweb}
            alt="hooweb"
            className="hidden md:hidden lg:block"
          />
          <div className="md:flex md:flex-col md:gap-1 px-3 md:px-4 lg:px-6 py-3 md:pt-4 lg:pt-8 md:pb-5 lg:pb-10">
            <span className="font-gotham text-sm md:text-xl lg:text-2xl text-menuTextColor">
              Taiyelolu Adenusi
            </span>
            <p className="text-mobileMenuColor text-xs md:text-sm lg:text-base">
              Head of Operations
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DirectorsContent = () => (
  <div className="flex flex-col gap-12">
    <div className="flex flex-col gap-8 w-97.5 md:w-176 lg:w-200">
      <span className="text-mobileMenuColor text-base md:text-xl">
        Our directors, entrusted with leadership, oversee the overall strategic
        planning, financial governance, regulatory adherence, stakeholder
        relations, and organizational growth within our financial service
        corporation.
      </span>
    </div>
    <div className="flex flex-col gap-6 lg:gap-12 gap-x-3 md:gap-x-4 lg:gap-x-6 w-97.5 md:w-176 lg:w-300">
      <div className="grid grid-cols-2">
        <div className="flex flex-col bg-teamsBg border-b-2 border-productsBorder md:border-productsBorder/0 hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-opacity duration-1000 w-43.5 md:w-85 lg:w-147">
          <img src={md} alt="md" className="block md:hidden lg:hidden" />
          <img src={mdtab} alt="mdtab" className="hidden md:block lg:hidden" />
          <img src={mdweb} alt="mdweb" className="hidden md:hidden lg:block" />
          <div className="md:flex md:flex-col md:gap-1 px-3 md:px-4 lg:px-6 py-3 md:pt-4 lg:pt-8 md:pb-5 lg:pb-10">
            <span className="font-gotham text-sm md:text-xl lg:text-2xl text-menuTextColor">
              Ayo Banjoko, FCIB
            </span>
            <p className="text-mobileMenuColor text-xs md:text-sm lg:text-base">
              Managing Director
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-teamsBg border-b-2 border-productsBorder md:border-productsBorder/0 hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-opacity duration-1000 w-43.5 md:w-85 lg:w-147">
          <img
            src={defaultimage}
            alt="defaultimage"
            className="block md:hidden lg:hidden"
          />
          <img
            src={defaultimagetab}
            alt="defaultimageweb"
            className="hidden md:block lg:hidden"
          />
          <img
            src={defaultimageweb}
            alt="defaultimageweb"
            className="hidden md:hidden lg:block"
          />
          <div className="md:flex md:flex-col md:gap-1 px-3 md:px-4 lg:px-6 py-3 md:pt-4 lg:pt-8 md:pb-5 lg:pb-10">
            <span className="font-gotham text-sm md:text-xl lg:text-2xl text-menuTextColor">
              Dr. Layi Fatona
            </span>
            <p className="text-mobileMenuColor text-xs md:text-sm lg:text-base">
              Group Managing Director
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col bg-teamsBg border-b-2 border-productsBorder md:border-productsBorder/0 hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-opacity duration-1000 w-43.5 md:w-85 lg:w-147">
          <img
            src={defaultimage}
            alt="defaultimage"
            className="block md:hidden lg:hidden"
          />
          <img
            src={defaultimagetab}
            alt="defaultimageweb"
            className="hidden md:block lg:hidden"
          />
          <img
            src={defaultimageweb}
            alt="defaultimageweb"
            className="hidden md:hidden lg:block"
          />
          <div className="md:flex md:flex-col md:gap-1 px-3 md:px-4 lg:px-6 py-3 md:pt-4 lg:pt-8 md:pb-5 lg:pb-10">
            <span className="font-gotham text-sm md:text-xl lg:text-2xl text-menuTextColor">
              Bolaji Elulu
            </span>
            <p className="text-mobileMenuColor text-xs md:text-sm lg:text-base">
              Group Managing Director
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-teamsBg border-b-2 border-productsBorder md:border-productsBorder/0 hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-opacity duration-1000 w-43.5 md:w-85 lg:w-147">
          <img
            src={defaultimage}
            alt="defaultimage"
            className="block md:hidden lg:hidden"
          />
          <img
            src={defaultimagetab}
            alt="defaultimageweb"
            className="hidden md:block lg:hidden"
          />
          <img
            src={defaultimageweb}
            alt="defaultimageweb"
            className="hidden md:hidden lg:block"
          />
          <div className="md:flex md:flex-col md:gap-1 px-3 md:px-4 lg:px-6 py-3 md:pt-4 lg:pt-8 md:pb-5 lg:pb-10">
            <span className="font-gotham text-sm md:text-xl lg:text-2xl text-menuTextColor">
              Rita Tolulope Oke
            </span>
            <p className="text-mobileMenuColor text-xs md:text-sm lg:text-base">
              Group Managing Director
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="flex flex-col bg-teamsBg border-b-2 border-productsBorder md:border-productsBorder/0 hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-opacity duration-1000 w-43.5 md:w-85 lg:w-147">
          <img
            src={defaultimage}
            alt="defaultimage"
            className="block md:hidden lg:hidden"
          />
          <img
            src={defaultimagetab}
            alt="defaultimageweb"
            className="hidden md:block lg:hidden"
          />
          <img
            src={defaultimageweb}
            alt="defaultimageweb"
            className="hidden md:hidden lg:block"
          />
          <div className="md:flex md:flex-col md:gap-1 px-3 md:px-4 lg:px-6 py-3 md:pt-4 lg:pt-8 md:pb-5 lg:pb-10">
            <span className="font-gotham text-sm md:text-xl lg:text-2xl text-menuTextColor">
              Amala Umeike
            </span>
            <p className="text-mobileMenuColor text-xs md:text-sm lg:text-base">
              Group Managing Director
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TeamsContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("management");

  useEffect(() => {
    if (location.pathname.includes("directors")) {
      setSelectedTab("directors");
    } else {
      setSelectedTab("management");
    }
  }, [location]);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    navigate(`/teams/${tab}`);
  };

  return (
    <div className="flex flex-col items-center bg-white md:bg-teamsbg md:bg-cover">
      <div className="flex flex-col lg:items-center w-107.5 md:w-200 lg:w-341.5">
        <div className="px-5 md:px-12">
          <div className="flex flex-col gap-12 lg:gap-16 pt-12 lg:pt-24 pb-16 lg:pb-32">
            <span className="font-gotham text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end w-78 md:w-176 lg:w-300">
              Meet the people at the helm of affairs
            </span>
            <div className="flex flex-col gap-8 w-97.5 md:w-176 lg:w-200">
              <div className="flex gap-x-3 md:gap-x-4 w-83 md:w-116 lg:w-134 h-12 md:h-15.5 lg:h-19.5">
                <Link
                  to="/teams/management"
                  className={`flex justify-center text-base md:text-xl py-3 md:py-4 lg:py-5 w-40 md:w-56 lg:w-64 shadow-teams ${
                    selectedTab === "management"
                      ? "border-b-2 border-menuHover text-menuTextColor"
                      : "text-searchBoxText hover:text-footerText"
                  }`}
                  onClick={() => handleTabClick("management")}
                >
                  Management
                </Link>
                <Link
                  to="/teams/directors"
                  className={`flex justify-center text-base md:text-xl py-3 md:py-4 lg:py-5 w-40 md:w-56 lg:w-64 shadow-teams ${
                    selectedTab === "directors"
                      ? "border-b-2 border-menuHover text-menuTextColor"
                      : "text-searchBoxText hover:text-footerText"
                  }`}
                  onClick={() => handleTabClick("directors")}
                >
                  Directors
                </Link>
              </div>
            </div>
            <div>
              {selectedTab === "management" && <ManagementContent />}
              {selectedTab === "directors" && <DirectorsContent />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsContent;
