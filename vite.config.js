import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Gaming-Freelance-Platform-UI1/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
