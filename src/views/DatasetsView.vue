<template>
  <h1>Datasets</h1>
  <ResultsText :quantity="resultsQuantity" :countries="resultsCountries" />
  <ul class="grid grid-cols-2 gap-4">
    <li v-for="dataset in datasets" :key="dataset.name">
      <DatasetItem :data="dataset" />
    </li>
  </ul>
</template>
<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import DatasetItem from '@/components/DatasetItem.vue'
import ResultsText from '@/components/ResultsText.vue'
import type { IDatasetsApi } from '@/utils/types'

const resultsQuantity = computed(() => datasets.length)
const resultsCountries = ref(['United States', 'Canada'])

const datasets: IDatasetsApi[] = reactive([
  {
    id: 1,
    name: 'fishing',
    label: 'Fishing Zones',
    description:
      'Data about global fishing zones, including yields, historical trends and ocean life surveys.',
    thumbnailUrl: 'https://picsum.photos/id/1038/92/92',
    costPerRecord: 0.03,
  },
  {
    id: 2,
    name: 'shipping',
    label: 'Shipping Routes',
    description:
      'Metadata regarding global shipping routes. Contains data such as traffic volumne, operating restrictiona and mileage of routes.',
    thumbnailUrl: 'https://picsum.photos/id/1002/92/92',
    costPerRecord: 0.05,
  },
  {
    id: 3,
    name: 'ports',
    label: 'Ports of Entry',
    description: 'Detailed information about ports related to cargo shipping.',
    thumbnailUrl: 'https://picsum.photos/id/1026/92/92',
    costPerRecord: 0.02,
  },
  {
    id: 4,
    name: 'ocean',
    label: 'Ocean Measurements',
    description:
      'Detailed measurements of many ocean locations, including LAT/LON, temperature, humidity and precipitation.',
    thumbnailUrl: 'https://picsum.photos/id/1024/92/92',
    costPerRecord: 0.01,
  },
  {
    id: 5,
    name: 'weather',
    label: 'Weather and Climate',
    description: 'Historical averages and trends of oceanographic climate.',
    thumbnailUrl: 'https://picsum.photos/id/135/92/92',
    costPerRecord: 0.04,
  },
])
</script>
