<template>
  <div ref="root" class="py-10 md:py-14 mx-auto text-center">
    <!--Title-->
    <h2
      class="text-primary dark:text-white text-3xl md:text-6xl font-bold tracking-tight"
    >
      {{ title }}
    </h2>

    <!--Subtitle-->
    <div
      class="mt-8 md:text-lg font-light text-primary dark:text-white/70 leading-loose max-w-2xl mx-auto"
      v-html="subtitle"
    />

    <div class="mt-2 max-w-3xl mx-auto">
      <div
        v-for="category in categories"
        :key="category.id"
        :class="
          selectedCategory.id === category.id
            ? 'bg-gray-100'
            : 'bg-white bg-opacity-[3%] text-white/50'
        "
        class="inline-block shadow-lg p-2 mr-2 mt-2 mb-2 br-2 rounded uppercase text-xs cursor-pointer hover:bg-white hover:text-gray-900"
        @click="selectCategory(category)"
      >
        {{ category.name }}
      </div>
    </div>

    <!--Filter indicator-->
    <p class="text-white/90 text-xs uppercase mt-4">
      Showing {{ filteredProjects.length }} projects
      <span v-if="selectedCategory.id !== 1"
        >filtered by {{ selectedCategory.name }}</span
      >
    </p>

    <!--Work items-->
    <div class="grid grid-cols-1 gap-8 max-w-3xl mx-auto mt-8">
      <work-card
        v-for="project in filteredProjects"
        :id="project.id"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :url="project.url"
        :tags="project.tags"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const selectedCategory = ref({
  id: 1,
  name: "show all",
});

const categories = [
  {
    id: 1,
    name: "show all",
  },
  {
    id: 5,
    name: "UX/UI Design",
    synonyms: ["ux", "ui", "design", "figma", "ux/ui"],
  },
  {
    id: 2,
    name: "front-end",
    synonyms: ["typescript", "javascript"],
  },
  {
    id: 3,
    name: "back-end",
    synonyms: ["Mongodb", "ruby on rails", "rails", "thymeleaf"],
  },
  {
    id: 4,
    name: "mobile",
    synonyms: ["android"],
  },
  {
    id: 7,
    name: "E-commerce",
    synonyms: ["magento", "ecommerce"],
  },
  {
    id: 6,
    name: "Android",
    synonyms: ["android"],
  },
  {
    id: 12,
    name: "nuxt.js",
    synonyms: ["nuxt", "nuxtjs", "nuxtjs (2 & 3)"],
  },
  {
    id: 13,
    name: "Rails",
    synonyms: ["ruby on rails"],
  },
  {
    id: 14,
    name: "Java",
    synonyms: ["java"],
  },
  {
    id: 8,
    name: "PostgreSQL",
    synonyms: ["postgresql"],
  },
  {
    id: 9,
    name: "MongoDB",
    synonyms: ["mongodb"],
  },
  {
    id: 10,
    name: "Firebase",
    synonyms: ["firebase"],
  },
  {
    id: 11,
    name: "CMS",
    synonyms: ["storyblok cms", "strapi cms", "cockpit cms", "typo3"],
  },
];

