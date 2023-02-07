// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icons",
    "nuxt-icon",
    'nuxt-swiper',
    '@nuxt/image-edge',
  ],
  app: {
    head: {
      htmlAttrs: {
        dir: "rtl",
        lang: "fa",
      },
    },
  },
  imports: {
    dirs: ["layouts/**", "pages/**", "components/**", "assets/**", 'static/**'],
  },
});
