<script setup lang="ts">
// subs 测试替身与浅挂载

import View from '@/components/View.vue'
</script>

<template>
  <div>
    this is subsAndShallowMountTesting.vue
    <View :is-disabled="true" components="button"></View>
  </div>
</template>
