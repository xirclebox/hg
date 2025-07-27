import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Section from "./Section";

describe("Section Component", () => {
  it("renders the heading correctly", () => {
    render(<Section heading="Test Heading" />);
    expect(screen.getByText("Test Heading")).toBeVisible();
  });

  it("renders children when provided", () => {
    render(
      <Section heading="Test Heading">
        <p>Test Child Content</p>
      </Section>
    );

    expect(screen.getByText("Test Heading")).toBeVisible();
    expect(screen.getByText("Test Child Content")).toBeVisible();
  });

  it("renders without children", () => {
    render(<Section heading="Test Heading" />);

    const section = screen.getByText("Test Heading").closest("section");
    expect(section).toBeVisible();
  });

  it("maintains correct structure", () => {
    render(
      <Section heading="Test Heading">
        <p>Test Child Content</p>
      </Section>
    );

    const section = screen.getByText("Test Heading").closest("section");
    expect(section).toBeVisible();
    expect(section?.children[0]).toHaveTextContent("Test Heading");
  });
});
