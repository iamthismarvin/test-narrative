<template>
  <div class="bg-gray-200 h-96 p-8">
    <div class="flex items-center justify-between mb-6">
      <img
        :src="props.data.thumbnailUrl"
        :alt="props.data.name"
        class="bg-blue-300 h-24 min-w-[6rem] w-24"
      />
      <h3 class="capitalize text-center w-full">{{ props.data.name }}</h3>
    </div>
    <div class="mb-4">
      <h5>Dataset Description</h5>
      <p>{{ props.data.description }}</p>
    </div>
    <div class="flex justify-between mb-4">
      <h5>Cost Per Record</h5>
      <p>{{ props.data.costPerRecord }}</p>
    </div>
    <div class="flex justify-between">
      <h5>Available Records</h5>
      <p>EXAMPLE</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { IDataset } from '@/utils/types'

const props = defineProps({
  data: { type: Object as PropType<IDataset>, required: true },
})
</script>
