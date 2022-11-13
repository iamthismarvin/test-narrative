<template>
  <div>
    <h1>Buy Order Details</h1>
    <p v-if="isLoading">Loading buy order details...</p>
    <div v-else class="bg-white p-5 rounded-xl shadow">
      <div v-if="buyOrderDetailsData">
        <section class="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h5>Order Name:</h5>
            <p>{{ buyOrderDetailsData.name }}</p>
          </div>
          <div>
            <h5>Date Created:</h5>
            <p>{{ buyOrderDetailsData.createdAt }}</p>
          </div>
          <div>
            <h5>Order Budget:</h5>
            <p>{{ buyOrderDetailsData.budget }}</p>
          </div>
          <div>
            <h5>Forecasted Records:</h5>
            <p>EXAMPLE</p>
          </div>
        </section>
        <section class="mb-6">
          <h5 class="mb-2">Included Countries:</h5>
          <button
            v-for="{ countryCode, name } in availableCountries"
            :key="countryCode"
            class="mr-4"
            :class="[
              buyOrderDetailsData.countries.includes(countryCode)
                ? 'bg-blue-500 text-white '
                : 'bg-gray-200',
            ]"
          >
            {{ name }}
          </button>
        </section>
        <section class="mb-6">
          <h5 class="mb-4">Included Datasets:</h5>
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="{
                id,
                name,
                label,
                thumbnailUrl,
                costPerRecord,
              } in availableDatasets"
              :key="name"
              class="rounded-xl shadow p-5 h-28"
              :class="[
                buyOrderDetailsData.datasetIds.includes(id)
                  ? 'bg-white'
                  : 'bg-gray-200',
              ]"
            >
              <div class="flex h-full items-center">
                <img
                  :src="thumbnailUrl"
                  alt="name"
                  class="bg-blue-300 h-16 mr-4 w-16 min-w-[4rem]"
                />
                <div class="h-full">
                  <h3>{{ label }}</h3>
                  <p>${{ costPerRecord }} per record</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="flex justify-center text-white">
          <button class="bg-purple-500 mr-4">Edit Order</button>
          <button class="bg-red-500">Delete Order</button>
        </section>
      </div>
      <p v-else>No buy order details found.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCountriesStore } from '@/stores/countries'
import { getBuyOrder } from '@/services/buy-orders'
import { useDatasetsStore } from '@/stores/datasets'

const props = defineProps({
  id: { type: String, required: true },
})

const isLoading = ref(false)
const buyOrderDetailsData = ref()

const countriesStore = useCountriesStore()
const { availableCountries } = storeToRefs(countriesStore)
const { updateCountries } = countriesStore

const datasetsStore = useDatasetsStore()
const { availableDatasets } = storeToRefs(datasetsStore)
const { updateDatasets } = datasetsStore

onBeforeMount(async () => {
  isLoading.value = true
  if (!availableCountries.value.length) await updateCountries()
  if (!availableDatasets.value.length) await updateDatasets()
  const data = await getBuyOrder(props.id)
  if (data) buyOrderDetailsData.value = data
  isLoading.value = false
})
</script>
