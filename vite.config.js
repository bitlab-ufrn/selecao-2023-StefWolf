import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['piii'],
      output: {
        globals: {
          piii: 'Piii',
        }
      }
    }
  },
  plugins: [react()],
})
