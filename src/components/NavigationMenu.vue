<template>
  <nav class="bg-gray-800 text-white p-5">
    <ul class="flex">
      <li v-for="{ label, path } in NAVIGATION_LINKS" :key="label" class="mr-8">
        <RouterLink :to="path" active-class="font-bold">{{ label }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface INavigationLink {
  label: string
  path: string
}

const NAVIGATION_LINKS: INavigationLink[] = [
  { label: 'Buy Orders', path: '/buy-orders' },
  { label: 'Datasets', path: '/datasets' },
]
</script>

<style scoped></style>
