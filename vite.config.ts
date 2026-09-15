/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  // OSC serves the built app through `vite preview` behind its own hostname;
  // vite rejects unknown Host headers unless they are allow-listed.
  preview: {
    host: true,
    allowedHosts: [".osaas.io"],
  },
  plugins: [react(), svgr()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./src/test-utils/setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
  },
});
