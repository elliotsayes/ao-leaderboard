import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { webfontDownload } from 'vite-plugin-webfont-dl'
import { imagetools } from 'vite-imagetools'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    webfontDownload([
      "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@0,400;0,500;0,600&display=swap",
    ]),
    imagetools(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
