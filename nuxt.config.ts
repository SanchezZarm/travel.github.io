export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  
  app: {
    baseURL: '/travel.github.io/',
    
    head: {
      title: 'TravelPulse - Поиск выгодных путешествий',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/travel.github.io/images/icon.png' }
      ]
    }
  },
  
  ssr: true,
  
  nitro: {
    preset: 'github_pages',
    output: {
      publicDir: 'dist'
    }
  },

  build: {
    extractCSS: true
  }
} as any)