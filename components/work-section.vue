<template>
  <div ref="root" class="py-14 mx-auto text-center">
    <!--Title-->
    <h2 class="heading text-3xl md:text-6xl font-bold tracking-tight mt-10">
      {{ title }}
    </h2>

    <!--Subtitle-->
    <div
      class="mt-8 md:text-lg font-light text-white/70 leading-loose max-w-2xl mx-auto"
      v-html="subtitle"
    />

    <!--Work Items-->
    <div class="container max-w-3xl mx-auto grid grid-columns-1 auto-rows-max gap-y-16 mt-10">
      <work-card
        v-for="(project, index) in projects"
        :key="index"
        class="sticky top-[96px] duration-300"
        :style="{ top: `${96 + index * 4}px` }"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :url="project.url"
        :tags="project.tags"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    title: "Upspeak Webapp",
    description:
      "Developed the webapp of Upspeak. The #1 audio course app for personal & professional development.",
    image: "/upspeak_web_1.png",
    url: "https://www.upspeak.de",
    tags: [
      "vue.js",
      "nuxt.js (2 & 3)",
      "typescript",
      "tailwind",
      "storyblok",
      "storybook",
      "pinia",
      "github-actions",
      "playwright",
      "segment",
      "vercel",
      "github",
      "composition-api",
    ],
  },
  {
    title: "Upspeak Backend",
    description:
      "Developed the backend of Upspeak with ruby on rails, aws, heroku, postgresql and redis.",
    image: "",
    url: "https://www.upspeak.de",
    tags: [
      "ruby on rails",
      "aws",
      "heroku",
      "github-actions",
      "postgresql",
      "redis",
      "openapi",
      "resque",
      "rspec",
      "stripe",
      "rest api",
      "docker",
    ],
  },
  {
    title: "Mercedes Vision Project",
    description:
      "Developed a vision prototype with a small team with nuxt.js, tailwindcss and more.",
    image: "/mercedes.jpg",
    tags: [
      "typescript",
      "vue.js",
      "nuxt.js",
      "tailwind",
      "vue.js",
      "playwright",
      "strapi",
    ],
  },
  {
    title: "Lokobox Webapp",
    description:
      "Webapp for Media Companies. Project developed as one of the winners of the Open Innovation Challenge.",
    image: "/lokobox_1.png",
    url: "https://www.lokobox.de",
    tags: ["nuxt.js", "tailwind", "firebase", "vercel", "github"],
  },
  {
    title: "Meat & Eat Android App",
    description:
      "Project developed as part of my Master Thesis. The Meat & Eat App is a Native Java Android Application focused on UX best practices.",
    image: "",
    url: "https://github.com/jony1993/app-android-meet-and-eat",
    tags: ["android", "java", "mvvm", "jetpack", "firebase", "github"],
  },
  {
    title: "Einhell.de",
    description:
      "Further developed and maintained the international Einhell Website as Junior IT-Consultant. As part of the work, business processes were analysed, digitalised and integrated.",
    image: "",
    url: "www.einhell.de",
    tags: ["typo3", "JavaScript", "HTML", "CSS", "jQuery", "Bootstrap"],
  },
  {
    title: "Other Projects",
    description:
      "Developed several other websites and webapps (e.g. isc-gmbh.info, alicabuechel.com, zmsa.co.za, ... )",
    image: "",
    tags: ["nuxt.js", "vue.js", "wordpress"],
  },
];

const title = "Work";
const subtitle =
  "From UI/UX Design to Nuxt.js, Vue.js, Ruby on Rails, and Android. Checkout a selection of my latest web and mobile development projects.";
</script>

<style scoped>
.heading {
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0.6) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
