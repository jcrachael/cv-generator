import React from "react";
import PropTypes from "prop-types";
import WorkForm from "./WorkForm";
import Button from "./Button";

function WorkFieldset({
  formData,
  handleWorkChange,
  handleAddWork,
  handleDelWork,
}) {
  const list = formData.work.map((item, index) => {
    return (
      <WorkForm
        key={index}
        id={item.id}
        formData={formData}
        handleWorkChange={handleWorkChange}
        handleDelWork={handleDelWork}
      />
    );
  });

  return (
    <>
      {list}

      <div className="add-more-work-btn form-row">
        <div className="form-control">
          <Button type="button" value="Add" eventHandler={handleAddWork} />
        </div>
      </div>
    </>
  );
}

WorkFieldset.propTypes = {
  formData: PropTypes.object,
  handleWorkChange: PropTypes.func,
  handleAddWork: PropTypes.func,
  handleDelWork: PropTypes.func,
};

export default WorkFieldset;
