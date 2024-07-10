import React, { useState } from "react";
import logomob from "../assets/logomob.png";
import logotab from "../assets/logotab.png";
import { Link, useNavigate } from "react-router-dom";
import arrowleft from "../assets/arrowleft.svg";
import ArrowRight from "../assets/arrowrighttwo.svg";
import AccountOrangeButton from "../Components/AccountOrangeButton";
import Personal from "./AccountOpening/Individual/personal";
import Work from "./AccountOpening/Individual/work";
import NextKin from "./AccountOpening/Individual/nextKin";
import Final from "./AccountOpening/Individual/final";
import AcceptTerms from "../Components/AcceptTerms";
import AcctImageSlider from "../Components/acctImageSlider";
import AcctTextSlider from "../Components/acctTextSlider";
import logoweb from "../assets/logoweb.png";
import axios from "axios";

const Individual = () => {
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
    personal: {
      account_type: "",
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
      marital_status: "",
      origin: "",
      origin_lga: "",
    },
    work: {
      occupation: "",
      means_of_identification: "",
      id_card_number: "",
      issue_date: "",
      expiry_date: "",
    },
    nextKin: {
      next_of_kin_title: "",
      next_of_kin_surname: "",
      next_of_kin_firstname: "",
      next_of_kin_middle_name: "",
      next_of_kin_phone_number: "",
      next_of_kin_relationship: "",
      next_of_kin_email: "",
      next_of_kin_occupation: "",
    },
    final: {
      signature: null,
      signature_two: null,
    },
    acceptedTerms: false,
  });

  const handleIndividualFormChange = (formName, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [formName]: data,
    }));
  };

  const sections = [
    {
      id: 0,
      component: (
        <Personal
          formData={formData.personal}
          onFormChange={(data) => handleIndividualFormChange("personal", data)}
        />
      ),
    },
    {
      id: 1,
      component: (
        <Work
          formData={formData.work}
          onFormChange={(data) => handleIndividualFormChange("work", data)}
        />
      ),
    },
    {
      id: 2,
      component: (
        <NextKin
          formData={formData.nextKin}
          onFormChange={(data) => handleIndividualFormChange("nextKin", data)}
        />
      ),
    },
    {
      id: 3,
      component: (
        <Final
          formData={formData.final}
          onFormChange={(data) => handleIndividualFormChange("final", data)}
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
    data.append("accountType", formData.personal.account_type);
    data.append("title", formData.personal.title);
    data.append("surname", formData.personal.surname);
    data.append("firstname", formData.personal.firstname);
    data.append("middleName", formData.personal.middle_name);
    data.append("dateOfBirth", formData.personal.date_of_birth);
    data.append("placeOfBirth", formData.personal.place_of_birth);
    data.append("gender", formData.personal.gender);
    data.append("emailAddress", formData.personal.email_address);
    data.append("phoneNumber", formData.personal.phone_number);
    data.append("homeAddress", formData.personal.home_address);
    data.append("homeAddressLga", formData.personal.home_address_lga);
    data.append("landmark", formData.personal.landmark);
    data.append("bvn", formData.personal.bvn);
    data.append("maritalStatus", formData.personal.marital_status);
    data.append("origin", formData.personal.origin);
    data.append("originLga", formData.personal.origin_lga);
    data.append("occupation", formData.work.occupation);
    data.append("meansOfIdentification", formData.work.means_of_identification);
    data.append("idCardNumber", formData.work.id_card_number);
    data.append("issueDate", formData.work.issue_date);
    data.append("expiryDate", formData.work.expiry_date);
    data.append("nextOfKinTitle", formData.nextKin.next_of_kin_title);
    data.append("nextOfKinSurname", formData.nextKin.next_of_kin_surname);
    data.append("nextOfKinFirstname", formData.nextKin.next_of_kin_firstname);
    data.append(
      "nextOfKinMiddlename",
      formData.nextKin.next_of_kin_middle_name
    );
    data.append(
      "nextOfKinPhoneNumber",
      formData.nextKin.next_of_kin_phone_number
    );
    data.append(
      "nextOfKinRelationship",
      formData.nextKin.next_of_kin_relationship
    );
    data.append("nextOfKinEmailAddress", formData.nextKin.next_of_kin_email);
    data.append("nextOfKinOccupation", formData.nextKin.next_of_kin_occupation);

    // Append file inputs if they exist
    if (formData.personal.passport) {
      data.append("passport", formData.personal.passport);
    }
    if (formData.final.signature) {
      data.append("signature", formData.final.signature);
    }
    if (formData.final.signature_two) {
      data.append("signatureTwo", formData.final.signature_two);
    }

    // Send form data to the API
    try {
      const response = await axios.post(
        "https://api.canaryfinance.canarypointfcl.com/v1/api/create_individual_account",
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
        personal: {
          account_type: "",
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
          marital_status: "",
          origin: "",
          origin_lga: "",
        },
        work: {
          occupation: "",
          means_of_identification: "",
          id_card_number: "",
          issue_date: "",
          expiry_date: "",
        },
        nextKin: {
          next_of_kin_title: "",
          next_of_kin_surname: "",
          next_of_kin_firstname: "",
          next_of_kin_middle_name: "",
          next_of_kin_phone_number: "",
          next_of_kin_relationship: "",
          next_of_kin_email: "",
          next_of_kin_occupation: "",
        },
        final: {
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
        <div className="flex flex-col items-center bg-white w-full lg:w-1/2 overflow-y-scroll">
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
                    Individual Account Opening
                  </span>
                  <p className="text-mobileMenuColor text-base md:text-xl w-80 md:w-160 lg:w-158">
                    Complete all information or{" "}
                    <a
                      href={`${process.env.PUBLIC_URL}/Canary Point Individual Account Opening Form.pdf`}
                      download="Canary Point Individual Account Opening Form.pdf"
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
                        Personal Information
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
                        Work Information
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
                        Next of Kin Information
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
                        Final Information
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
                    <Link to="/complete">
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

export default Individual;
