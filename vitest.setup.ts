// vitest.setup.ts
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

// Silence console.error for intentional error-path tests
vi.spyOn(console, "error").mockImplementation(() => {});

// Cleanup after each test
afterEach(() => {
  cleanup();
});
