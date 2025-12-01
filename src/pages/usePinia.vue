<script setup lang="ts">
import { useSetupStore } from '@/stores/setup'
import { storeToRefs } from 'pinia'
import { useOptionsStore } from '@/stores/options'

// const { count, increment, doubleCount } = useSetupStore()
// const setupStore = useSetupStore()

const setupStore = useSetupStore()
const { count, doubleCount } = storeToRefs(setupStore)
const { increment } = setupStore

const optionsStore = useOptionsStore()

const { count: optionsCount, doubleCount: optionsDoubleCount } = storeToRefs(optionsStore)
const { increment: optionsIncrement } = optionsStore
</script>

<template>
  <div>
    <div>
      <h3>Setup Store</h3>
      {{ count }} / {{ doubleCount }}
      <button @click="increment">Increment</button>
      <button @click="setupStore.$reset()">Reset</button>
    </div>
    <div>
      <h3>Options Store</h3>
      {{ optionsCount }} / {{ optionsDoubleCount }}
      <button @click="optionsIncrement">Increment</button>
      <button @click="optionsStore.$reset()">Reset</button>
    </div>

    <!-- {{ setupStore.count }} / {{ setupStore.doubleCount }}
    <button @click="setupStore.increment">Increment</button> -->
  </div>
</template>
