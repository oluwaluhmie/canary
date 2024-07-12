import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FileInput from "../../../Components/FileInput";

const Final = ({ formData, onFormChange }) => {
  return (
    <div className="overflow-hidden">
      <Formik
        initialValues={formData}
        validationSchema={Yup.object({
          signature: Yup.mixed()
            .required("A signature is required")
            .test(
              "fileSize",
              "File size too large",
              (value) => value && value.size <= 1024 * 1024 // 1MB
            )
            .test(
              "fileFormat",
              "Unsupported file format",
              (value) =>
                value && ["image/jpeg", "image/png"].includes(value.type)
            ),
          signature_two: Yup.mixed()
            .required("A second signature is required")
            .test(
              "fileSize",
              "File size too large",
              (value) => value && value.size <= 1024 * 1024 // 1MB
            )
            .test(
              "fileFormat",
              "Unsupported file format",
              (value) =>
                value && ["image/jpeg", "image/png"].includes(value.type)
            ),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values); // Handles form submission here
          onFormChange(values); // Send updated form data to parent component
          resetForm(); // Clear form after submission
        }}
      >
        {({ values, errors, setFieldValue, touched }) => (
          <Form className="flex flex-col bg-white w-full">
            <div className="grid grid-cols-1 gap-6">
              <FileInput
                labelName="Upload your signature"
                onChange={(event) => {
                  setFieldValue("signature", event.currentTarget.files[0]);
                  onFormChange({
                    ...values,
                    signature: event.currentTarget.files[0],
                  });
                }}
                inputError={touched.signature && errors.signature}
              />
              <FileInput
                labelName="Upload Second Signature (For joint a/c)"
                onChange={(event) => {
                  setFieldValue("signature_two", event.currentTarget.files[0]);
                  onFormChange({
                    ...values,
                    signature_two: event.currentTarget.files[0],
                  });
                }}
                inputError={touched.signature_two && errors.signature_two}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Final;
