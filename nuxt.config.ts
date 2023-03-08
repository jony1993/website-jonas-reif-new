// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge", "nuxt-font-loader"],
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
