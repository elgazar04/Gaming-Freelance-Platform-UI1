import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Gaming-Freelance-Platform-UI1', // 👈 ADD THIS LINE (very important)
  server: {
    port: 3000,
    open: true
  }
})
