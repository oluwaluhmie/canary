import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../../../Components/inputWithLabel";
import InputWithDropdown from "../../../Components/InputWithDropdown";

const Work = ({ formData, onFormChange }) => {
  const moi = [
    { value: "international passport", label: "International Passport" },
    { value: "driver's license", label: "Driver's License" },
    { value: "voter's card", label: "Voter's Card" },
    { value: "national ID", label: "National ID" },
    { value: "nin", label: "NIN" },
  ];

  return (
    <div id="work-section" className="overflow-hidden">
      <Formik
        initialValues={formData}
        validationSchema={Yup.object({
          occupation: Yup.string().required("Occupation is required"),
          moi: Yup.string().required("Select an option"),
          idNumber: Yup.string().required("ID Card Number is required"),
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
              <InputWithLabel
                labelName="Occupation"
                inputType="text"
                inputName="occupation"
                placeholder="Enter your occupation here"
                inputValue={values.occupation}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ occupation: event.target.value });
                }}
                inputError={errors.occupation}
              />
              <InputWithDropdown
                labelName="Means of Identification"
                options={moi}
                selectedValue={values.moi}
                onChange={(event) => {
                  handleChange({
                    target: {
                      name: "moi",
                      value: event.target.value,
                    },
                  });
                  onFormChange({ moi: event.target.value });
                }}
                inputError={errors.moi}
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

export default Work;
