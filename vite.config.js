import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: process.env.VITE_BASE_PATH || "/",
  // server: {
  //   host: true,      // binds to 0.0.0.0 (required for Docker)
  //   port: 5173,      // match the EXPOSE in Dockerfile
  //   watch: {
  //     usePolling: true, // needed for some Docker volume setups to detect file changes
  //   },
  // },
})

