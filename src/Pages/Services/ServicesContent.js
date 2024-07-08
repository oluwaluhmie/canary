import React from "react";
import { Link } from "react-router-dom";
import servicesimgmob from "../../assets/servicesimgmob.png";
import servicesimgtab from "../../assets/servicesimgtab.png";
import servicesimgweb from "../../assets/servicesimgweb.png";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../../Components/inputWithLabel";
import OrangeButtonWoutIcon from "../../Components/orangeButtonWoutIcon";
import contactsimage from "../../assets/contactsimage.png";
import axios from "axios"; 

const ServicesContent = ({ onFormChange = () => {} }) => {
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const data = JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        emailAddress: values.emailAddress,
        phoneNumber: values.phoneNumber,
        message: values.message,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://api.canaryfinance.canarypointfcl.com/v1/api/contact_us_message",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "22062024",
        },
        data: data,
      };

      const response = await axios(config);

      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = response.data;
      console.log("Form submission successful:", result);
      resetForm(); // Clear form after successful submission

    } catch (error) {
      console.error("Fetch request failed:", error.message);
    } finally {
      setSubmitting(false); // Set submitting state back to false
    }
  };

  return (
    <div className="flex flex-col items-center bg-servicesbgwhite bg-cover">
      <div className="flex flex-col w-107.5 md:w-200 lg:w-341.5">
        <div className="flex flex-col items-center pt-12 pb-16 lg:py-24">
          <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 w-97.5 md:w-176 lg:w-300">
            <div className="flex flex-col gap-3 lg:gap-5 lg:w-256">
              <span className="font-gotham text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
                Elevate Your Financial Strategy
              </span>
              <p className="text-mobileMenuColor text-lg lg:text-xl">
                At Canary Point Finance, our Financial Advisory Services offer
                personalized support and strategic guidance to individuals and
                businesses seeking to optimize their financial strategies. Our
                expert team works closely with you to understand your unique
                goals, challenges, and risk tolerances, providing tailored
                solutions to help you achieve sustainable financial success.
              </p>
            </div>
            <div>
              <img
                src={servicesimgmob}
                alt="servicesimgmob"
                className="block md:hidden lg:hidden object-cover"
              />
              <img
                src={servicesimgtab}
                alt="servicesimgtab"
                className="hidden md:block lg:hidden object-cover"
              />
              <img
                src={servicesimgweb}
                alt="servicesimgweb"
                className="hidden md:hidden lg:block object-cover"
              />
            </div>
            <div className="flex flex-col gap-5 lg:gap-6">
              <p className="text-mobileMenuColor text-lg lg:text-xl">
                Our client base spans across the primary sectors of the Nigerian
                economy, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:flex lg:gap-x-8 px-5">
                <div className="lg:w-69">
                  <ul className="text-mobileMenuColor text-lg list-disc">
                    <li>Oil & Gas</li>
                    <li>Financial Services</li>
                  </ul>
                </div>
                <div className="lg:w-69">
                  <ul className="text-mobileMenuColor text-lg list-disc">
                    <li>Media & Entertainment</li>
                    <li>Telecommunications</li>
                  </ul>
                </div>
                <div className="lg:w-69">
                  <ul className="text-mobileMenuColor text-lg list-disc">
                    <li>Hotels & Hospitality</li>
                    <li>Renewable Energy</li>
                  </ul>
                </div>
                <div className="lg:w-69">
                  <ul className="text-mobileMenuColor text-lg list-disc">
                    <li>Food & Agriculture</li>
                    <li>Real Estate</li>
                  </ul>
                </div>
              </div>
            </div>
            <Link>
              <button className="flex items-center justify-center text-lg border-2 border-menuHover text-transparent bg-clip-text bg-gradient-to-b from-linkOrangeButtonText-start to-linkOrangeButtonText-end bg-white w-full md:w-55.75 h-12 hover:bg-gradient-to-b hover:from-orangeButton-start hover:to-orangeButton-end">
                Get started with us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-servicesbgblue bg-cover w-full">
        <div className="py-12 md:py-16 w-97.5 md:w-176 lg:w-300">
          <div className="lg:flex lg:items-center lg:justify-center lg:gap-x-24 lg:w-300">
            <div className="flex flex-col justify-center gap-6 md:gap-12">
              <span className="font-gotham text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end lg:w-120">
                Our team would love to hear from you.
              </span>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  emailAddress: "",
                  phoneNumber: "",
                  message: "",
                }}
                validationSchema={Yup.object({
                  firstName: Yup.string().required("First name is required"),
                  lastName: Yup.string().required("Last name is required"),
                  emailAddress: Yup.string()
                    .email("Invalid email address")
                    .required("Email Address is required"),
                  phoneNumber: Yup.string()
                    .matches(
                      /^\d{11}$/,
                      "Phone number must be exactly 11 digits"
                    )
                    .required("Phone number is required"),
                  message: Yup.string().required("Message is required"),
                })}
                onSubmit={handleSubmit}
              >
                {({ values, errors, handleChange, isSubmitting }) => (
                  <Form className="flex flex-col gap-6 md:gap-8">
                    <div className="grid grid-cols-1 gap-5 md:gap-6">
                      <div className="grid gap-5 md:grid md:grid-cols-2 md:gap-x-6">
                        <InputWithLabel
                          labelName="First Name"
                          inputType="text"
                          inputName="firstName"
                          placeholder="Enter first name"
                          inputValue={values.firstName}
                          inputOnChange={(event) => {
                            handleChange(event);
                            onFormChange({ firstName: event.target.value });
                          }}
                          InputError={errors.firstName}
                        />
                        <InputWithLabel
                          labelName="Last Name"
                          inputType="text"
                          inputName="lastName"
                          placeholder="Enter last name"
                          inputValue={values.lastName}
                          inputOnChange={(event) => {
                            handleChange(event);
                            onFormChange({ lastName: event.target.value });
                          }}
                          InputError={errors.lastName}
                        />
                      </div>
                      <InputWithLabel
                        labelName="Email"
                        inputType="email"
                        inputName="emailAddress"
                        placeholder="e.g. segun@gmail.com"
                        inputValue={values.emailAddress}
                        inputOnChange={(event) => {
                          handleChange(event);
                          onFormChange({ emailAddress: event.target.value });
                        }}
                        InputError={errors.emailAddress}
                      />
                      <InputWithLabel
                        labelName="Phone Number"
                        inputType="text"
                        inputName="phoneNumber"
                        placeholder="+234 (806) 000-0000"
                        inputValue={values.phoneNumber}
                        inputOnChange={(event) => {
                          handleChange(event);
                          onFormChange({ phoneNumber: event.target.value });
                        }}
                        InputError={errors.phoneNumber}
                      />
                      <InputWithLabel
                        labelName="Message"
                        inputType="textarea"
                        inputName="message"
                        placeholder="Enter your message here"
                        inputValue={values.message}
                        inputOnChange={(event) => {
                          handleChange(event);
                          onFormChange({ message: event.target.value });
                        }}
                        InputError={errors.message}
                      />
                    </div>
                    <OrangeButtonWoutIcon
                      buttonText="Send Message"
                      disabled={isSubmitting}
                    />
                  </Form>
                )}
              </Formik>
            </div>
            <div className="hidden lg:block">
              <img src={contactsimage} alt="contactsimage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;
