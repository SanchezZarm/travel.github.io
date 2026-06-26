import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  
  app: {
    head: {
      title: 'TravelPulse - Поиск выгодных путешествий',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/logo.png' }
      ]
    },
    baseURL: '/travel.github.io/'
  },
  
  ssr: true,
  
  nitro: {
    preset: 'github_pages',
    output: {
      publicDir: 'dist'
    }
  }
} as any)