// vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // important for expect
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"], // ✅ relative path, not absoluteq
  },
});
