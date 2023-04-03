<template>
  <div class="container py-10 md:py-14 mx-auto text-center">
    <!--Title-->
    <h2
      class="text-primary dark:text-white text-3xl md:text-6xl font-bold tracking-tight"
    >
      {{ title }}
    </h2>

    <!--Subtitle-->
    <div
      class="mt-8 md:text-lg font-light text-primary dark:text-white/70 leading-loose"
      v-html="subtitle"
    />

    <!--Contact Ways-->
    <div class="grid grid-cols-1 max-w-2xl mx-auto gap-3 sm:gap-6 mt-10">
      <a
        v-for="(contact, index) in contactWays"
        :key="index"
        class="border border-primary dark:border-white/20 rounded-xl p-4 hover:scale-105 cursor-pointer hover:duration-300 text-primary dark:text-white text-xl"
        :href="contact.link"
      >
        {{ contact.name }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
let title = "Contact";
let subtitle =
  "Wanna get in touch or talk about a project? Feel free to contact me or connect via:";

let contactWays = [
  {
    name: "reif.jonas@gmx.de",
    link: "mailto:reif.jonas@gmx.de",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jonas-reif/",
  },
  {
    name: "GitHub",
    link: "https://github.com/jony1993",
  },
];
</script>
