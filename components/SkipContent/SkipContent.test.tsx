import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SkipContent from "./SkipContent";

describe("SkipContent", () => {
  it("rendsers the component with correct landmark id", () => {
    render(<SkipContent />);

    const skipLink = screen.getByText("Skip to main content").closest("a");
    expect(skipLink).toHaveAttribute("href", "#main");
    expect(skipLink).toHaveClass("Skip-to-main");
  });
});
