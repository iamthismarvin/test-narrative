<template>
  <div class="bg-gray-100 min-h-screen">
    <header>
      <NavigationMenu />
    </header>
    <main>
      <div class="max-w-4xl mx-auto pb-48">
        <CountryFilter />
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import CountryFilter from '@/components/CountryFilter.vue'
import NavigationMenu from '@/components/NavigationMenu.vue'
</script>
