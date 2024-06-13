import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../../../Components/inputWithLabel";
import InputWithDropdown from "../../../Components/InputWithDropdown";

const NextKin = ({ formData, onFormChange }) => {
  const ntitle = [
    { value: "miss", label: "Miss." },
    { value: "mr", label: "Mr." },
    { value: "mrs", label: "Mrs." },
  ];

  return (
    <div id="nextKin-section" className="overflow-hidden">
      <Formik
        initialValues={formData}
        validationSchema={Yup.object({
          ntitle: Yup.string().required("Select an option"),
          nsurname: Yup.string().required("Surname is required"),
          nfirstName: Yup.string().required("First name is required"),
          nmiddleName: Yup.string().required("Middle name is required"),
          nphoneNumber: Yup.string()
            .matches(/^\d{11}$/, "Phone number must be exactly 11 digits")
            .required("Phone number is required"),
          relationship: Yup.string().required("Relationship is required"),
          nemail: Yup.string()
            .email("Invalid email address")
            .required("Email Address is required"),
          noccupation: Yup.string().required("Occupation is required"),
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
                options={ntitle}
                selectedValue={values.ntitle}
                onChange={(event) => {
                  handleChange({
                    target: {
                      name: "ntitle",
                      value: event.target.value,
                    },
                  });
                  onFormChange({ ntitle: event.target.value });
                }}
                inputError={errors.ntitle}
              />
              <InputWithLabel
                labelName="Surname"
                inputType="text"
                inputName="nsurname"
                placeholder="Enter surname"
                inputValue={values.nsurname}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ nsurname: event.target.value });
                }}
                inputError={errors.nsurname}
              />
              <InputWithLabel
                labelName="First Name"
                inputType="text"
                inputName="nfirstName"
                placeholder="Enter first name"
                inputValue={values.nfirstName}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ nfirstName: event.target.value });
                }}
                inputError={errors.nfirstName}
              />
              <InputWithLabel
                labelName="Middle Name"
                inputType="text"
                inputName="nmiddleName"
                placeholder="Enter middle name"
                inputValue={values.nmiddleName}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ nmiddleName: event.target.value });
                }}
                inputError={errors.nmiddleName}
              />
              <InputWithLabel
                labelName="Phone Number"
                inputType="text"
                inputName="nphoneNumber"
                placeholder="+234 (806) 000-0000"
                inputValue={values.nphoneNumber}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ nphoneNumber: event.target.value });
                }}
                inputError={errors.nphoneNumber}
              />
              <InputWithLabel
                labelName="Relationship"
                inputType="text"
                inputName="relationship"
                placeholder="Relationship with Next of Kin"
                inputValue={values.relationship}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ relationship: event.target.value });
                }}
                inputError={errors.relationship}
              />
              <InputWithLabel
                labelName="Email"
                inputType="email"
                inputName="nemail"
                placeholder="e.g. segun@gmail.com"
                inputValue={values.nemail}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ nemail: event.target.value });
                }}
                inputError={errors.nemail}
              />
              <InputWithLabel
                labelName="Occupation"
                inputType="text"
                inputName="noccupation"
                placeholder="Enter next of kin occupation here"
                inputValue={values.noccupation}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ noccupation: event.target.value });
                }}
                inputError={errors.noccupation}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NextKin;
