import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../../../Components/inputWithLabel";
import InputWithDropdown from "../../../Components/InputWithDropdown";
import FileInput from "../../../Components/FileInput";

const Cpersonal = ({ formData, onFormChange }) => {
  const title = [
    { value: "miss", label: "Miss." },
    { value: "mr", label: "Mr." },
    { value: "mrs", label: "Mrs." },
  ];

  const meansofID = [
    { value: "international passport", label: "International Passport" },
    { value: "driver's license", label: "Driver's License" },
    { value: "voter's card", label: "Voter's Card" },
    { value: "national ID", label: "National ID" },
    { value: "nin", label: "NIN" },
  ];

  return (
    <div className="overflow-hidden">
      <Formik
        initialValues={formData}
        validationSchema={Yup.object({
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
          meansofID: Yup.string().required("State of Origin is required"),
          idNumber: Yup.string().required("ID number is required"),
          issueDate: Yup.date()
            .required("Issue Date is required")
            .max(new Date(), "Issue Date cannot be in the future"),
          expiryDate: Yup.date()
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
          resetForm(); // Clear form after submission
        }}
      >
        {({ values, errors, setFieldValue, touched, handleChange }) => (
          <Form className="flex flex-col px-5 bg-white w-full">
            <div className="grid grid-cols-1 gap-6">
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
              <FileInput
                labelName="Upload Passport Photograph"
                onChange={(event) => {
                  setFieldValue("passportPhoto", event.currentTarget.files[0]);
                }}
                inputError={touched.passportPhoto && errors.passportPhoto}
              />
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
              <InputWithLabel
                labelName="Email Address"
                inputType="email"
                inputName="pemail"
                placeholder="e.g. segun@gmail.com"
                inputValue={values.pemail}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ pemail: event.target.value });
                }}
                inputError={errors.pemail}
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
                labelName="Means of Identification"
                options={meansofID}
                selectedValue={values.meansofID}
                onChange={(event) => {
                  handleChange({
                    target: {
                      name: "meansofID",
                      value: event.target.value,
                    },
                  });
                  onFormChange({ meansofID: event.target.value });
                }}
                inputError={errors.meansofID}
              />
              <InputWithLabel
                labelName="ID Card Number"
                inputType="text"
                inputName="idNumber"
                placeholder="Enter your ID Card Number"
                inputValue={values.idNumber}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ idNumber: event.target.value });
                }}
                inputError={errors.idNumber}
              />
              <div className="grid grid-cols-2 gap-5">
                <InputWithLabel
                  labelName="Issue Date"
                  inputType="date"
                  inputName="issueDate"
                  inputValue={values.issueDate}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ issueDate: event.target.value });
                  }}
                  inputError={errors.issueDate}
                />
                <InputWithLabel
                  labelName="Expiry Date"
                  inputType="date"
                  inputName="expiryDate"
                  inputValue={values.expiryDate}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ expiryDate: event.target.value });
                  }}
                  inputError={errors.expiryDate}
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
