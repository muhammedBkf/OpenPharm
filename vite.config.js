import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    proxy: {
      '/pharma': {
        target: 'http://213.199.63.26:9200',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pharma/, '')
      }
    }
  }
})