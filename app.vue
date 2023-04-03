<template>
  <div class="font-default dark:bg-black bg-zinc-50 h-full">
    <!--Fixed black Background with primary content background-->
    <div
      class="fixed inset-0 flex justify-center sm:px-8 dark:bg-black bg-zinc-50"
    >
      <div class="flex w-full max-w-7xl lg:px-8">
        <div
          class="w-full dark:bg-zinc-900 bg-white border-x dark:border-white/5 border-primary/5"
        ></div>
      </div>
    </div>

    <!--Content-->
    <div class="relative">
      <!--Fixed Navbar-->
      <div
        class="container mt-10 z-50 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto"
      >
        <the-navbar />
      </div>

      <!--Header-->
      <header-component
        id="home"
        class="container max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto mt-4"
      />

      <!--Animating arrow-->
      <arrow-down class="animate-bounce duration-2000 mx-auto text-primary" />

      <!--Work Section-->
      <section id="work" class="container mx-auto">
        <work-section />
      </section>

      <!--Animating arrow-->
      <arrow-down class="animate-bounce duration-2000 mx-auto text-primary" />

      <!--Contact Section-->
      <section id="contact" class="container mx-auto pb-40">
        <contact-section />
      </section>
    </div>
  </div>
</template>

<script setup>
const title = ref("Jonas Reif");
const description = ref(
  "I create digital products - design, code & things in between."
);
useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
// This will be reactive even you change title/description above
useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
  ],
});
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
