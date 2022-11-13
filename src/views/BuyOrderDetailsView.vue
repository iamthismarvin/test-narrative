<template>
  <div>
    <h1>Buy Order Details</h1>
    <p v-if="isLoading">Loading buy order details...</p>
    <div v-else class="bg-white p-5 rounded-xl shadow">
      <div v-if="buyOrderDetailsData">
        <section class="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h5>Order Name:</h5>
            <p v-if="mode === 'view'">{{ buyOrderDetailsData.name }}</p>
            <input v-else v-model="buyOrderEditForm.name" />
          </div>
          <div>
            <h5>Date Created:</h5>
            <p>
              {{ new Date(buyOrderDetailsData.createdAt).toLocaleDateString() }}
            </p>
          </div>
          <div>
            <h5>Order Budget:</h5>
            <p v-if="mode === 'view'">{{ buyOrderDetailsData.budget }}</p>
            <input v-else v-model="buyOrderEditForm.budget" />
          </div>
          <div>
            <h5>Forecasted Records:</h5>
            <p>EXAMPLE</p>
          </div>
        </section>
        <section class="mb-6">
          <h5 class="mb-2">Included Countries:</h5>
          <ul v-if="mode === 'view'">
            <li v-for="country in buyOrderDetailsData.countries" :key="country">
              {{ getCountryFromCode(country) }}
            </li>
          </ul>
          <button
            v-else
            v-for="{ countryCode, name } in availableCountries"
            :key="countryCode"
            class="mr-4"
            :class="[
              buyOrderDetailsData.countries.includes(countryCode)
                ? 'bg-blue-500 text-white '
                : 'bg-gray-200',
            ]"
            @click="toggleCountry(countryCode)"
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
              } in mode === 'view' ? buyOrderDatasets : availableDatasets"
              :key="name"
              class="rounded-xl shadow p-5 h-28"
              :class="[
                buyOrderDetailsData.datasetIds.includes(id)
                  ? 'bg-white'
                  : 'bg-gray-200',
                { 'cursor-pointer': mode !== 'view' },
              ]"
              @click="toggleDataset(id)"
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
          <div v-if="mode === 'view'">
            <button class="bg-purple-500 mr-4" @click="mode = 'edit'">
              Edit Order
            </button>
            <button class="bg-red-500">Delete Order</button>
          </div>
          <div v-if="mode === 'edit'">
            <button class="bg-green-500 mr-4" @click="updateBuyOrder">
              Save
            </button>
            <button class="bg-blue-500" @click="mode = 'view'">Cancel</button>
          </div>
        </section>
      </div>
      <p v-else>No buy order details found.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, reactive, ref, type Ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCountriesStore } from '@/stores/countries'
import { getBuyOrder, putBuyOrder } from '@/services/buy-orders'
import { useDatasetsStore } from '@/stores/datasets'

const props = defineProps({
  id: { type: String, required: true },
})

const isLoading = ref(false)
const buyOrderDetailsData = ref()
const buyOrderEditForm = reactive({
  id: '',
  createdAt: '',
  name: '',
  budget: 0,
  datasetIds: [],
  countries: [],
})

const mode: Ref<'view' | 'edit'> = ref('view')

const fillEditForm = () => {
  buyOrderEditForm.name = buyOrderDetailsData.value.name
  buyOrderEditForm.budget = buyOrderDetailsData.value.budget
  buyOrderEditForm.datasetIds = buyOrderDetailsData.value.datasetIds
  buyOrderEditForm.countries = buyOrderDetailsData.value.countries
}

const updateBuyOrder = async () => {
  buyOrderEditForm.id = buyOrderDetailsData.value.id
  buyOrderEditForm.createdAt = buyOrderDetailsData.value.createdAt
  await putBuyOrder(buyOrderEditForm)
  buyOrderDetailsData.value = buyOrderEditForm
  mode.value = 'view'
}

const toggleCountry = (countryCode: string) => {
  const isCountrySelected = buyOrderEditForm.countries.includes(countryCode)
  if (isCountrySelected) removeCountry(countryCode, buyOrderEditForm.countries)
  else addCountry(countryCode, buyOrderEditForm.countries)
}

const toggleDataset = (datasetId: number) => {
  if (mode.value === 'view') return
  const isDatasetSelected = buyOrderEditForm.datasetIds.includes(datasetId)
  if (isDatasetSelected) {
    const datasetIndex = buyOrderEditForm.datasetIds.indexOf(datasetId)
    buyOrderEditForm.datasetIds.splice(datasetIndex, 1)
  } else buyOrderEditForm.datasetIds.push(datasetId)
}

const buyOrderDatasets = computed(() =>
  availableDatasets.value.filter(
    (dataset) =>
      buyOrderDetailsData.value.datasetIds.includes(dataset.id) && dataset,
  ),
)

const countriesStore = useCountriesStore()
const { availableCountries } = storeToRefs(countriesStore)
const { addCountry, getCountryFromCode, removeCountry, updateCountries } =
  countriesStore

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
  fillEditForm()
})
</script>
