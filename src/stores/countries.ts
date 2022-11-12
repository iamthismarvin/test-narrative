import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { ICountry } from '@/utils/types'

export const useCountriesStore = defineStore('countries', () => {
  const availableCountries: Ref<ICountry[]> = ref([])
  const selectedCountries: Ref<string[]> = ref([])
  const addCountry = (countryCode: string) =>
    selectedCountries.value.push(countryCode)
  const removeCountry = (countryCode: string) => {
    const countryIndex = selectedCountries.value.indexOf(countryCode)
    selectedCountries.value.splice(countryIndex, 1)
  }
  const filterCountry = (countryCode: string) => {
    const isCountrySelected = selectedCountries.value.includes(countryCode)
    if (isCountrySelected) removeCountry(countryCode)
    else addCountry(countryCode)
  }
  const updateCountries = (countries: ICountry[]) =>
    (availableCountries.value = countries)

  return {
    availableCountries,
    selectedCountries,
    addCountry,
    filterCountry,
    updateCountries,
  }
})
