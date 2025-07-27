import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Button, { ButtonTypes } from "./Button";

describe("Button Component", () => {
  // Test default rendering
  it("renders button with default props", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Sign in</Button>);

    const button = screen.getByRole("button");
    expect(button).toBeVisible();
    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveTextContent("Sign in");
    expect(button).not.toBeDisabled();
  });

  // Test button types
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

  // Test aria-label
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

  // Test custom className
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

  // Test disabled state
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

  // Test click handler
  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Expand</Button>);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test children rendering
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
