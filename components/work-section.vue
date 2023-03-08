<template>
  <div class="py-14 mx-auto text-center">
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
    <div class="max-w-3xl mx-auto grid grid-columns-1 gap-8 mt-10">
      <work-card
        class="sticky top-24"
        title="Upspeak Website"
        description="Upspeak Web-Development with nuxt.js, tailwindcss and more. The Upspeak Webapp is the web pedant for the Upspeak IOS and Android App."
        image="/upspeak_web_1.png"
        :tags="['vue.js', 'nuxt.js', 'tailwind']"
      />

      <work-card
        class="sticky top-24"
        title="Upspeak Backend"
        description="Upspeak Web-Development with nuxt.js, tailwindcss and more. The Upspeak Webapp is the web pedant for the Upspeak IOS and Android App."
        image=""
        :tags="['ruby on rails', 'aws', 'heroku', 'postgresql', 'redis']"
      />

      <work-card
        class="sticky top-24"
        title="Mercedes Vision Project"
        description="Developed a prototype with a small team with nuxt.js, tailwindcss and more."
        image=""
        :tags="['typescript', 'nuxt.js', 'tailwind', 'vue.js']"
      />

      <work-card
        class="sticky top-24"
        title="Lokobox Webapp"
        description="Lokobox is a Webapp for Media Companies. Lokobox brings order to the flood of information with an interactive map: The researched stories and information of the local media on a specific topic can be displayed in only one graphic which can be embedded on the companies website or app."
        image="/lokobox_1.png"
        :tags="['nuxt.js', 'tailwind', 'firebase', 'vercel']"
      />

      <work-card
        class="sticky top-24"
        title="Meat & Eat Android App"
        description=""
        image=""
        :tags="['android', 'mvvm', 'firebase', 'java']"
      />

      <work-card
        class="sticky top-24"
        title="HeyTestMe Webapp"
        description=""
        image=""
        :tags="['java', 'spring boot']"
      />

      <work-card
        class="sticky top-24"
        title="Einhell.de"
        description=""
        image=""
        :tags="['Typo3', 'JavaScript', 'HTML', 'CSS', 'jQuery', 'Bootstrap']"
      />

      <work-card
        class="sticky top-24"
        title="Online Shop iSC GmbH"
        description=""
        image=""
        :tags="[
          'Magento',
          'JavaScript',
          'PHP',
          'MySQL',
          'HTML',
          'CSS',
          'jQuery',
          'Bootstrap',
        ]"
      />

      <work-card
        class="sticky top-24"
        title="Smaller Projects"
        description=""
        image=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
let title = "Work";
let subtitle =
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
