<template>
  <div class="bg-white grid grid-cols-3 min-h-[6rem] p-5 rounded-xl shadow">
    <div>
      <h5>Order Name</h5>
      <p>{{ props.name }}</p>
    </div>
    <div>
      <h5>Date Created</h5>
      <p>{{ props.date }}</p>
    </div>
    <div>
      <h5>Forecasted Records</h5>
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
