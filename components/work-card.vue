<template>
  <div class="relative text-white bg-[#120924] bg-opacity-[98%] backdrop-blur-xl border border-white/10 rounded-xl p-6 sm:p-12">
    <!--Background grid-->
    <div class="absolute inset-0 bg-[url(/grid.svg)]"></div>

    <!--Tags-->
    <div class="flex flex-wrap gap-2">
      <span
        v-for="(tag, index) in tags"
        :key="index"
        class="text-xs font-medium text-white/70 bg-white bg-opacity-[5%] rounded-full px-2.5 py-1.5"
      >
        {{ tag }}
      </span>
    </div>

    <!--Title-->
    <h3 class="text-lg md:text-3xl font-bold text-left text-white/90 mt-2">
      {{ title }}
    </h3>

    <!--Description-->
    <p class="text-sm text-left text-white/90 mt-4 text-light">
      {{ description }}
    </p>

    <!--Image-->
    <img
      v-if="image"
      :src="image"
      :alt="`${title} image`"
      class="mt-4 rounded"
      />
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
  tags: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped></style>
