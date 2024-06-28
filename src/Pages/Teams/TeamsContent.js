import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import md from "../../assets/mdmobile.png";
import mdtab from "../../assets/mdtab.png";
import mdweb from "../../assets/mdweb.png";
import defaultimage from "../../assets/image.png";
import defaultimagetab from "../../assets/imagetab.png";
import defaultimageweb from "../../assets/imageweb.png";
import DirectorsModal from "../../Components/DirectorsModal";

const TeamsContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("management");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDirector, setSelectedDirector] = useState(null);

  const directors = [
    {
      name: "Raliat Oyetunde",
      position: "Chairman",
      details: (
        <p className="text-mobileMenuColor text-base text-justify">
          Raliat is the CEO/Lead Consultant at Prinsult Global Consulting
          Limited and the Executive Secretary of Sultana Nabilah's Cerebral
          Palsy Foundation (SNCPF). Raliat Oyetunde is a Certified Learning and
          Performance Institute (LPI) and International Finance Corporation
          (IFC)Trainer, a certified Centre for Management Development, Nigeria
          (CMD) Management Trainer; a certified/licenced Nigerian Business
          Development Service Provider (BDSP); a certified scrum master, and an
          Associate of the Nigerian Institute of Management (NIM). <br />
          <br /> She is an Alumnus of Lagos Business School (LBS), the
          Enterprise Development Centre (EDC-Pan Atlantic University), Cranfield
          School of Management (UK), the University of Ilorin, and the
          University of Agriculture Makurdi. With over 20 years of direct
          experience in Banking, Raliat has held several positions in the
          financial services industry and has served in various roles including
          Public Sector Management, Retail and Commercial Banking via Branch
          Management and large corporations. She was a key resource in the
          smooth transition and merger of Oceanic Bank Plc and Ecobank Nigeria
          Limited in 2011. <br />
          <br /> Raliat's areas of expertise include Investment Banking,
          Marketing Strategy, Credit and Marketing, Business Development, Sales,
          Change Management, Project Management, and Inspirational speaking. Her
          passion for women's empowerment led Raliat to launch a new tribe of
          conversation #womenMORE on December 1, 2017. She sits on the board of
          Aleef Television, she is the Chairman of Cerebral Palsy Centre, Lagos,
          and founder of the Sultana Nabilah's Cerebral Palsy Foundation-a
          foundation borne out of her success story with her second daughter who
          has cerebral palsy; she is a member of the Ethical Committee of
          Nordica Fertility Centre and she sits on the Advisory Boards of Jordan
          Hill Creative & Reading Workshop and Entrepreneurship Village.
        </p>
      ),
    },
    {
      name: "Remilekun Lawal",
      position: "Non-Executive Director",
      details: (
        <p className="text-mobileMenuColor text-base text-justify">
          Petroleum engineer since 2004. Joined Canary in 2024. Lawal began his
          career at Kinder Morgan Oil and later Statoil USA. For more than 20
          years, he has conducted reserves evaluations and analyzed waterflood
          and steamflood EOR projects worldwide. He estimates reserves,
          forecasts production, and analyzes field economics to generate
          discounted net present values. <br />
          <br /> As an Investment banker, he helped clients raise and manage
          money in capital markets by issuing debt or selling equity in relation
          to funding projects through market judgments and ingenuity. Whether
          executing an IPO, a debt offering, or a leveraged buyout he offered
          seamless advice and sophisticated solutions. Other job duties included
          assisting with mergers and acquisitions (M&As), and advising on unique
          investment opportunities.
          <br />
          <br />
          He holds an MBA from Northeastern University and BS degrees in
          Petroleum Engineering and Applied Mathematics, respectively, from the
          University of Missouri-Rolla. Lawal is a member of SPE and fluent in
          Spanish.
        </p>
      ),
    },
    {
      name: "Amala Umeike",
      position: "Non-Executive Director",
      details: (
        <p className="text-mobileMenuColor text-base text-justify">
          Amala is the founding Partner of Stren & Blan Partners and heads its
          Dispute Resolution Department. He is a graduate of Law from the
          University of Nigeria, Nigerian Law School, and holds a Master's
          Degree in Banking and Finance Law from Queen Mary University of
          London. Amala serves as the Honorary Legal Adviser to the
          Nigerian-German Chambers of Commerce (NGCC) and sits on the African
          Global Advisory Council of the International Trademarks Association.
          <br />
          <br />
          Amala is also a member of the Law Reform Committee of the Nigerian Bar
          Association, Lagos Branch. He specifically served as a member of the
          technical committee that reviewed various portions of the Bill that
          were eventually enacted as the Business Facilitation (Miscellaneous
          Provisions) Act, of 2023. Amala also served on the World Bank assisted
          Committee that provided support to the Enabling Business Environment
          Secretariat on crafting an insolvency framework for Nigeria. This
          birthed the insolvency regime as contained in the Companies and Allied
          Matters Act, 2020.
        </p>
      ),
    },
    {
      name: "Tolulope Oke",
      position: "Non-Executive Director",
      details: (
        <p className="text-mobileMenuColor text-base text-justify">
          Tolu Oke, a member of the Chartered Institute of Bankers and a
          certified HR Professional is Chief Operating Officer at Canary Point
          Limited where she serves as a Strategic Business Partner, supporting
          the business to align its people, processes, and performance in order
          to achieve its bottom line. <br />
          <br /> She holds a Bachelors degree from Obafemi Awolowo University,
          Ile-Ife, Nigeria, an MBA from the University of Surrey, UK, and is
          currently engaged in a Master's degree in Psychology to help her
          understand the science of human behavior. <br />
          <br /> With over thirty years of post-graduation work experience in
          various sectors, she has a passion for developing and mentoring
          younger ones and also serves as a Director with the Canary Foundation
          which focuses on supporting the underprivileged to achieve their
          educational dreams and aspirations.
        </p>
      ),
    },
    {
      name: "Ayo Banjoko, FCIB",
      position: "Managing Director",
      details: (
        <p className="text-mobileMenuColor text-base text-justify">
          "Ayo Banjoko is a seasoned finance executive with over 25 years of
          diversified experience in banking, financial services, corporate
          finance, project finance, loan origination, international trade,
          equity investments, corporate strategy, and corporate governance. He
          has held senior management positions at various renowned financial and
          non-financial institutions, including Skye Bank Plc, Express Discount
          Asset Management Limited, and Amazon Energy Limited. <br />
          <br /> His expertise spans corporate banking, credit analysis,
          business development, investment strategies, due diligence, strategic
          planning, financial analysis, risk management, project finance,
          negotiation, commercial lending, reserves-based lending, financial
          modelling, and financial control. He has a proven track record of
          success in identifying and executing profitable investment
          opportunities, structuring complex financial transactions, and leading
          high-performing teams. <br />
          <br /> Throughout his career, Ayo has demonstrated exceptional
          leadership, strategic thinking, and relationship-building skills. He
          has successfully raised substantial funds for various projects,
          including a US$497 million syndication for an indigenous upstream
          exploration and production company, as well as the initial public
          offering of Skye Shelter Fund, the first REIT listed on the Nigerian
          Stock Exchange. He was also involved in funding the development of
          several major hospitality, residential, and commercial real estate
          projects valued over $200 million cumulatively. <br />
          <br /> Ayo holds a Bachelor of Science in Banking and Finance from
          Olabisi Onabanjo University, AgoIwoye, and a Master of Science in
          Corporate Governance from Leeds Metropolitan University, UK. He is a
          Fellow of the Chartered Institute of Bankers of Nigeria (FCIB), and
          has attended numerous professional development programs in areas such
          as upstream exploration and production operations, financial
          modelling, credit analysis, and corporate finance. <br />
          <br /> With his extensive experience, financial acumen, and proven
          leadership capabilities, Ayo Banjoko is well-positioned to contribute
          significantly to the strategic direction and growth of Canary Point
          Finance Company Ltd."
        </p>
      ),
    },
  ];

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

  const handleCardClick = (director) => {
    setSelectedDirector(director);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDirector(null);
  };

  return (
    <div className="flex flex-col items-center bg-white md:bg-teamsbg md:bg-cover">
      <div className="flex flex-col lg:items-center w-107.5 md:w-200 lg:w-341.5">
        <div className="px-5 md:px-12 lg:px-0 w-97.5 md:w-176 lg:w-300">
          <div className="flex flex-col gap-12 lg:gap-16 pt-12 lg:pt-24 pb-16 lg:pb-32">
            <span className="font-gotham text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end w-78 md:w-176 lg:w-300">
              Meet the Team at the helm of affairs
            </span>
            <div className="flex flex-col gap-8 w-97.5 md:w-176 lg:w-200">
              <div className="flex gap-x-3 md:gap-x-4 w-83 md:w-116 lg:w-134 h-12 md:h-15.5 lg:h-19.5">
                <span
                  className={`flex justify-center text-base md:text-xl py-3 md:py-4 lg:py-5 w-40 md:w-56 lg:w-64 shadow-teams ${
                    selectedTab === "management"
                      ? "border-b-2 border-menuHover text-menuTextColor"
                      : "text-searchBoxText hover:text-footerText"
                  }`}
                  onClick={() => handleTabClick("management")}
                >
                  Management Team
                </span>
                <span
                  className={`flex justify-center text-base md:text-xl py-3 md:py-4 lg:py-5 w-40 md:w-56 lg:w-64 shadow-teams ${
                    selectedTab === "directors"
                      ? "border-b-2 border-menuHover text-menuTextColor"
                      : "text-searchBoxText hover:text-footerText"
                  }`}
                  onClick={() => handleTabClick("directors")}
                >
                  Directors
                </span>
              </div>
              <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
                {selectedTab === "management" ? (
                  <ManagementContent />
                ) : (
                  <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-8 w-97.5 md:w-176 lg:w-200">
                      <span className="text-mobileMenuColor text-base md:text-xl">
                        Our directors, entrusted with leadership, oversee the
                        overall strategic planning, financial governance,
                        regulatory adherence, stakeholder relations, and
                        organizational growth within our financial service
                        corporation.
                      </span>
                    </div>
                    <div className="flex flex-col gap-6 lg:gap-12 gap-x-3 md:gap-x-4 lg:gap-x-6 w-97.5 md:w-176 lg:w-300">
                      <div className="grid grid-cols-2">
                        {directors.slice(0, 2).map((director, index) => (
                          <div
                            key={index}
                            className="flex flex-col bg-teamsBg hover:bg-menuTextHover border-b-2 border-productsBorder md:border-productsBorder/0 hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-all duration-300 ease-out w-43.5 md:w-85 lg:w-147 cursor-pointer"
                            onClick={() => handleCardClick(director)}
                          >
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
                                {director.name}
                              </span>
                              <p className="text-mobileMenuColor text-xs md:text-sm lg:text-base">
                                {director.position}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2">
                        {directors.slice(2, 4).map((director, index) => (
                          <div
                            key={index}
                            className="flex flex-col bg-teamsBg hover:bg-menuTextHover border-b-2 border-productsBorder md:border-productsBorder/0 hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-all duration-300 ease-out w-43.5 md:w-85 lg:w-147 cursor-pointer"
                            onClick={() => handleCardClick(director)}
                          >
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
                                {director.name}
                              </span>
                              <p className="text-mobileMenuColor text-xs md:text-sm lg:text-base">
                                {director.position}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-1">
                        {directors.slice(4).map((director, index) => (
                          <div
                            key={index}
                            className="flex flex-col bg-teamsBg hover:bg-menuTextHover border-b-2 border-productsBorder md:border-productsBorder/0 hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-all duration-300 ease-out w-43.5 md:w-85 lg:w-147 cursor-pointer"
                            onClick={() => handleCardClick(director)}
                          >
                            <img
                              src={md}
                              alt="md"
                              className="block md:hidden lg:hidden"
                            />
                            <img
                              src={mdtab}
                              alt="mdweb"
                              className="hidden md:block lg:hidden"
                            />
                            <img
                              src={mdweb}
                              alt="mdweb"
                              className="hidden md:hidden lg:block"
                            />
                            <div className="md:flex md:flex-col md:gap-1 px-3 md:px-4 lg:px-6 py-3 md:pt-4 lg:pt-8 md:pb-5 lg:pb-10">
                              <span className="font-gotham text-sm md:text-xl lg:text-2xl text-menuTextColor">
                                {director.name}
                              </span>
                              <p className="text-mobileMenuColor text-xs md:text-sm lg:text-base">
                                {director.position}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <DirectorsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        director={selectedDirector}
      />
    </div>
  );
};

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
        <div className="flex flex-col bg-teamsBg hover:bg-menuTextHover border-b-2 border-productsBorder md:border-productsBorder/0 hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-all duration-300 ease-out w-43.5 md:w-85 lg:w-147">
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
        <div className="flex flex-col bg-teamsBg hover:bg-menuTextHover border-b-2 border-productsBorder md:border-productsBorder/0 hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-all duration-300 ease-out w-43.5 md:w-85 lg:w-147">
          <img
            src={defaultimage}
            alt="defaultimage"
            className="block md:hidden lg:hidden"
          />
          <img
            src={defaultimagetab}
            alt="defaultimagetab"
            className="hidden md:block lg:hidden"
          />
          <img
            src={defaultimageweb}
            alt="defaultimageweb"
            className="hidden md:hidden lg:block"
          />
          <div className="md:flex md:flex-col md:gap-1 px-3 md:px-4 lg:px-6 py-3 md:pt-4 lg:pt-8 md:pb-5 lg:pb-10">
            <span className="font-gotham text-sm md:text-xl lg:text-2xl text-menuTextColor">
              Zenith Adeyemi
            </span>
            <p className="text-mobileMenuColor text-xs md:text-sm lg:text-base">
              Chief Business Officer
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col bg-teamsBg hover:bg-menuTextHover border-b-2 border-productsBorder md:border-productsBorder/0 hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-all duration-300 ease-out w-43.5 md:w-85 lg:w-147">
          <img
            src={defaultimage}
            alt="defaultimage"
            className="block md:hidden lg:hidden"
          />
          <img
            src={defaultimagetab}
            alt="defaultimagetab"
            className="hidden md:block lg:hidden"
          />
          <img
            src={defaultimageweb}
            alt="defaultimageweb"
            className="hidden md:hidden lg:block"
          />
          <div className="md:flex md:flex-col md:gap-1 px-3 md:px-4 lg:px-6 py-3 md:pt-4 lg:pt-8 md:pb-5 lg:pb-10">
            <span className="font-gotham text-sm md:text-xl lg:text-2xl text-menuTextColor">
              Kazeem Alani
            </span>
            <p className="text-mobileMenuColor text-xs md:text-sm lg:text-base">
              Chief Financial Officer
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-teamsBg hover:bg-menuTextHover border-b-2 border-productsBorder md:border-productsBorder/0 hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-all duration-300 ease-out w-43.5 md:w-85 lg:w-147">
          <img
            src={defaultimage}
            alt="defaultimage"
            className="block md:hidden lg:hidden"
          />
          <img
            src={defaultimagetab}
            alt="defaultimagetab"
            className="hidden md:block lg:hidden"
          />
          <img
            src={defaultimageweb}
            alt="defaultimageweb"
            className="hidden md:hidden lg:block"
          />
          <div className="md:flex md:flex-col md:gap-1 px-3 md:px-4 lg:px-6 py-3 md:pt-4 lg:pt-8 md:pb-5 lg:pb-10">
            <span className="font-gotham text-sm md:text-xl lg:text-2xl text-menuTextColor">
              Sewanu Alfred
            </span>
            <p className="text-mobileMenuColor text-xs md:text-sm lg:text-base">
              Compliance Officer
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col bg-teamsBg hover:bg-menuTextHover border-b-2 border-productsBorder md:border-productsBorder/0 hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-all duration-300 ease-out w-43.5 md:w-85 lg:w-147">
          <img
            src={defaultimage}
            alt="defaultimage"
            className="block md:hidden lg:hidden"
          />
          <img
            src={defaultimagetab}
            alt="defaultimagetab"
            className="hidden md:block lg:hidden"
          />
          <img
            src={defaultimageweb}
            alt="defaultimageweb"
            className="hidden md:hidden lg:block"
          />
          <div className="md:flex md:flex-col md:gap-1 px-3 md:px-4 lg:px-6 py-3 md:pt-4 lg:pt-8 md:pb-5 lg:pb-10">
            <span className="font-gotham text-sm md:text-xl lg:text-2xl text-menuTextColor">
              Abiodun Babalola
            </span>
            <p className="text-mobileMenuColor text-xs md:text-sm lg:text-base">
              Head of Operations
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-teamsBg hover:bg-menuTextHover border-b-2 border-productsBorder md:border-productsBorder/0 hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-all duration-300 ease-out w-43.5 md:w-85 lg:w-147">
          <img
            src={defaultimage}
            alt="defaultimage"
            className="block md:hidden lg:hidden"
          />
          <img
            src={defaultimagetab}
            alt="defaultimagetab"
            className="hidden md:block lg:hidden"
          />
          <img
            src={defaultimageweb}
            alt="defaultimageweb"
            className="hidden md:hidden lg:block"
          />
          <div className="md:flex md:flex-col md:gap-1 px-3 md:px-4 lg:px-6 py-3 md:pt-4 lg:pt-8 md:pb-5 lg:pb-10">
            <span className="font-gotham text-sm md:text-xl lg:text-2xl text-menuTextColor">
              Victor Orishade
            </span>
            <p className="text-mobileMenuColor text-xs md:text-sm lg:text-base">
              HR Manager
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TeamsContent;
