import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputWithLabel from "../../../Components/inputWithLabel";
import InputWithDropdown from "../../../Components/InputWithDropdown";
import FileInput from "../../../Components/FileInput";

const Csignatory = ({ formData, onFormChange }) => {
  const title_two = [
    { value: "Miss", label: "Miss." },
    { value: "Mr", label: "Mr." },
    { value: "Mrs", label: "Mrs." },
  ];

  const means_of_identification_two = [
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
          title_two: Yup.string().required("Select an option"),
          surname_two: Yup.string().required("Surname is required"),
          firstname_two: Yup.string().required("First name is required"),
          middle_name_two: Yup.string().required("Middle name is required"),
          passport_two: Yup.mixed()
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
          date_of_birth_two: Yup.date()
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
          place_of_birth_two: Yup.string().required(
            "Place of Birth is required"
          ),
          email_two: Yup.string()
            .email("Invalid email address")
            .required("Email Address is required"),
          phone_number_two: Yup.string()
            .matches(/^\d{11}$/, "Phone number must be exactly 11 digits")
            .required("Phone number is required"),
          home_address_two: Yup.string().required("Home Address is required"),
          home_address_lga_two: Yup.string().required(
            "Local Government is required"
          ),
          landmark_two: Yup.string().required("Landmark is required"),
          bvn_two: Yup.string()
            .matches(/^\d{11}$/, "BVN must be exactly 11 digits")
            .required("BVN is required"),
          means_of_identification_two: Yup.string().required(
            "Means of Identification is required"
          ),
          id_card_number_two: Yup.string().required("ID number is required"),
          issue_date_two: Yup.date()
            .required("Issue Date is required")
            .max(new Date(), "Issue Date cannot be in the future"),
          expiry_date_two: Yup.date()
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
                  options={title_two}
                  selectedValue={values.title_two}
                  onChange={(event) => {
                    handleChange({
                      target: {
                        name: "title_two",
                        value: event.target.value,
                      },
                    });
                    onFormChange({ ...values, title_two: event.target.value });
                  }}
                  inputError={errors.title_two}
                />
                <InputWithLabel
                  labelName="Surname"
                  inputType="text"
                  inputName="surname_two"
                  placeholder="Enter your surname"
                  inputValue={values.surname_two}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      surname_two: event.target.value,
                    });
                  }}
                  inputError={errors.surname_two}
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
                <InputWithLabel
                  labelName="First Name"
                  inputType="text"
                  inputName="firstname_two"
                  placeholder="Enter your first name"
                  inputValue={values.firstname_two}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      firstname_two: event.target.value,
                    });
                  }}
                  inputError={errors.firstname_two}
                />
                <InputWithLabel
                  labelName="Middle Name"
                  inputType="text"
                  inputName="middle_name_two"
                  placeholder="Enter your middle name"
                  inputValue={values.middle_name_two}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      middle_name_two: event.target.value,
                    });
                  }}
                  inputError={errors.middle_name_two}
                />
              </div>
              <FileInput
                labelName="Upload Passport Photograph"
                onChange={(event) => {
                  setFieldValue("passport_two", event.currentTarget.files[0]);
                  onFormChange({
                    ...values,
                    passport_two: event.currentTarget.files[0],
                  });
                }}
                inputError={touched.passport_two && errors.passport_two}
              />
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
                <InputWithLabel
                  labelName="Date of Birth"
                  inputType="date"
                  inputName="date_of_birth_two"
                  inputValue={values.date_of_birth_two}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      date_of_birth_two: event.target.value,
                    });
                  }}
                  inputError={errors.date_of_birth_two}
                />
                <InputWithLabel
                  labelName="Place of Birth"
                  inputType="text"
                  inputName="place_of_birth_two"
                  placeholder="Enter place of birth"
                  inputValue={values.place_of_birth_two}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      place_of_birth_two: event.target.value,
                    });
                  }}
                  inputError={errors.place_of_birth_two}
                />
              </div>
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
                <InputWithLabel
                  labelName="Email Address"
                  inputType="email"
                  inputName="email_two"
                  placeholder="e.g. segun@gmail.com"
                  inputValue={values.email_two}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({ ...values, email_two: event.target.value });
                  }}
                  inputError={errors.email_two}
                />
                <InputWithLabel
                  labelName="Phone Number"
                  inputType="text"
                  inputName="phone_number_two"
                  placeholder="+234 (806) 000-0000"
                  inputValue={values.phone_number_two}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      phone_number_two: event.target.value,
                    });
                  }}
                  inputError={errors.phone_number_two}
                />
              </div>
              <InputWithLabel
                labelName="Home Address"
                inputType="text"
                inputName="home_address_two"
                placeholder="Enter your address here"
                inputValue={values.home_address_two}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({
                    ...values,
                    home_address_two: event.target.value,
                  });
                }}
                inputError={errors.home_address_two}
              />
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
                <InputWithLabel
                  labelName="LGA"
                  inputType="text"
                  inputName="home_address_lga_two"
                  placeholder="Enter your local government area"
                  inputValue={values.home_address_lga_two}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      home_address_lga_two: event.target.value,
                    });
                  }}
                  inputError={errors.home_address_lga_two}
                />
                <InputWithLabel
                  labelName="Landmark"
                  inputType="text"
                  inputName="landmark_two"
                  placeholder="Enter landmark"
                  inputValue={values.landmark_two}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      landmark_two: event.target.value,
                    });
                  }}
                  inputError={errors.landmark_two}
                />
              </div>
              <InputWithLabel
                labelName="BVN"
                inputType="text"
                inputName="bvn_two"
                placeholder="Enter your BVN"
                inputValue={values.bvn_two}
                inputOnChange={(event) => {
                  handleChange(event);
                  onFormChange({ ...values, bvn_two: event.target.value });
                }}
                inputError={errors.bvn_two}
              />
              <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-6">
                <InputWithDropdown
                  labelName="Means of Identification"
                  options={means_of_identification_two}
                  selectedValue={values.means_of_identification_two}
                  onChange={(event) => {
                    handleChange({
                      target: {
                        name: "means_of_identification_two",
                        value: event.target.value,
                      },
                    });
                    onFormChange({
                      ...values,
                      means_of_identification_two: event.target.value,
                    });
                  }}
                  inputError={errors.means_of_identification_two}
                />
                <InputWithLabel
                  labelName="ID Card Number"
                  inputType="text"
                  inputName="id_card_number_two"
                  placeholder="Enter your ID Card Number"
                  inputValue={values.id_card_number_two}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      id_card_number_two: event.target.value,
                    });
                  }}
                  inputError={errors.id_card_number_two}
                />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <InputWithLabel
                  labelName="Issue Date"
                  inputType="date"
                  inputName="issue_date_two"
                  inputValue={values.issue_date_two}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      issue_date_two: event.target.value,
                    });
                  }}
                  inputError={errors.issue_date_two}
                />
                <InputWithLabel
                  labelName="Expiry Date"
                  inputType="date"
                  inputName="expiry_date_two"
                  inputValue={values.expiry_date_two}
                  inputOnChange={(event) => {
                    handleChange(event);
                    onFormChange({
                      ...values,
                      expiry_date_two: event.target.value,
                    });
                  }}
                  inputError={errors.expiry_date_two}
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
