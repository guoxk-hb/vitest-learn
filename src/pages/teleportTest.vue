<script setup lang="ts">
import TodoList from './todoList.vue'
</script>

<template>
  <div>
    <Teleport to="#modal">
      <TodoList />
    </Teleport>
  </div>
</template>
