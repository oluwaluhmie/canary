import React, { useState } from "react";
import logomob from "../assets/logomob.png";
import logotab from "../assets/logotab.png";
import { Link, useNavigate } from "react-router-dom";
import arrowleft from "../assets/arrowleft.svg";
import ArrowRight from "../assets/arrowrighttwo.svg";
import AccountOrangeButton from "../Components/AccountOrangeButton";
import Caccount from "./AccountOpening/Corporate/Caccount";
import Cpersonal from "./AccountOpening/Corporate/Cpersonal";
import Cfinal from "./AccountOpening/Corporate/Cfinal";
import AcceptTerms from "../Components/AcceptTerms";
import AcctImageSlider from "../Components/acctImageSlider";
import AcctTextSlider from "../Components/acctTextSlider";
import logoweb from "../assets/logoweb.png";
import Csignatory from "./AccountOpening/Corporate/Csignatory";
import axios from "axios";

const Corporate = () => {
  const [clickedSteps, setClickedSteps] = useState([]);
  const [activeSection, setActiveSection] = useState(0);
  const navigate = useNavigate();

  const handleNextClick = () => {
    window.scrollTo(0, 0);
    if (activeSection < sections.length - 1) {
      setClickedSteps([...clickedSteps, activeSection]);
      setActiveSection(activeSection + 1);
    }
  };

  const handleBackClick = () => {
    window.scrollTo(0, 0);
    if (activeSection > 0) {
      setClickedSteps(clickedSteps.slice(0, -1)); // Remove the last clicked step
      setActiveSection(activeSection - 1);
    } else {
      navigate(-1);
    }
  };

  const getButtonClasses = (step) => {
    if (step === activeSection) {
      return "bg-white text-menuHover border-menuHover";
    } else if (clickedSteps.includes(step)) {
      return "bg-formBg text-white";
    } else {
      return "border-textboxBorder text-textboxBorder bg-white";
    }
  };

  const [formData, setFormData] = useState({
    Caccount: {
      account_type: "",
      institution_type: "",
      organization_name: "",
      business_reg_number: "",
      tax_id_number: "",
      business_address: "",
      business_email_address: "",
      web_address: "",
    },
    Cpersonal: {
      title: "",
      surname: "",
      firstname: "",
      middle_name: "",
      passport: null,
      date_of_birth: "",
      place_of_birth: "",
      email_address: "",
      phone_number: "",
      home_address: "",
      home_address_lga: "",
      landmark: "",
      bvn: "",
      means_of_identification: "",
      id_card_number: "",
      issue_date: "",
      expiry_date: "",
    },
    Csignatory: {
      title_two: "",
      surname_two: "",
      firstname_two: "",
      middle_name_two: "",
      passport_two: null,
      date_of_birth_two: "",
      place_of_birth_two: "",
      email_two: "",
      phone_number_two: "",
      home_address_two: "",
      home_address_lga_two: "",
      landmark_two: "",
      bvn_two: "",
      means_of_identification_two: "",
      id_card_number_two: "",
      issue_date_two: "",
      expiry_date_two: "",
    },
    Cfinal: {
      signature: null,
      signature_two: null,
    },
    acceptedTerms: false,
  });

  const handleCorporateFormChange = (formName, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [formName]: data,
    }));
  };

  const sections = [
    {
      id: 0,
      component: (
        <Caccount
          formData={formData.Caccount}
          onFormChange={(data) => handleCorporateFormChange("Caccount", data)}
        />
      ),
    },
    {
      id: 1,
      component: (
        <Cpersonal
          formData={formData.Cpersonal}
          onFormChange={(data) => handleCorporateFormChange("Cpersonal", data)}
        />
      ),
    },
    {
      id: 2,
      component: (
        <Csignatory
          formData={formData.Csignatory}
          onFormChange={(data) => handleCorporateFormChange("Csignatory", data)}
        />
      ),
    },
    {
      id: 3,
      component: (
        <Cfinal
          formData={formData.Cfinal}
          onFormChange={(data) => handleCorporateFormChange("Cfinal", data)}
        />
      ),
    },
  ];

  const handleCheckboxChange = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      acceptedTerms: value,
    }));
  };

  const handleSubmit = async () => {
    // Convert formData to FormData instance
    const data = new FormData();
    data.append("accountType", formData.Caccount.account_type);
    data.append("institutionType", formData.Caccount.institution_type);
    data.append("organizationName", formData.Caccount.organization_name);
    data.append("businessRegNumber", formData.Caccount.business_reg_number);
    data.append("taxIdNumber", formData.Caccount.tax_id_number);
    data.append("businessAddress", formData.Caccount.business_address);
    data.append(
      "businessEmailAddress",
      formData.Caccount.business_email_address
    );
    data.append("webAddress", formData.Caccount.web_address);
    data.append("title", formData.Cpersonal.title);
    data.append("surname", formData.Cpersonal.surname);
    data.append("firstname", formData.Cpersonal.firstname);
    data.append("middleName", formData.Cpersonal.middle_name);
    data.append("dateOfBirth", formData.Cpersonal.date_of_birth);
    data.append("placeOfBirth", formData.Cpersonal.place_of_birth);
    data.append("emailAddress", formData.Cpersonal.email_address);
    data.append("phoneNumber", formData.Cpersonal.phone_number);
    data.append("homeAddress", formData.Cpersonal.home_address);
    data.append("homeAddressLga", formData.Cpersonal.home_address_lga);
    data.append("landmark", formData.Cpersonal.landmark);
    data.append("bvn", formData.Cpersonal.bvn);
    data.append(
      "meansOfIdentification",
      formData.Cpersonal.means_of_identification
    );
    data.append("idCardNumber", formData.Cpersonal.id_card_number);
    data.append("issueDate", formData.Cpersonal.issue_date);
    data.append("expiryDate", formData.Cpersonal.expiry_date);
    data.append("titleTwo", formData.Csignatory.title_two);
    data.append("surnameTwo", formData.Csignatory.surname_two);
    data.append("firstnameTwo", formData.Csignatory.firstname_two);
    data.append("middleNameTwo", formData.Csignatory.middle_name_two);
    data.append("dateOfBirthTwo", formData.Csignatory.date_of_birth_two);
    data.append("placeOfBirthTwo", formData.Csignatory.place_of_birth_two);
    data.append("emailAddressTwo", formData.Csignatory.email_two);
    data.append("phoneNumberTwo", formData.Csignatory.phone_number_two);
    data.append("homeAddressTwo", formData.Csignatory.home_address_two);
    data.append("homeAddressLgaTwo", formData.Csignatory.home_address_lga_two);
    data.append("landmarkTwo", formData.Csignatory.landmark_two);
    data.append("bvnTwo", formData.Csignatory.bvn_two);
    data.append(
      "meansOfIdentificationTwo",
      formData.Csignatory.means_of_identification_two
    );
    data.append("idCardNumberTwo", formData.Csignatory.id_card_number_two);
    data.append("issueDateTwo", formData.Csignatory.issue_date_two);
    data.append("expiryDateTwo", formData.Csignatory.expiry_date_two);

    // Append file inputs if they exist
    if (formData.Cpersonal.passport) {
      data.append("passport", formData.Cpersonal.passport);
    }
    if (formData.Csignatory.passport_two) {
      data.append("passportTwo", formData.Csignatory.passport_two);
    }
    if (formData.Cfinal.signature) {
      data.append("signature", formData.Cfinal.signature);
    }
    if (formData.Cfinal.signature_two) {
      data.append("signatureTwo", formData.Cfinal.signature_two);
    }

    // Send form data to the API
    try {
      const response = await axios.post(
        "https://api.canaryfinance.canarypointfcl.com/v1/api/create_corporate_account",
        data,
        {
          headers: {
            "x-api-key": "22062024",
            "Content-Type": "multipart/form-data",
          },
          maxBodyLength: Infinity,
        }
      );

      console.log("Form submitted successfully:", response.data);

      // Reset all form fields to initial values except acceptedTerms
      setFormData({
        Caccount: {
          account_type: "",
          institution_type: "",
          organization_name: "",
          business_reg_number: "",
          tax_id_number: "",
          business_address: "",
          business_email_address: "",
          web_address: "",
        },
        Cpersonal: {
          title: "",
          surname: "",
          firstname: "",
          middle_name: "",
          passport: null,
          date_of_birth: "",
          place_of_birth: "",
          gender: "",
          email_address: "",
          phone_number: "",
          home_address: "",
          home_address_lga: "",
          landmark: "",
          bvn: "",
          means_of_identification: "",
          id_card_number: "",
          issue_date: "",
          expiry_date: "",
        },
        Csignatory: {
          title_two: "",
          surname_two: "",
          firstname_two: "",
          middle_name_two: "",
          passport_two: null,
          date_of_birth_two: "",
          place_of_birth_two: "",
          gender_two: "",
          email_two: "",
          phone_number_two: "",
          home_address_two: "",
          home_address_lga_two: "",
          landmark_two: "",
          bvn_two: "",
          means_of_identification_two: "",
          id_card_number_two: "",
          issue_date_two: "",
          expiry_date_two: "",
        },
        Cfinal: {
          signature: null,
          signature_two: null,
        },
        acceptedTerms: formData.acceptedTerms, // Keep the acceptedTerms value
      });

      // Clear clickedSteps state
      setClickedSteps([]);

      // Navigate back to the first section
      setActiveSection(0);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-full lg:flex lg:flex-row">
        {/* Image Slider */}
        <div className="relative hidden lg:flex lg:flex-col lg:justify-between lg:w-1/2 lg:px-16 lg:h-full overflow-y-hidden">
          <AcctImageSlider />
          <div className="flex flex-col justify-between w-full h-screen relative">
            <Link to="/" className="py-12">
              <img src={logoweb} alt="logoweb" />
            </Link>
            <div className="py-20">
              <AcctTextSlider />
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="flex flex-col items-center bg-white w-full  lg:w-1/2 overflow-y-scroll">
          <div className="flex flex-col md:py-12 lg:py-20 w-full">
            {/* Header Section */}
            <div className="flex flex-row md:justify-center lg:hidden px-4 py-4 md:py-0 w-full border-b border-textboxBorder md:border-b-0 lg:border-b-0">
              <Link to="/">
                <img src={logomob} alt="logomob" className="block md:hidden" />
              </Link>
              <Link to="/">
                <img src={logotab} alt="logotab" className="hidden md:block" />
              </Link>
            </div>
            {/* Content */}
            <div className="flex flex-col gap-10 px-5 md:px-12 lg:px-16 pt-12 pb-16">
              {/* Back Link */}
              <div className="flex flex-row justify-between">
                <Link
                  className="flex items-center gap-1 hover:text-linkHover hover:gap-2"
                  onClick={handleBackClick}
                >
                  <img src={arrowleft} alt="arrowleft" />
                  <p className="text-base text-menuHover">Back</p>
                </Link>
                <div className="flex justify-end gap-1 md:gap-2">
                  <p className="text-mobileMenuColor text-sm md:text-base">
                    Having troubles?
                  </p>
                  <Link to="">
                    <p className="text-menuHover text-sm md:text-base">
                      Get Help
                    </p>
                  </Link>
                </div>
              </div>
              {/* Heading Text */}
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1 md:gap-2">
                  <span className="font-gotham text-xl md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
                    Corporate Account Opening
                  </span>
                  <p className="text-mobileMenuColor text-base md:text-xl w-80 md:w-160 lg:w-158">
                    Complete all information or{" "}
                    <a
                      href={`${process.env.PUBLIC_URL}/Canary Point Corporate Account Opening Form.pdf`}
                      download="Canary Point Corporate Account Opening Form.pdf"
                      className="text-menuHover underline underline-offset-2"
                    >
                      Download Form
                    </a>{" "}
                    and fill offline.
                  </p>
                </div>
              </div>
              {/* Form */}
              <div className="flex flex-col gap-10">
                {/* Form Page Title */}
                <div className="flex flex-row gap-2 pb-1 border-b">
                  <div className="flex flex-row gap-1">
                    <button
                      className={`flex justify-center items-center rounded-full h-6 w-6 border ${getButtonClasses(
                        0
                      )}`}
                    >
                      1
                    </button>
                    {activeSection === 0 && (
                      <p className="text-menuHover text-base">
                        Company Details
                      </p>
                    )}
                  </div>
                  <p className="text-mobileMenuColor">-</p>
                  <div className="flex flex-row gap-1">
                    <button
                      className={`flex justify-center items-center rounded-full h-6 w-6 border ${getButtonClasses(
                        1
                      )}`}
                    >
                      2
                    </button>
                    {activeSection === 1 && (
                      <p className="text-menuHover text-base">
                        Signatory One Information
                      </p>
                    )}
                  </div>
                  <p className="text-mobileMenuColor">-</p>
                  <div className="flex flex-row gap-1">
                    <button
                      className={`flex justify-center items-center rounded-full h-6 w-6 border ${getButtonClasses(
                        2
                      )}`}
                    >
                      3
                    </button>
                    {activeSection === 2 && (
                      <p className="text-menuHover text-base">
                        Signatory Two Information
                      </p>
                    )}
                  </div>
                  <p className="text-mobileMenuColor">-</p>
                  <div className="flex flex-row gap-1">
                    <button
                      className={`flex justify-center items-center rounded-full h-6 w-6 border ${getButtonClasses(
                        3
                      )}`}
                    >
                      4
                    </button>
                    {activeSection === 3 && (
                      <p className="text-menuHover text-base">
                        Final Confirmation
                      </p>
                    )}
                  </div>
                </div>
                {/* Forms */}
                <div className="flex flex-col gap-6">
                  {sections.map(
                    (section) =>
                      activeSection === section.id && (
                        <div key={section.id}>{section.component}</div>
                      )
                  )}
                  {activeSection === sections.length - 1 && (
                    <AcceptTerms
                      acceptedTerms={formData.acceptedTerms}
                      onChange={handleCheckboxChange}
                    />
                  )}
                </div>
                {/* Next/Complete Buttons */}
                <div>
                  {activeSection !== sections.length - 1 && (
                    <button
                      className="md:flex md:justify-end w-full"
                      onClick={handleNextClick}
                    >
                      <AccountOrangeButton
                        buttonText="Next"
                        imgSrc={ArrowRight}
                        alt="arrowright"
                      />
                    </button>
                  )}

                  {activeSection === sections.length - 1 && (
                    <Link to="/corporatecomplete">
                      <button
                        className="md:flex md:justify-end w-full"
                        onClick={handleSubmit}
                      >
                        <AccountOrangeButton buttonText="Complete" />
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corporate;
