<template>
  <div>
    <header>
      <NavigationMenu />
    </header>
    <main class="max-w-4xl mx-auto">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import NavigationMenu from '@/components/NavigationMenu.vue'
</script>
