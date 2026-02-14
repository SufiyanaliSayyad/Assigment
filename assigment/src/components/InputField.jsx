import React, { forwardRef } from "react";
import "../styles/form.css";

const InputField = forwardRef(
  ({ label, type = "text", placeholder, error, required, ...props }, ref) => {
    return (
      <div className="input-group">
        <div className="input-wrapper">
          <label className="floating-label">
            {label}
            {required && <span className="required">*</span>}
          </label>

          <input
            ref={ref}
            className={`input-field ${error ? "input-error" : ""}`}
            type={type}
            placeholder={placeholder}
            {...props}
          />
        </div>
        {error && <span className="error-message">{error.message}</span>}
      </div>
    );
  }
);

export default InputField;
