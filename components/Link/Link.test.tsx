import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Link from "./Link";

describe("Link", () => {
  it("renders the link with correct attributes", () => {
    render(
      <Link href="https://example.com" target="_blank">
        Link label
      </Link>
    );

    const link = screen.getByText("Link label");
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(link).toHaveClass("Link");
  });

  it("applies custom className", () => {
    render(
      <Link href="https://example.com" className="custom-class">
        Link label
      </Link>
    );

    const link = screen.getByText("Link label");
    expect(link).toHaveClass("Link");
    expect(link).toHaveClass("custom-class");
  });

  it("handles keyboard events", async () => {
    const testFn = jest.fn();
    render(
      <Link href="https://example.com" onClick={testFn}>
        Link label
      </Link>
    );

    const link = screen.getByText("Link label");

    fireEvent.keyDown(link, { key: "Enter" });
    expect(testFn).toHaveBeenCalledTimes(1);
  });
});
