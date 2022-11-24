import React from "react";
import PropTypes from "prop-types";
import EducationForm from "./EducationForm";
import Button from "./Button";

function EducationFieldset({
  formData,
  handleEduChange,
  handleAddEducation,
  handleDelEdu,
}) {
  const list = formData.education.map((item, index) => {
    return (
      <EducationForm
        key={index}
        id={item.id}
        formData={formData}
        handleEduChange={handleEduChange}
        handleDelEdu={handleDelEdu}
      />
    );
  });

  return (
    <>
      {list}

      <div className="add-more-edu-btn form-row">
        <div className="form-control">
          <Button type="button" value="Add" eventHandler={handleAddEducation} />
        </div>
      </div>
    </>
  );
}

EducationFieldset.propTypes = {
  formData: PropTypes.object,
  handleEduChange: PropTypes.func,
  handleAddEducation: PropTypes.func,
  handleDelEdu: PropTypes.func,
};

export default EducationFieldset;
