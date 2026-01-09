/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router";

import NewsCards from "../../src/components/NewsCards";
import type { NewsProps } from "../../src/interfaces";
import "@testing-library/jest-dom";

const noImage = "no-image-news.png";

/* ----------------------------------
Mock utilities & child components
----------------------------------- */

// mock formatDate utility
vi.mock("@/utils/formatDate", () => ({
  formatDate: vi.fn(() => "January 1, 2025"),
}));

// mock LazyImage to behave like a normal img
vi.mock("@/components/LazyImage", () => ({
  default: (props: any) => <img {...props} />,
}));

/* ----------------------------------
Test data
----------------------------------- */

const mockNews: NewsProps = {
  id: "news-1",
  title: "Breaking News Title",
  description: "This is a short description of the news.",
  url: "/news/breaking-news",
  image: "https://example.com/news.jpg",
  publishedAt: "2025-01-01T00:00:00Z",
  source: {
    name: "CNN",
  },
};

describe("NewsCards component", () => {
  const renderComponent = (data = mockNews) => {
    render(
      <MemoryRouter>
        <NewsCards data={data} />
      </MemoryRouter>
    );
  };

  it("renders the news title, description, source, and formatted date", () => {
    renderComponent();

    expect(
      screen.getByRole("link", { name: mockNews.title })
    ).toBeInTheDocument();

    expect(screen.getByText(mockNews.description)).toBeInTheDocument();
    expect(screen.getByText(mockNews.source.name)).toBeInTheDocument();
    expect(screen.getByText("January 1, 2025")).toBeInTheDocument();
  });

  it("renders a link pointing to the correct news URL", () => {
    renderComponent();

    const link = screen.getByRole("link", { name: mockNews.title });
    expect(link).toHaveAttribute("href", mockNews.url);
  });

  it("renders the provided image when image exists", () => {
    renderComponent();

    const image = screen.getByRole("img", {
      name: mockNews.title,
    }) as HTMLImageElement;

    expect(image).toBeInTheDocument();
    expect(image.src).toBe(mockNews.image);
  });

  it("falls back to default image when image fails to load", () => {
    renderComponent();

    const image = screen.getByRole("img", {
      name: mockNews.title,
    }) as HTMLImageElement;

    fireEvent.error(image);

    expect(image.src).toContain(noImage);
  });

  it("uses fallback image when image prop is missing", () => {
    renderComponent({
      ...mockNews,
      image: "",
    });

    const image = screen.getByRole("img", {
      name: mockNews.title,
    }) as HTMLImageElement;

    expect(image.src).toContain(noImage);
  });
});
