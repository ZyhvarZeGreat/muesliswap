import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  '/api': {
    target: 'https://api.muesliswap.com',
    changeOrigin: true,
    secure: false,
    rewrite: path => path.replace(/^\/api/, '')
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
