<script setup lang="ts">
import { ref } from 'vue'
interface todoItem {
  id: number
  text: string
  completed: boolean
}
const todos = ref<todoItem[]>([
  {
    id: 1,
    text: 'Learn Vue.js 3',
    completed: false,
  },
])
</script>
<template>
  <div>
    <div v-for="todo in todos" :key="todo.id" data-test="todo">
      {{ todo.text }}
    </div>
  </div>
</template>
