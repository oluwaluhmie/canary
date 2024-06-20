import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import closeIcon from "../assets/closeicon.svg";
import search from "../assets/search.svg";
import arrow from "../assets/arrowdown.svg";
import TextWithIcon from "../Components/textWithIcon";
import TextBoxWithIcon from "../Components/textboxWithIcon";
import TextBox from "../Components/textBox";
import Blog from "./Blog";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledText, setIsScrolledText] = useState(false);
  const [isScrolledButton, setIsScrolledButton] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const [showMobileProducts, setShowMobileProducts] = useState(false);
  const [showMobileAbout, setShowMobileAbout] = useState(false);
  const [showMobileResources, setShowMobileResources] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const toggleProductsDropdown = () => {
    setShowProductsDropdown(!showProductsDropdown);
    setShowAboutDropdown(false);
    setShowResourcesDropdown(false);
  };

  const toggleMobileProducts = () => {
    setShowMobileProducts(!showMobileProducts);
    setShowMobileAbout(false);
    setShowMobileResources(false);
  };

  const toggleAboutDropdown = () => {
    setShowAboutDropdown(!showAboutDropdown);
    setShowProductsDropdown(false);
    setShowResourcesDropdown(false);
  };

  const toggleMobileAbout = () => {
    setShowMobileAbout(!showMobileAbout);
    setShowMobileProducts(false);
    setShowMobileResources(false);
  };

  const toggleResourcesDropdown = () => {
    setShowResourcesDropdown(!showResourcesDropdown);
    setShowProductsDropdown(false);
    setShowAboutDropdown(false);
  };

  const toggleMobileResources = () => {
    setShowMobileResources(!showMobileResources);
    setShowMobileProducts(false);
    setShowMobileAbout(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 200);
      setIsScrolledText(scrollPosition > 200);
      setIsScrolledButton(scrollPosition > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery("");
      setSearchResults([]);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    fetchSearchResults(query);
  };

  const fetchSearchResults = (query) => {
    // Replace this mock search results with actual search request to your API
    // For example:
    // fetch(`/api/search?q=${query}`)
    //   .then(response => response.json())
    //   .then(data => setSearchResults(data.results));

    const results = [
      {
        title: "Building amazing businesses",
        path: "/blog",
        category: "Blog",
      },
      {
        title: "Fixed Investment",
        path: "/investments",
        category: "Investment",
      },
      // Add more results as needed
    ];

    setSearchResults(
      results.filter((result) =>
        result.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  useEffect(() => {
    // Fetch search results initially when the component mounts
    fetchSearchResults(searchQuery);
  }, []);

  const handleSearchResultClick = (path) => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
    navigate(path);
  };

  return (
    <>
      <div
        className={`fixed flex flex-col items-center left-0 right-0 z-50 px-5 md:px-12 lg:px-32 bg-gradient-to-b from-gradientColor-start to-gradientColor-end w-full ${
          isScrolled || isMenuOpen
            ? "shadow-md bg-gradient-to-b from-white to-white"
            : ""
        }`}
      >
        {/* Tab Menu */}
        <div className="flex items-center justify-between h-18 md:h-20 lg:h-25 lg:pt-3 w-full lg:min-w-300">
          <div className="flex items-center">
            {/* Canary Logo */}
            <div className="lg:pr-12">
              <Link to="/">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 md:h-11 lg:h-14 w-32 md:w-36 lg:w-44"
                />
              </Link>
            </div>
            {/* Menus */}
            <div className="hidden lg:flex lg:justify-between lg:items-center lg:gap-3 lg:left-0 text-white text-base">
              <div
                className={`lg:p-2 lg:hover:text-menuHover lg:hover:border-b-2 lg:hover:border-menuHover lg:hover:stroke-menuHover ${
                  isScrolledText ? "text-mobileMenuColor" : ""
                }`}
              >
                <Link to="/" className="">
                  Home
                </Link>
              </div>
              <div
                className={`lg:p-2 lg:hover:border-b-2 lg:hover:border-menuHover lg:hover:stroke-menuHover lg:hover:text-menuHover lg:hover:fill-menuHover relative ${
                  isScrolledText ? "text-mobileMenuColor" : ""
                }`}
              >
                <Link to="" onClick={toggleProductsDropdown}>
                  <TextWithIcon text="Our Products" alt="arrowdown" />
                </Link>
                {showProductsDropdown && (
                  <div className="absolute lg:-left-10 lg:mt-3 lg:w-64 bg-white shadow-md">
                    <Link
                      to="/investments"
                      className="lg:block lg:px-5 lg:py-6 text-menuTextColor lg:hover:border-l-2 lg:hover:border-menuHover lg:hover:bg-menuTextHover"
                    >
                      Investments
                    </Link>
                    <Link
                      to="/loans"
                      className="lg:block lg:px-5 lg:py-6 text-menuTextColor lg:hover:border-l-2 lg:hover:border-menuHover lg:hover:bg-menuTextHover"
                    >
                      Loans
                    </Link>
                    <Link
                      to="/services"
                      className="lg:block lg:px-5 lg:py-6 text-menuTextColor lg:hover:border-l-2 lg:hover:border-menuHover lg:hover:bg-menuTextHover"
                    >
                      Services
                    </Link>
                  </div>
                )}
              </div>
              <div
                className={`lg:p-2 lg:hover:border-b-2 lg:hover:border-menuHover lg:hover:stroke-menuHover lg:hover:text-menuHover lg:hover:fill-menuHover relative ${
                  isScrolledText ? "text-mobileMenuColor" : ""
                }`}
              >
                <Link to="" onClick={toggleAboutDropdown}>
                  <TextWithIcon text="About us" alt="arrowdown" />
                </Link>
                {showAboutDropdown && (
                  <div className="absolute lg:-left-10 lg:mt-3 lg:w-64 bg-white shadow-md">
                    <Link
                      to="/ourstory"
                      className="lg:block lg:px-5 lg:py-6 text-menuTextColor lg:hover:border-l-2 lg:hover:border-menuHover lg:hover:bg-menuTextHover"
                    >
                      Our Story
                    </Link>
                    <Link
                      to="/culture"
                      className="lg:block lg:px-5 lg:py-6 text-menuTextColor lg:hover:border-l-2 lg:hover:border-menuHover lg:hover:bg-menuTextHover"
                    >
                      Our Culture
                    </Link>
                    <Link
                      to="/teams/*"
                      className="lg:block lg:px-5 lg:py-6 text-menuTextColor lg:hover:border-l-2 lg:hover:border-menuHover lg:hover:bg-menuTextHover"
                    >
                      Our Team
                    </Link>
                  </div>
                )}
              </div>
              <div
                className={`lg:p-2 lg:hover:border-b-2 lg:hover:border-menuHover lg:hover:stroke-menuHover lg:hover:text-menuHover lg:hover:fill-menuHover relative ${
                  isScrolledText ? "text-mobileMenuColor" : ""
                }`}
              >
                <Link to="" onClick={toggleResourcesDropdown}>
                  <TextWithIcon text="Resources" alt="arrowdown" />
                </Link>
                {showResourcesDropdown && (
                  <div className="absolute lg:-left-10 lg:mt-3 lg:w-64 bg-white shadow-md">
                    <Link
                      to="/blog"
                      className="lg:block lg:px-5 lg:py-6 text-menuTextColor lg:hover:border-l-2 lg:hover:border-menuHover lg:hover:bg-menuTextHover"
                    >
                      Blog
                    </Link>
                    <Link
                      to="/terms"
                      className="lg:block lg:px-5 lg:py-6 text-menuTextColor lg:hover:border-l-2 lg:hover:border-menuHover lg:hover:bg-menuTextHover"
                    >
                      Terms of Use
                    </Link>
                    <Link
                      to="/policy"
                      className="lg:block lg:px-5 lg:py-6 text-menuTextColor lg:hover:border-l-2 lg:hover:border-menuHover lg:hover:bg-menuTextHover"
                    >
                      Privacy Policy
                    </Link>
                  </div>
                )}
              </div>
              <div
                className={`lg:p-2 lg:hover:text-menuHover lg:hover:border-b-2 lg:hover:border-menuHover lg:hover:stroke-menuHover ${
                  isScrolledText ? "text-mobileMenuColor" : ""
                }`}
              >
                <Link to="/contact" className="">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          {/* Search icon and Get Started button */}
          <div className="hidden lg:flex lg:items-center lg:gap-5">
            <Link to="/account">
              <button
                className={`text-base border px-8 py-3 hover:bg-menuHover ${
                  isScrolledButton
                    ? "text-menuHover border-menuHover hover:text-buttonHover hover:bg-transparent"
                    : "text-white"
                }`}
              >
                Get Started
              </button>
            </Link>
          </div>
          <div className="ml-auto lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <img
                src={isMenuOpen ? closeIcon : menu}
                alt={isMenuOpen ? "Close" : "Menu"}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`relative flex flex-col w-full inset-0 z-40 bg-white lg:hidden overflow-hidden ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-4 mt-6 h-screen w-full">
            <div className="flex flex-col h-full">
              <div className="px-2 py-5 border-b-2 hover:border-menuHover">
                <Link to="/" className="text-base text-mobileMenuColor">
                  Home
                </Link>
              </div>
              <div className="px-2 py-5 border-b-2 hover:border-menuHover relative">
                <Link
                  to=""
                  className="flex items-center justify-between text-base text-mobileMenuColor"
                  onClick={toggleMobileProducts}
                >
                  Our Products
                  <img src={arrow} alt="arrow" />
                </Link>
                {showMobileProducts && (
                  <div className="absolute top-full left-0 w-full bg-white shadow-md border-t-2 z-40 border-borderStroke hover:border-menuHover">
                    <Link
                      to="/investments"
                      className="block px-5 py-3 text-menuTextColor hover:border-l-2 hover:bg-menuTextHover hover:border-menuHover"
                    >
                      Investments
                    </Link>
                    <Link
                      to="/loans"
                      className="block px-5 py-3 text-menuTextColor hover:border-l-2 hover:bg-menuTextHover hover:stroke-menuHover hover:border-menuHover"
                    >
                      Loans
                    </Link>
                    <Link
                      to="/services"
                      className="block px-5 py-3 text-menuTextColor hover:border-l-2 hover:bg-menuTextHover hover:stroke-menuHover hover:border-menuHover"
                    >
                      Services
                    </Link>
                  </div>
                )}
              </div>
              <div className="px-2 py-5 border-b-2 hover:border-menuHover relative">
                <Link
                  to=""
                  className="flex items-center justify-between text-base text-mobileMenuColor"
                  onClick={toggleMobileAbout}
                >
                  About us
                  <img src={arrow} alt="arrow" />
                </Link>
                {showMobileAbout && (
                  <div className="absolute top-full left-0 w-full bg-white shadow-md border-t-2 z-50 border-borderStroke hover:border-menuHover">
                    <Link
                      to="/ourstory"
                      className="block px-5 py-3 text-menuTextColor hover:border-l-2 hover:bg-menuTextHover hover:border-menuHover"
                    >
                      Our Story
                    </Link>
                    <Link
                      to="/culture"
                      className="block px-5 py-3 text-menuTextColor hover:border-l-2 hover:bg-menuTextHover hover:stroke-menuHover hover:border-menuHover"
                    >
                      Our Culture
                    </Link>
                    <Link
                      to="/teams/*"
                      className="block px-5 py-3 text-menuTextColor hover:border-l-2 hover:bg-menuTextHover hover:stroke-menuHover hover:border-menuHover"
                    >
                      Our Team
                    </Link>
                  </div>
                )}
              </div>
              <div className="px-2 py-5 border-b-2 hover:border-menuHover relative">
                <Link
                  to=""
                  className="flex items-center justify-between text-base text-mobileMenuColor"
                  onClick={toggleMobileResources}
                >
                  Resources
                  <img src={arrow} alt="arrow" />
                </Link>
                {showMobileResources && (
                  <div className="absolute top-full left-0 w-full bg-white shadow-md border-t-2 z-50 border-borderStroke hover:border-menuHover">
                    <Link
                      to="/blog"
                      className="block px-5 py-3 text-menuTextColor hover:border-l-2 hover:bg-menuTextHover hover:border-menuHover"
                    >
                      Blog
                    </Link>
                    <Link
                      to="/terms"
                      className="block px-5 py-3 text-menuTextColor hover:border-l-2 hover:bg-menuTextHover hover:stroke-menuHover hover:border-menuHover"
                    >
                      Terms of Use
                    </Link>
                    <Link
                      to="/policy"
                      className="block px-5 py-3 text-menuTextColor hover:border-l-2 hover:bg-menuTextHover hover:stroke-menuHover hover:border-menuHover"
                    >
                      Privacy Policy
                    </Link>
                  </div>
                )}
              </div>
              <div className="px-2 py-5 border-b-2 hover:border-menuHover">
                <Link to="/contact" className="text-base text-mobileMenuColor">
                  Contact Us
                </Link>
              </div>
              <Link to="/account" className="pt-12">
                <button className="text-lg border-2 border-menuHover text-white bg-gradient-to-b from-buttonGradient-start to-buttonGradient-end w-full px-8 py-4">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
