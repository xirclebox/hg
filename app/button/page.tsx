"use client";
import Button, { ButtonTypes } from "@/components/Button/Button";
import Code from "@/components/Code/Code";
import Section from "@/components/Section/Section";
import React, { useState } from "react";

export default function Page() {
  const html = `
<button
  type="" // button, submit, reset
  aria-label="" // when your button doesn't have a visible lable
  class=""
  aria-disabled="" // true / false
>
  // visible label
</button>

  `;

  const codeExample = `
import "./Path to your CSS";

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
  >
    {children}
  </button>
);

export default Button;
        `;

  const componentTest = `
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Button, { ButtonTypes } from "./Button";

describe("Button Component", () => {

  it("renders button with default props", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Sign in</Button>);

    const button = screen.getByRole("button");
    expect(button).toBeVisible();
    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveTextContent("Sign in");
    expect(button).not.toBeDisabled();
  });

  it.each(Object.values(ButtonTypes))(
    "renders button with types",
    (buttonType) => {
      const handleClick = jest.fn();
      render(
        <Button type={buttonType} onClick={handleClick}>
          Do something
        </Button>
      );

      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("type", buttonType);
    }
  );

  it("renders button with aria-label", () => {
    const handleClick = jest.fn();
    render(
      <Button ariaLabel="Copy content" onClick={handleClick}>
        copy icon
      </Button>
    );

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-label", "Copy content");
  });

  it("renders button with custom className", () => {
    const handleClick = jest.fn();
    render(
      <Button className="custom-class" onClick={handleClick}>
        Fancy
      </Button>
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });

  it("renders disabled button", () => {
    const handleClick = jest.fn();
    render(
      <Button disabled onClick={handleClick}>
        Send
      </Button>
    );

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-disabled", "true");
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Expand</Button>);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders children correctly", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick}>
        <span>Thing 1</span>
        <span>Thing 2</span>
      </Button>
    );

    const button = screen.getByRole("button");
    expect(button).toContainHTML("<span>Thing 1</span>");
    expect(button).toContainHTML("<span>Thing 2</span>");
  });
});
`;

  return (
    <>
      <h1 className="Page__heading">Button</h1>
      <p>Component description</p>

      <Section heading="Example">
        <Button className="Button" onClick={() => {}}>
          Button Label
        </Button>
      </Section>

      <Section heading="Semantic markup">
        <Code content={html} language="HTML" />
      </Section>
      <Section heading="Component">
        <Code content={codeExample} />
      </Section>
      <Section heading="Test">
        <Code content={componentTest} />
      </Section>
    </>
  );
}
