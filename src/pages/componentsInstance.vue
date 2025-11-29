<script setup lang="ts">
import View from '@/components/View.vue'
</script>

<template>
  <div>
    <View name="view" :components="'span'" :is-disabled="false" aria-label="span" />
  </div>
</template>
