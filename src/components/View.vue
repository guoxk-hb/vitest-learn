<script setup lang="ts">
defineProps<{
  components: string
  ariaLabel?: string
  isDisabled?: boolean
}>()
</script>

<template>
  <component :is="components" :aria-label="ariaLabel" :disabled="isDisabled">
    <slot></slot>
  </component>
</template>
