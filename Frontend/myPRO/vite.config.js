import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
  '/api':'jokes-ctl0oljon-shaik-fazil-bashas-projects.vercel.app',
    },
  },
  plugins: [react()],
})
