/**
 * Vite build configuration.
 * - React plugin for JSX
 * - Single React entry point; deploy rewrites serve clean routes.
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()]
});
