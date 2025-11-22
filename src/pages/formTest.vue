<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')

const emits = defineEmits<{
  (e: 'submit', email: string): void
}>()

const submit = () => {
  emits('submit', email.value)
}
</script>

<template>
  <div>
    <input type="email" v-model="email" />

    <button @click="submit">Submit</button>
  </div>
</template>
