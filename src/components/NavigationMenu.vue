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

interface INavigationLinks {
  label: string
  path: string
}

const NAVIGATION_LINKS: INavigationLinks[] = [
  { label: 'Buy Orders', path: '/' },
  { label: 'Datasets', path: '/datasets' },
]
</script>

<style scoped></style>
