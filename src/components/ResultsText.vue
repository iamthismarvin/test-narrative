<template>
  <p>
    Showing <strong>{{ props.quantity }}</strong> from
    <strong>{{ countriesFormatted }}</strong>
  </p>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import formatList from '@/utils/format-list'
import { useCountriesStore } from '@/stores/countries'

const props = defineProps({
  quantity: { type: Number, required: true },
  countries: { type: Array as PropType<string[]>, required: true },
})

const { getCountryFromCode } = useCountriesStore()

const countriesFormatted = computed(() =>
  formatList(
    props.countries.map((countryCode) => getCountryFromCode(countryCode)),
  ),
)
</script>
