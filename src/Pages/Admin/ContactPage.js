import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import arrowleft from "../../assets/arrowleft.svg";
import jsPDF from "jspdf";

const ContactPage = () => {
  const location = useLocation();
  const { contactId } = location.state || {};
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const config = {
          method: "get",
          maxBodyLength: Infinity,
          url: `https://api.canaryfinance.canarypointfcl.com/v1/api/single_message/${contactId}`,
          headers: { "x-api-key": "22062024" },
        };

        const response = await axios.request(config);
        if (
          response.data &&
          response.data.result &&
          response.data.result.length > 0
        ) {
          setContact(response.data.result[0]);
        } else {
          setContact(null);
        }
      } catch (error) {
        setContact(null);
      }
    };

    if (contactId) {
      fetchContact();
    }
  }, [contactId]);

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.text("Contact Us Form", 10, 10);
    if (contact) {
      doc.setFont("times", "normal");
      doc.setFontSize(12);
      doc.text(`First Name: ${contact.firstname}`, 10, 20);
      doc.text(`Last Name: ${contact.lastname}`, 10, 30);
      doc.text(`Email Address: ${contact.email_address}`, 10, 40);
      doc.text(`Phone Number: ${contact.phone_number}`, 10, 50);
      doc.text(`Message: ${contact.message}`, 10, 60);
    } else {
      doc.text("Contact not found.", 10, 20);
    }

    doc.save(
      `Contact_Form_${contact.lastname}_${contact.firstname}.pdf`
    );
  };

  if (!contact) {
    return <p className="text-menuHover text-lg p-5">Contact not found.</p>;
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center bg-white px-12 border-b border-borderStroke h-28 shadow-investment">
        <p className="font-gotham text-2xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
          Contact us Form
        </p>
      </div>
      <div className="flex flex-col px-12 py-8">
        <div className="flex flex-col gap-6">
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
                  {contact.firstname} {contact.lastname}
                </p>
              </div>
            </div>
            <button
              onClick={downloadPDF}
              className="flex items-center justify-center text-sm border-2 border-menuHover text-white bg-gradient-to-b from-buttonGradient-start to-buttonGradient-end w-45.75 h-10 hover:from-orangeButton-start hover:to-orangeButton-end"
            >
              Download Information
            </button>
          </div>
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
                  <p className="text-mobileMenuColor">{contact.firstname}</p>
                </div>
                <div className="w-80">
                  <p className="text-footerText">Last Name:</p>
                  <p className="text-mobileMenuColor">{contact.lastname}</p>
                </div>
              </div>
              <hr />
              <div className="flex gap-6">
                <div className="w-80">
                  <p className="text-footerText">Email Address:</p>
                  <p className="text-mobileMenuColor">
                    {contact.email_address}
                  </p>
                </div>
                <div className="w-80">
                  <p className="text-footerText">Phone Number:</p>
                  <p className="text-mobileMenuColor">{contact.phone_number}</p>
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
