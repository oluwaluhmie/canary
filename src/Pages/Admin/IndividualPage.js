import React from "react";
import { Link, useLocation } from "react-router-dom";
import arrowleft from "../../assets/arrowleft.svg";

const IndividualPage = () => {
  const location = useLocation();
  const { individual } = location.state || {};

  if (!individual) {
    return <p className="text-menuHover text-lg p-5">Account not found.</p>;
  }

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="flex items-center bg-white px-12 border-b border-borderStroke h-28 shadow-investment">
        <p className="font-gotham text-2xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
          Individual Account Opening Form
        </p>
      </div>
      {/* Customer Details */}
      <div className="flex flex-col px-12 py-8">
        <div className="flex flex-col gap-6">
          {/* Back Link & Download Button */}
          <div className="flex justify-between w-full">
            <div className="flex flex-row gap-5 items-center w-full">
              <Link
                to="/adminaccess/individual"
                className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
              >
                <img src={arrowleft} alt="arrowleft" />
                <p className="text-base text-menuHover">Back</p>
              </Link>
              <p className="text-countBorder">|</p>
              <div className="flex gap-1">
                <p className="text-adminPageText text-sm">
                  Individual Account Opening Form
                </p>
                <p className="text-countBorder">/</p>
                <p className="text-menuHover text-sm">
                  {individual.lastName} {individual.firstName}{" "}
                  {individual.middleName}
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
          <div className="flex flex-col gap-6 w-full ">
            {/* Personal Information */}
            <div className="flex flex-col w-full border border-adminBorder shadow-investment">
              <div className="px-8 py-3 h-13 bg-tableHeader border border-adminBorder">
                <p className="font-gotham text-lg text-menuTextColor">
                  Personal Information
                </p>
              </div>
              <div className="flex flex-col px-8 py-6 gap-8 bg-white">
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Type of Account:</p>
                    <p className="text-mobileMenuColor">
                      {individual.accountType}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Title:</p>
                    <p className="text-mobileMenuColor">{individual.title}</p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Last Name:</p>
                    <p className="text-mobileMenuColor">
                      {individual.lastName}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">First Name:</p>
                    <p className="text-mobileMenuColor">
                      {individual.firstName}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Middle Name:</p>
                    <p className="text-mobileMenuColor">
                      {individual.middleName}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Passport Photograph:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.passportPhoto}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Date of Birth:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.dob}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Place of Birth:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.pob}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Gender:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.gender}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Email Address:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.email}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Phone Number:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.phoneNumber}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-full">
                    <p className="text-footerText">Home Address:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.homeAddress}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">LGA:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.lga}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Landmark:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.landmark}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">BVN:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.bvn}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Marital Status:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.maritalStatus}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">State of Origin:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.soo}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">LGA of Origin:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.lgaoo}
                    </p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            {/* Work Information */}
            <div className="flex flex-col w-full border border-adminBorder shadow-investment">
              <div className="px-8 py-3 h-13 bg-tableHeader border border-adminBorder">
                <p className="font-gotham text-lg text-menuTextColor">
                  Work Information
                </p>
              </div>
              <div className="flex flex-col px-8 py-6 gap-8 bg-white">
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Occupation:</p>
                    <p className="text-mobileMenuColor">
                      {individual.occupation}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Means of Identification:</p>
                    <p className="text-mobileMenuColor">{individual.moi}</p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">ID Card Number:</p>
                    <p className="text-mobileMenuColor">
                      {individual.idNumber}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Issue Date:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.issueDate}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Expiry Date:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.expiryDate}
                    </p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            {/* Next of Kin Information */}
            <div className="flex flex-col w-full border border-adminBorder shadow-investment">
              <div className="px-8 py-3 h-13 bg-tableHeader border border-adminBorder">
                <p className="font-gotham text-lg text-menuTextColor">
                  Next of Kin Information
                </p>
              </div>
              <div className="flex flex-col px-8 py-6 gap-8 bg-white">
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Title:</p>
                    <p className="text-mobileMenuColor">
                      {individual.ntitle}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Last Name:</p>
                    <p className="text-mobileMenuColor">{individual.nsurname}</p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">First Name:</p>
                    <p className="text-mobileMenuColor">
                      {individual.nfirstName}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Middle Name:</p>
                    <p className="text-mobileMenuColor">
                      {individual.nmiddleName}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Phone Number:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.nphoneNumber}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Relationship:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.relationship}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Email Address:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.nemail}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Occupation:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.noccupation}
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
                    <p className="text-footerText">Signature:</p>
                    <p className="text-mobileMenuColor">
                      {individual.signature}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Joint Account Signature</p>
                    <p className="text-mobileMenuColor">
                      {individual.secondSignature}
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

export default IndividualPage;
