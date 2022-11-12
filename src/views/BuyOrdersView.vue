<template>
  <h1>Your Buy Orders</h1>
  <div>
    <ResultsText :quantity="resultsQuantity" :countries="resultsCountries" />
    <BuyOrdersList :data="buyOrdersData" />
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import BuyOrdersList from '@/components/BuyOrdersList.vue'
import ResultsText from '@/components/ResultsText.vue'
import type { IBuyOrderApi } from '@/utils/types'

const resultsQuantity = computed(() => buyOrdersData.length)
const resultsCountries = ref(['United States', 'Canada', 'Mexico'])

const buyOrdersData: IBuyOrderApi[] = reactive([
  {
    id: '1',
    name: 'My first buy order',
    createdAt: '2022-10-25T21:09:34+0000',
    datasetIds: [1, 3, 4],
    countries: ['US', 'GB'],
    budget: 2500,
  },
  {
    id: '2',
    name: 'My shipping data',
    createdAt: '2022-09-29T22:09:34+0000',
    datasetIds: [2, 3],
    countries: ['US'],
    budget: 1250,
  },
  {
    id: '3',
    name: 'Ocean weather order',
    createdAt: '2022-09-26T21:09:34+0000',
    datasetIds: [4],
    countries: ['US', 'GB', 'CA'],
    budget: 100,
  },
])
</script>
