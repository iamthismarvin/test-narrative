<template>
  <h1>Your Buy Orders</h1>
  <div v-if="isLoading">Loading buy orders...</div>
  <div v-else>
    <ResultsText :quantity="resultsQuantity" :countries="resultsCountries" />
    <BuyOrdersList v-if="buyOrdersData" :data="buyOrdersData" />
    <div v-else>No buy orders found.</div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref, type Ref } from 'vue'
import BuyOrdersList from '@/components/BuyOrdersList.vue'
import ResultsText from '@/components/ResultsText.vue'
import type { BuyOrdersResponse } from '@/utils/types'
import { getBuyOrders } from '@/services/buy-orders'

const isLoading = ref(false)
const buyOrdersData: Ref<BuyOrdersResponse> = ref([])
const resultsQuantity = computed(() => buyOrdersData.value?.length ?? 0)
const resultsCountries = ref(['United States', 'Canada', 'Mexico'])

onBeforeMount(async () => {
  isLoading.value = true
  buyOrdersData.value = await getBuyOrders()
  isLoading.value = false
})
</script>
