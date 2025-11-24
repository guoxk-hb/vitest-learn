<!-- Password.vue -->
<script setup lang="ts">
// 传递数据到组件
import { ref, computed } from 'vue'

const props = defineProps(['minLength'])
const password = ref('')

const show = ref(false)

const error = computed(() => {
  if (password.value.length < props.minLength) {
    return `密码必须至少包含 ${props.minLength} 个字符。`
  }
  return
})
</script>

<template>
  <div>
    <input v-model="password" />
    <div v-if="error">{{ error }}</div>
  </div>
  <div v-if="show">Show</div>
</template>
