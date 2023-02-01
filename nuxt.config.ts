// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", '@formkit/nuxt', 'nuxt-icons'],
  app: {
    head: {
      htmlAttrs : {
        dir : 'rtl',
        lang: 'fa'
      }
    }
  },
  imports: {
    dirs: [
      'layouts/**',
      'pages/**',
      'components/**',
    ]
  },
//   css: [
//     "~/layouts/global.css",
// ],
});
