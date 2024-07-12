import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../../../Components/inputWithLabel";
import InputWithDropdown from "../../../Components/InputWithDropdown";

const Caccount = ({ formData, onFormChange }) => {
  const account_type = [
    { value: "Fixed Deposit", label: "Fixed Deposit" },
    { value: "Current Account", label: "Current Account" },
  ];
  const institution_type = [
    { value: "Limited Liability Company", label: "Limited Liability Company" },
    { value: "Partnership", label: "Partnership" },
    { value: "Sole Proprietorship", label: "Sole Proprietorship" },
    { value: "Public Organization", label: "Public Organization" },
    {
      value: "Culds, Association/Unnicorporated Societies",
      label: "Culds, Association/Unicorporated Societies",
    },
  ];

  return (
    <div className="overflow-hidden">
      <Formik
        initialValues={formData}
        validationSchema={Yup.object({
          account_type: Yup.string().required("Select an option"),
          institution_type: Yup.string().required("Select an option"),
          organization_name: Yup.string().required("Organization is required"),
          business_reg_number: Yup.string().required(
            "RC No/Business Reg No is required"
          ),
          tax_id_number: Yup.string().required("Tax ID Number is required"),
          business_address: Yup.string().required(
            "Business Address is required"
          ),
          business_email_address: Yup.string()
            .email("Invalid email address")
            .required("Email Address is required"),
          web_address: Yup.string().required("Web Address is required"),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values); // Handles form submission here
          onFormChange(values); // Send updated form data to parent component
          resetForm(); // Clear form after submission
        }}
      >
        {({ values, errors, handleChange}) => (
          <Form className="flex flex-col bg-white w-full">
            <div className="grid grid-cols-1 gap-6">
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
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
                    onFormChange({
                      ...values,
                      account_type: event.target.value,
                    });
                  }}
                  inputError={errors.account_type}
                />
                <InputWithDropdown
                  labelName="Type of Institution"
                  options={institution_type}
                  selectedValue={values.institution_type}
                  onChange={(event) => {
                    handleChange({
                      target: {
                        name: "institution_type",
                        value: event.target.value,
                      },
                    });
                    onFormChange({
                      ...values,
                      institution_type: event.target.value,
                    });
                  }}
                  inputError={errors.institution_type}
                />
              </div>
              <InputWithLabel
                labelName="Name of Organization"
                inputType="text"
                inputName="organization_name"
                placeholder="Enter your organization name"
                inputValue={values.organization_name}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({
                    ...values,
                    organization_name: event.target.value,
                  });
                }}
                inputError={errors.organization_name}
              />
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
                <InputWithLabel
                  labelName="RC No./Business Reg No."
                  inputType="text"
                  inputName="business_reg_number"
                  placeholder="Enter RC No."
                  inputValue={values.business_reg_number}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      business_reg_number: event.target.value,
                    });
                  }}
                  inputError={errors.business_reg_number}
                />
                <InputWithLabel
                  labelName="Tax ID Number"
                  inputType="text"
                  inputName="tax_id_number"
                  placeholder="Enter tax ID number"
                  inputValue={values.tax_id_number}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      tax_id_number: event.target.value,
                    });
                  }}
                  inputError={errors.tax_id_number}
                />
              </div>
              <InputWithLabel
                labelName="Business Address"
                inputType="text"
                inputName="business_address"
                placeholder="Enter your address here"
                inputValue={values.business_address}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({
                    ...values,
                    business_address: event.target.value,
                  });
                }}
                inputError={errors.business_address}
              />
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
                <InputWithLabel
                  labelName="Business Email Address"
                  inputType="email"
                  inputName="business_email_address"
                  placeholder="e.g. segun@gmail.com"
                  inputValue={values.business_email_address}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      business_email_address: event.target.value,
                    });
                  }}
                  inputError={errors.business_email_address}
                />
                <InputWithLabel
                  labelName="Web Address"
                  inputType="text"
                  inputName="web_address"
                  placeholder="e.g. www.yourbusiness.com"
                  inputValue={values.web_address}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      web_address: event.target.value,
                    });
                  }}
                  inputError={errors.web_address}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Caccount;
