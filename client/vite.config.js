import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {},
  preprocessorOptions: {
    sass: {
      api: "modern-compiler",
    },
  },
  css: {
    scss: {
      api: "modern-compiler", // or "modern", "legacy"
      importers: [
        // ...
      ],
    },
  },
});
