import React from "react";
import { Link, useLocation } from "react-router-dom";
import arrowleft from "../../assets/arrowleft.svg";

const CorporatePage = () => {
  const location = useLocation();
  const { corporate } = location.state || {};

  if (!corporate) {
    return <p className="text-menuHover text-lg p-5">Account not found.</p>;
  }

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="flex items-center bg-white px-12 border-b border-borderStroke h-28 shadow-investment">
        <p className="font-gotham text-2xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
          Corporate Account Opening Form
        </p>
      </div>
      {/* Customer Details */}
      <div className="flex flex-col px-12 py-8">
        <div className="flex flex-col gap-6">
          {/* Back Link & Download Button */}
          <div className="flex justify-between w-full">
            <div className="flex flex-row gap-5 items-center w-full">
              <Link
                to="/adminaccess/corporate"
                className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
              >
                <img src={arrowleft} alt="arrowleft" />
                <p className="text-base text-menuHover">Back</p>
              </Link>
              <p className="text-countBorder">|</p>
              <div className="flex gap-1">
                <p className="text-adminPageText text-sm">
                  Corporate Account Opening Form
                </p>
                <p className="text-countBorder">/</p>
                <p className="text-menuHover text-sm">{corporate.lastName}</p>
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
          <div className="flex flex-col gap-6 w-full ">
            {/* Company Details */}
            <div className="flex flex-col w-full border border-adminBorder shadow-investment">
              <div className="px-8 py-3 h-13 bg-tableHeader border border-adminBorder">
                <p className="font-gotham text-lg text-menuTextColor">
                  Company Details
                </p>
              </div>
              <div className="flex flex-col px-8 py-6 gap-8 bg-white">
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Type of Account:</p>
                    <p className="text-mobileMenuColor">
                      {corporate.caccountType}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Type of Institution:</p>
                    <p className="text-mobileMenuColor">
                      {corporate.institutionType}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-full">
                    <p className="text-footerText">Name of Organization:</p>
                    <p className="text-mobileMenuColor">
                      {corporate.organizationName}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Passport Photograph:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.rcNo}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Tax ID Number:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.taxNo}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-full">
                    <p className="text-footerText">Business Address:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.businessAddress}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Email Address:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.email}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Web Address:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.webAddress}
                    </p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            {/* Signatory #1 Information */}
            <div className="flex flex-col w-full border border-adminBorder shadow-investment">
              <div className="px-8 py-3 h-13 bg-tableHeader border border-adminBorder">
                <p className="font-gotham text-lg text-menuTextColor">
                  Signatory #1 Details
                </p>
              </div>
              <div className="flex flex-col px-8 py-6 gap-8 bg-white">
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Title:</p>
                    <p className="text-mobileMenuColor">
                      {corporate.title}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Last Name:</p>
                    <p className="text-mobileMenuColor">{corporate.lastName}</p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">First Name:</p>
                    <p className="text-mobileMenuColor">
                      {corporate.firstName}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Middle Name:</p>
                    <p className="text-mobileMenuColor">
                      {corporate.middleName}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-full">
                    <p className="text-footerText">Passport Photograph:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.passportPhoto}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Date of Birth:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.dob}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Place of Birth:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.pob}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Email Address:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.pemail}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Phone Number:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.phoneNumber}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Home Address:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.homeAddress}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">LGA:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.lga}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Landmark:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.landmark}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">BVN:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.bvn}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Means of Identification:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.meansofID}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">ID Card Number:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.idNumber}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Issue Date:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.issueDate}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Expiry Date:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.expiryDate}
                    </p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            {/* Signatory #2 Information */}
            <div className="flex flex-col w-full border border-adminBorder shadow-investment">
              <div className="px-8 py-3 h-13 bg-tableHeader border border-adminBorder">
                <p className="font-gotham text-lg text-menuTextColor">
                  Signatory #2 Details
                </p>
              </div>
              <div className="flex flex-col px-8 py-6 gap-8 bg-white">
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Title:</p>
                    <p className="text-mobileMenuColor">
                      {corporate.stitle}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Last Name:</p>
                    <p className="text-mobileMenuColor">{corporate.slastName}</p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">First Name:</p>
                    <p className="text-mobileMenuColor">
                      {corporate.sfirstName}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Middle Name:</p>
                    <p className="text-mobileMenuColor">
                      {corporate.smiddleName}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-full">
                    <p className="text-footerText">Passport Photograph:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.spassportPhoto}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Date of Birth:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.sdob}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Place of Birth:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.spob}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Email Address:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.semail}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Phone Number:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.sphoneNumber}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Home Address:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.shomeAddress}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">LGA:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.slga}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Landmark:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.slandmark}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">BVN:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.sbvn}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Means of Identification:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.smeansofID}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">ID Card Number:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.sidNumber}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Issue Date:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.sissueDate}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Expiry Date:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.sexpiryDate}
                    </p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            {/* Final Information */}
            <div className="flex flex-col w-full border border-adminBorder shadow-investment">
              <div className="px-8 py-3 h-13 bg-tableHeader border border-adminBorder">
                <p className="font-gotham text-lg text-menuTextColor">
                  Final Information
                </p>
              </div>
              <div className="flex flex-col px-8 py-6 gap-8 bg-white">
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Signatory #1 Signature:</p>
                    <p className="text-mobileMenuColor">
                      {corporate.signature}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Signatory #2 Signature</p>
                    <p className="text-mobileMenuColor">
                      {corporate.secondSignature}
                    </p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporatePage;
