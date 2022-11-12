<template>
  <section
    class="fixed bg-white bottom-1 left-1/2 p-5 my-5 rounded-xl shadow -translate-x-1/2"
  >
    <h5>Included Countries:</h5>
    <ul class="flex mt-2">
      <li
        v-for="{ name, countryCode } in availableCountries"
        :key="countryCode"
        class="mr-4"
      >
        <button
          @click="filterCountry(countryCode)"
          class="p-3 rounded-xl w-40"
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
  </section>
</template>

<script setup lang="ts">
import { getCountries } from '@/services/countries'
import { useCountriesStore } from '@/stores/countries'
import { storeToRefs } from 'pinia'
import { onBeforeMount } from 'vue'

const store = useCountriesStore()

const { availableCountries, selectedCountries } = storeToRefs(store)
const { addCountry, filterCountry, updateCountries } = store

onBeforeMount(async () => {
  const data = await getCountries()
  if (data) updateCountries(data)

  // Populate available countries on first load.
  if (!selectedCountries.value.length)
    availableCountries.value.forEach(({ countryCode }) =>
      addCountry(countryCode),
    )
})
</script>
