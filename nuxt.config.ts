// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          type: "image/png",
          href: "/favicons//apple-touch-icon.png",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicons/favicon-32x32.png",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicons/favicon-16x16.png",
        },
      ],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
    "nuxt-font-loader",
    "@vueuse/nuxt",
  ],
  fontLoader: {
    external: [
      {
        src: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Roboto:wght@900&display=swap",
        family: "Inter",
        class: "font-inter",
      },
    ],
  },
});
