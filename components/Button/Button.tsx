import React from "react";
import "./Button.scss";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  ariaLabel,
  children,
}) => {
  return (
    <button
      className="Button"
      onClick={onClick}
      aria-disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
