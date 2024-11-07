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
        target: 'https://api.medicaments-dz.com',
        changeOrigin: true,
        // target: 'http://213.199.63.26:9200',
        // rewrite: (path) => path.replace(/^\/pharma\/_search/, '')
      }
    }
  }
})