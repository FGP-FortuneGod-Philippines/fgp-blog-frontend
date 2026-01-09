// vitest.config.ts
import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    css: true,
  },
  // Add resolve.alias to match your vite.config.ts
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});