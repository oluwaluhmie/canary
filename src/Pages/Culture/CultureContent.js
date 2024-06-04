import React from "react";
import acctmob from "../../assets/acctmob.png";
import accttab from "../../assets/accttab.png";
import acctweb from "../../assets/acctweb.png";
import growthmob from "../../assets/growthmob.png";
import growthtab from "../../assets/growthtab.png";
import growthweb from "../../assets/growthweb.png";
import innomob from "../../assets/innomob.png";
import innotab from "../../assets/innotab.png";
import innoweb from "../../assets/innoweb.png";
import loyalmob from "../../assets/loyalmob.png";
import loyaltab from "../../assets/loyaltab.png";
import loyalweb from "../../assets/loyalweb.png";
import excelmob from "../../assets/excelmob.png";
import exceltab from "../../assets/exceltab.png";
import excelweb from "../../assets/excelweb.png";
import desiredmob from "../../assets/desiredmob.png";
import desiredtab from "../../assets/desiredtab.png";
import desiredweb from "../../assets/desiredweb.png";
import performance from "../../assets/performance.svg";
import communication from "../../assets/communication.svg";
import learning from "../../assets/learning.svg";
import work from "../../assets/work.svg";
import diversity from "../../assets/diversity.svg";

const CultureContent = () => {
  return (
    <div className="flex flex-col items-center bg-white md:bg-culturebg md:bg-cover">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col px-5 md:px-12 lg:px-0 pt-12 pb-16 md:py-16 lg:py-24 gap-12 md:gap-16 lg:gap-24 w-97.5 md:w-176 lg:w-300">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16 w-97.5 md:w-176 lg:w-300">
            <div className="flex flex-col gap-1 md:gap-3 md:w-84 lg:w-146">
              <span className="font-gotham text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end">
                Our Vision
              </span>
              <p className="text-mobileMenuColor text-base md:text-xl lg:w-128">
                To provide our clients with exceptional financial services that
                meet their unique needs, while maintaining the highest standards
                of professionalism and integrity.
              </p>
            </div>
            <div className="flex flex-col gap-1 md:gap-3 md:w-84 lg:w-146">
              <span className="font-gotham text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end">
                Our Mission
              </span>
              <p className="text-mobileMenuColor text-base md:text-xl lg:w-128">
                To be the leading finance company in Nigeria, providing
                innovative financial solutions to our clients.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 md:gap-6 lg:gap-12 py-6 md:py-6 lg:py-16 w-97.5 md:w-176 lg:w-300">
            <div className="flex flex-col gap-1 md:gap-3">
              <span className="font-gotham text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end">
                Core Values
              </span>
              <span className="font-gotham text-4xl lg:text-5xl text-menuHover">
                AGILE
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-y-12">
              <div className="border-b-2 border-blueBorderStroke shadow-culture bg-white">
                <div className="flex items-end relative">
                  <p className="font-gotham text-white text-xl px-4 py-4 absolute">
                    Accountability
                  </p>
                  <img
                    src={acctmob}
                    alt="acctmob"
                    className="block md:hidden lg:hidden"
                  />
                  <img
                    src={accttab}
                    alt="accttab"
                    className="hidden md:block lg:hidden"
                  />
                  <img
                    src={acctweb}
                    alt="acctweb"
                    className="hidden md:hidden lg:block"
                  />
                </div>
                <p className="text-mobileMenuColor text-base lg:text-lg px-4 lg:px-6 pt-4 lg:pt-6 pb-6 lg:pb-8 border-x-2 border-borderStroke">
                  We take responsibility for our actions and are accountable to
                  our clients, shareholders, and employees.
                </p>
              </div>
              <div className="border-b-2 border-growthBorder shadow-culture bg-white">
                <div className="flex items-end relative">
                  <p className="font-gotham text-white text-xl px-4 py-4 absolute">
                    Growth
                  </p>
                  <img
                    src={growthmob}
                    alt="growthmob"
                    className="block md:hidden lg:hidden"
                  />
                  <img
                    src={growthtab}
                    alt="growthtab"
                    className="hidden md:block lg:hidden"
                  />
                  <img
                    src={growthweb}
                    alt="growthweb"
                    className="hidden md:hidden lg:block"
                  />
                </div>
                <p className="text-mobileMenuColor text-base lg:text-lg px-4 lg:px-6 pt-4 lg:pt-6 pb-6 lg:pb-8 border-x-2 border-borderStroke">
                  We are committed to continuous learning and growth, both as
                  individuals and as a company.
                </p>
              </div>
              <div className="border-b-2 border-menuHover shadow-culture bg-white">
                <div className="flex items-end relative">
                  <p className="font-gotham text-white text-xl px-4 py-4 absolute">
                    Innovation
                  </p>
                  <img
                    src={innomob}
                    alt="innomob"
                    className="block md:hidden lg:hidden"
                  />
                  <img
                    src={innotab}
                    alt="innotab"
                    className="hidden md:block lg:hidden"
                  />
                  <img
                    src={innoweb}
                    alt="innoweb"
                    className="hidden md:hidden lg:block"
                  />
                </div>
                <p className="text-mobileMenuColor text-base lg:text-lg px-4 lg:px-6 pt-4 lg:pt-6 pb-6 lg:pb-8 md:h-34 border-x-2 border-borderStroke">
                  We embrace innovation and we are always looking for new and
                  better ways to serve our clients.
                </p>
              </div>
              <div className="border-b-2 border-loyalBorder shadow-culture bg-white">
                <div className="flex items-end relative">
                  <p className="font-gotham text-white text-xl px-4 py-4 absolute">
                    Loyalty
                  </p>
                  <img
                    src={loyalmob}
                    alt="loyalmob"
                    className="block md:hidden lg:hidden"
                  />
                  <img
                    src={loyaltab}
                    alt="loyaltab"
                    className="hidden md:block lg:hidden"
                  />
                  <img
                    src={loyalweb}
                    alt="loyalweb"
                    className="hidden md:hidden lg:block"
                  />
                </div>
                <p className="text-mobileMenuColor text-base lg:text-lg px-4 lg:px-6 pt-4 lg:pt-6 pb-6 lg:pb-8 border-x-2 border-borderStroke">
                  We are loyal to our clients and we are committed to building
                  long-term relationships based on trust and mutual respect.
                </p>
              </div>
              <div className="border-b-2 border-excelBorder shadow-culture bg-white">
                <div className="flex items-end relative">
                  <p className="font-gotham text-white text-xl px-4 py-4 absolute">
                    Excellence
                  </p>
                  <img
                    src={excelmob}
                    alt="excelmob"
                    className="block md:hidden lg:hidden"
                  />
                  <img
                    src={exceltab}
                    alt="exceltab"
                    className="hidden md:block lg:hidden"
                  />
                  <img
                    src={excelweb}
                    alt="excelweb"
                    className="hidden md:hidden lg:block"
                  />
                </div>
                <p className="text-mobileMenuColor text-base lg:text-lg px-4 lg:px-6 pt-4 lg:pt-6 pb-6 lg:pb-8 lg:h-43 border-x-2 border-borderStroke">
                  We strive for excellence in everything we do, and we are
                  committed to delivering the highest quality services to our
                  clients.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-12 md:gap-6 lg:gap-x-24 py-6 lg:py-16 w-97.5 md:w-176 lg:w-300">
            <div className="flex flex-col gap-6 md:gap-12 lg:gap-12 lg:w-110">
              <span className="font-gotham text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end">
                Desired Behaviours
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 md:gap-6 lg:gap-5">
                <div>
                  <span className="text-menuHover text-base lg:text-xl">Proactive:</span>
                  <p className="text-mobileMenuColor text-base">
                    Taking initiative, identifying opportunities, and seeking
                    solutions instead of waiting for direction.
                  </p>
                </div>
                <div>
                  <span className="text-menuHover text-base lg:text-xl">Bold:</span>
                  <p className="text-mobileMenuColor text-base">
                    Challenging assumptions, questioning the status quo, and
                    proposing innovative solutions.
                  </p>
                </div>
                <div>
                  <span className="text-menuHover text-base lg:text-xl">Empathetic:</span>
                  <p className="text-mobileMenuColor text-base">
                    Understanding client needs, offering personalized solutions,
                    and building strong relationships.
                  </p>
                </div>
                <div>
                  <span className="text-menuHover text-base lg:text-xl">Agile:</span>
                  <p className="text-mobileMenuColor text-base">
                    Adapting to change quickly, embracing new challenges, and
                    learning from mistakes.
                  </p>
                </div>
                <div>
                  <span className="text-menuHover text-base lg:text-xl">Transparent:</span>
                  <p className="text-mobileMenuColor text-base">
                    Communicating openly and honestly, sharing information
                    freely, and providing constructive feedback.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src={desiredmob}
                alt="desiredmob"
                className="block md:hidden lg:hidden"
              />
              <img
                src={desiredtab}
                alt="desiredtab"
                className="hidden md:block lg:hidden"
              />
              <img
                src={desiredweb}
                alt="desiredweb"
                className="hidden md:hidden lg:block"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:items-center bg-menuTextHover md:bg-culturepoliciesbg w-full">
          <div className="px-5 md:px-12 lg:px-0 py-12 md:py-16 lg:py-24 w-97.5 md:w-176 lg:w-300 overflow-hidden lg:items-center">
            <div className="flex flex-col gap-6 md:gap-12 lg:gap-16 lg:w-300">
              <span className="font-gotham text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-orangeTextGradient-start to-orangeTextGradient-end">
                Practices and Policies
              </span> 
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
                <div className="flex flex-col gap-3 lg:gap-5 px-4 lg:px-5 py-5 lg:py-7 bg-white shadow-culture">
                  <img
                    src={performance}
                    alt="performance"
                    className="w-8 h-8 md:w-9 md:h-9 lg:w-12 lg:h-12"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="font-gotham text-buttonHover text-base lg:text-lg">
                      Performance-based incentives:
                    </span>
                    <p className="text-mobileMenuColor text-sm lg:text-base">
                      Rewarding innovation, achieving ambitious goals, and
                      demonstrating core values.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 lg:gap-5 px-4 lg:px-5 py-5 lg:py-7 bg-white shadow-culture">
                  <img
                    src={communication}
                    alt="communication"
                    className="w-8 h-8 md:w-9 md:h-9 lg:w-12 lg:h-12"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="font-gotham text-buttonHover text-base lg:text-lg">
                      Open communication channels:
                    </span>
                    <p className="text-mobileMenuColor text-sm lg:text-base">
                      Encouraging regular feedback, both upwards and downwards,
                      and ensuring all voices are heard.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 lg:gap-5 px-4 lg:px-5 py-5 lg:py-7 bg-white shadow-culture">
                  <img
                    src={learning}
                    alt="learning"
                    className="w-8 h-8 md:w-9 md:h-9 lg:w-12 lg:h-12"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="font-gotham text-buttonHover text-base lg:text-lg">
                      Learning and development opportunities:
                    </span>
                    <p className="text-mobileMenuColor text-sm lg:text-base">
                      Providing access to training, conferences, and resources
                      to support continuous professional growth.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 lg:gap-5 px-4 lg:px-5 py-5 lg:py-7 bg-white shadow-culture">
                  <img
                    src={work}
                    alt="work"
                    className="w-8 h-8 md:w-9 md:h-9 lg:w-12 lg:h-12"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="font-gotham text-buttonHover text-base lg:text-lg">
                      Flexible work arrangements:
                    </span>
                    <p className="text-mobileMenuColor text-sm lg:text-base">
                      Empowering employees to work in ways that suit their needs
                      and maximize productivity.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 lg:gap-5 px-4 lg:px-5 py-5 lg:py-7 bg-white shadow-culture">
                  <img
                    src={diversity}
                    alt="diversity"
                    className="w-8 h-8 md:w-9 md:h-9 lg:w-12 lg:h-12"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="font-gotham text-buttonHover text-base lg:text-lg">
                      Diversity and inclusion:
                    </span>
                    <p className="text-mobileMenuColor text-sm lg:text-base">
                      Building a team with diverse perspectives and backgrounds,
                      fostering a culture of respect and belonging.
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

export default CultureContent;
