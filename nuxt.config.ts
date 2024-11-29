import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  server: {
    port: 3002
  }
})
