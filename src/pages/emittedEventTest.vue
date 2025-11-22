<script setup lang="ts">
import { ref } from 'vue'

const emits = defineEmits<{
  // (e: 'increment', count: number): void
  (e: 'increment', { count, isEven }: { count: number; isEven: boolean }): void
}>()

const count = ref<number>(0)
const handleClick = () => {
  count.value += 1
  emits('increment', {
    count: count.value,
    isEven: count.value % 2 === 0,
  })
}
</script>

<template>
  <div>
    <button @click="handleClick">Increment</button>
  </div>
</template>
