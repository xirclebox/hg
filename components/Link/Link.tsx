import React from "react";
import "./Link.scss";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  hasOnClick?: boolean;
  onClick?: () => {};
}

const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = "",
  target,
  rel,
  onClick,
  hasOnClick,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      event.currentTarget.click();
    }
  };

  return (
    <a
      href={href}
      className={`Link ${className}`}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : rel}
      onKeyDown={handleKeyDown}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Link;