const projects = [
  {
    id: 0,
    title: "Upspeak Webapp",
    description:
      "Developed the webapp of Upspeak. The #1 audio course app for personal & professional development.",
    image: "/upspeak_web.png",
    url: "https://www.upspeak.de",
    tags: [
      "vuejs",
      "nuxtjs (2 & 3)",
      "typescript",
      "tailwind",
      "storyblok cms",
      "storybook",
      "pinia",
      "github-actions",
      "playwright",
      "segment",
      "vercel",
      "github",
      "composition-api",
      "ux",
      "figma",
      "ecommerce",
    ],
  },
  {
    id: 1,
    title: "Upspeak Backend",
    description:
      "Developed the backend of Upspeak with ruby on rails, aws, heroku, postgresql and redis.",
    image: "/upspeak_backend.png",
    url: "https://www.upspeak.de",
    tags: [
      "ruby on rails",
      "aws",
      "heroku",
      "github-actions",
      "PostgreSQL",
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
    id: 3,
    title: "Upspeak Android App",
    description: "Upspeak native Android App with Kotlin",
    image: "/upspeak_android.png",
    url: "https://play.google.com/store/apps/details?id=com.voctag.android&hl=de",
    tags: [
      "android",
      "java",
      "kotlin",
      "mvvm",
      "figma",
      "ux",
      "jetpack",
      "firebase",
      "github",
      "jwt",
      "rest api",
      "github actions",
    ],
    awards: [
      "Best of Apps 2019 Google Play Store",
      "Avg. 4.7 Star Rating Google Play Store (Jan. 2020)",
    ],
  },
  {
    id: 4,
    title: "Upspeak Mentor Web Dashboard",
    description:
      "Upspeak Client Dashboard where Mentors can manage their app channel.",
    url: "https://mentors.upspeak.de",
    tags: [
      "vuejs",
      "nuxtjs (2 & 3)",
      "typescript",
      "tailwind",
      "storyblok cms",
      "storybook",
      "pinia",
      "github-actions",
      "playwright",
      "segment",
      "vercel",
      "github",
      "composition-api",
      "ux",
      "figma",
    ],
  },
  {
    id: 5,
    title: "Mercedes Vision Project",
    description:
      "Developed a vision prototype with a small team with nuxt.js, tailwindcss and more.",
    image: "/mercedes.jpg",
    tags: [
      "typescript",
      "vuejs",
      "nuxtjs",
      "tailwind",
      "playwright",
      "strapi cms",
    ],
  },
  {
    id: 6,
    title: "Lokobox Webapp",
    description:
      "Webapp for Media Companies. Project developed as one of the winners of the Open Innovation Challenge.",
    image: "/lokobox_1.png",
    url: "https://www.lokobox.de",
    tags: [
      "nuxtjs",
      "tailwind",
      "firebase",
      "vercel",
      "github",
      "google maps apis",
    ],
    awards: ["Winner OPEN INNOVATION CHALLENGE by Media Lab Bayern"],
  },
  {
    id: 7,
    title: "Meet & Eat Android App",
    description:
      "Project developed as part of my Master Thesis. The Meet & Eat App is a Native Java Android Application focused on UX best practices.",
    image: "/meet.png",
    url: "https://github.com/jony1993/app-android-meet-and-eat",
    tags: [
      "android",
      "java",
      "mvvm",
      "jetpack",
      "firebase",
      "github",
      "ux",
      "jwt",
      "rest api",
      "google maps apis",
      "contact api",
    ],
  },
  {
    id: 8,
    title: "Webapp heytestme.com",
    description:
      "Project developed as freelancer. With heytestme.com users were able to make fun tests after connecting their facebook account. Project paused after privacy updates from Facebook after a few 1000 users.",
    tags: [
      "ux/ui",
      "java",
      "spring boot",
      "javascript",
      "thymeleaf",
      "gacebook graph api",
      "facebook authentication",
      "mongodb",
    ],
  },
  {
    id: 9,
    title: "Website zmsa.co.za",
    description:
      "Project developed as freelancer during my 3 month stay in Johannesburg (South Africa)",
    url: "https://www.zmsa.co.za",
    tags: [
      "ux/ui",
      "nuxtjs",
      "html",
      "sass",
      "cockpit cms",
      "javascript",
      "hetzner",
      "seo",
      "google analytics",
    ],
  },
  {
    id: 10,
    title: "Einhell.de",
    description:
      "Further developed and maintained the international Einhell Website as Junior IT-Consultant. As part of the work, business processes were analysed, digitalised and integrated.",
    image: "/einhell_uebersicht.png",
    url: "www.einhell.de",
    tags: ["typo3", "javascript", "html", "css", "jquery", "bootstrap"],
  },
  {
    id: 11,
    title: "iSC GmbH",
    description:
      "Further developed and maintained the Online Shop of iSC GmbH as Junior IT-Consultant. As part of the work, business processes were analysed, digitalised and integrated into the iSC Shop",
    image: "/isc_uebersicht.png",
    url: "https://www.isc-gmbh.info",
    tags: [
      "magento",
      "php",
      "html",
      "css",
      "sass",
      "javascript",
      "seo",
      "google tag manager",
      "google analytics",
    ],
  },
];

const title = "Work";
const subtitle =
  "From UI/UX Design to Nuxt.js, Vue.js, Ruby on Rails and Android. Check out a selection of my latest web and mobile development projects.";

const filteredProjects = computed(() => {
  if (selectedCategory.value.id === 1) {
    return projects;
  } else {
    return projects.filter((project) => {
      const tags = project.tags.concat(project.synonyms || []);
      return (
        tags.includes(selectedCategory.value.name) ||
        tags.some((tag) => selectedCategory.value.synonyms?.includes(tag))
      );
    });
  }
});

function selectCategory(category) {
  selectedCategory.value = category;
}
</script>
