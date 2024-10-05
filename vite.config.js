import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
export default defineConfig({
  plugins: [react(), wasm(), topLevelAwait()],
  build: {
    target: 'esnext',
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
    },
  },
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
