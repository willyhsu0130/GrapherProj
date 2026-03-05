import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {
    proxy: {
      // Any request starting with '/api' will be sent to Spring Boot
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false, // Use false if your local Spring setup isn't using HTTPS
        // rewrite: (path) => path.replace(/^\/api/, '') 
        // ^ Only use 'rewrite' if your Spring controllers DON'T start with /api
      },
    },
  },
})
