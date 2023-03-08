<template>
  <div class="font-default bg-black h-full">
    <!--Fixed black Background with primary content background-->
    <div class="fixed inset-0 flex justify-center sm:px-8 bg-black">
      <div class="flex w-full max-w-7xl lg:px-8">
        <div class="w-full bg-primary border-x border-white/10"></div>
      </div>
    </div>

    <!--Content-->
    <div class="relative">
      <!--Fixed Navbar-->
      <div class="top-10 left-0 right-0 sticky w-auto">
        <the-navbar class="flex flex-1 justify-center" />
      </div>

      <!--Header-->
      <header-component
        class="container px-4 sm:px-8 max-w-xl md:max-w-2xl xl:max-w-5xl mx-auto"
        :style="{ backgroundImage: 'url(/star_background.png)' }"
      />

      <!--Work Section-->
      <section class="container mx-auto">
        <work-section />
      </section>

      <!--Contact Section-->
      <section class="container mx-auto">
        <contact-section />
      </section>
    </div>
  </div>
</template>

<style scoped>
html {
  background: black;
}
</style>
