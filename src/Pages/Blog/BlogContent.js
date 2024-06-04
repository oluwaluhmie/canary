import React from "react";
import blogone from "../../assets/blogone.png";
import blogtab from "../../assets/blogtab.png";
import blogweb from "../../assets/blogweb.png";
import { Link } from "react-router-dom";
import arrowright from "../../assets/arrowright.svg";
import arrowleft from "../../assets/arrowleft.svg";

const BlogContent = () => {
  return (
    <div className="flex flex-col items-center bg-white lg:bg-blogbg lg:bg-cover">
      <div className="flex flex-col w-107.5 md:w-200 lg:w-300">
        <div className="px-5 md:px-12 lg:px-0 w-97.5 md:w-176 lg:w-300">
          <div className="flex flex-col gap-12 pt-12 pb-16 lg:py-24">
            <div className="flex flex-col gap-3 lg:gap-5">
              <span className="font-gotham text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
                Financial Insights from us
              </span>
              <p className="text-mobileMenuColor text-lg lg:text-xl">
                Read through our blog for expert insights, tips, and updates on
                navigating the world of finance, business growth strategies,
                investment opportunities, and financial security. Stay informed,
                empowered, and inspired to achieve your financial goals with our
                curated content.
              </p>
            </div>
            <div className="flex flex-col md:flex-row lg:hidden gap-6 md:gap-x-6">
              <div className="md:flex md:flex-col bg-teamsBg hover:bg-menuTextHover border-b-2 border-productsBorder/0 shadow-blog hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-all duration-300 ease-out">
                <img
                  src={blogone}
                  alt="blogone"
                  className="block md:hidden lg:hidden"
                />
                <img
                  src={blogtab}
                  alt="blogtab"
                  className="hidden md:block lg:hidden"
                />
                <img
                  src={blogweb}
                  alt="blogweb"
                  className="hidden md:hidden lg:block"
                />
                <div className="flex flex-col gap-5 px-5 pt-5 pb-6 h-50 md:h-55">
                  <div className="flex flex-col gap-0.5 h-28 md:h-33">
                    <p className="text-footerText text-sm">16 April, 2024</p>
                    <span className="font-gotham text-menuTextColor text-lg">
                      How to Survive with 2k
                    </span>
                    <p className="h-10 overflow-hidden text-mobileMenuColor text-sm">
                      Grow your wealth with our investment opportunities. We
                      offer investment plans designed to suit your short or long
                      term financial goals and objectives.
                    </p>
                  </div>
                  <Link
                    to="/article"
                    className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                  >
                    <p className="text-base md:text-base lg:text-base text-menuHover">
                      Read More
                    </p>
                    <img src={arrowright} alt="arrowright" />
                  </Link>
                </div>
              </div>
              <div className="md:flex md:flex-col bg-teamsBg hover:bg-menuTextHover border-b-2 border-productsBorder/0 shadow-blog hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-all duration-300 ease-out">
                <img
                  src={blogone}
                  alt="blogone"
                  className="block md:hidden lg:hidden"
                />
                <img
                  src={blogtab}
                  alt="blogtab"
                  className="hidden md:block lg:hidden"
                />
                <img
                  src={blogweb}
                  alt="blogweb"
                  className="hidden md:hidden lg:block"
                />
                <div className="flex flex-col gap-5 px-5 pt-5 pb-6 h-50 md:h-55">
                  <div className="flex flex-col gap-0.5 h-28 md:h-33">
                    <p className="text-footerText text-sm">16 April, 2024</p>
                    <span className="font-gotham text-menuTextColor text-lg">
                      No gree for Anybody. 2024's anthem
                    </span>
                    <p className="h-10 overflow-hidden text-mobileMenuColor text-sm">
                      Grow your wealth with our investment opportunities. We
                      offer investment plans designed to suit your short or long
                      term financial goals and objectives.
                    </p>
                  </div>
                  <Link
                    to="/article"
                    className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                  >
                    <p className="text-base md:text-base lg:text-base text-menuHover">
                      Read More
                    </p>
                    <img src={arrowright} alt="arrowright" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row lg:hidden gap-6 md:gap-x-6">
              <div className="md:flex md:flex-col bg-teamsBg hover:bg-menuTextHover border-b-2 border-productsBorder/0 shadow-blog hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-all duration-300 ease-out">
                <img
                  src={blogone}
                  alt="blogone"
                  className="block md:hidden lg:hidden"
                />
                <img
                  src={blogtab}
                  alt="blogtab"
                  className="hidden md:block lg:hidden"
                />
                <img
                  src={blogweb}
                  alt="blogweb"
                  className="hidden md:hidden lg:block"
                />
                <div className="flex flex-col gap-5 px-5 pt-5 pb-6 h-50 md:h-55">
                  <div className="flex flex-col gap-0.5 h-28 md:h-33">
                    <p className="text-footerText text-sm">16 April, 2024</p>
                    <span className="font-gotham text-menuTextColor text-lg">
                      Bringing out the best of businesses
                    </span>
                    <p className="h-10 overflow-hidden text-mobileMenuColor text-sm">
                      Grow your wealth with our investment opportunities. We
                      offer investment plans designed to suit your short or long
                      term financial goals and objectives.
                    </p>
                  </div>
                  <Link
                    to="/article"
                    className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                  >
                    <p className="text-base md:text-base lg:text-base text-menuHover">
                      Read More
                    </p>
                    <img src={arrowright} alt="arrowright" />
                  </Link>
                </div>
              </div>
              <div className="md:flex md:flex-col bg-teamsBg hover:bg-menuTextHover border-b-2 border-productsBorder/0 shadow-blog hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-all duration-300 ease-out">
                <img
                  src={blogone}
                  alt="blogone"
                  className="block md:hidden lg:hidden"
                />
                <img
                  src={blogtab}
                  alt="blogtab"
                  className="hidden md:block lg:hidden"
                />
                <img
                  src={blogweb}
                  alt="blogweb"
                  className="hidden md:hidden lg:block"
                />
                <div className="flex flex-col gap-5 px-5 pt-5 pb-6">
                  <div className="flex flex-col gap-0.5 h-28 md:h-33">
                    <p className="text-footerText text-sm">16 April, 2024</p>
                    <span className="font-gotham text-menuTextColor text-lg">
                      Canary Finance Launch. Here we go!
                    </span>
                    <p className="h-10 overflow-hidden text-mobileMenuColor text-sm">
                      Grow your wealth with our investment opportunities. We
                      offer investment plans designed to suit your short or long
                      term financial goals and objectives.
                    </p>
                  </div>
                  <Link
                    to="/article"
                    className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                  >
                    <p className="text-base md:text-base lg:text-base text-menuHover">
                      Read More
                    </p>
                    <img src={arrowright} alt="arrowright" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row lg:hidden gap-6 md:gap-x-6">
              <div className="md:flex md:flex-col bg-teamsBg hover:bg-menuTextHover border-b-2 border-productsBorder/0 shadow-blog hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-all duration-300 ease-out">
                <img
                  src={blogone}
                  alt="blogone"
                  className="block md:hidden lg:hidden"
                />
                <img
                  src={blogtab}
                  alt="blogtab"
                  className="hidden md:block lg:hidden"
                />
                <img
                  src={blogweb}
                  alt="blogweb"
                  className="hidden md:hidden lg:block"
                />
                <div className="flex flex-col gap-5 px-5 pt-5 pb-6">
                  <div className="flex flex-col gap-0.5 h-28 md:h-33">
                    <p className="text-footerText text-sm">16 April, 2024</p>
                    <span className="font-gotham text-menuTextColor text-lg">
                      Bringing out the best of businesses
                    </span>
                    <p className="h-10 overflow-hidden text-mobileMenuColor text-sm">
                      Grow your wealth with our investment opportunities. We
                      offer investment plans designed to suit your short or long
                      term financial goals and objectives.
                    </p>
                  </div>
                  <Link
                    to="/article"
                    className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                  >
                    <p className="text-base md:text-base lg:text-base text-menuHover">
                      Read More
                    </p>
                    <img src={arrowright} alt="arrowright" />
                  </Link>
                </div>
              </div>
              <div className="md:flex md:flex-col bg-teamsBg hover:bg-menuTextHover border-b-2 border-productsBorder/0 shadow-blog hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-all duration-300 ease-out">
                <img
                  src={blogone}
                  alt="blogone"
                  className="block md:hidden lg:hidden"
                />
                <img
                  src={blogtab}
                  alt="blogtab"
                  className="hidden md:block lg:hidden"
                />
                <img
                  src={blogweb}
                  alt="blogweb"
                  className="hidden md:hidden lg:block"
                />
                <div className="flex flex-col gap-5 px-5 pt-5 pb-6">
                  <div className="flex flex-col gap-0.5 h-28 md:h-33">
                    <p className="text-footerText text-sm">16 April, 2024</p>
                    <span className="font-gotham text-menuTextColor text-lg">
                      Canary Finance Launch. Here we go!
                    </span>
                    <p className="h-10 overflow-hidden text-mobileMenuColor text-sm">
                      Grow your wealth with our investment opportunities. We
                      offer investment plans designed to suit your short or long
                      term financial goals and objectives.
                    </p>
                  </div>
                  <Link
                    to="/article"
                    className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                  >
                    <p className="text-base md:text-base lg:text-base text-menuHover">
                      Read More
                    </p>
                    <img src={arrowright} alt="arrowright" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden lg:grid lg:grid-cols-3">
              <div className="flex gap-x-6 w-300">
                <div className="md:flex md:flex-col bg-teamsBg hover:bg-menuTextHover border-b-2 border-productsBorder/0 shadow-blog hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-all duration-300 ease-out">
                  <img
                    src={blogone}
                    alt="blogone"
                    className="block md:hidden lg:hidden"
                  />
                  <img
                    src={blogtab}
                    alt="blogtab"
                    className="hidden md:block lg:hidden"
                  />
                  <img
                    src={blogweb}
                    alt="blogweb"
                    className="hidden md:hidden lg:block"
                  />
                  <div className="flex flex-col gap-5 lg:gap-6 px-5 lg:px-6 pt-5 lg:pt-6 pb-6 lg:pb-9 h-50 md:h-55 lg:h-68">
                    <div className="flex flex-col gap-0.5 lg:gap-1 h-28 md:h-33 lg:h-40">
                      <p className="text-footerText text-sm">16 April, 2024</p>
                      <span className="font-gotham text-menuTextColor text-lg lg:text-xl">
                        How to Survive with 2k
                      </span>
                      <p className="h-10 lg:h-12 overflow-hidden text-mobileMenuColor text-sm lg:text-base lg:w-84">
                        Grow your wealth with our investment opportunities. We
                        offer investment plans designed to suit your short or
                        long term financial goals and objectives.
                      </p>
                    </div>
                    <Link
                      to="/article"
                      className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                    >
                      <p className="text-base md:text-base lg:text-lg text-menuHover">
                        Read More
                      </p>
                      <img src={arrowright} alt="arrowright" />
                    </Link>
                  </div>
                </div>
                <div className="md:flex md:flex-col bg-teamsBg hover:bg-menuTextHover border-b-2 border-productsBorder/0 shadow-blog hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-all duration-300 ease-out">
                  <img
                    src={blogone}
                    alt="blogone"
                    className="block md:hidden lg:hidden"
                  />
                  <img
                    src={blogtab}
                    alt="blogtab"
                    className="hidden md:block lg:hidden"
                  />
                  <img
                    src={blogweb}
                    alt="blogweb"
                    className="hidden md:hidden lg:block"
                  />
                  <div className="flex flex-col gap-5 lg:gap-6 px-5 lg:px-6 pt-5 lg:pt-6 pb-6 lg:pb-9 h-50 md:h-55 lg:h-68">
                    <div className="flex flex-col gap-0.5 lg:gap-1 h-28 md:h-33 lg:h-40">
                      <p className="text-footerText text-sm">16 April, 2024</p>
                      <span className="font-gotham text-menuTextColor text-lg lg:text-xl">
                        No gree for Anybody. 2024's anthem
                      </span>
                      <p className="h-10 lg:h-12 overflow-hidden text-mobileMenuColor text-sm lg:text-base lg:w-84">
                        Grow your wealth with our investment opportunities. We
                        offer investment plans designed to suit your short or
                        long term financial goals and objectives.
                      </p>
                    </div>
                    <Link
                      to="/article"
                      className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                    >
                      <p className="text-base md:text-base lg:text-lg text-menuHover">
                        Read More
                      </p>
                      <img src={arrowright} alt="arrowright" />
                    </Link>
                  </div>
                </div>
                <div className="md:flex md:flex-col bg-teamsBg hover:bg-menuTextHover border-b-2 border-productsBorder/0 shadow-blog hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-all duration-300 ease-out">
                  <img
                    src={blogone}
                    alt="blogone"
                    className="block md:hidden lg:hidden"
                  />
                  <img
                    src={blogtab}
                    alt="blogtab"
                    className="hidden md:block lg:hidden"
                  />
                  <img
                    src={blogweb}
                    alt="blogweb"
                    className="hidden md:hidden lg:block"
                  />
                  <div className="flex flex-col gap-5 lg:gap-6 px-5 lg:px-6 pt-5 lg:pt-6 pb-6 lg:pb-9 h-50 md:h-55 lg:h-68">
                    <div className="flex flex-col gap-0.5 lg:gap-1 h-28 md:h-33 lg:h-40">
                      <p className="text-footerText text-sm">16 April, 2024</p>
                      <span className="font-gotham text-menuTextColor text-lg lg:text-xl">
                        Bringing out the best of businesses
                      </span>
                      <p className="h-10 lg:h-12 overflow-hidden text-mobileMenuColor text-sm lg:text-base lg:w-84">
                        Grow your wealth with our investment opportunities. We
                        offer investment plans designed to suit your short or
                        long term financial goals and objectives.
                      </p>
                    </div>
                    <Link
                      to="/article"
                      className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                    >
                      <p className="text-base md:text-base lg:text-lg text-menuHover">
                        Read More
                      </p>
                      <img src={arrowright} alt="arrowright" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:grid lg:grid-cols-3">
              <div className="flex gap-x-6 w-300">
                <div className="md:flex md:flex-col bg-teamsBg hover:bg-menuTextHover border-b-2 border-productsBorder/0 shadow-blog hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-all duration-300 ease-out">
                  <img
                    src={blogone}
                    alt="blogone"
                    className="block md:hidden lg:hidden"
                  />
                  <img
                    src={blogtab}
                    alt="blogtab"
                    className="hidden md:block lg:hidden"
                  />
                  <img
                    src={blogweb}
                    alt="blogweb"
                    className="hidden md:hidden lg:block"
                  />
                  <div className="flex flex-col gap-5 lg:gap-6 px-5 lg:px-6 pt-5 lg:pt-6 pb-6 lg:pb-9 h-50 md:h-55 lg:h-68">
                    <div className="flex flex-col gap-0.5 lg:gap-1 h-28 md:h-33 lg:h-40">
                      <p className="text-footerText text-sm">16 April, 2024</p>
                      <span className="font-gotham text-menuTextColor text-lg lg:text-xl">
                        How to Survive with 2k
                      </span>
                      <p className="h-10 lg:h-12 overflow-hidden text-mobileMenuColor text-sm lg:text-base lg:w-84">
                        Grow your wealth with our investment opportunities. We
                        offer investment plans designed to suit your short or
                        long term financial goals and objectives.
                      </p>
                    </div>
                    <Link
                      to="/article"
                      className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                    >
                      <p className="text-base md:text-base lg:text-lg text-menuHover">
                        Read More
                      </p>
                      <img src={arrowright} alt="arrowright" />
                    </Link>
                  </div>
                </div>
                <div className="md:flex md:flex-col bg-teamsBg hover:bg-menuTextHover border-b-2 border-productsBorder/0 shadow-blog hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-all duration-300 ease-out">
                  <img
                    src={blogone}
                    alt="blogone"
                    className="block md:hidden lg:hidden"
                  />
                  <img
                    src={blogtab}
                    alt="blogtab"
                    className="hidden md:block lg:hidden"
                  />
                  <img
                    src={blogweb}
                    alt="blogweb"
                    className="hidden md:hidden lg:block"
                  />
                  <div className="flex flex-col gap-5 lg:gap-6 px-5 lg:px-6 pt-5 lg:pt-6 pb-6 lg:pb-9 h-50 md:h-55 lg:h-68">
                    <div className="flex flex-col gap-0.5 lg:gap-1 h-28 md:h-33 lg:h-40">
                      <p className="text-footerText text-sm">16 April, 2024</p>
                      <span className="font-gotham text-menuTextColor text-lg lg:text-xl">
                        No gree for Anybody. 2024's anthem
                      </span>
                      <p className="h-10 lg:h-12 overflow-hidden text-mobileMenuColor text-sm lg:text-base lg:w-84">
                        Grow your wealth with our investment opportunities. We
                        offer investment plans designed to suit your short or
                        long term financial goals and objectives.
                      </p>
                    </div>
                    <Link
                      to="/article"
                      className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                    >
                      <p className="text-base md:text-base lg:text-lg text-menuHover">
                        Read More
                      </p>
                      <img src={arrowright} alt="arrowright" />
                    </Link>
                  </div>
                </div>
                <div className="md:flex md:flex-col bg-teamsBg hover:bg-menuTextHover border-b-2 border-productsBorder/0 shadow-blog hover:border-b-2 hover:border-productsBorder hover:shadow-products transition-all duration-300 ease-out">
                  <img
                    src={blogone}
                    alt="blogone"
                    className="block md:hidden lg:hidden"
                  />
                  <img
                    src={blogtab}
                    alt="blogtab"
                    className="hidden md:block lg:hidden"
                  />
                  <img
                    src={blogweb}
                    alt="blogweb"
                    className="hidden md:hidden lg:block"
                  />
                  <div className="flex flex-col gap-5 lg:gap-6 px-5 lg:px-6 pt-5 lg:pt-6 pb-6 lg:pb-9 h-50 md:h-55 lg:h-68">
                    <div className="flex flex-col gap-0.5 lg:gap-1 h-28 md:h-33 lg:h-40">
                      <p className="text-footerText text-sm">16 April, 2024</p>
                      <span className="font-gotham text-menuTextColor text-lg lg:text-xl">
                        Bringing out the best of businesses
                      </span>
                      <p className="h-10 lg:h-12 overflow-hidden text-mobileMenuColor text-sm lg:text-base lg:w-84">
                        Grow your wealth with our investment opportunities. We
                        offer investment plans designed to suit your short or
                        long term financial goals and objectives.
                      </p>
                    </div>
                    <Link
                      to="/article"
                      className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                    >
                      <p className="text-base md:text-base lg:text-lg text-menuHover">
                        Read More
                      </p>
                      <img src={arrowright} alt="arrowright" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:justify-between gap-3">
              <div className="flex gap-1">
                <p className="text-menuHover text-lg">1</p>
                <p className="text-textColor text-lg">/</p>
                <p className="text-textColor text-lg">2</p>
                <p className="text-textColor text-lg">/</p>
                <p className="text-textColor text-lg">....</p>
                <p className="text-textColor text-lg">/</p>
                <p className="text-textColor text-lg">25</p>{" "}
              </div>
              <div className="flex gap-5">
                <Link to="">
                  <button className="flex justify-center items-center gap-2 text-lg rounded-full border-2 border-menuHover text-transparent bg-clip-text bg-gradient-to-b from-linkOrangeButtonText-start to-linkOrangeButtonText-end bg-white w-46.25 md:w-49.75 h-12 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end">
                    <img src={arrowleft} alt="arrowleft" />
                    Previous Page
                  </button>
                </Link>
                <Link to="">
                  <button className="flex justify-center items-center gap-2 text-lg rounded-full border-2 border-menuHover text-transparent bg-clip-text bg-gradient-to-b from-linkOrangeButtonText-start to-linkOrangeButtonText-end bg-white w-46.25 md:w-49.75 h-12 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end">
                    Next Page
                    <img src={arrowright} alt="arrowright" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
