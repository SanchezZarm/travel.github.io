export default {
  css: ['~/assets/css/main.css'],
  
  app: {
    head: {
      title: 'TravelPulse - Поиск выгодных путешествий',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  
  ssr: true,
  
  nitro: {
    preset: 'github_pages',
    output: {
      publicDir: 'dist'
    }
  }
}