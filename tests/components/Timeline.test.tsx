/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Timeline from "../../src/components/Timeline";

// 🔹 Mock timeline data
vi.mock("../../src/constants/contents", () => ({
  timelineData: [
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" },
    { id: 3, title: "Item 3" },
  ],
}));

// 🔹 Mock child components
vi.mock("@/components/timeline/TimelineItem", () => ({
  default: ({ item }: any) => (
    <div data-testid="timeline-item">{item.title}</div>
  ),
}));

vi.mock("@/components/timeline/TimelineItemBottom", () => ({
  default: ({ item }: any) => (
    <div data-testid="timeline-item-bottom">{item.title}</div>
  ),
}));

// 🔹 Mock image import
vi.mock("@/assets/diamond.png", () => ({
  default: "diamond.png",
}));

describe("Timeline component", () => {
  const defaultProps = {
    handlePrev: vi.fn(),
    handleNext: vi.fn(),
    translateX: 0,
    itemWidth: "300px",
    currentIndex: 0,
    setCurrentIndex: vi.fn(),
    maxIndex: 2,
    itemsPerPage: 1,
  };

  it("renders timeline items correctly", () => {
    render(<Timeline {...defaultProps} />);

    const topItems = screen.getAllByTestId("timeline-item");
    const bottomItems = screen.getAllByTestId("timeline-item-bottom");

    expect(topItems).toHaveLength(3);
    expect(bottomItems).toHaveLength(3);
  });

  it("calls handleNext when next button is clicked", () => {
    render(<Timeline {...defaultProps} />);

    const nextButton = screen.getByLabelText("Next");
    fireEvent.click(nextButton);

    expect(defaultProps.handleNext).toHaveBeenCalledOnce();
  });

  it("calls handlePrev when prev button is clicked", () => {
    render(<Timeline {...defaultProps} currentIndex={1} />);

    const prevButton = screen.getByLabelText("Previous");
    fireEvent.click(prevButton);

    expect(defaultProps.handlePrev).toHaveBeenCalledOnce();
  });

  it("disables previous button when currentIndex is 0", () => {
    render(<Timeline {...defaultProps} />);

    const prevButton = screen.getByLabelText("Previous");
    expect(prevButton).toBeDisabled();
  });

  it("disables next button when currentIndex reaches maxIndex", () => {
    render(<Timeline {...defaultProps} currentIndex={2} />);

    const nextButton = screen.getByLabelText("Next");
    expect(nextButton).toBeDisabled();
  });

  it("renders correct number of pagination dots", () => {
    render(<Timeline {...defaultProps} />);

    const dots = screen.getAllByRole("button", {
      name: /Go to slide/i,
    });

    expect(dots).toHaveLength(3);
  });

  it("calls setCurrentIndex when pagination dot is clicked", () => {
    render(<Timeline {...defaultProps} />);

    const dot = screen.getByLabelText("Go to slide 2");
    fireEvent.click(dot);

    expect(defaultProps.setCurrentIndex).toHaveBeenCalledWith(1);
  });

  it("applies translateX style correctly", () => {
    render(<Timeline {...defaultProps} translateX={-100} />);

    const containers = screen.getAllByTestId("timeline-item")[0].parentElement;

    expect(containers).toHaveStyle("transform: translateX(-100%)");
  });
});
