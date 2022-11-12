<template>
  <h1>Your Buy Orders</h1>
  <div v-if="isLoading">Loading buy orders...</div>
  <div v-else>
    <ResultsText
      :quantity="resultsQuantity"
      :countries="resultsCountries"
      class="mb-2"
    />
    <BuyOrdersList v-if="buyOrdersData" :data="buyOrdersData" />
    <div v-else>No buy orders found.</div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref, type Ref } from 'vue'
import BuyOrdersList from '@/components/BuyOrdersList.vue'
import ResultsText from '@/components/ResultsText.vue'
import type { IBuyOrder } from '@/utils/types'
import { getBuyOrders } from '@/services/buy-orders'

const isLoading = ref(false)
const buyOrdersData: Ref<IBuyOrder[]> = ref([])
const resultsQuantity = computed(() => buyOrdersData.value.length)
const resultsCountries = ref(['United States', 'Canada', 'Mexico'])

onBeforeMount(async () => {
  isLoading.value = true
  const data = await getBuyOrders()
  if (data) buyOrdersData.value = data
  isLoading.value = false
})
</script>
