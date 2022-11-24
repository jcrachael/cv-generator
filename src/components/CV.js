import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import "../styles/CV.css";

function CV({ formData, submitHandler }) {
  const eduList = formData.education.map((item, index) => {
    return (
      <div key={index} className="cv-info" id={item.id}>
        <div className="row">
          <span className="label">Institution: </span>
          <span className="school data">{item.school}</span>
        </div>
        <div className="row">
          <span className="label">Qualification: </span>
          <span className="qual data">{item.qual}</span>
        </div>
        <div className="row">
          <span className="label">Date: </span>
          <span className="edudate data">{item.date}</span>
        </div>
      </div>
    );
  });

  const workList = formData.work.map((item, index) => {
    return (
      <div key={index} className="cv-info" id={item.id}>
        <div className="row">
          <div className="inner-row">
            <span className="label">Employer: </span>
            <span className="employer data">{item.employerName}</span>
          </div>
          <div className="inner-row">
            <span className="label">Started: </span>
            <span className="datestarted data">{item.dateStarted}</span>
          </div>
        </div>

        <div className="row">
          <div className="inner-row">
            <span className="label">Position: </span>
            <span className="pos data">{item.pos}</span>
          </div>
          <div className="inner-row">
            <span className="label">Ended: </span>
            <span className="dateended data">{item.dateEnded}</span>
          </div>
        </div>

        <div className="row">
          <span className="dutieslabel label">Duties: </span>
          <span className="role data">{item.role}</span>
        </div>
      </div>
    );
  });

  return (
    <section className="CV">
      <div className="cv-container">
        <div className="cv-about">
          <p className="cv-title">
            <span className="firstName">{formData.firstName}</span>
            <span className="lastName">{formData.lastName}</span>
          </p>
          <div className="cv-info">
            <div className="row">
              <span className="label">Email: </span>
              <span className="email data">{formData.email}</span>
            </div>
            <div className="row">
              <span className="label">Phone: </span>
              <span className="phone data">{formData.phone}</span>
            </div>
            <div className="row">
              <span className="label">Address: </span>
              <span className="address data">{formData.address}</span>
            </div>
          </div>
        </div>

        <div className="cv-edu">
          <p className="cv-title">Education</p>
          {eduList}
        </div>

        <div className="cv-work">
          <p className="cv-title">Work</p>

          {workList}
        </div>
        <div className="cv-footer">
          This CV was generated at jcrachael.github.io/cv
        </div>
      </div>

      <Button type="button" value="Edit CV" eventHandler={submitHandler} />
    </section>
  );
}

CV.propTypes = {
  formData: PropTypes.object,
  submitHandler: PropTypes.func,
};

export default CV;
