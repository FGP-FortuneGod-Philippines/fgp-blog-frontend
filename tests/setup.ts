// tests/setup.ts

// Extend Vitest's expect with jest-dom matchers
import "@testing-library/jest-dom";

// (Optional) You can also configure global mocks or utilities here.
// For example, if you need to mock window.scrollTo in jsdom:
window.scrollTo = vi.fn();

// If you use React Testing Library, you can add cleanup logic:
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

// Silence console.error for intentional error-path tests
vi.spyOn(console, "error").mockImplementation(() => {});

afterEach(() => {
  cleanup();
});
