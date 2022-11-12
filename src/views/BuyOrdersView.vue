<template>
  <h1>Your Buy Orders</h1>
  <div v-if="isLoading">Loading buy orders...</div>
  <div v-else>
    <ResultsText
      :quantity="resultsQuantity"
      :countries="selectedCountries"
      class="mb-2"
    />
    <BuyOrdersList v-if="buyOrdersData" :data="buyOrdersDataFiltered" />
    <div v-else>No buy orders found.</div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref, type ComputedRef, type Ref } from 'vue'
import { storeToRefs } from 'pinia'
import BuyOrdersList from '@/components/BuyOrdersList.vue'
import ResultsText from '@/components/ResultsText.vue'
import type { IBuyOrder } from '@/utils/types'
import { getBuyOrders } from '@/services/buy-orders'
import { useCountriesStore } from '@/stores/countries'

const isLoading = ref(false)
const buyOrdersData: Ref<IBuyOrder[]> = ref([])
const buyOrdersDataFiltered: ComputedRef<IBuyOrder[]> = computed(() =>
  buyOrdersData.value.filter((c) =>
    c.countries.some((i) => selectedCountries.value.includes(i)),
  ),
)
const resultsQuantity = computed(() => buyOrdersDataFiltered.value.length)

const countriesStore = useCountriesStore()
const { selectedCountries } = storeToRefs(countriesStore)

onBeforeMount(async () => {
  isLoading.value = true
  const data = await getBuyOrders()
  if (data) buyOrdersData.value = data
  isLoading.value = false
})
</script>
