import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src',
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    'nuxt-icons',
  ],
  colorMode: {
    classSuffix: '',
  },
  runtimeConfig: {
    gqApi: "",
    gqWs: "",
    gqSecret: "",
  },
});
