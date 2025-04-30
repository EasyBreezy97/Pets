import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Logo from "./Logo";

describe("Logo", () => {
  it("renders without crashing", () => {
    render(<Logo />);
    const svgElement = screen.getByTestId("logo-svg");
    expect(svgElement).toBeInTheDocument();
  });

  it("has default size of 42", () => {
    render(<Logo />);
    const svgElement = screen.getByTestId("logo-svg");
    expect(svgElement).toHaveAttribute("width", "42");
    expect(svgElement).toHaveAttribute("height", "42");
  });

  it("uses custom size when provided", () => {
    render(<Logo size={100} />);
    const svgElement = screen.getByTestId("logo-svg");
    expect(svgElement).toHaveAttribute("width", "100");
    expect(svgElement).toHaveAttribute("height", "100");
  });
});
