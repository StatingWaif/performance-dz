import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import PreloadWebpackPlugin from "preload-webpack-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/performance-dz/",
  plugins: [react(), ViteMinifyPlugin()],
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
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) {
              return "react";
            }
            return "modules";
          } else if (id.includes("src/components/const")) {
            return "const";
          } else if (id.includes("src/components/components")) {
            return "components";
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
