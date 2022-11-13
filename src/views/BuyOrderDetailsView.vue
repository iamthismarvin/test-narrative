<template>
  <div>
    <h1>Buy Order Details</h1>
    <p v-if="isLoading">Loading buy order details...</p>
    <div v-else class="bg-white p-5 rounded-xl shadow">
      <div v-if="buyOrderDetailsData">
        <section class="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h5>Order Name:</h5>
            <p>EXAMPLE</p>
          </div>
          <div>
            <h5>Date Created:</h5>
            <p>EXAMPLE</p>
          </div>
          <div>
            <h5>Order Budget:</h5>
            <p>EXAMPLE</p>
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
            class="bg-blue-500 text-white mr-4"
          >
            {{ name }}
          </button>
        </section>
        <section class="mb-6">
          <h5 class="mb-4">Included Datasets:</h5>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white rounded-xl shadow p-5 h-24">Weather Data</div>
            <div class="bg-gray-200 rounded-xl shadow p-5 h-24">
              Weather Data
            </div>
            <div class="bg-white rounded-xl shadow p-5 h-24">Weather Data</div>
            <div class="bg-white rounded-xl shadow p-5 h-24">Weather Data</div>
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
import { useCountriesStore } from '@/stores/countries'
import { storeToRefs } from 'pinia'
import { onBeforeMount, ref } from 'vue'

const props = defineProps({
  id: { type: String, required: true },
})

const isLoading = ref(false)
const buyOrderDetailsData = ref(true)

const countriesStore = useCountriesStore()
const { availableCountries } = storeToRefs(countriesStore)

onBeforeMount(() => {
  isLoading.value = true
  // const data = getBuyOrderDetailsData()
  // if (data) buyOrderDetailsData.value = data
  isLoading.value = false
})
</script>
