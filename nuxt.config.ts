// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        {
          src: '/usecsv.js',
          type: 'module',
        }
      ],
    },
  }
})
