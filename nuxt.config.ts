import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/strapi',
    '@nuxt/ui'
  ],
  strapi: {
    // Options
  },
  devtools: { enabled: true }
})
