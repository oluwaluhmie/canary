import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../../../Components/inputWithLabel";
import InputWithDropdown from "../../../Components/InputWithDropdown";
import FileInput from "../../../Components/FileInput";

const Csignatory = ({ formData, onFormChange }) => {
  const stitle = [
    { value: "miss", label: "Miss." },
    { value: "mr", label: "Mr." },
    { value: "mrs", label: "Mrs." },
  ];

  const smeansofID = [
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
          stitle: Yup.string().required("Select an option"),
          ssurname: Yup.string().required("Surname is required"),
          sfirstName: Yup.string().required("First name is required"),
          smiddleName: Yup.string().required("Middle name is required"),
          spassportPhoto: Yup.mixed()
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
          sdob: Yup.date()
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
          spob: Yup.string().required("Place of Birth is required"),
          semail: Yup.string()
            .email("Invalid email address")
            .required("Email Address is required"),
          sphoneNumber: Yup.string()
            .matches(/^\d{11}$/, "Phone number must be exactly 11 digits")
            .required("Phone number is required"),
          shomeAddress: Yup.string().required("Home Address is required"),
          slga: Yup.string().required("Local Government is required"),
          slandmark: Yup.string().required("Landmark is required"),
          sbvn: Yup.string()
            .matches(/^\d{11}$/, "BVN must be exactly 11 digits")
            .required("BVN is required"),
          smeansofID: Yup.string().required("Means of Identification is required"),
          sidNumber: Yup.string().required("ID number is required"),
          sissueDate: Yup.date()
            .required("Issue Date is required")
            .max(new Date(), "Issue Date cannot be in the future"),
          sexpiryDate: Yup.date()
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
          <Form className="flex flex-col bg-white w-full">
            <div className="grid grid-cols-1 gap-6">
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
                <InputWithDropdown
                  labelName="Title"
                  options={stitle}
                  selectedValue={values.stitle}
                  onChange={(event) => {
                    handleChange({
                      target: {
                        name: "stitle",
                        value: event.target.value,
                      },
                    });
                    onFormChange({ stitle: event.target.value });
                  }}
                  inputError={errors.stitle}
                />
                <InputWithLabel
                  labelName="Surname"
                  inputType="text"
                  inputName="ssurname"
                  placeholder="Enter your surname"
                  inputValue={values.ssurname}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ ssurname: event.target.value });
                  }}
                  inputError={errors.ssurname}
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
                <InputWithLabel
                  labelName="First Name"
                  inputType="text"
                  inputName="sfirstName"
                  placeholder="Enter your first name"
                  inputValue={values.sfirstName}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ sfirstName: event.target.value });
                  }}
                  inputError={errors.sfirstName}
                />
                <InputWithLabel
                  labelName="Middle Name"
                  inputType="text"
                  inputName="smiddleName"
                  placeholder="Enter your middle name"
                  inputValue={values.smiddleName}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ smiddleName: event.target.value });
                  }}
                  inputError={errors.smiddleName}
                />
              </div>
              <FileInput
                labelName="Upload Passport Photograph"
                onChange={(event) => {
                  setFieldValue("spassportPhoto", event.currentTarget.files[0]);
                }}
                inputError={touched.spassportPhoto && errors.spassportPhoto}
              />
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
                <InputWithLabel
                  labelName="Date of Birth"
                  inputType="date"
                  inputName="sdob"
                  inputValue={values.sdob}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ sdob: event.target.value });
                  }}
                  inputError={errors.sdob}
                />
                <InputWithLabel
                  labelName="Place of Birth"
                  inputType="text"
                  inputName="spob"
                  placeholder="Enter place of birth"
                  inputValue={values.spob}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ spob: event.target.value });
                  }}
                  inputError={errors.spob}
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
                <InputWithLabel
                  labelName="Email Address"
                  inputType="email"
                  inputName="semail"
                  placeholder="e.g. segun@gmail.com"
                  inputValue={values.semail}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ semail: event.target.value });
                  }}
                  inputError={errors.semail}
                />
                <InputWithLabel
                  labelName="Phone Number"
                  inputType="text"
                  inputName="sphoneNumber"
                  placeholder="+234 (806) 000-0000"
                  inputValue={values.sphoneNumber}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ sphoneNumber: event.target.value });
                  }}
                  inputError={errors.sphoneNumber}
                />
              </div>
              <InputWithLabel
                labelName="Home Address"
                inputType="text"
                inputName="shomeAddress"
                placeholder="Enter your address here"
                inputValue={values.shomeAddress}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ shomeAddress: event.target.value });
                }}
                inputError={errors.shomeAddress}
              />
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
                <InputWithLabel
                  labelName="LGA"
                  inputType="text"
                  inputName="slga"
                  placeholder="Enter your local government area"
                  inputValue={values.slga}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ slga: event.target.value });
                  }}
                  inputError={errors.slga}
                />
                <InputWithLabel
                  labelName="Landmark"
                  inputType="text"
                  inputName="slandmark"
                  placeholder="Enter landmark"
                  inputValue={values.slandmark}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ slandmark: event.target.value });
                  }}
                  inputError={errors.slandmark}
                />
              </div>
              <InputWithLabel
                labelName="BVN"
                inputType="text"
                inputName="sbvn"
                placeholder="Enter your BVN"
                inputValue={values.sbvn}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ sbvn: event.target.value });
                }}
                inputError={errors.sbvn}
              />
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
                <InputWithDropdown
                  labelName="Means of Identification"
                  options={smeansofID}
                  selectedValue={values.smeansofID}
                  onChange={(event) => {
                    handleChange({
                      target: {
                        name: "smeansofID",
                        value: event.target.value,
                      },
                    });
                    onFormChange({ smeansofID: event.target.value });
                  }}
                  inputError={errors.smeansofID}
                />
                <InputWithLabel
                  labelName="ID Card Number"
                  inputType="text"
                  inputName="sidNumber"
                  placeholder="Enter your ID Card Number"
                  inputValue={values.sidNumber}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ sidNumber: event.target.value });
                  }}
                  inputError={errors.sidNumber}
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <InputWithLabel
                  labelName="Issue Date"
                  inputType="date"
                  inputName="sissueDate"
                  inputValue={values.sissueDate}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ sissueDate: event.target.value });
                  }}
                  inputError={errors.sissueDate}
                />
                <InputWithLabel
                  labelName="Expiry Date"
                  inputType="date"
                  inputName="sexpiryDate"
                  inputValue={values.sexpiryDate}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ sexpiryDate: event.target.value });
                  }}
                  inputError={errors.sexpiryDate}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Csignatory;
