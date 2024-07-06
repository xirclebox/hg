import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders a Button", () => {
    render(<Button onClick={() => {}}>Button label</Button>);

    const btn = screen.getByRole("button");

    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent("Button label");
  });
});
