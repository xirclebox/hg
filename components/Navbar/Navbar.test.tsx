import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { navBarData } from "./NavbarListItems";

describe("Navbar", () => {
  it("renders the links", () => {
    render(<Navbar />);

    navBarData.forEach((item) => {
      const linkElement = screen.getByText(item.name).closest("a");
      expect(linkElement).toHaveAttribute("href", item.url);
    });

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(navBarData.length);
  });
});
