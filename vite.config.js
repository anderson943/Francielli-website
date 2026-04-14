import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:                resolve(__dirname, 'index.html'),
        about:               resolve(__dirname, 'about.html'),
        blog:                resolve(__dirname, 'blog.html'),
        engagements:         resolve(__dirname, 'engagements.html'),
        'governos-nacoes':   resolve(__dirname, 'governos-nacoes.html'),
        'industria-pesquisa':resolve(__dirname, 'industria-pesquisa.html'),
        'investidores-vc':   resolve(__dirname, 'investidores-vc.html'),
        inquiry:             resolve(__dirname, 'inquiry.html'),
        schedule:            resolve(__dirname, 'schedule.html'),
      }
    }
  }
})
