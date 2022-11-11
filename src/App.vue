<template>
  <div>
    <component :is="route.meta.layout || 'div'">
      <RouterView />
    </component>
  </div>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'

const route = useRoute()
</script>
