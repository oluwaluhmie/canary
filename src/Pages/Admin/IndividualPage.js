import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import arrowleft from "../../assets/arrowleft.svg";
import jsPDF from "jspdf";

const IndividualPage = () => {
  const { id: individualId } = useParams(); 
  const [individual, setIndividual] = useState(null);

  useEffect(() => {
    const fetchIndividual = async () => {
      try {
        const config = {
          method: "get",
          maxBodyLength: Infinity,
          url: `https://api.canaryfinance.canarypointfcl.com/v1/api/single_individual_account/${individualId}`,
          headers: {
            "x-api-key": "22062024",
          },
        };
        const response = await axios.request(config);
        if (
          response.data &&
          response.data.result &&
          response.data.result.length > 0
        ) {
          setIndividual(response.data.result[0]);
        } else {
          setIndividual(null);
        }
      } catch (error) {
        setIndividual(null);
      }
    };

    if (individualId) {
      fetchIndividual();
    }
  }, [individualId]);

  const handleDownloadPDF = () => {
    if (individual) {
      const doc = new jsPDF();
      const lineHeight = 10;

      doc.text(`Individual Account Form`, 10, lineHeight);
      doc.setFont("times", "normal");
      doc.setFontSize(12);
      doc.text(
        `Type of Account: ${individual.account_type}`,
        10,
        lineHeight + 10
      );
      doc.text(`Title: ${individual.title}`, 10, lineHeight + 20);
      doc.text(`Last Name: ${individual.surname}`, 10, lineHeight + 30);
      doc.text(`First Name: ${individual.firstname}`, 10, lineHeight + 40);
      doc.text(`Middle Name: ${individual.middle_name}`, 10, lineHeight + 50);
      doc.text(
        doc.splitTextToSize(`Passport: ${individual.passport}`, 180),
        10,
        lineHeight + 60
      );
      doc.text(
        `Date of Birth: ${individual.date_of_birth}`,
        10,
        lineHeight + 75
      );
      doc.text(
        `Place of Birth: ${individual.place_of_birth}`,
        10,
        lineHeight + 85
      );
      doc.text(`Gender: ${individual.gender}`, 10, lineHeight + 95);
      doc.text(
        `Email Address: ${individual.email_address}`,
        10,
        lineHeight + 105
      );
      doc.text(
        `Phone Number: ${individual.phone_number}`,
        10,
        lineHeight + 115
      );
      doc.text(
        `Home Address: ${individual.home_address}`,
        10,
        lineHeight + 125
      );
      doc.text(`LGA: ${individual.home_address_lga}`, 10, lineHeight + 135);
      doc.text(`Landmark: ${individual.landmark}`, 10, lineHeight + 145);
      doc.text(`BVN: ${individual.bvn}`, 10, lineHeight + 155);
      doc.text(
        `Marital Status: ${individual.marital_status}`,
        10,
        lineHeight + 165
      );
      doc.text(`State of Origin: ${individual.origin}`, 10, lineHeight + 175);
      doc.text(`LGA of Origin: ${individual.origin_lga}`, 10, lineHeight + 185);
      doc.text(`Occupation: ${individual.occupation}`, 10, lineHeight + 195);
      doc.text(
        `Means of Identification: ${individual.means_of_identification}`,
        10,
        lineHeight + 205
      );
      doc.text(
        `ID Card Number: ${individual.id_card_number}`,
        10,
        lineHeight + 215
      );
      doc.text(`Issue Date: ${individual.issue_date}`, 10, lineHeight + 225);
      doc.text(`Expiry Date: ${individual.expiry_date}`, 10, lineHeight + 235);

      doc.addPage();
      doc.text(
        `Next of Kin Title: ${individual.next_of_kin_title}`,
        10,
        lineHeight + 10
      );
      doc.text(
        `Next of Kin Last Name: ${individual.next_of_kin_surname}`,
        10,
        lineHeight + 20
      );
      doc.text(
        `Next of Kin First Name: ${individual.next_of_kin_firstname}`,
        10,
        lineHeight + 30
      );
      doc.text(
        `Next of Kin Middle Name: ${individual.next_of_kin_middle_name}`,
        10,
        lineHeight + 40
      );
      doc.text(
        `Next of Kin Phone Number: ${individual.next_of_kin_phone_number}`,
        10,
        lineHeight + 50
      );
      doc.text(
        `Next of Kin Relationship: ${individual.next_of_kin_relationship}`,
        10,
        lineHeight + 60
      );
      doc.text(
        `Next of Kin Email Address: ${individual.next_of_kin_email}`,
        10,
        lineHeight + 70
      );
      doc.text(
        `Next of Kin Occupation: ${individual.next_of_kin_occupation}`,
        10,
        lineHeight + 80
      );
      doc.text(
        doc.splitTextToSize(`Signature: ${individual.signature}`, 180),
        10,
        lineHeight + 90
      );
      doc.text(
        doc.splitTextToSize(`Joint Account Signature: ${individual.signature_two}`, 180),
        10,
        lineHeight + 105
      );

      doc.save(
        `Individual_Account_${individual.surname}_${individual.firstname}.pdf`
      );
    }
  };

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
                  {individual.surname} {individual.firstname}{" "}
                  {individual.middle_name}
                </p>
              </div>
            </div>
            {/* Download button */}
            <button
              className="flex items-center justify-center text-sm border-2 border-menuHover text-white bg-gradient-to-b from-buttonGradient-start to-buttonGradient-end w-45.75 h-10 hover:from-orangeButton-start hover:to-orangeButton-end"
              onClick={handleDownloadPDF}
            >
              Download Information
            </button>
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
                      {individual.account_type}
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
                    <p className="text-mobileMenuColor">{individual.surname}</p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">First Name:</p>
                    <p className="text-mobileMenuColor">
                      {individual.firstname}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Middle Name:</p>
                    <p className="text-mobileMenuColor">
                      {individual.middle_name}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Passport Photograph:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.passport}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Date of Birth:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.date_of_birth}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Place of Birth:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.place_of_birth}
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
                      {individual.email_address}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Phone Number:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.phone_number}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-full">
                    <p className="text-footerText">Home Address:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.home_address}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">LGA:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.home_address_lga}
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
                      {individual.marital_status}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">State of Origin:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.origin}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">LGA of Origin:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.origin_lga}
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
                    <p className="text-mobileMenuColor">
                      {individual.means_of_identification}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">ID Card Number:</p>
                    <p className="text-mobileMenuColor">
                      {individual.id_card_number}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Issue Date:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.issue_date}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Expiry Date:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.expiry_date}
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
                      {individual.next_of_kin_title}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Last Name:</p>
                    <p className="text-mobileMenuColor">
                      {individual.next_of_kin_surname}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">First Name:</p>
                    <p className="text-mobileMenuColor">
                      {individual.next_of_kin_firstname}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Middle Name:</p>
                    <p className="text-mobileMenuColor">
                      {individual.next_of_kin_middle_name}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Phone Number:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.next_of_kin_phone_number}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Relationship:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.next_of_kin_relationship}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Email Address:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.next_of_kin_email}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Occupation:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {individual.next_of_kin_occupation}
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
                  <div className="w-1/2">
                    <p className="text-footerText">Signature:</p>
                    <p className="text-mobileMenuColor">
                      {individual.signature}
                    </p>
                  </div>
                  <div className="w-1/2">
                    <p className="text-footerText">Joint Account Signature</p>
                    <p className="text-mobileMenuColor">
                      {individual.signature_two}
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
