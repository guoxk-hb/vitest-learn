<script setup lang="ts">
import VueRouterTesting from './components/VueRouterTesting.vue'

// import View from './components/View.vue'
// import AsynchronousBehavior from './pages/asynchronousBehavior.vue'
// import ConditionalRender from './pages/conditionalRender.vue'
// import TodoList from './pages/todoList.vue'
// import UsePinia from './pages/piniaTest.vue'
// import VModelText from './pages/vModelTest.vue'
</script>

<template>
  <h1>You did it!</h1>
  <VueRouterTesting></VueRouterTesting>
  <router-view></router-view>
  <!-- <p>
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

  <VModelText />
  <UsePinia /> -->
</template>

<style scoped></style>
