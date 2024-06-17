import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../../../Components/inputWithLabel";
import InputWithDropdown from "../../../Components/InputWithDropdown";
import FileInput from "../../../Components/FileInput";

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
    <div className="overflow-hidden">
      <Formik
        initialValues={formData}
        validationSchema={Yup.object({
          accountType: Yup.string().required("Select an option"),
          title: Yup.string().required("Select an option"),
          surname: Yup.string().required("Surname is required"),
          firstName: Yup.string().required("First name is required"),
          middleName: Yup.string().required("Middle name is required"),
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
          homeAddress: Yup.string().required("Home Address is required"),
          lga: Yup.string().required("Local Government is required"),
          landmark: Yup.string().required("Landmark is required"),
          bvn: Yup.string()
            .matches(/^\d{11}$/, "BVN must be exactly 11 digits")
            .required("BVN is required"),
          maritalStatus: Yup.string().required("Select an option"),
          soo: Yup.string().required("State of Origin is required"),
          lgaoo: Yup.string().required(
            "Local Government of Origin is required"
          ),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values); // Handles form submission here
          resetForm(); // Clear form after submission
        }}
      >
        {({ values, errors, setFieldValue, touched, handleChange }) => (
          <Form className="flex flex-col bg-white w-full">
            <div className="grid grid-cols-1 gap-6">
              <InputWithDropdown
                labelName="Type of Account"
                options={accountType}
                selectedValue={values.accountType}
                onChange={(event) => {
                  handleChange({
                    target: {
                      name: "accountType",
                      value: event.target.value,
                    },
                  });
                  onFormChange({ accountType: event.target.value });
                }}
                inputError={errors.accountType}
              />
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
                <InputWithDropdown
                  labelName="Title"
                  options={title}
                  selectedValue={values.title}
                  onChange={(event) => {
                    handleChange({
                      target: {
                        name: "title",
                        value: event.target.value,
                      },
                    });
                    onFormChange({ title: event.target.value });
                  }}
                  inputError={errors.title}
                />
                <InputWithLabel
                  labelName="Surname"
                  inputType="text"
                  inputName="surname"
                  placeholder="Enter your surname"
                  inputValue={values.surname}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ surname: event.target.value });
                  }}
                  inputError={errors.surname}
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
                <InputWithLabel
                  labelName="First Name"
                  inputType="text"
                  inputName="firstName"
                  placeholder="Enter your first name"
                  inputValue={values.firstName}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ firstName: event.target.value });
                  }}
                  inputError={errors.firstName}
                />
                <InputWithLabel
                  labelName="Middle Name"
                  inputType="text"
                  inputName="middleName"
                  placeholder="Enter your middle name"
                  inputValue={values.middleName}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ middleName: event.target.value });
                  }}
                  inputError={errors.middleName}
                />
              </div>
              <FileInput
                labelName="Upload Passport Photograph"
                onChange={(event) => {
                  setFieldValue("passportPhoto", event.currentTarget.files[0]);
                }}
                inputError={touched.passportPhoto && errors.passportPhoto}
              />
              <div className="grid grid-cols-1 md:grid md:grid-cols-3 gap-6">
                <InputWithLabel
                  labelName="Date of Birth"
                  inputType="date"
                  inputName="dob"
                  inputValue={values.dob}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ dob: event.target.value });
                  }}
                  inputError={errors.dob}
                />
                <InputWithLabel
                  labelName="Place of Birth"
                  inputType="text"
                  inputName="pob"
                  placeholder="Enter place of birth"
                  inputValue={values.pob}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ pob: event.target.value });
                  }}
                  inputError={errors.pob}
                />
                <InputWithDropdown
                  labelName="Gender"
                  options={gender}
                  selectedValue={values.gender}
                  onChange={(event) => {
                    handleChange({
                      target: {
                        name: "gender",
                        value: event.target.value,
                      },
                    });
                    onFormChange({ gender: event.target.value });
                  }}
                  inputError={errors.gender}
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
                <InputWithLabel
                  labelName="Email Address"
                  inputType="email"
                  inputName="email"
                  placeholder="e.g. segun@gmail.com"
                  inputValue={values.email}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ email: event.target.value });
                  }}
                  inputError={errors.email}
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
                  inputError={errors.phoneNumber}
                />
              </div>
              <InputWithLabel
                labelName="Home Address"
                inputType="text"
                inputName="homeAddress"
                placeholder="Enter your address here"
                inputValue={values.homeAddress}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ homeAddress: event.target.value });
                }}
                inputError={errors.homeAddress}
              />
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
                <InputWithLabel
                  labelName="LGA"
                  inputType="text"
                  inputName="lga"
                  placeholder="Enter your local government area"
                  inputValue={values.lga}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ lga: event.target.value });
                  }}
                  inputError={errors.lga}
                />
                <InputWithLabel
                  labelName="Landmark"
                  inputType="text"
                  inputName="landmark"
                  placeholder="Enter landmark"
                  inputValue={values.landmark}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ landmark: event.target.value });
                  }}
                  inputError={errors.landmark}
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
                <InputWithLabel
                  labelName="BVN"
                  inputType="text"
                  inputName="bvn"
                  placeholder="Enter your BVN"
                  inputValue={values.bvn}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ bvn: event.target.value });
                  }}
                  inputError={errors.bvn}
                />
                <InputWithDropdown
                  labelName="Marital Status"
                  options={maritalStatus}
                  selectedValue={values.maritalStatus}
                  onChange={(event) => {
                    handleChange({
                      target: {
                        name: "maritalStatus",
                        value: event.target.value,
                      },
                    });
                    onFormChange({ maritalStatus: event.target.value });
                  }}
                  inputError={errors.maritalStatus}
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
                <InputWithLabel
                  labelName="State of Origin"
                  inputType="text"
                  inputName="soo"
                  placeholder="Enter your state of origin"
                  inputValue={values.soo}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ soo: event.target.value });
                  }}
                  inputError={errors.soo}
                />
                <InputWithLabel
                  labelName="LGA"
                  inputType="text"
                  inputName="lgaoo"
                  placeholder="Enter your local government of origin"
                  inputValue={values.lgaoo}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ lgaoo: event.target.value });
                  }}
                  inputError={errors.lgaoo}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Personal;
