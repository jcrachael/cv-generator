import React from "react";
import PropTypes from "prop-types";

function EducationForm(props) {
  return (
    <div className="educationinput" id={props.id}>
      <div className="delete-icon" onClick={props.handleDelEdu}>
        &times;
      </div>
      <div className="form-row">
        <div className="form-control">
          <label htmlFor="school">Name of school/institute*</label>
          <input
            id="school"
            name="school"
            type="text"
            placeholder="School"
            onChange={props.handleEduChange}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="qualification">Qualification*</label>
          <input
            id="qual"
            type="text"
            name="qual"
            placeholder="Qualification"
            onChange={props.handleEduChange}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-control">
          <label htmlFor="date">Date*</label>
          <input
            id="date"
            name="date"
            type="date"
            className="eduDate"
            onChange={props.handleEduChange}
            required
          />
        </div>
      </div>
    </div>
  );
}

EducationForm.propTypes = {
  id: PropTypes.string,
  formData: PropTypes.object,
  handleEduChange: PropTypes.func,
  handleDelEdu: PropTypes.func,
};

export default EducationForm;
