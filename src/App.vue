<script setup lang="ts">
import View from './components/View.vue'
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <View components="div" aria-label="div" :is-disabled="false">{{ 'This is View component' }}</View>
</template>

<style scoped></style>
