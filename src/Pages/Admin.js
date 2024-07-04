import React from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../Components/inputWithLabel";
import ArrowRight from "../assets/arrowrighttwo.svg";
import AdminOrangeButton from "../Components/AdminOrangeButton";
import api from "../api/apiService"; // Import your API instance

const Admin = ({ onFormChange = () => {} }) => {
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    try {
      const response = await api.post(
        "/admin_login",
        {
          emailAddress: values.emailAddress,
          password: values.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "22062024",
          },
        }
      );

      if (response.status === 200) {
        // Assuming the login is successful if the status code is 200
        navigate("/adminaccess");
      } else {
        alert("Login failed, please check your credentials.");
      }
    } catch (error) {
      console.error("Error details:", error); // Log the full error details
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center bg-adminbg bg-cover">
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
                emailAddress: "",
                password: "",
              }}
              validationSchema={Yup.object({
                emailAddress: Yup.string()
                  .email("Invalid email address")
                  .required("Email Address is required"),
                password: Yup.string()
                  .min(4, "Password must be at least 4 characters")
                  .required("Password is required"),
              })}
              onSubmit={(values, { resetForm }) => {
                handleLogin(values); // Call the handleLogin function here
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
                      inputValue={values.emailAddress}
                      inputOnChange={(event) => {
                        handleChange(event);
                        onFormChange({ emailAddress: event.target.value });
                      }}
                      InputError={errors.emailAddress}
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
                  <div className="flex flex-col items-end mt-4">
                    <AdminOrangeButton
                      buttonText="Next"
                      imgSrc={ArrowRight}
                      alt="arrowright"
                      type="submit" // Make sure the button submits the form
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
