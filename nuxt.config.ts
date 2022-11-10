// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'vite-plugin-vue-type-imports/nuxt' // // See https://github.com/vuejs/core/issues/4294 for why I use this plugin
  ],
  css: [
    '@/assets/css/fonts.css'
  ]
})
