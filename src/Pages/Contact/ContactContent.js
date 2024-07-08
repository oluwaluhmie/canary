import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import InputWithLabel from "../../Components/inputWithLabel";
import OrangeButtonWoutIcon from "../../Components/orangeButtonWoutIcon";
import contactsimage from "../../assets/contactsimage.png";

const ContactContent = ({ onFormChange = () => {} }) => {
  const onSubmitHandler = async (values, { resetForm, setSubmitting }) => {
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
    <div className="flex flex-col items-center bg-white lg:bg-contactsbg lg:bg-cover">
      <div className="flex flex-col items-center w-107.5 md:w-200 lg:w-341.5">
        <div className="pt-12 lg:pt-24 pb-16 lg:pb-32 w-97.5 md:w-176 lg:w-300">
          <div className="lg:flex lg:items-center lg:gap-x-24">
            <div className="flex flex-col gap-6 md:gap-12">
              <span className="font-gotham text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end w-64 md:w-90 lg:w-120">
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
                onSubmit={onSubmitHandler}
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

export default ContactContent;
