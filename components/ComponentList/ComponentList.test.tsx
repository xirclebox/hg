import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ComponentList from "./ComponentList";

describe("ComponentList", () => {
  it("renders a list of components with correct URLs and text label", () => {
    const mockComponents = [
      { id: 1, name: "Component 1", url: "https://example.com/1" },
      { id: 2, name: "Component 2", url: "https://example.com/2" },
      { id: 3, name: "Component 3", url: "https://example.com/3" },
    ];

    render(<ComponentList components={mockComponents} />);

    mockComponents.forEach((component) => {
      const linkElement = screen.getByText(component.name).closest("a");
      expect(linkElement).toHaveAttribute("href", component.url);
      expect(linkElement).toHaveTextContent(component.name);
    });

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(mockComponents.length);
  });

  it("applies correct class names to rendered items", () => {
    const mockComponents = [
      { id: 1, name: "Component 1", url: "https://example.com/1" },
    ];
    render(<ComponentList components={mockComponents} />);
    const linkElement = screen.getByText("Component 1").closest("a");
    expect(linkElement).toHaveClass("ComponentList-card");
  });
});
