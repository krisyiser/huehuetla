import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path" // ⬅️ AÑADIDO

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ⬅️ AÑADIDO
    },
  },
  optimizeDeps: {
    exclude: ["bippy/dist/jsx-dev-runtime", "bippy/dist/jsx-runtime"],
  },
})
