import React, { useState, useEffect } from "react";
import md from "../../assets/mdmobile.png";
import cfo from "../../assets/cfomobile.png";
import hrm from "../../assets/hrmmobile.png";
import hhr from "../../assets/hhrmobile.png";
import hoo from "../../assets/hoomobile.png";
import defaultimage from "../../assets/image.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ManagementContent = () => (
  <div className="flex flex-col gap-12">
    <div className="flex flex-col gap-8 w-97.5">
      <span className="text-mobileMenuColor text-base">
        Our management consists of qualified individuals who are responsible for
        the daily strategic planning, financial operations, regulatory
        compliance, client relationships, and workforce development within our
        financial service company.
      </span>
    </div>
    <div className="flex flex-col gap-6 gap-x-3 w-97.5">
      <div className="grid grid-cols-2">
        <div className="flex flex-col bg-menuTextHover border-b-2 border-productsBorder w-43.5">
          <img src={md} alt="md" className="h-38.5" />
          <div className="px-3 py-3">
            <span className="font-gotham text-sm text-menuTextColor">
              Ayo Banjoko, FCIB
            </span>
            <p className="text-mobileMenuColor text-xs">Managing Director</p>
          </div>
        </div>
        <div className="flex flex-col bg-menuTextHover border-b-2 border-productsBorder w-43.5">
          <img src={cfo} alt="cfo" className="w-43.5 h-38.5" />
          <div className="px-3 py-3">
            <span className="font-gotham text-sm text-menuTextColor">
              Adewale Ogunlolu
            </span>
            <p className="text-mobileMenuColor text-xs">
              Chief Financial Officer
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col bg-menuTextHover border-b-2 border-productsBorder w-43.5">
          <img src={hrm} alt="hrm" className="w-43.5 h-38.5" />
          <div className="px-3 py-3">
            <span className="font-gotham text-sm text-menuTextColor">
              Victor Udochi
            </span>
            <p className="text-mobileMenuColor text-xs">
              Head, Risk Management
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-menuTextHover border-b-2 border-productsBorder w-43.5">
          <img src={hhr} alt="hhr" className="w-43.5 h-38.5" />
          <div className="px-3 py-3">
            <span className="font-gotham text-sm text-menuTextColor">
              Joy Anyanwu
            </span>
            <p className="text-mobileMenuColor text-xs">
              Head, Human Resources
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="flex flex-col bg-menuTextHover border-b-2 border-productsBorder w-43.5">
          <img src={hoo} alt="hoo" className="w-43.5 h-38.5" />
          <div className="px-3 py-3">
            <span className="font-gotham text-sm text-menuTextColor">
              Taiyelolu Adenusi
            </span>
            <p className="text-mobileMenuColor text-xs">Head of Operations</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DirectorsContent = () => (
  <div className="flex flex-col gap-12">
    <div className="flex flex-col gap-8 w-97.5">
      <span className="text-mobileMenuColor text-base">
        Our directors, entrusted with leadership, oversee the overall strategic
        planning, financial governance, regulatory adherence, stakeholder
        relations, and organizational growth within our financial service
        corporation.
      </span>
    </div>
    <div className="flex flex-col gap-6 gap-x-3 w-97.5">
      <div className="grid grid-cols-2">
        <div className="flex flex-col bg-menuTextHover border-b-2 border-productsBorder w-43.5">
          <img src={md} alt="md" className="h-38.5" />
          <div className="px-3 py-3">
            <span className="font-gotham text-sm text-menuTextColor">
              Ayo Banjoko, FCIB
            </span>
            <p className="text-mobileMenuColor text-xs">Managing Director</p>
          </div>
        </div>
        <div className="flex flex-col bg-menuTextHover border-b-2 border-productsBorder w-43.5">
          <img
            src={defaultimage}
            alt="defaultimage"
            className="w-43.5 h-38.5"
          />
          <div className="px-3 py-3">
            <span className="font-gotham text-sm text-menuTextColor">
              Dr. Layi Fatona
            </span>
            <p className="text-mobileMenuColor text-xs">
              Group Managing Director
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col bg-menuTextHover border-b-2 border-productsBorder w-43.5">
          <img
            src={defaultimage}
            alt="defaultimage"
            className="w-43.5 h-38.5"
          />
          <div className="px-3 py-3">
            <span className="font-gotham text-sm text-menuTextColor">
              Bolaji Elulu
            </span>
            <p className="text-mobileMenuColor text-xs">
              Group Managing Director
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-menuTextHover border-b-2 border-productsBorder w-43.5">
          <img
            src={defaultimage}
            alt="defaultimage"
            className="w-43.5 h-38.5"
          />
          <div className="px-3 py-3">
            <span className="font-gotham text-sm text-menuTextColor">
              Rita Tolulope Oke
            </span>
            <p className="text-mobileMenuColor text-xs">
              Group Managing Director
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="flex flex-col bg-menuTextHover border-b-2 border-productsBorder w-43.5">
          <img
            src={defaultimage}
            alt="defaultimage"
            className="w-43.5 h-38.5"
          />
          <div className="px-3 py-3">
            <span className="font-gotham text-sm text-menuTextColor">
              Amala Umeike
            </span>
            <p className="text-mobileMenuColor text-xs">
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
    <div className="flex flex-col items-center bg-white lg:bg-contactsbg lg:bg-cover">
      <div className="flex flex-col lg:items-center w-107.5 md:w-200 lg:w-341.5">
        <div className="px-5">
          <div className="flex flex-col gap-12 pt-12 pb-16">
            <span className="font-gotham text-2xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end w-78">
              Meet the people at the helm of affairs
            </span>
            <div className="flex flex-col gap-8 w-97.5">
              <div className="flex gap-x-3 w-83 h-12">
                <Link
                  to="/teams/management"
                  className={`flex justify-center py-3 w-40 shadow-teams ${
                    selectedTab === "management"
                      ? "border-b-2 border-menuHover text-menuTextColor"
                      : "text-searchBoxText"
                  }`}
                  onClick={() => handleTabClick("management")}
                >
                  Management
                </Link>
                <Link
                  to="/teams/directors"
                  className={`flex justify-center py-3 w-40 shadow-teams ${
                    selectedTab === "directors"
                      ? "border-b-2 border-menuHover text-menuTextColor"
                      : "text-searchBoxText"
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
