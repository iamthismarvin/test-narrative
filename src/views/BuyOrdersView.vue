<template>
  <div class="pb-36">
    <h1>Your Buy Orders</h1>
    <div v-if="isLoading">Loading buy orders...</div>
    <div v-else>
      <div class="flex items-end justify-between mb-2">
        <ResultsText
          :quantity="resultsQuantity"
          :countries="selectedCountries"
        />
        <button @click="addBuyOrder" class="bg-green-500 mt-6 text-white">
          Add Buy Order
        </button>
      </div>
      <BuyOrdersList v-if="buyOrdersData" :data="buyOrdersDataFiltered" />
      <div v-else>No buy orders found.</div>
    </div>
  </div>
  <CountryFilter />
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref, type ComputedRef, type Ref } from 'vue'
import { storeToRefs } from 'pinia'
import BuyOrdersList from '@/components/BuyOrdersList.vue'
import CountryFilter from '@/components/CountryFilter.vue'
import ResultsText from '@/components/ResultsText.vue'
import type { IBuyOrder } from '@/utils/types'
import { getBuyOrders } from '@/services/buy-orders'
import { useCountriesStore } from '@/stores/countries'
import router from '@/router'

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
const addBuyOrder = () => router.push('/buy-orders/new')

onBeforeMount(async () => {
  isLoading.value = true
  const data = await getBuyOrders()
  if (data) buyOrdersData.value = data
  isLoading.value = false
})
</script>
