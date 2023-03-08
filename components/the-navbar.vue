<template>
  <nav class="pointer-events-auto flex flex-nowrap">
    <ul
      class="flex rounded-full bg-white bg-opacity-[3%] px-3 text-sm font-medium text-white shadow-lg ring-1 ring-white ring-opacity-10 backdrop-blur"
    >
      <li v-for="(item, index) in navItems" :key="index">
        <div
          class="relative block px-3 py-2 transition hover:text-white cursor-pointer"
          @click="scrollToSection(item.id)"
        >
          {{ item.name }}
          <span
            v-if="item.current.value"
            class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary/0 via-white/40 to-teal-primary/0"
          />
        </div>
      </li>
    </ul>
  </nav>
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
