import React from "react";
import PropTypes from "prop-types";

function AboutForm({ handleChange }) {
  return (
    <>
      <div className="form-row">
        <div className="form-control">
          <label htmlFor="firstName">First name*</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="John"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="lastName">Last name*</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Citizen"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-control">
          <label htmlFor="email">Email*</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john@google.com"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="phone">Phone number*</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            onChange={handleChange}
            placeholder="0412 345 678"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            type="text"
            onChange={handleChange}
            placeholder="123 Example Street, Sampletown AU 3123"
          />
        </div>
      </div>
    </>
  );
}

AboutForm.propTypes = {
  handleChange: PropTypes.func,
};

export default AboutForm;
