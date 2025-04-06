import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  tailwindcss()],
  eslint:{
    ignoreDuringBuilds: true,
  },
  build: {
    outDir: 'build',  // ou 'dist', dependendo do seu setup
  },
})
