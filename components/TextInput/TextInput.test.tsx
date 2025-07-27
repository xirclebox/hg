import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import TextInput from "./TextInput";

describe("TextInput", () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly with initial props", () => {
    render(
      <TextInput
        id="test-input"
        label="Label"
        placeholder="Enter text"
        value=""
        onChange={mockOnChange}
        required={true}
        onBlur={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const inputElement = screen.getByTestId("text-input-field");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("placeholder", "Enter text");
    expect(inputElement).toHaveAttribute("id", "test-input");
    expect(inputElement).toHaveAttribute("aria-required", "true");
    expect(inputElement).toBeRequired();
  });

  it("handles input changes correctly", () => {
    render(
      <TextInput
        id="test-input"
        label="Label"
        placeholder="Enter text"
        value=""
        onChange={mockOnChange}
        onBlur={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const inputElement = screen.getByLabelText("Label");
    fireEvent.change(inputElement, { target: { value: "new value" } });
    expect(mockOnChange).toHaveBeenCalledWith("new value");
  });

  it('shows "Required" label when required is true', () => {
    render(
      <TextInput
        id="test-input"
        label="Label"
        value=""
        onChange={mockOnChange}
        required={true}
        onBlur={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const requiredLabel = screen.getByText("Required");
    expect(requiredLabel).toBeInTheDocument();
  });

  it('shows "Optional" label when optional is true', () => {
    render(
      <TextInput
        id="test-input"
        label="Label"
        value=""
        onChange={mockOnChange}
        optional={true}
        onBlur={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );

    const optionalLabel = screen.getByText("Optional");
    expect(optionalLabel).toBeInTheDocument();
  });
});
