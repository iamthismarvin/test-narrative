<template>
  <p>
    Showing <strong>{{ props.quantity }}</strong> from
    <strong>{{ countriesFormatted }}</strong>
  </p>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import formatList from '@/utils/format-list'

const props = defineProps({
  quantity: { type: Number, required: true },
  countries: { type: Array as PropType<string[]>, required: true },
})

const countriesFormatted = computed(() => formatList(props.countries))
</script>
