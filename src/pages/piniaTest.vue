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
      <span data-test="setupCount"> {{ count }} </span>/
      <span data-test="setupDoubleCount">
        {{ doubleCount }}
      </span>
      <button @click="increment">Increment</button>
      <button @click="setupStore.$reset()">Reset</button>
    </div>
    <div>
      <h3>Options Store</h3>
      <span>
        <span data-test="optionsCount">{{ optionsCount }} </span>/
        <span data-test="optionsDoubleCount">
          {{ optionsDoubleCount }}
        </span>
      </span>
      <button @click="optionsIncrement">Increment</button>
      <button @click="optionsStore.$reset()">Reset</button>
    </div>

    <!-- {{ setupStore.count }} / {{ setupStore.doubleCount }}
    <button @click="setupStore.increment">Increment</button> -->
  </div>
</template>
