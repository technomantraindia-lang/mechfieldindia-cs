/**
 * Vite build configuration.
 * - React plugin for JSX
 * - Two HTML entry points: homepage + products page
 */
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),       // Homepage
        about: resolve(__dirname, "pages/about.html"),  // About page
        products: resolve(__dirname, "pages/prodcut.html"),  // Products page
        certificates: resolve(__dirname, "pages/certificates.html"),  // Certificates page
        clients: resolve(__dirname, "pages/clients.html"),  // Clients page
        contact: resolve(__dirname, "pages/contact.html")  // Contact page
      }
    }
  }
});
