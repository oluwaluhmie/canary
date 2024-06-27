import React from "react";
import { Link, useLocation} from "react-router-dom";
import arrowleft from "../../assets/arrowleft.svg";

const ContactPage = () => {
  const location = useLocation();
  const { contact } = location.state || {};

  if (!contact) {
    return <p className="text-menuHover text-lg p-5">Contact not found.</p>;
  }

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="flex items-center bg-white px-12 border-b border-borderStroke h-28 shadow-investment">
        <p className="font-gotham text-2xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
          Contact us Form
        </p>
      </div>
      {/* Customer Details */}
      <div className="flex flex-col px-12 py-8">
        <div className="flex flex-col gap-6">
          {/* Back Link & Download Button */}
          <div className="flex justify-between w-full">
            <div className="flex flex-row gap-5 items-center w-full">
              <Link
                to="/adminaccess/contactus"
                className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
              >
                <img src={arrowleft} alt="arrowleft" />
                <p className="text-base text-menuHover">Back</p>
              </Link>
              <p className="text-countBorder">|</p>
              <div className="flex gap-1">
                <p className="text-adminPageText text-sm">Contact Us Form</p>
                <p className="text-countBorder">/</p>
                <p className="text-menuHover text-sm">
                  {contact.firstName} {contact.lastName}
                </p>
              </div>
            </div>
            {/* Download button */}
            <Link to="">
              <button className="flex items-center justify-center text-sm border-2 border-menuHover text-white bg-gradient-to-b from-buttonGradient-start to-buttonGradient-end w-45.75 h-10 hover:from-orangeButton-start hover:to-orangeButton-end">
                Download Information
              </button>
            </Link>
          </div>
          {/* Customer Details */}
          <div className="flex flex-col w-full border border-adminBorder shadow-investment">
            <div className="px-8 py-3 h-13 bg-tableHeader border border-adminBorder">
              <p className="font-gotham text-lg text-menuTextColor">
                Form Details
              </p>
            </div>
            <div className="flex flex-col px-8 py-6 gap-8 bg-white">
              <div className="flex gap-6">
                <div className="w-80">
                  <p className="text-footerText">First Name:</p>
                  <p className="text-mobileMenuColor">{contact.firstName}</p>
                </div>
                <div className="w-80">
                  <p className="text-footerText">Last Name:</p>
                  <p className="text-mobileMenuColor">{contact.lastName}</p>
                </div>
              </div>
              <hr />
              <div className="flex gap-6">
                <div className="w-80">
                  <p className="text-footerText">Email Address:</p>
                  <p className="text-mobileMenuColor">{contact.email}</p>
                </div>
                <div className="w-80">
                  <p className="text-footerText">Phone Number:</p>
                  <p className="text-mobileMenuColor">{contact.phoneNumber}</p>
                </div>
              </div>
              <hr />
              <div className="flex gap-6">
                <div className="w-80">
                  <p className="text-footerText">Message:</p>
                  <p className="text-mobileMenuColor text-sm">
                    {contact.message}
                  </p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
