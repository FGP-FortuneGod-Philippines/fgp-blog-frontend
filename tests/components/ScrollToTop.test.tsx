import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, vi, beforeEach, expect } from "vitest";
import ScrollToTop from "../../src/components/ScrollToTop";
import "@testing-library/jest-dom";

describe("ScrollToTop Component", () => {
  beforeEach(() => {
    // reset scroll position before each test
    window.scrollTo = vi.fn();

    // reset scrolly
    Object.defineProperty(window, "scrollY", {
      writable: true,
      value: 0,
      configurable: true,
    });
  });

  it("is hidden initially", () => {
    render(<ScrollToTop />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({ opacity: "0" });
  });

  it("scrolls to top when clicked", () => {
    render(<ScrollToTop />);

    Object.defineProperty(window, "scrollY", { value: 300 });
    fireEvent.scroll(window);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });
});
