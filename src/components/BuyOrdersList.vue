<template>
  <ul>
    <li
      v-for="{ name, date, records } in buyOrdersFormatted"
      :key="name"
      class="mb-2"
    >
      <BuyOrdersListItem :name="name" :date="date" :records="records" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed, type ComputedRef } from 'vue'
import BuyOrdersListItem from '@/components/BuyOrdersListItem.vue'
import type { IBuyOrderApi, IBuyOrderListItem } from '@/utils/types'

const props = defineProps({
  data: { type: Object, required: true },
})

const buyOrdersFormatted: ComputedRef<IBuyOrderListItem[]> = computed(() =>
  props.data.map((buyOrder: IBuyOrderApi) => ({
    name: buyOrder.name,
    date: buyOrder.createdAt,
    records: buyOrder.budget,
  })),
)
</script>
