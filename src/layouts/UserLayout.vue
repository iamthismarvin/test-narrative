<template>
  <div class="bg-gray-100 min-h-screen">
    <header>
      <NavigationMenu />
    </header>
    <main>
      <div class="max-w-4xl mx-auto pb-12">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import NavigationMenu from '@/components/NavigationMenu.vue'
</script>
