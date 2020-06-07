import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input
      id={`form-input-${label.toLowerCase()}`}
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    />
    {label && (
      <label
        htmlFor="form-input"
        className={`form-input-label ${
          otherProps.value.length ? "shrink" : ""
        }`}
      >
        {label}
      </label>
    )}
  </div>
);

export default FormInput;
