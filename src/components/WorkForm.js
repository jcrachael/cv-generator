import React from "react";
import PropTypes from "prop-types";

function WorkForm(props) {
  return (
    <div className="workinput" id={props.id}>
      <div className="delete-icon" onClick={props.handleDelWork}>
        &times;
      </div>
      <div className="form-row">
        <div className="form-control">
          <label htmlFor="name">Employer name*</label>
          <input
            id="name"
            name="employerName"
            type="text"
            placeholder="Employer"
            onChange={props.handleWorkChange}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="pos">Position title*</label>
          <input
            id="pos"
            name="pos"
            type="text"
            placeholder="Position"
            onChange={props.handleWorkChange}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-control">
          <label htmlFor="start">Date started*</label>
          <input
            id="start"
            name="dateStarted"
            type="date"
            required
            onChange={props.handleWorkChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="end">Date ended*</label>
          <input
            id="end"
            name="dateEnded"
            type="date"
            required
            onChange={props.handleWorkChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-control">
          <label htmlFor="role">Role description</label>
          <input
            id="role"
            type="text"
            name="role"
            className="role"
            onChange={props.handleWorkChange}
            placeholder="Working cash register, assisting customers with enquiries, processing refunds, stocking shelves"
          />
        </div>
      </div>
    </div>
  );
}

WorkForm.propTypes = {
  id: PropTypes.string,
  formData: PropTypes.object,
  handleWorkChange: PropTypes.func,
  handleDelWork: PropTypes.func,
};

export default WorkForm;
