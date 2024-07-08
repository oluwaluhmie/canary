import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../Components/inputWithLabel";
import ArrowRight from "../assets/arrowrighttwo.svg";
import AdminOrangeButton from "../Components/AdminOrangeButton";

const Admin = ({ onFormChange = () => {} }) => {
  return (
    <div className="flex flex-col items-center bg-adminbg bg-contain">
      {/* Header */}
      <div className="flex items-center bg-white px-5 md:px-12 lg:px-32 pt-3 w-full h-25 shadow-investment">
        {/* Canary Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-10 md:h-11 lg:h-14 w-32 md:w-36 lg:w-44"
          />
        </Link>
      </div>
      {/* Content */}
      <div className="flex flex-col items-center w-full py-20">
        <div className="flex flex-col bg-white shadow-investment border border-adminBorder gap-12 px-12 py-12">
          <div className="flex flex-col gap-3">
            <span className="font-gotham text-3xl text-transparent bg-clip-text bg-gradient-to-b from-blueTextGradient-start to-blueTextGradient-end leading-tight lg:leading-snug">
              Admin Access
            </span>
            <p className="text-mobileMenuColor text-base">
              To gain administrative access, please provide your email and
              password
            </p>
          </div>
          <div className="flex flex-col">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Email Address is required"),
                password: Yup.string()
                  .min(4, "Password must be at least 4 characters")
                  .required("Password is required"),
              })}
              onSubmit={(values, { resetForm }) => {
                console.log(values); // Handles form submission here
                resetForm(); // Clear form after submission
              }}
            >
              {({ values, errors, handleChange }) => (
                <Form className="flex flex-col">
                  <div className="grid grid-cols-1 gap-6">
                    <InputWithLabel
                      labelName="Email"
                      inputType="email"
                      inputName="email"
                      placeholder="Enter your email"
                      inputValue={values.email}
                      inputOnChange={(event) => {
                        handleChange(event);
                        onFormChange({ email: event.target.value });
                      }}
                      InputError={errors.email}
                    />
                    <InputWithLabel
                      labelName="Password"
                      inputType="password"
                      inputName="password"
                      placeholder="Enter your password"
                      inputValue={values.password}
                      inputOnChange={(event) => {
                        handleChange(event);
                        onFormChange({ password: event.target.value });
                      }}
                      InputError={errors.password}
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="flex flex-col items-end">
            <Link to="/adminaccess">
              <AdminOrangeButton
                buttonText="Next"
                imgSrc={ArrowRight}
                alt="arrowright"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
