<template>
  <div class="flex flex-nowrap items-center space-x-2 justify-between">
    <!--Profile Image-->
    <img
      src="/logo.png"
      alt="Profile Image Jonas Reif"
      class="rounded-full bg-primary/10 object-cover h-12 w-12"
    />
    <!--Navbar-->
    <div>
      <nav class="pointer-events-auto flex flex-nowrap">
        <ul
          class="flex rounded-full bg-white bg-opacity-[3%] px-3 text-sm font-medium text-primary dark:text-white shadow-lg bg-white/90 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
        >
          <li v-for="(item, index) in navItems" :key="index">
            <div
              class="relative block px-3 py-2 transition dark:hover:text-white hover:text-primary cursor-pointer"
              :class="
                item.current.value
                  ? 'text-teal-500'
                  : 'text-primary dark:text-white'
              "
              @click="scrollToSection(item.id)"
            >
              {{ item.name }}
              <span
                v-if="item.current.value"
                class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary/0 via-teal-500 to-primary/0"
              />
            </div>
          </li>
        </ul>
      </nav>
    </div>
    <!--Theme Switcher-->
    <theme-switcher />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

let navItems = [
  {
    name: "Home",
    href: "#home",
    id: "home",
    current: ref(true),
  },
  {
    name: "Work",
    href: "#work",
    id: "work",
    current: ref(false),
  },
  {
    name: "Contact",
    href: "#contact",
    id: "contact",
    current: ref(false),
  },
];

// Iterate over each nav item in navItems array and check if it's visible
// If it is, set it to current and set all others to false

onMounted(() => {
  navItems.forEach((element) => {
    const section = document.getElementById(element.id);
    useIntersectionObserver(section, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        element.current.value = true;
        navItems.forEach((item) => {
          if (item.id !== element.id) {
            item.current.value = false;
          }
        });
      }
    });
  });
});

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
</script>
