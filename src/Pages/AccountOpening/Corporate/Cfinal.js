import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FileInput from "../../../Components/FileInput";

const Cfinal = ({ formData }) => {
  return (
    <div className="overflow-hidden">
      <Formik
        initialValues={formData}
        validationSchema={Yup.object({
          signature: Yup.mixed()
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
          secondSignature: Yup.mixed()
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
          thirdSignature: Yup.mixed()
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
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values); // Handles form submission here
          resetForm(); // Clear form after submission
        }}
      >
        {({ values, errors, setFieldValue, touched, handleChange }) => (
          <Form className="flex flex-col px-5 bg-white w-full">
            <div className="grid grid-cols-1 gap-6">
              <FileInput
                labelName="Upload Signature (Signatory 1)"
                onChange={(event) => {
                  setFieldValue("signature", event.currentTarget.files[0]);
                }}
                inputError={touched.signature && errors.signature}
              />
              <FileInput
                labelName="Upload Signature (Signatory 2)"
                onChange={(event) => {
                  setFieldValue(
                    "secondSignature",
                    event.currentTarget.files[0]
                  );
                }}
                inputError={touched.secondSignature && errors.secondSignature}
              />
              <FileInput
                labelName="Upload Signature (Signatory 3)"
                onChange={(event) => {
                  setFieldValue(
                    "thirdSignature",
                    event.currentTarget.files[0]
                  );
                }}
                inputError={touched.thirdSignature && errors.thirdSignature}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Cfinal;
