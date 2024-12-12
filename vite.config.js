import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/infra-industry-partner-hackathon/', // Set to your repository name
  plugins: [react()],
})
