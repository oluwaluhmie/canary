import React, { useEffect } from "react";
import {
  Link,
  Routes,
  Route,
  useResolvedPath,
  useLocation,
  useNavigate,
  matchPath,
} from "react-router-dom";
import logo from "../assets/adminlogo.png";
import avatar from "../assets/avatar.svg";
import logout from "../assets/logout.svg";
import AdminDashboard from "./Admin/AdminDashboard";
import SubscriptionList from "./Admin/SubscriptionList";
import ContactusList from "./Admin/ContactList";
import ContactPage from "./Admin/ContactPage";
import IndividualPage from "./Admin/IndividualPage";
import IndividualList from "./Admin/IndividualList";
import CorporateList from "./Admin/CorporateList";
import CorporatePage from "./Admin/CorporatePage";

const CentralAdmin = () => {
  const resolvedPath = useResolvedPath("");
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const userDetails =
    state?.userDetails || JSON.parse(localStorage.getItem("userDetails"));

  useEffect(() => {
    if (!userDetails) {
      navigate("/adminaccess", { replace: true });
    } else {
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
    }
  }, [userDetails, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userDetails");
    navigate("/accesscontrol", { replace: true });
  };

  const isActive = (path) => {
    const fullPath = `${resolvedPath.pathname}${path}`;
    return (
      location.pathname === fullPath ||
      (path === "/" && location.pathname === resolvedPath.pathname)
    );
  };

  const isPathActive = (basePath) => {
    return matchPath(
      { path: `${resolvedPath.pathname}${basePath}`, end: false },
      location.pathname
    );
  };

  return (
    <div className="flex w-full h-screen">
      {/* Left Side */}
      <div className="flex flex-col justify-between w-1/4 h-full bg-white border border-borderStroke overflow-y-hidden">
        <div className="flex flex-col px-12 py-8 h-28 border-b border-borderStroke">
          <img src={logo} alt="logo" className="w-38.4275 h-12" />
        </div>
        <div className="flex flex-col h-full bg-adminmenubg bg-cover">
          <Link
            to={`${resolvedPath.pathname}`}
            className={`px-12 py-4 ${
              isActive("") ? "bg-headerHover border-r-2 border-menuHover" : ""
            }`}
          >
            <p
              className={`text-sm ${
                isActive("") ? "text-menuHover" : "text-mobileMenuColor"
              }`}
            >
              Home
            </p>
          </Link>
          <Link
            to={`${resolvedPath.pathname}/individual`}
            className={`px-12 py-4 ${
              isPathActive("/individual")
                ? "bg-headerHover border-r-2 border-menuHover"
                : ""
            }`}
          >
            <p
              className={`text-sm ${
                isPathActive("/individual")
                  ? "text-menuHover"
                  : "text-mobileMenuColor"
              }`}
            >
              Individual Account Opening Form
            </p>
          </Link>
          <Link
            to={`${resolvedPath.pathname}/corporate`}
            className={`px-12 py-4 ${
              isPathActive("/corporate")
                ? "bg-headerHover border-r-2 border-menuHover"
                : ""
            }`}
          >
            <p
              className={`text-sm ${
                isPathActive("/corporate")
                  ? "text-menuHover"
                  : "text-mobileMenuColor"
              }`}
            >
              Corporate Account Opening Form
            </p>
          </Link>
          <Link
            to={`${resolvedPath.pathname}/contactus`}
            className={`px-12 py-4 ${
              isPathActive("/contactus")
                ? "bg-headerHover border-r-2 border-menuHover"
                : ""
            }`}
          >
            <p
              className={`text-sm ${
                isPathActive("/contactus")
                  ? "text-menuHover"
                  : "text-mobileMenuColor"
              }`}
            >
              Contact Us Form
            </p>
          </Link>
          <Link
            to={`${resolvedPath.pathname}/subscriptions`}
            className={`px-12 py-4 ${
              isActive("/subscriptions")
                ? "bg-headerHover border-r-2 border-menuHover"
                : ""
            }`}
          >
            <p
              className={`text-sm ${
                isActive("/subscriptions")
                  ? "text-menuHover"
                  : "text-mobileMenuColor"
              }`}
            >
              Subscription List
            </p>
          </Link>
        </div>
        <div className="flex flex-row px-8 py-8 w-full h-28 border-t border-borderStroke">
          <div className="flex flex-row justify-between w-full items-center">
            <div className="flex flex-row gap-3 items-center">
              <img src={avatar} alt="avatar" className="w-12 h-12" />
              <div>
                <span className="font-gotham text-sm text-adminText">
                  {userDetails?.firstname} {userDetails?.lastname}
                </span>
              </div>
            </div>
            <img
              src={logout}
              alt="logout"
              className="w-6 h-6 cursor-pointer"
              onClick={handleLogout}
            />
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex flex-col w-3/4 overflow-y-scroll">
        <Routes>
          <Route path="individual" element={<IndividualList />} />
          <Route path="/individual/:id" element={<IndividualPage />} />
          <Route path="corporate" element={<CorporateList />} />
          <Route path="/corporate/:id" element={<CorporatePage />} />
          <Route path="contactus" element={<ContactusList />} />
          <Route path="contactus/:id" element={<ContactPage />} />
          <Route path="subscriptions" element={<SubscriptionList />} />
          <Route path="/" element={<AdminDashboard />} /> {/* Default route */}
        </Routes>
      </div>
    </div>
  );
};

export default CentralAdmin;
