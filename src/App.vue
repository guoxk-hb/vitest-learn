<script setup lang="ts">
import View from './components/View.vue'
import AsynchronousBehavior from './pages/asynchronousBehavior.vue'
import ConditionalRender from './pages/conditionalRender.vue'
import TodoList from './pages/todoList.vue'
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <h3>{{ 'View Component' }}</h3>
  <View components="div" aria-label="div" :is-disabled="false">{{ 'This is View component' }}</View>
  <h3>{{ 'Todo List' }}</h3>
  <TodoList></TodoList>
  <h3>{{ 'Conditional Rendering' }}</h3>
  <ConditionalRender />
  <AsynchronousBehavior />
</template>

<style scoped></style>
