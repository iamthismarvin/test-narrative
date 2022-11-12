<template>
  <div class="bg-gray-200 grid grid-cols-3 min-h-[6rem]">
    <div>
      <p>Order Name</p>
      <p>{{ props.name }}</p>
    </div>
    <div>
      <p>Date Created</p>
      <p>{{ props.date }}</p>
    </div>
    <div>
      <p>Forecasted Records</p>
      <p>{{ props.records }} records</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: { type: String, required: true },
  date: { type: String, required: true },
  records: { type: Number, required: true },
})
</script>
