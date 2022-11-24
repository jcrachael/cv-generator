import React from "react";
import PropTypes from "prop-types";
import AboutForm from "./AboutForm";
import EducationFieldset from "./EducationFieldset";
import WorkFieldset from "./WorkFieldset";

function Fieldset({
  id,
  type,
  formData,
  handleAboutChange,
  handleEduChange,
  handleWorkChange,
  handleAddEducation,
  handleAddWork,
  handleDelEdu,
  handleDelWork,
}) {
  return (
    <fieldset className={type} key={id}>
      <legend>{type[0].toUpperCase() + type.slice(1)}</legend>
      {type === "about" && <AboutForm handleChange={handleAboutChange} />}
      {type === "education" && (
        <EducationFieldset
          formData={formData}
          handleEduChange={handleEduChange}
          handleAddEducation={handleAddEducation}
          handleDelEdu={handleDelEdu}
        />
      )}
      {type === "work" && (
        <WorkFieldset
          formData={formData}
          handleWorkChange={handleWorkChange}
          handleAddWork={handleAddWork}
          handleDelWork={handleDelWork}
        />
      )}
    </fieldset>
  );
}

Fieldset.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  formData: PropTypes.object,
  handleAboutChange: PropTypes.func,
  handleEduChange: PropTypes.func,
  handleWorkChange: PropTypes.func,
  handleAddEducation: PropTypes.func,
  handleAddWork: PropTypes.func,
  handleDelEdu: PropTypes.func,
  handleDelWork: PropTypes.func,
};

export default Fieldset;
