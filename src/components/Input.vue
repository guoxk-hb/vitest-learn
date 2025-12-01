<script setup lang="ts">
const text = defineModel()
</script>

<template>
  <div>
    <label>
      input:
      <input type="text" v-model="text" />
    </label>
  </div>
</template>
