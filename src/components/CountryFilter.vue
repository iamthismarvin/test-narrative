<template>
  <section
    class="fixed bg-white bottom-1 left-1/2 p-5 my-5 rounded-xl shadow -translate-x-1/2"
  >
    <h5>Included Countries:</h5>
    <p v-if="isLoadingCountries">Loading countries...</p>
    <div v-else>
      <ul v-if="availableCountries" class="flex mt-2">
        <li
          v-for="{ name, countryCode } in availableCountries"
          :key="countryCode"
          class="mr-4"
        >
          <button
            @click="filterCountry(countryCode, selectedCountries)"
            :class="[
              selectedCountries.includes(countryCode)
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300',
            ]"
          >
            {{ name }}
          </button>
        </li>
      </ul>
      <p v-else>No countries found.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCountriesStore } from '@/stores/countries'
import { storeToRefs } from 'pinia'
import { onBeforeMount } from 'vue'

const countriesStore = useCountriesStore()

const { availableCountries, isLoadingCountries, selectedCountries } =
  storeToRefs(countriesStore)
const { addCountry, filterCountry, updateCountries } = countriesStore

onBeforeMount(async () => {
  await updateCountries()

  // Populate available countries on first load.
  if (!selectedCountries.value.length)
    availableCountries.value.forEach(({ countryCode }) =>
      addCountry(countryCode, selectedCountries.value),
    )
})
</script>
