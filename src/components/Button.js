import React from "react";
import PropTypes from "prop-types";

function Button({ type, value, eventHandler }) {
  return (
    <button type={type} value={value} onClick={eventHandler}>
      {value}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  eventHandler: PropTypes.func,
};

export default Button;
