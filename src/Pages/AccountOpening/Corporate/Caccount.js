import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../../../Components/inputWithLabel";
import InputWithDropdown from "../../../Components/InputWithDropdown";

const Caccount = ({ formData, onFormChange }) => {
  const caccountType = [
    { value: "fixed deposit", label: "Fixed Deposit" },
    { value: "current account", label: "Current Account" },
  ];
  const institutionType = [
    { value: "limited liability company", label: "Limited Liability Company" },
    { value: "partnership", label: "Partnership" },
    { value: "sole proprietorship", label: "Sole Proprietorship" },
    { value: "public organization", label: "Public Organization" },
    {
      value: "culds, association/unnicorporated societies",
      label: "Culds, Association/Unicorporated Societies",
    },
  ];

  return (
    <div className="overflow-hidden">
      <Formik
        initialValues={formData}
        validationSchema={Yup.object({
          caccountType: Yup.string().required("Select an option"),
          institutionType: Yup.string().required("Select an option"),
          organization: Yup.string().required("Organization is required"),
          businessNo: Yup.string().required(
            "RC No/Business Reg No is required"
          ),
          taxNo: Yup.string().required("Tax ID Number is required"),
          businessAddress: Yup.string().required(
            "Business Address is required"
          ),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email Address is required"),
          webAddress: Yup.string().required("Web Address is required"),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values); // Handles form submission here
          resetForm(); // Clear form after submission
        }}
      >
        {({ values, errors, handleChange }) => (
          <Form className="flex flex-col px-5 bg-white w-full">
            <div className="grid grid-cols-1 gap-6">
              <InputWithDropdown
                labelName="Type of Account"
                options={caccountType}
                selectedValue={values.caccountType}
                onChange={(event) => {
                  handleChange({
                    target: {
                      name: "caccountType",
                      value: event.target.value,
                    },
                  });
                  onFormChange({ caccountType: event.target.value });
                }}
                inputError={errors.caccountType}
              />
              <InputWithDropdown
                labelName="Type of Institution"
                options={institutionType}
                selectedValue={values.institutionType}
                onChange={(event) => {
                  handleChange({
                    target: {
                      name: "institutionType",
                      value: event.target.value,
                    },
                  });
                  onFormChange({ institutionType: event.target.value });
                }}
                inputError={errors.institutionType}
              />
              <InputWithLabel
                labelName="Name of Organization"
                inputType="text"
                inputName="organization"
                placeholder="Enter your organization name"
                inputValue={values.organization}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ organization: event.target.value });
                }}
                inputError={errors.organization}
              />
              <InputWithLabel
                labelName="RC No./Business Reg No."
                inputType="text"
                inputName="businessNo"
                placeholder="Enter RC No."
                inputValue={values.businessNo}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ businessNo: event.target.value });
                }}
                inputError={errors.businessNo}
              />
              <InputWithLabel
                labelName="Tax ID Number"
                inputType="text"
                inputName="taxNo"
                placeholder="Enter tax ID number"
                inputValue={values.taxNo}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ taxNo: event.target.value });
                }}
                inputError={errors.taxNo}
              />
              <InputWithLabel
                labelName="Business Address"
                inputType="text"
                inputName="businessAddress"
                placeholder="Enter your address here"
                inputValue={values.businessAddress}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ businessAddress: event.target.value });
                }}
                inputError={errors.businessAddress}
              />
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
                labelName="Web Address"
                inputType="text"
                inputName="webAddress"
                placeholder="e.g. www.yourbusiness.com"
                inputValue={values.webAddress}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ webAddress: event.target.value });
                }}
                inputError={errors.webAddress}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Caccount;
