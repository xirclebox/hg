import React, { useState, ChangeEvent } from "react";
import "./TextInput.scss";

interface TextInputProps {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  optional?: boolean;
  validate?: (value: string) => string | undefined;
  onBlur: () => void;
}

const TextInput = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  required = false,
  optional = false,
  validate,
  onBlur,
}: TextInputProps) => {
  const [error, setError] = useState<string | undefined>();

  const handleBlur = () => {
    if (validate) {
      setError(validate(value));
    }
    onBlur?.();
  };

  return (
    <div className="Text-input">
      <label htmlFor={id} className="Text-input__label">
        <span className="Text-input__label-text">{label}</span>
        {required && <span className="Text-input__required">Required</span>}
        {optional && <span className="Text-input__optional">Optional</span>}
      </label>
      <input
        {...{
          type: "text",
          "data-testid": "text-input-field",
          id,
          className: `Text-input__field ${error ? "Text-input__field--error" : ""}`,
          placeholder,
          value,
          onChange: (e) => onChange(e.target.value),
          onBlur: handleBlur,
          required,
          "aria-required": required,
          "aria-invalid": !!error,
        }}
      />
      {error && <div className="Text-input__error">oops</div>}
    </div>
  );
};

export default TextInput;
