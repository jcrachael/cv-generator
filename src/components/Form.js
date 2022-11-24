import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import Fieldset from "./Fieldset";
import "../styles/Form.css";

function Form(props) {
  const types = [
    { id: 0, name: "about" },
    { id: 1, name: "education" },
    { id: 2, name: "work" },
  ];

  const listItems = types.map((type, id) => {
    return (
      <Fieldset
        key={id}
        id={id}
        type={type.name}
        formData={props.formData}
        handleAboutChange={props.handleAboutChange}
        handleEduChange={props.handleEduChange}
        handleWorkChange={props.handleWorkChange}
        handleAddEducation={props.handleAddEducation}
        handleAddWork={props.handleAddWork}
        handleDelEdu={props.handleDelEdu}
        handleDelWork={props.handleDelWork}
      />
    );
  });

  return (
    <form>
      {listItems}
      <Button
        type="submit"
        value="Generate CV"
        eventHandler={props.submitHandler}
      />
    </form>
  );
}

Form.propTypes = {
  formData: PropTypes.object,
  submitHandler: PropTypes.func,
  handleAboutChange: PropTypes.func,
  handleEduChange: PropTypes.func,
  handleWorkChange: PropTypes.func,
  handleAddEducation: PropTypes.func,
  handleAddWork: PropTypes.func,
  handleDelEdu: PropTypes.func,
  handleDelWork: PropTypes.func,
};

export default Form;
