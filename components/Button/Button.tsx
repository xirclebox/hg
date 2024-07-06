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
  const isDisabled = disabled ? "true" : undefined;

  return (
    <button
      className="Button"
      onClick={onClick}
      aria-disabled={isDisabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
