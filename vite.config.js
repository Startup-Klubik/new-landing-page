import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/new-landing-page/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        specy: resolve(__dirname, 'specy.html'),
      },
    },
  },
})
