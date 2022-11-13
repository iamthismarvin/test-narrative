import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { ICountry } from '@/utils/types'
import { getCountries } from '@/services/countries'

export const useCountriesStore = defineStore('countries', () => {
  const availableCountries: Ref<ICountry[]> = ref([])
  const isLoadingCountries = ref(false)
  const selectedCountries: Ref<string[]> = ref([])

  const addCountry = (countryCode: string, list: string[]) =>
    list.push(countryCode)
  const removeCountry = (countryCode: string, list: string[]) => {
    const countryIndex = list.indexOf(countryCode)
    list.splice(countryIndex, 1)
  }
  const filterCountry = (countryCode: string, list: string[]) => {
    const isCountrySelected = list.includes(countryCode)
    if (isCountrySelected) removeCountry(countryCode, selectedCountries.value)
    else addCountry(countryCode, selectedCountries.value)
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
  const getCountryRecordCount = (countryCode: string) =>
    availableCountries.value.find((c) => c.countryCode === countryCode)
      ?.storedData
  const countriesRecordCount = computed(() =>
    selectedCountries.value.map((c) => getCountryRecordCount(c)),
  )

  return {
    availableCountries,
    countriesRecordCount,
    isLoadingCountries,
    selectedCountries,
    addCountry,
    filterCountry,
    removeCountry,
    getCountryFromCode,
    getCountryRecordCount,
    updateCountries,
  }
})
