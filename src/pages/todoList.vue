<script setup lang="ts">
// test Utils. 快速上手
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
const newTodo = ref('')
const createTodo = () => {
  todos.value.push({
    id: 2,
    text: newTodo.value,
    completed: false,
  })
}
</script>
<template>
  <div>
    <div
      v-for="todo in todos"
      :key="todo.id"
      data-test="todo"
      :class="[todo.completed ? 'completed' : '']"
    >
      <input type="checkbox" v-model="todo.completed" data-test="todo-checkbox" />
      {{ todo.text }}
    </div>
    <form data-test="form" @submit.prevent="createTodo">
      <input data-test="new-todo" v-model="newTodo" />
    </form>
  </div>
</template>
