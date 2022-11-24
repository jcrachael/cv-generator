import React, { useState } from "react";
import uniqid from "uniqid";
import Hero from "./Hero";
import Form from "./Form";
import CV from "./CV";

export default function Main() {
  const [form, setForm] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    education: [
      {
        id: uniqid(),
        school: "",
        qual: "",
        date: "",
      },
    ],
    work: [
      {
        id: uniqid(),
        employerName: "",
        pos: "",
        dateStarted: "",
        dateEnded: "",
        role: "",
      },
    ],
  });

  // Submit form event listener
  function handleSubmit(e) {
    e.preventDefault();
    setForm(!form);
  }

  // Input change event listener for AboutForm
  function handleChange(e) {
    console.log(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // Input change event listener for EducationForm
  function handleEduChange(e) {
    let newEdu = formData.education.map((item) => {
      if (item.id === e.target.parentElement.parentElement.parentElement.id) {
        return { ...item, [e.target.name]: e.target.value };
      } else {
        return item;
      }
    });
    setFormData({ ...formData, education: newEdu });
  }

  // Input change event listener for WorkForm
  function handleWorkChange(e) {
    let newWork = formData.work.map((item) => {
      if (item.id === e.target.parentElement.parentElement.parentElement.id) {
        return { ...item, [e.target.name]: e.target.value };
      } else {
        return item;
      }
    });
    setFormData({ ...formData, work: newWork });
  }

  // Add Education button event listener
  function handleAddEducation() {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        { id: uniqid(), school: "", qual: "", date: "" },
      ],
    });
  }

  // Add Work button event listener
  function handleAddWork() {
    setFormData({
      ...formData,
      work: [
        ...formData.work,
        {
          id: uniqid(),
          employerName: "",
          pos: "",
          dateStarted: "",
          dateEnded: "",
          role: "",
        },
      ],
    });
  }

  // Delete education button event listener
  function handleDelEdu(e) {
    let newEdu = formData.education.filter(
      (item) => item.id !== e.target.parentElement.id
    );
    setFormData({ ...formData, education: newEdu });
  }

  // Delete work buitton event listener
  function handleDelWork(e) {
    let newWork = formData.work.filter(
      (item) => item.id !== e.target.parentElement.id
    );
    setFormData({ ...formData, work: newWork });
  }

  return (
    <main>
      <Hero form={form} />
      {form ? (
        <Form
          formData={formData}
          submitHandler={handleSubmit}
          handleAboutChange={handleChange}
          handleEduChange={handleEduChange}
          handleWorkChange={handleWorkChange}
          handleAddEducation={handleAddEducation}
          handleAddWork={handleAddWork}
          handleDelEdu={handleDelEdu}
          handleDelWork={handleDelWork}
        />
      ) : (
        <CV formData={formData} submitHandler={handleSubmit} />
      )}
    </main>
  );
}
