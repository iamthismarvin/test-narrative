<template>
  <ul>
    <li
      v-for="{ id, name, date, records } in buyOrdersFormatted"
      :key="name"
      class="mb-2"
    >
      <RouterLink :to="{ name: 'buy-order', params: { id } }">
        <BuyOrdersListItem :name="name" :date="date" :records="records" />
      </RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed, type ComputedRef, type PropType } from 'vue'
import BuyOrdersListItem from '@/components/BuyOrdersListItem.vue'
import type { IBuyOrder, IBuyOrderListItem } from '@/utils/types'

const props = defineProps({
  data: { type: Array as PropType<IBuyOrder[]>, required: true },
})

const buyOrdersFormatted: ComputedRef<IBuyOrderListItem[]> = computed(() =>
  props.data.map((buyOrder: IBuyOrder) => ({
    id: buyOrder.id,
    name: buyOrder.name,
    date: buyOrder.createdAt,
    records: buyOrder.budget,
  })),
)
</script>
