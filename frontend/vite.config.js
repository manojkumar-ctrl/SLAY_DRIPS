import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(), // ✅ Tailwind plugin for Vite 4.1+
  ],
  server: {
    port: 5173, // ✅ Correctly placed as a top-level config
  },
})
