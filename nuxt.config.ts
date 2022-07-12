import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/image-edge'],
  image: {
    domains: ['avatars0.githubusercontent.com', 'images.unsplash.com'],
  },
});
