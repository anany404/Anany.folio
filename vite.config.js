import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Anany.folio/',  // GitHub repo name
  plugins: [react()]
});