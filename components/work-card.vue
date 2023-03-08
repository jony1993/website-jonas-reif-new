<template>
  <div
    class="h-full group relative text-white bg-[#120924] bg-opacity-[98%] backdrop-blur-xl border border-white/10 rounded-xl p-6 sm:p-12"
  >
    <!--Title-->
    <h3 class="text-lg md:text-3xl font-bold text-left text-white/90">
      {{ title }}
    </h3>

    <!--Description-->
    <p class="text-sm text-left text-white/90 mt-4 text-light">
      {{ description }}
    </p>

    <!--Tags-->
    <div class="flex flex-wrap gap-2 mt-4">
      <span
        v-for="(tag, index) in tags"
        :key="index"
        class="text-xs font-medium text-white/70 bg-white bg-opacity-[5%] rounded-full px-2.5 py-1.5"
      >
        {{ tag }}
      </span>
    </div>

    <!--Image-->
    <img
      v-if="image"
      :src="image"
      :alt="`${title} image`"
      class="mt-4 rounded-xl border border-white/10"
    />

    <div
      v-if="!image"
      class="w-full aspect-video bg-black flex items-center justify-center mt-4 rounded-xl border border-white/10"
    >
      <p class="text-2xl text-white">{{ title }}</p>
    </div>

    <!--Link-->
    <a
      v-if="url"
      :href="url"
      target="_blank"
      class="absolute right-1.5 sm:right-4 top-1.5 rounded-md bg-white/5 sm:bg-none px-1 py-0.5 sm:top-4 font-light text-xs block text-right hover:underline hover:duration-300 text-white/60"
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
