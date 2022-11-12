import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { ICountry } from '@/utils/types'
import { getCountries } from '@/services/countries'

export const useCountriesStore = defineStore('countries', () => {
  const availableCountries: Ref<ICountry[]> = ref([])
  const isLoadingCountries = ref(false)
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
  const updateCountries = async () => {
    isLoadingCountries.value = true
    const countries = await getCountries()
    if (countries) availableCountries.value = countries
    isLoadingCountries.value = false
  }
  const getCountryFromCode = (countryCode: string) =>
    availableCountries.value.find((c) => c.countryCode === countryCode)?.name ??
    ''

  return {
    availableCountries,
    isLoadingCountries,
    selectedCountries,
    addCountry,
    filterCountry,
    getCountryFromCode,
    updateCountries,
  }
})
