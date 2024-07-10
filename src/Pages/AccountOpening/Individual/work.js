import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../../../Components/inputWithLabel";
import InputWithDropdown from "../../../Components/InputWithDropdown";

const Work = ({ formData, onFormChange }) => {
  const means_of_identification = [
    { value: "International Passport", label: "International Passport" },
    { value: "Driver's License", label: "Driver's License" },
    { value: "Voter's Card", label: "Voter's Card" },
    { value: "National ID", label: "National ID" },
    { value: "NIN", label: "NIN" },
  ];

  return (
    <div id="work-section" className="overflow-hidden">
      <Formik
        initialValues={formData}
        validationSchema={Yup.object({
          occupation: Yup.string().required("Occupation is required"),
          means_of_identification: Yup.string().required("Select an option"),
          id_card_number: Yup.string().required("ID Card Number is required"),
          issue_date: Yup.date()
            .required("Issue Date is required")
            .max(new Date(), "Issue Date cannot be in the future"),
          expiry_date: Yup.date()
            .required("Expiry Date is required")
            .min(
              Yup.ref("issue_date"),
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
        {({ values, errors, touched, handleChange }) => (
          <Form className="flex flex-col bg-white w-full">
            <div className="grid grid-cols-1 gap-6">
              <InputWithLabel
                labelName="Occupation"
                inputType="text"
                inputName="occupation"
                placeholder="Enter your occupation here"
                inputValue={values.occupation}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ ...values, occupation: event.target.value });
                }}
                inputError={touched.occupation && errors.occupation}
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
                  inputError={
                    touched.means_of_identification &&
                    errors.means_of_identification
                  }
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
                  inputError={touched.id_card_number && errors.id_card_number}
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
                  inputError={touched.issue_date && errors.issue_date}
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
                  inputError={touched.expiry_date && errors.expiry_date}
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
