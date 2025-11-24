<script setup lang="ts">
import { ref } from 'vue'
// 异步测试
const promise: Promise<string> = new Promise((resolve) => {
  // setTimeout(() => {
  resolve('done')
  // }, 2000)
})

const res = ref<string>('')
res.value = await promise
</script>

<template>
  <div>
    {{ res }}
  </div>
</template>
