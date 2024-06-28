import React from "react";
import { Link } from "react-router-dom";
import TextBox from "../Components/textBox";
import logo from "../assets/logo.png";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import BlueButton from "../Components/blueButton";

const Footer = () => {
  return (
    <footer
      id="footerSection"
      className="flex flex-col items-center bg-footer-sm md:bg-footer-md lg:bg-footer-lg bg-cover bg-center"
    >
      <div className="flex flex-col w-97.5 md:w-176 lg:w-300 overflow-hidden">
        <div className="flex flex-col gap-6 py-12 md:py-16 lg:py-24 lg:gap-12 lg:flex-row lg:items-center lg:justify-between border-b border-white/5">
          <span className="font-gotham text-transparent bg-clip-text bg-gradient-to-b from-footerGradient-start to-footerGradient-end text-2xl md:text-3xl lg:text-4xl w-80 md:w-135.5 lg:w-135.5">
            Stay updated with our weekly newsletter
          </span>
          <div className="flex flex-col w-full gap-3 md:flex-row md:w-106.5">
            <TextBox placeholder="Enter your email" />
            <BlueButton buttonText="Subscribe" />
          </div>
        </div>
        <div className="flex flex-col py-12 gap-12 md:gap-12 lg:gap-20">
          <div className="flex flex-col gap-6 md:gap-12 lg:flex-row lg:gap-12">
            <div className="flex flex-col gap-6 lg:w-80">
              <Link to="/">
                <img src={logo} alt="logo" className="w-40 h-12" />
              </Link>
              <span className="text-textColor text-base md:w-96 lg:w-64">
                Canary Point Finance provides tailored financial solutions with
                deep market expertise
              </span>
            </div>
            <div className="flex flex-col gap-10 md:flex-row md:gap-5">
              <div className="flex flex-row w-full gap-6">
                <div className="flex flex-col w-1/2 gap-2 md:gap-3 lg:gap-6 lg:w-52">
                  <span className="text-textHeaderColor font-gotham text-sm md:text-base lg:text-base">
                    Products
                  </span>
                  <div className="flex flex-col gap-1 md:gap-2 lg:gap-3">
                    <Link to="/investments">
                      <p className="text-textColor hover:text-menuTextHover text-sm md:text-base lg:text-base">
                        Investments
                      </p>
                    </Link>
                    <Link to="/loans">
                      <p className="text-textColor hover:text-menuTextHover text-sm md:text-base lg:text-base">
                        Loans
                      </p>
                    </Link>
                    <Link to="/services">
                      <p className="text-textColor hover:text-menuTextHover text-sm md:text-base lg:text-base">
                        Services
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col w-1/2 gap-2 md:gap-3 lg:gap-6 lg:w-52">
                  <span className="text-textHeaderColor font-gotham text-sm md:text-base lg:text-base">
                    About Us
                  </span>
                  <div className="flex flex-col gap-1 md:gap-2 lg:gap-3">
                    <Link to="/ourstory">
                      <p className="text-textColor hover:text-menuTextHover text-sm md:text-base lg:text-base">
                        Our Story
                      </p>
                    </Link>
                    <Link to="/culture">
                      <p className="text-textColor hover:text-menuTextHover text-sm md:text-base lg:text-base">
                        Our Culture
                      </p>
                    </Link>
                    <Link to="/teams/*">
                      <p className="text-textColor hover:text-menuTextHover text-sm md:text-base lg:text-base">
                        Our Team
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-full gap-6">
                <div className="flex flex-col w-1/2 gap-2 md:gap-3 lg:gap-6 lg:w-52">
                  <span className="text-textHeaderColor font-gotham text-sm md:text-base lg:text-base">
                    Resources
                  </span>
                  <div className="flex flex-col gap-1 md:gap-2 lg:gap-3">
                    <Link to="/blog">
                      <p className="text-textColor hover:text-menuTextHover text-sm md:text-base lg:text-base">
                        Blog
                      </p>
                    </Link>
                    <Link to="">
                      <p className="text-textColor hover:text-menuTextHover text-sm md:text-base lg:text-base">
                        Help Centre
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col w-1/2 gap-2 md:gap-3 lg:gap-6 lg:w-52">
                  <span className="text-textHeaderColor font-gotham text-sm md:text-base lg:text-base">
                    Contact Us
                  </span>
                  <div className="flex flex-col gap-1 md:gap-2 lg:gap-3">
                    <p className="text-textColor hover:text-menuTextHover text-sm md:text-base lg:text-base">
                      01-6329481
                    </p>
                    <p className="text-textColor hover:text-menuTextHover text-sm md:text-base lg:text-base">
                      01-6329482
                    </p>
                    <p
                      className="text-textColor hover:text-menuTextHover cursor-pointer text-sm md:text-base lg:text-base"
                      onClick={() =>
                        (window.location = "mailto:info@canarypointcs.com")
                      }
                    >
                      info@canarypointfcl.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="opacity-10" />
          <div className="flex flex-col gap-4 text-footerText text-sm md:text-base lg:text-base">
            <div className="flex gap-4">
              <Link to="">
                <img src={instagram} alt="instagram" />
              </Link>
              <Link to="">
                <img src={facebook} alt="facebook" />
              </Link>
              <Link to="">
                <img src={linkedin} alt="linkedin" />
              </Link>
              <Link to="">
                <img src={twitter} alt="twitter" />
              </Link>
            </div>
            <span>
              The Perez, Block 3, Plot 3, Perez Drive, Lekki Phase 1, Lagos
            </span>
            <span className="lg:w-7/12">
              The content on this website does not constitute a complete
              description of Canary Finance's offerings and services. By using
              this website, you accept our{" "}
              <Link
                to="/terms"
                className="text-menuHover underline underline-offset-2"
              >
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link
                to="/policy"
                className="text-menuHover underline underline-offset-2"
              >
                Privacy Policy
              </Link>
              .
            </span>
            <span>
              © 2024 Canary Finance. Licensed by the Central Bank of Nigeria.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
