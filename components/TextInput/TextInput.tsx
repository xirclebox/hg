import React, { useState, ChangeEvent } from "react";

interface TextInputProps {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  optional?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  required = false,
  optional = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="Text-input">
      <label htmlFor={id} className="Text-input__label">
        {label}
        {required && <span className="Text-input__required">Required</span>}
        {optional && <span className="Text-input__optional">Optional</span>}
      </label>
      <input
        type="text"
        data-testid="text-input-field"
        id={id}
        className="Text-input__field"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        aria-required={required}
      />
    </div>
  );
};
