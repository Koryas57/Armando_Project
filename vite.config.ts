import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/Armando_Project/", // <-- ajoute cette ligne
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "src/styles/variables" as *;
          @use "src/styles/mixins" as *;
        `,
      },
    },
  },
});
