// vitest.config.ts
import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    globals: true, // important for expect
    environment: "jsdom",
    css: true,
    setupFiles: ["./tests/setup.ts"], // ✅ relative path, not absoluteq 
  },
  // Add resolve.alias to match your vite.config.ts
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});