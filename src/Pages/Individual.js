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
    accountType: "",
    title: "",
    surname: "",
    firstName: "",
    middleName: "",
    passportPhoto: null,
    dob: "",
    pob: "",
    gender: "",
    email: "",
    phoneNumber: "",
    homeAddress: "",
    lga: "",
    landmark: "",
    bvn: "",
    maritalStatus: "",
    soo: "",
    lgaoo: "",
    occupation: "",
    moi: "",
    idNumber: "",
    issueDate: "",
    expiryDate: "",
    ntitle: "",
    nsurname: "",
    nfirstName: "",
    nmiddleName: "",
    nphoneNumber: "",
    relationship: "",
    nemail: "",
    noccupation: "",
    signature: null,
    secondSignature: null,
    acceptedTerms: false,
  });

  const handleIndividualFormChange = (data) => {
    setFormData({ ...formData, ...data });
  };

  const sections = [
    {
      id: 0,
      component: (
        <Personal
          formData={formData}
          onFormChange={handleIndividualFormChange}
        />
      ),
    },
    {
      id: 1,
      component: (
        <Work formData={formData} onFormChange={handleIndividualFormChange} />
      ),
    },
    {
      id: 2,
      component: (
        <NextKin
          formData={formData}
          onFormChange={handleIndividualFormChange}
        />
      ),
    },
    {
      id: 3,
      component: (
        <Final formData={formData} onFormChange={handleIndividualFormChange} />
      ),
    },
  ];

  const handleCheckboxChange = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      acceptedTerms: value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form Data:", formData);

    // Reset all form fields to initial values except acceptedTerms
    setFormData({
      accountType: "",
      title: "",
      surname: "",
      firstName: "",
      middleName: "",
      passportPhoto: null,
      dob: "",
      pob: "",
      gender: "",
      email: "",
      phoneNumber: "",
      homeAddress: "",
      lga: "",
      landmark: "",
      bvn: "",
      maritalStatus: "",
      soo: "",
      lgaoo: "",
      occupation: "",
      moi: "",
      idNumber: "",
      issueDate: "",
      expiryDate: "",
      ntitle: "",
      nsurname: "",
      nfirstName: "",
      nmiddleName: "",
      nphoneNumber: "",
      relationship: "",
      nemail: "",
      noccupation: "",
      signature: null,
      secondSignature: null,
      acceptedTerms: formData.acceptedTerms, // Keep the acceptedTerms value
    });

    // Clear clickedSteps state
    setClickedSteps([]);

    // Show alert
    alert("Form submitted successfully!");

    // Set active section back to the first section
    setActiveSection(0);
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
                      formData={formData}
                      checked={formData.acceptedTerms}
                      onChange={handleCheckboxChange} // Pass the handleCheckboxChange function
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
