<template>
  <header>
    <NavigationMenu />
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationMenu from '@/components/NavigationMenu.vue'
</script>

<style scoped></style>
