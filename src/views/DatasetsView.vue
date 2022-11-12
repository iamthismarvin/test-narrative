<template>
  <h1>Datasets</h1>
  <div v-if="isLoading">Loading datasets...</div>
  <div v-else>
    <ResultsText :quantity="resultsQuantity" :countries="resultsCountries" />
    <ul v-if="datasets" class="grid grid-cols-2 gap-4">
      <li v-for="dataset in datasets" :key="dataset.name">
        <DatasetItem :data="dataset" />
      </li>
    </ul>
    <div v-else>No datasets found.</div>
  </div>
</template>
<script setup lang="ts">
import { computed, onBeforeMount, ref, type Ref } from 'vue'
import DatasetItem from '@/components/DatasetItem.vue'
import ResultsText from '@/components/ResultsText.vue'
import type { DatasetsResponse } from '@/utils/types'
import { getDatasets } from '@/services/datasets'

const isLoading = ref(false)
const datasets: Ref<DatasetsResponse> = ref([])
const resultsCountries = ref(['United States', 'Canada'])
const resultsQuantity = computed(() => datasets.value?.length ?? 0)

onBeforeMount(async () => {
  isLoading.value = true
  datasets.value = await getDatasets()
  isLoading.value = false
})
</script>
