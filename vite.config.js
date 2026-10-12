import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" keeps asset paths relative, so the build works on
// GitHub Pages, Azure Static Web Apps, IIS or any static host.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
