<template>
  <div
    class="h-full group relative text-primary dark:text-white bg-zinc-100 dark:bg-zinc-800 border border-primary/10 dark:border-white/10 rounded-xl p-4 sm:p-12"
  >
    <!--Title-->
    <h3
      class="text-xl md:text-3xl font-bold text-left text-primary dark:text-white/90"
    >
      {{ title }}
    </h3>

    <!--Description-->
    <p
      class="text-sm text-left text-primary dark:text-white/90 mt-4 text-light"
    >
      {{ description }}
    </p>

    <!--Tags-->
    <div class="flex flex-wrap gap-2 mt-4">
      <span
        v-for="(tag, index) in tags"
        :key="index"
        class="text-xs font-medium text-white dark:text-white bg-primary/70 dark:bg-white dark:bg-opacity-[5%] rounded-full px-2.5 py-1.5"
      >
        {{ tag }}
      </span>
    </div>

    <!--Image-->
    <img
      v-if="image"
      :src="image"
      :alt="`${title} image`"
      class="mt-4 rounded-xl border border-zinc-100 dark:border-white/10"
    />

    <div
      v-if="!image"
      class="w-full aspect-video bg-zinc-100 dark:bg-black flex items-center justify-center mt-4 rounded-xl border border-zinc-100 dark:border-white/10"
    >
      <p class="text-2xl text-primary dark:text-white">{{ title }}</p>
    </div>

    <!--Link-->
    <a
      v-if="url"
      :href="url"
      target="_blank"
      class="absolute right-1.5 sm:right-4 top-1.5 rounded-md text-white dark:text-primary bg-primary/70 dark:bg-white sm:bg-none px-1 py-0.5 sm:top-4 font-light text-xs block text-right hover:underline hover:duration-300"
    >
      Visit Project →
    </a>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    default: null,
  },
  tags: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped></style>
