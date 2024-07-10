import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../../../Components/inputWithLabel";
import InputWithDropdown from "../../../Components/InputWithDropdown";
import FileInput from "../../../Components/FileInput";

const Personal = ({ formData, onFormChange }) => {
  const account_type = [
    { value: "Single Account", label: "Single Account" },
    { value: "Joint Account", label: "Joint Account" },
  ];

  const title = [
    { value: "Miss", label: "Miss." },
    { value: "Mr", label: "Mr." },
    { value: "Mrs", label: "Mrs." },
  ];

  const gender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const marital_status = [
    { value: "Single", label: "Single" },
    { value: "Married", label: "Married" },
    { value: "Divorced", label: "Divorced" },
    { value: "In a Relationship", label: "In a Relationship" },
  ];

  return (
    <div className="overflow-hidden">
      <Formik
        initialValues={formData}
        validationSchema={Yup.object({
          account_type: Yup.string().required("Select an option"),
          title: Yup.string().required("Select an option"),
          surname: Yup.string().required("Surname is required"),
          firstname: Yup.string().required("First name is required"),
          middle_name: Yup.string().required("Middle name is required"),
          passport: Yup.mixed()
            .required("Passport photograph is required")
            .test(
              "fileSize",
              "File too large",
              (value) => !value || (value && value.size <= 1024 * 1024) // 1MB
            )
            .test(
              "fileFormat",
              "Unsupported format",
              (value) =>
                !value ||
                (value && ["image/jpeg", "image/png"].includes(value.type))
            ),
          date_of_birth: Yup.date()
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
          place_of_birth: Yup.string().required("Place of Birth is required"),
          gender: Yup.string().required("Select an option"),
          email_address: Yup.string()
            .email("Invalid email address")
            .required("Email Address is required"),
          phone_number: Yup.string()
            .matches(/^\d{11}$/, "Phone number must be exactly 11 digits")
            .required("Phone number is required"),
          home_address: Yup.string().required("Home Address is required"),
          home_address_lga: Yup.string().required(
            "Local Government is required"
          ),
          landmark: Yup.string().required("Landmark is required"),
          bvn: Yup.string()
            .matches(/^\d{11}$/, "BVN must be exactly 11 digits")
            .required("BVN is required"),
          marital_status: Yup.string().required("Select an option"),
          origin: Yup.string().required("State of Origin is required"),
          origin_lga: Yup.string().required(
            "Local Government of Origin is required"
          ),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values); // Handles form submission here
          onFormChange(values); // Send updated form data to parent component
          resetForm(); // Clear form after submission
        }}
      >
        {({ values, errors, setFieldValue, touched, handleChange }) => (
          <Form className="flex flex-col bg-white w-full">
            <div className="grid grid-cols-1 gap-6">
              <InputWithDropdown
                labelName="Type of Account"
                options={account_type}
                selectedValue={values.account_type}
                onChange={(event) => {
                  handleChange({
                    target: {
                      name: "account_type",
                      value: event.target.value,
                    },
                  });
                  onFormChange({ ...values, account_type: event.target.value });
                }}
                inputError={errors.account_type}
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
                    onFormChange({ ...values, title: event.target.value });
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
                    onFormChange({ ...values, surname: event.target.value });
                  }}
                  inputError={errors.surname}
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
                <InputWithLabel
                  labelName="First Name"
                  inputType="text"
                  inputName="firstname"
                  placeholder="Enter your first name"
                  inputValue={values.firstname}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ ...values, firstname: event.target.value });
                  }}
                  inputError={errors.firstname}
                />
                <InputWithLabel
                  labelName="Middle Name"
                  inputType="text"
                  inputName="middle_name"
                  placeholder="Enter your middle name"
                  inputValue={values.middle_name}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      middle_name: event.target.value,
                    });
                  }}
                  inputError={errors.middle_name}
                />
              </div>
              <FileInput
                labelName="Upload Passport Photograph"
                onChange={(event) => {
                  setFieldValue("passport", event.currentTarget.files[0]);
                  onFormChange({
                    ...values,
                    passport: event.currentTarget.files[0],
                  });
                }}
                inputError={touched.passport && errors.passport}
              />
              <div className="grid grid-cols-1 md:grid md:grid-cols-3 gap-6">
                <InputWithLabel
                  labelName="Date of Birth"
                  inputType="date"
                  inputName="date_of_birth"
                  inputValue={values.date_of_birth}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      date_of_birth: event.target.value,
                    });
                  }}
                  inputError={errors.date_of_birth}
                />
                <InputWithLabel
                  labelName="Place of Birth"
                  inputType="text"
                  inputName="place_of_birth"
                  placeholder="Enter place of birth"
                  inputValue={values.place_of_birth}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      place_of_birth: event.target.value,
                    });
                  }}
                  inputError={errors.place_of_birth}
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
                    onFormChange({ ...values, gender: event.target.value });
                  }}
                  inputError={errors.gender}
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
                <InputWithLabel
                  labelName="Email Address"
                  inputType="email"
                  inputName="email_address"
                  placeholder="e.g. segun@gmail.com"
                  inputValue={values.email_address}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      email_address: event.target.value,
                    });
                  }}
                  inputError={errors.email_address}
                />
                <InputWithLabel
                  labelName="Phone Number"
                  inputType="text"
                  inputName="phone_number"
                  placeholder="+234 (806) 000-0000"
                  inputValue={values.phone_number}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      phone_number: event.target.value,
                    });
                  }}
                  inputError={errors.phone_number}
                />
              </div>
              <InputWithLabel
                labelName="Home Address"
                inputType="text"
                inputName="home_address"
                placeholder="Enter your address here"
                inputValue={values.home_address}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ ...values, home_address: event.target.value });
                }}
                inputError={errors.home_address}
              />
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
                <InputWithLabel
                  labelName="LGA"
                  inputType="text"
                  inputName="home_address_lga"
                  placeholder="Enter your local government area"
                  inputValue={values.home_address_lga}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      home_address_lga: event.target.value,
                    });
                  }}
                  inputError={errors.home_address_lga}
                />
                <InputWithLabel
                  labelName="Landmark"
                  inputType="text"
                  inputName="landmark"
                  placeholder="Enter landmark"
                  inputValue={values.landmark}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ ...values, landmark: event.target.value });
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
                    onFormChange({ ...values, bvn: event.target.value });
                  }}
                  inputError={errors.bvn}
                />
                <InputWithDropdown
                  labelName="Marital Status"
                  options={marital_status}
                  selectedValue={values.marital_status}
                  onChange={(event) => {
                    handleChange({
                      target: {
                        name: "marital_status",
                        value: event.target.value,
                      },
                    });
                    onFormChange({
                      ...values,
                      marital_status: event.target.value,
                    });
                  }}
                  inputError={errors.marital_status}
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
                <InputWithLabel
                  labelName="State of Origin"
                  inputType="text"
                  inputName="origin"
                  placeholder="Enter your state of origin"
                  inputValue={values.origin}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ ...values, origin: event.target.value });
                  }}
                  inputError={errors.origin}
                />
                <InputWithLabel
                  labelName="LGA"
                  inputType="text"
                  inputName="origin_lga"
                  placeholder="Enter your local government of origin"
                  inputValue={values.origin_lga}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ ...values, origin_lga: event.target.value });
                  }}
                  inputError={errors.origin_lga}
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
