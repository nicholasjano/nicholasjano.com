import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@data": resolve(__dirname, "src/data"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@pageTypes": resolve(__dirname, "src/pageTypes"),
      "@utilities": resolve(__dirname, "src/utilities"),
    },
  },
});
