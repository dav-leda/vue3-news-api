import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig(({ command }) => {

  if (command === 'serve') {

    return {
      // config para development
      base: '/',
      plugins: [vue()],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      } 
    }

  } else if (command === 'build') {

    return {
      // config para production
      // Al usar GH Pages, base debe ser el nombre del repo
      base: '/vue3-news-api/',
      build: { outDir: './docs' },
      plugins: [vue()],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      }
    }
  }
})

