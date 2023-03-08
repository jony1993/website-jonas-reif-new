<template>
  <div class="font-default bg-black h-full">
    <!--Fixed black Background with primary content background-->
    <div class="fixed inset-0 flex justify-center sm:px-8 bg-black">
      <div class="flex w-full max-w-7xl lg:px-8">
        <div class="w-full bg-primary border-x border-white/5"></div>
      </div>
    </div>

    <!--Content-->
    <div class="relative">
      <!--Fixed Navbar-->
      <div class="top-10 left-0 right-0 sticky w-auto z-50">
        <the-navbar class="flex flex-1 justify-center" />
      </div>

      <!--Header-->
      <header-component
        id="home"
        class="container max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto"
      />

      <nuxt-img
        src="/arrow_down.svg"
        class="animate-bounce duration-2000 mx-auto"
      />

      <!--Work Section-->
      <section id="work" class="container mx-auto">
        <work-section />
      </section>

      <nuxt-img
        src="/arrow_down.svg"
        class="animate-bounce duration-2000 mx-auto"
      />

      <!--Contact Section-->
      <section id="contact" class="container mx-auto pb-40">
        <contact-section />
      </section>
    </div>
  </div>
</template>

<style scoped>
html {
  background: black;
  scroll-behavior: smooth;
}
</style>
