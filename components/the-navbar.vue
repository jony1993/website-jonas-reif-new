<template>
  <nav class="pointer-events-auto flex flex-nowrap">
    <ul
      class="flex rounded-full bg-white bg-opacity-[3%] px-3 text-sm font-medium text-white shadow-lg ring-1 ring-white ring-opacity-10 backdrop-blur"
    >
      <li v-for="(item, index) in navItems" :key="index">
        <a
          class="relative block px-3 py-2 transition hover:text-white"
          :href="item.href"
        >
          {{ item.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
let navItems = [
  {
    name: "Home",
    href: "#home",
    current: true,
  },
  {
    name: "Work",
    href: "#work",
    current: false,
  },
  {
    name: "Contact",
    href: "#contact",
    current: false,
  },
];
</script>

<style scoped></style>
