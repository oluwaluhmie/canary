import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../../../Components/inputWithLabel";
import InputWithDropdown from "../../../Components/InputWithDropdown";

const NextKin = ({ formData, onFormChange }) => {
  const next_of_kin_title = [
    { value: "Miss", label: "Miss." },
    { value: "Mr", label: "Mr." },
    { value: "Mrs", label: "Mrs." },
  ];

  return (
    <div className="overflow-hidden">
      <Formik
        initialValues={formData}
        validationSchema={Yup.object({
          next_of_kin_title: Yup.string().required("Select an option"),
          next_of_kin_surname: Yup.string().required("Surname is required"),
          next_of_kin_firstname: Yup.string().required(
            "First name is required"
          ),
          next_of_kin_middle_name: Yup.string().required(
            "Middle name is required"
          ),
          next_of_kin_phone_number: Yup.string()
            .matches(/^\d{11}$/, "Phone number must be exactly 11 digits")
            .required("Phone number is required"),
          next_of_kin_relationship: Yup.string().required(
            "Relationship is required"
          ),
          next_of_kin_email: Yup.string()
            .email("Invalid email address")
            .required("Email Address is required"),
          next_of_kin_occupation: Yup.string().required(
            "Occupation is required"
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
                  options={next_of_kin_title}
                  selectedValue={values.next_of_kin_title}
                  onChange={(event) => {
                    handleChange({
                      target: {
                        name: "next_of_kin_title",
                        value: event.target.value,
                      },
                    });
                    onFormChange({
                      ...values,
                      next_of_kin_title: event.target.value,
                    });
                  }}
                  inputError={
                    touched.next_of_kin_title && errors.next_of_kin_title
                  }
                />
                <InputWithLabel
                  labelName="Surname"
                  inputType="text"
                  inputName="next_of_kin_surname"
                  placeholder="Enter surname"
                  inputValue={values.next_of_kin_surname}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      next_of_kin_surname: event.target.value,
                    });
                  }}
                  inputError={
                    touched.next_of_kin_surname && errors.next_of_kin_surname
                  }
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
                <InputWithLabel
                  labelName="First Name"
                  inputType="text"
                  inputName="next_of_kin_firstname"
                  placeholder="Enter first name"
                  inputValue={values.next_of_kin_firstname}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      next_of_kin_firstname: event.target.value,
                    });
                  }}
                  inputError={
                    touched.next_of_kin_firstname &&
                    errors.next_of_kin_firstname
                  }
                />
                <InputWithLabel
                  labelName="Middle Name"
                  inputType="text"
                  inputName="next_of_kin_middle_name"
                  placeholder="Enter middle name"
                  inputValue={values.next_of_kin_middle_name}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      next_of_kin_middle_name: event.target.value,
                    });
                  }}
                  inputError={
                    touched.next_of_kin_middle_name &&
                    errors.next_of_kin_middle_name
                  }
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
                <InputWithLabel
                  labelName="Phone Number"
                  inputType="text"
                  inputName="next_of_kin_phone_number"
                  placeholder="+234 (806) 000-0000"
                  inputValue={values.next_of_kin_phone_number}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      next_of_kin_phone_number: event.target.value,
                    });
                  }}
                  inputError={
                    touched.next_of_kin_phone_number &&
                    errors.next_of_kin_phone_number
                  }
                />
                <InputWithLabel
                  labelName="Relationship"
                  inputType="text"
                  inputName="next_of_kin_relationship"
                  placeholder="Relationship with Next of Kin"
                  inputValue={values.next_of_kin_relationship}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      next_of_kin_relationship: event.target.value,
                    });
                  }}
                  inputError={
                    touched.next_of_kin_relationship &&
                    errors.next_of_kin_relationship
                  }
                />
              </div>
              <InputWithLabel
                labelName="Email Address"
                inputType="email"
                inputName="next_of_kin_email"
                placeholder="e.g. segun@gmail.com"
                inputValue={values.next_of_kin_email}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({
                    ...values,
                    next_of_kin_email: event.target.value,
                  });
                }}
                inputError={
                  touched.next_of_kin_email && errors.next_of_kin_email
                }
              />
              <InputWithLabel
                labelName="Occupation"
                inputType="text"
                inputName="next_of_kin_occupation"
                placeholder="Enter next of kin occupation here"
                inputValue={values.next_of_kin_occupation}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({
                    ...values,
                    next_of_kin_occupation: event.target.value,
                  });
                }}
                inputError={
                  touched.next_of_kin_occupation &&
                  errors.next_of_kin_occupation
                }
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NextKin;
