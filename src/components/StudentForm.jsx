import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import FormField from './FormField';
import RadioGroup from './RadioGroup';
import CheckboxGroup from './CheckboxGroup';
import SubmittedData from './SubmittedData';

import '../StudentForm.css';

export default function StudentForm() {
  const [submittedData, setSubmittedData] = useState(null);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      phonenumber: '',
      email: '',
      age: '',
      gender: '',
      grade: '',
      hobbies: [],
      comments: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full Name is required'),
      phonenumber: Yup.number().min(1, 'Invalid PhoneNumber').required('PhoneNumber is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      age: Yup.number().min(1, 'Invalid age').required('Age is required'),
      gender: Yup.string().required('Gender is required'),
      grade: Yup.string().required('Grade is required'),
      hobbies: Yup.array().min(1, 'Select at least one hobby'),
      comments: Yup.string().required('Comments are required'),
    }),
    onSubmit: (values) => {
      setSubmittedData(values);
    },
  });

  return (
    <div className="container">
      <h1>Student Details Form</h1>

      <form onSubmit={formik.handleSubmit}>
        <FormField label="Full Name" name="fullName" type="text" formik={formik} />
        <FormField label="Phone Number" name="phonenumber" type="text" formik={formik} />
        <FormField label="Email Address" name="email" type="email" formik={formik} />
        <FormField label="Age" name="age" type="number" formik={formik} />

        <RadioGroup label="Gender" name="gender" options={['Male', 'Female', 'Other']} formik={formik} />

        <FormField label="Grade" name="grade" as="select" options={['A', 'B', 'C', 'D', 'F']} formik={formik} />

        <CheckboxGroup label="Hobbies" name="hobbies" options={['Reading', 'Sports', 'Music', 'Art', 'Other']} formik={formik} />

        <FormField label="Comments" name="comments" as="textarea" formik={formik} />

        <button type="submit">Submit</button>
      </form>

      {submittedData && <SubmittedData data={submittedData} />}
    </div>
  );
}
