import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../../../Components/inputWithLabel";
import InputWithDropdown from "../../../Components/InputWithDropdown";
import FileInput from "../../../Components/FileInput";

const Cpersonal = ({ formData, onFormChange }) => {
  const title = [
    { value: "Miss", label: "Miss." },
    { value: "Mr", label: "Mr." },
    { value: "Mrs", label: "Mrs." },
  ];

  const means_of_identification = [
    { value: "International Passport", label: "International Passport" },
    { value: "Driver's License", label: "Driver's License" },
    { value: "Voter's Card", label: "Voter's Card" },
    { value: "National ID", label: "National ID" },
    { value: "NIN", label: "NIN" },
  ];

  return (
    <div className="overflow-hidden">
      <Formik
        initialValues={formData}
        validationSchema={Yup.object({
          title: Yup.string().required("Select an option"),
          surname: Yup.string().required("Surname is required"),
          firstname: Yup.string().required("First name is required"),
          middle_name: Yup.string().required("Middle name is required"),
          passport: Yup.mixed()
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
          means_of_identification: Yup.string().required(
            "Means of Identification is required"
          ),
          id_card_number: Yup.string().required("ID number is required"),
          issue_date: Yup.date()
            .required("Issue Date is required")
            .max(new Date(), "Issue Date cannot be in the future"),
          expiry_date: Yup.date()
            .required("Expiry Date is required")
            .min(
              Yup.ref("issueDate"),
              "Expiry Date cannot be before Issue Date"
            )
            .test(
              "isAfterToday",
              "Expiry Date cannot be in the past",
              function (value) {
                const today = new Date();
                return value >= today;
              }
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
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
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
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
                <InputWithDropdown
                  labelName="Means of Identification"
                  options={means_of_identification}
                  selectedValue={values.means_of_identification}
                  onChange={(event) => {
                    handleChange({
                      target: {
                        name: "means_of_identification",
                        value: event.target.value,
                      },
                    });
                    onFormChange({
                      ...values,
                      means_of_identification: event.target.value,
                    });
                  }}
                  inputError={errors.means_of_identification}
                />
                <InputWithLabel
                  labelName="ID Card Number"
                  inputType="text"
                  inputName="id_card_number"
                  placeholder="Enter your ID Card Number"
                  inputValue={values.id_card_number}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      id_card_number: event.target.value,
                    });
                  }}
                  inputError={errors.id_card_number}
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <InputWithLabel
                  labelName="Issue Date"
                  inputType="date"
                  inputName="issue_date"
                  inputValue={values.issue_date}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ ...values, issue_date: event.target.value });
                  }}
                  inputError={errors.issue_date}
                />
                <InputWithLabel
                  labelName="Expiry Date"
                  inputType="date"
                  inputName="expiry_date"
                  inputValue={values.expiry_date}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      expiry_date: event.target.value,
                    });
                  }}
                  inputError={errors.expiry_date}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Cpersonal;
