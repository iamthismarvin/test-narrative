<template>
  <div class="pb-36">
    <h1>Datasets</h1>
    <div v-if="isLoading">Loading datasets...</div>
    <div v-else>
      <ResultsText
        :quantity="resultsQuantity"
        :countries="selectedCountries"
        class="mb-2"
      />
      <ul v-if="datasets" class="grid grid-cols-2 gap-4">
        <li v-for="dataset in datasets" :key="dataset.name">
          <DatasetItem :data="dataset" />
        </li>
      </ul>
      <div v-else>No datasets found.</div>
    </div>
  </div>
  <CountryFilter />
</template>
<script setup lang="ts">
import { computed, onBeforeMount, ref, type Ref } from 'vue'
import CountryFilter from '@/components/CountryFilter.vue'
import DatasetItem from '@/components/DatasetItem.vue'
import ResultsText from '@/components/ResultsText.vue'
import type { IDataset } from '@/utils/types'
import { getDatasets } from '@/services/datasets'
import { useCountriesStore } from '@/stores/countries'

const isLoading = ref(false)
const datasets: Ref<IDataset[]> = ref([])
const resultsQuantity = computed(() => datasets.value.length)

const { selectedCountries } = useCountriesStore()

onBeforeMount(async () => {
  isLoading.value = true
  const data = await getDatasets()
  if (data) datasets.value = data
  isLoading.value = false
})
</script>
