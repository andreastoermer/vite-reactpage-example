import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "react/jsx-runtime.js": "react/jsx-runtime",
      "react/jsx-dev-runtime.js": "react/jsx-dev-runtime"
    }
  }

})
