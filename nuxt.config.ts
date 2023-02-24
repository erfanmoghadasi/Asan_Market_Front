// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    'nuxt-icons',
    'nuxt-swiper',
    '@nuxt/image-edge',
    'nuxt-headlessui'
  ],
  app: {
    head: {
      htmlAttrs: {
        dir: "rtl",
        lang: "fa",
      },
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  imports: {
    dirs: ["layouts/**", "pages/**", "components/**", "assets/**"],
  },
});
