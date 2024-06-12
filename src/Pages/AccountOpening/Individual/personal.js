import React, { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../../../Components/inputWithLabel";
import InputWithDropdown from "../../../Components/InputWithDropdown";

const Personal = ({ formData, onFormChange }) => {
  const accountType = [
    { value: "single account", label: "Single Account" },
    { value: "joint account", label: "Joint Account" },
  ];
  const title = [
    { value: "miss", label: "Miss." },
    { value: "mr", label: "Mr." },
    { value: "mrs", label: "Mrs." },
  ];

  const gender = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const maritalStatus = [
    { value: "single", label: "Single" },
    { value: "married", label: "Married" },
    { value: "divorced", label: "Divorced" },
    { value: "in a relationship", label: "In a Relationship" },
  ];

  return (
    <div
      id="personal-section"
      className="flex flex-col items-center bg-white w-full overflow-hidden"
    >
      <Formik
        initialValues={{
          accountType: "",
          title: "",
          surname: "",
          firstName: "",
          lastName: "",
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
          soolga: "",
        }}
        validationSchema={Yup.object({
          accountType: Yup.string().required("Select an option"),
          title: Yup.string().required("Select an option"),
          surname: Yup.string().required("Surname is required"),
          firstName: Yup.string().required("First name is required"),
          lastName: Yup.string().required("Last name is required"),
          passportPhoto: Yup.mixed()
            .required("A passport photo is required")
            .test(
              "fileSize",
              "File too large",
              (value) => value && value.size <= 1024 * 1024 // 1MB
            )
            .test(
              "fileFormat",
              "Unsupported format",
              (value) =>
                value && ["image/jpeg", "image/png"].includes(value.type)
            ),
          dob: Yup.date()
            .required("Date of birth is required")
            .max(new Date(), "Date of birth cannot be in the future")
            .test(
              "minimumAge",
              "You must be at least 22 years old",
              function (value) {
                const today = new Date();
                const minimumDate = new Date(
                  today.getFullYear() - 22,
                  today.getMonth(),
                  today.getDate()
                );
                return value <= minimumDate;
              }
            ),
          pob: Yup.string().required("Place of Birth is required"),
          gender: Yup.string().required("Select an option"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email Address is required"),
          phoneNumber: Yup.string()
            .matches(/^\d{11}$/, "Phone number must be exactly 11 digits")
            .required("Phone number is required"),
          message: Yup.string().required("Message is required"),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values); // Handles form submission here
          resetForm(); // Clear form after submission
        }}
      ></Formik>
    </div>
  );
};

export default Personal;
