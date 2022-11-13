import { ref, type Ref } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { getDatasets } from '@/services/datasets'
import type { IDataset } from '@/utils/types'
import { useCountriesStore } from './countries'

export const useDatasetsStore = defineStore('datasets', () => {
  const countriesStore = useCountriesStore()
  const { countriesRecordCount } = storeToRefs(countriesStore)

  const availableDatasets: Ref<IDataset[]> = ref([])
  const isLoadingDatasets = ref(false)

  const updateDatasets = async () => {
    isLoadingDatasets.value = true
    const datasets = await getDatasets()
    if (datasets) availableDatasets.value = datasets
    isLoadingDatasets.value = false
  }
  const getDatasetRecordCount = (datasetId: number) => {
    let records = 0
    countriesRecordCount.value.forEach((country) => {
      const c = country?.find((dataset) => dataset.datasetId === datasetId)
      if (c?.recordCount) records += c?.recordCount
    })
    return records
  }

  return {
    availableDatasets,
    isLoadingDatasets,
    getDatasetRecordCount,
    updateDatasets,
  }
})
