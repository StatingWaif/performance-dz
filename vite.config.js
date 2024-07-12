import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteMinifyPlugin from "vite-plugin-minify";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/performance-dz/",
  plugins: [react(), ViteMinifyPlugin()],
});
