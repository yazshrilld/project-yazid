import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import svgr from "@svgr/rollup";
import postcssConfig from "./postcss.config";
import postcss from "postcss";

export default defineConfig({
  plugins: [react(), eslint(), svgr()],
  css: {
    postcssConfig,
    postcss
  },
  server: {
    port: 5005,
    open: true, // Opens the browser automatically
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    outDir: "dist", // Specify the output directory
    minify: "terser", // Use Terser for minification
    sourcemap: true, // Generate sourcemaps for debugging
  },
  resolve: {
    alias: {
      "@": "/src", // This allows you to use '@' as an alias for the src directory
    },
  },
});
