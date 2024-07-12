import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import arrowleft from "../../assets/arrowleft.svg";
import jsPDF from "jspdf";

const CorporatePage = () => {
  const { id: corporateId } = useParams();
  const [corporate, setCorporate] = useState(null);

  useEffect(() => {
    const fetchCorporate = async () => {
      try {
        const config = {
          method: "get",
          maxBodyLength: Infinity,
          url: `https://api.canaryfinance.canarypointfcl.com/v1/api/single_corporate_account/${corporateId}`,
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
          setCorporate(response.data.result[0]);
        } else {
          setCorporate(null);
        }
      } catch (error) {
        setCorporate(null);
      }
    };

    if (corporateId) {
      fetchCorporate();
    }
  }, [corporateId]);

  const handleDownloadPDF = () => {
    if (corporate) {
      const doc = new jsPDF();
      const lineHeight = 10;

      // Function to add bold text
      const addBoldText = (text, x, y) => {
        doc.setFont("times", "bold");
        doc.setFontSize(12);
        doc.text(text, x, y);
        doc.setFont("times", "normal"); // Reset font to normal
      };

      doc.text(`Corporate Account Form`, 10, lineHeight);

      // Company Details
      addBoldText("Company Details", 10, lineHeight + 10);
      doc.text(
        `Type of Account: ${corporate.account_type}`,
        10,
        lineHeight + 20
      );
      doc.text(
        `Type of Institution: ${corporate.institution_type}`,
        10,
        lineHeight + 30
      );
      doc.text(
        `Organization Name: ${corporate.organization_name}`,
        10,
        lineHeight + 40
      );
      doc.text(
        `Business Reg. Number: ${corporate.business_reg_number}`,
        10,
        lineHeight + 50
      );
      doc.text(
        `Tax ID Number: ${corporate.tax_id_number}`,
        10,
        lineHeight + 60
      );
      doc.text(
        `Business Address: ${corporate.business_address}`,
        10,
        lineHeight + 70
      );
      doc.text(
        `Business Email Address: ${corporate.business_email_address}`,
        10,
        lineHeight + 80
      );
      doc.text(
        `Business Web Address: ${corporate.web_address}`,
        10,
        lineHeight + 90
      );

      // Signatory One Information
      addBoldText("Signatory One Information", 10, lineHeight + 100);
      doc.text(`Title: ${corporate.title}`, 10, lineHeight + 110);
      doc.text(`Surname: ${corporate.surname}`, 10, lineHeight + 120);
      doc.text(`First Name: ${corporate.firstname}`, 10, lineHeight + 130);
      doc.text(`Middle Name: ${corporate.middle_name}`, 10, lineHeight + 140);

      doc.text(`Passport: `, 10, lineHeight + 150);

      // Create a clickable link for the passport image
      doc.setTextColor(88, 116, 183);
      doc.textWithLink("Click here to view passport", 30, lineHeight + 150, {
        url: corporate.passport,
      });
      doc.setTextColor(0, 0, 0); // Reset color to black

      doc.text(
        `Date of Birth: ${corporate.date_of_birth}`,
        10,
        lineHeight + 160
      );
      doc.text(
        `Place of Birth: ${corporate.place_of_birth}`,
        10,
        lineHeight + 170
      );
      doc.text(
        `Email Address: ${corporate.email_address}`,
        10,
        lineHeight + 180
      );
      doc.text(`Phone Number: ${corporate.phone_number}`, 10, lineHeight + 190);
      doc.text(`Home Address: ${corporate.home_address}`, 10, lineHeight + 200);
      doc.text(
        `Home Address LGA: ${corporate.home_address_lga}`,
        10,
        lineHeight + 210
      );
      doc.text(
        `Home Address Landmark: ${corporate.landmark}`,
        10,
        lineHeight + 220
      );
      doc.text(`BVN: ${corporate.bvn}`, 10, lineHeight + 230);
      doc.text(
        `Means Of Identification: ${corporate.means_of_identification}`,
        10,
        lineHeight + 240
      );
      doc.text(
        `ID Card Number: ${corporate.id_card_number}`,
        10,
        lineHeight + 250
      );
      doc.text(`ID Issue Date: ${corporate.issue_date}`, 10, lineHeight + 260);
      doc.text(
        `ID Expiry Date: ${corporate.expiry_date}`,
        10,
        lineHeight + 270
      );

      doc.addPage();
      doc.text(`Corporate Account Form - 1`, 10, lineHeight);
      
      // Signatory Two Information
      addBoldText("Signatory Two Information", 10, lineHeight + 10);
      doc.text(`Title: ${corporate.title_two}`, 10, lineHeight + 20);
      doc.text(`Surname: ${corporate.surname_two}`, 10, lineHeight + 30);
      doc.text(`First Name: ${corporate.firstname_two}`, 10, lineHeight + 40);
      doc.text(
        `Middle Name: ${corporate.middle_name_two}`,
        10,
        lineHeight + 50
      );

      doc.text(`Passport: `, 10, lineHeight + 60);

      // Create a clickable link for the passport image
      doc.setTextColor(88, 116, 183);
      doc.textWithLink("Click here to view passport", 30, lineHeight + 60, {
        url: corporate.passport_two,
      });
      doc.setTextColor(0, 0, 0); // Reset color to black

      doc.text(
        `Date of Birth: ${corporate.date_of_birth_two}`,
        10,
        lineHeight + 70
      );
      doc.text(
        `Place of Birth: ${corporate.place_of_birth_two}`,
        10,
        lineHeight + 80
      );
      doc.text(`Email Address: ${corporate.email_two}`, 10, lineHeight + 90);
      doc.text(
        `Phone Number: ${corporate.phone_number_two}`,
        10,
        lineHeight + 100
      );
      doc.text(
        `Home Address: ${corporate.home_address_two}`,
        10,
        lineHeight + 110
      );
      doc.text(
        `Home Address LGA: ${corporate.home_address_lga_two}`,
        10,
        lineHeight + 120
      );
      doc.text(
        `Home Address Landmark: ${corporate.landmark_two}`,
        10,
        lineHeight + 130
      );
      doc.text(`BVN: ${corporate.bvn_two}`, 10, lineHeight + 140);
      doc.text(
        `Means Of Identification: ${corporate.means_of_identification_two}`,
        10,
        lineHeight + 150
      );
      doc.text(
        `ID Card Number: ${corporate.id_card_number_two}`,
        10,
        lineHeight + 160
      );
      doc.text(
        `ID Issue Date: ${corporate.issue_date_two}`,
        10,
        lineHeight + 170
      );
      doc.text(
        `ID Expiry Date: ${corporate.expiry_date_two}`,
        10,
        lineHeight + 180
      );

      // Final Information
      addBoldText("Final Information", 10, lineHeight + 190);

      doc.text(`Signature: `, 10, lineHeight + 200);
      // Create a clickable link for the signature image
      doc.setTextColor(88, 116, 183);
      doc.textWithLink("Click here to view signature", 30, lineHeight + 200, {
        url: corporate.signature,
      });
      doc.setTextColor(0, 0, 0); // Reset color to black

      doc.text(`Joint Account Signature: `, 10, lineHeight + 210);
      // Create a clickable link for the joint account signature image
      doc.setTextColor(88, 116, 183);
      doc.textWithLink(
        "Click here to view joint account signature",
        55,
        lineHeight + 210,
        { url: corporate.signature_two }
      );
      doc.setTextColor(0, 0, 0); // Reset color to black

      doc.save(`Corporate_Account_${corporate.organization_name}.pdf`);
    }
  };

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
                <p className="text-menuHover text-sm">
                  {corporate.organization_name}
                </p>
              </div>
            </div>
            {/* Download button */}
            <Link to="">
              <button
                className="flex items-center justify-center text-sm border-2 border-menuHover text-white bg-gradient-to-b from-buttonGradient-start to-buttonGradient-end w-45.75 h-10 hover:from-orangeButton-start hover:to-orangeButton-end"
                onClick={handleDownloadPDF}
              >
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
                      {corporate.account_type}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Type of Institution:</p>
                    <p className="text-mobileMenuColor">
                      {corporate.institution_type}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-full">
                    <p className="text-footerText">Name of Organization:</p>
                    <p className="text-mobileMenuColor">
                      {corporate.organization_name}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">RC No/Business Reg. No:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.business_reg_number}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Tax ID Number:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.tax_id_number}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-full">
                    <p className="text-footerText">Business Address:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.business_address}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Email Address:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.business_email_address}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Web Address:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.web_address}
                    </p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            {/* Signatory One Information */}
            <div className="flex flex-col w-full border border-adminBorder shadow-investment">
              <div className="px-8 py-3 h-13 bg-tableHeader border border-adminBorder">
                <p className="font-gotham text-lg text-menuTextColor">
                  Signatory One Details
                </p>
              </div>
              <div className="flex flex-col px-8 py-6 gap-8 bg-white">
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Title:</p>
                    <p className="text-mobileMenuColor">{corporate.title}</p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Last Name:</p>
                    <p className="text-mobileMenuColor">{corporate.surname}</p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">First Name:</p>
                    <p className="text-mobileMenuColor">
                      {corporate.firstname}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Middle Name:</p>
                    <p className="text-mobileMenuColor">
                      {corporate.middle_name}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-full">
                    <p className="text-footerText">Passport Photograph:</p>
                    <p className="text-mobileMenuColor text-sm">
                      <img
                        src={corporate.passport}
                        alt="corporate-passport"
                        className="w-24 h-24"
                      />
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Date of Birth:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.date_of_birth}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Place of Birth:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.place_of_birth}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Email Address:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.email_address}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Phone Number:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.phone_number}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Home Address:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.home_address}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">LGA:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.home_address_lga}
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
                      {corporate.means_of_identification}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">ID Card Number:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.id_card_number}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Issue Date:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.issue_date}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Expiry Date:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.expiry_date}
                    </p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            {/* Signatory Two Information */}
            <div className="flex flex-col w-full border border-adminBorder shadow-investment">
              <div className="px-8 py-3 h-13 bg-tableHeader border border-adminBorder">
                <p className="font-gotham text-lg text-menuTextColor">
                  Signatory Two Details
                </p>
              </div>
              <div className="flex flex-col px-8 py-6 gap-8 bg-white">
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Title:</p>
                    <p className="text-mobileMenuColor">
                      {corporate.title_two}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Last Name:</p>
                    <p className="text-mobileMenuColor">
                      {corporate.surname_two}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">First Name:</p>
                    <p className="text-mobileMenuColor">
                      {corporate.firstname_two}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Middle Name:</p>
                    <p className="text-mobileMenuColor">
                      {corporate.middle_name_two}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-full">
                    <p className="text-footerText">Passport Photograph:</p>
                    <p className="text-mobileMenuColor text-sm">
                      <img
                        src={corporate.passport_two}
                        alt="corporate-passport_two"
                        className="w-24 h-24"
                      />
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Date of Birth:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.date_of_birth_two}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Place of Birth:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.place_of_birth_two}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Email Address:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.email_two}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Phone Number:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.phone_number_two}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Home Address:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.home_address_two}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">LGA:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.home_address_lga_two}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Landmark:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.landmark_two}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">BVN:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.bvn_two}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Means of Identification:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.means_of_identification_two}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">ID Card Number:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.id_card_number_two}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex gap-6">
                  <div className="w-80">
                    <p className="text-footerText">Issue Date:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.issue_date_two}
                    </p>
                  </div>
                  <div className="w-80">
                    <p className="text-footerText">Expiry Date:</p>
                    <p className="text-mobileMenuColor text-sm">
                      {corporate.expiry_date_two}
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
                <div className="flex gap-6 justify-between">
                  <div className="w-full">
                    <p className="text-footerText">Signatory One Signature:</p>
                    <p className="text-mobileMenuColor">
                      <img
                        src={corporate.signature}
                        alt="corporate-signature"
                        className="w-24 h-24"
                      />
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-footerText">Signatory Two Signature:</p>
                    <p className="text-mobileMenuColor text-sm">
                      <img
                        src={corporate.signature_two}
                        alt="corporate-signature_two"
                        className="w-24 h-24"
                      />
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
