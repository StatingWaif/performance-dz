import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { ViteMinifyPlugin } from "vite-plugin-minify";
import PreloadWebpackPlugin from "preload-webpack-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/performance-dz/",
  plugins: [react()],
  configureWebpack: (config) => {
    config.plugins.push(
      new PreloadWebpackPlugin({
        rel: "preload",
        include: "allAssets",
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
      })
    );
    return config;
  },
  build: {
    minify: "terser",
    rollupOptions: {
      treeshake: true,
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // if (id.includes("react-dom")) {
            return "modules";
            // }
            // return "other";
          } else if (id.includes("src/components/")) {
            return "other";
          }

          return "other";
        },
      },
    },
    terserOptions: {
      compress: {
        module: true,
        toplevel: true,
      },
      output: {
        comments: false,
      },
      sourceMap: false,
    },
  },
});
