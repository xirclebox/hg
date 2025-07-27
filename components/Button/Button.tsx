import "./Button.scss";

export enum ButtonTypes {
  submit = "submit",
  button = "button",
  reset = "reset",
}

interface ButtonProps {
  ariaLabel?: string;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: ButtonTypes;
  onClick: () => void;
}

const Button = ({
  ariaLabel,
  children,
  className,
  disabled = false,
  type = ButtonTypes.button,
  onClick,
}: ButtonProps) => (
  <button
    type={type}
    aria-label={ariaLabel}
    className={className}
    aria-disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
