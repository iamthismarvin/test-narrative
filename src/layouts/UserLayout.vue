<template>
  <div>
    <header>
      <NavigationMenu />
    </header>
    <main class="max-w-4xl mx-auto">
      <CountryFilter />
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import CountryFilter from '@/components/CountryFilter.vue'
import NavigationMenu from '@/components/NavigationMenu.vue'
</script>
