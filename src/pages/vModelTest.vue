<script setup lang="ts">
const text = defineModel()

const firstName = defineModel('firstName')
const lastName = defineModel('lastName')
</script>

<template>
  <div>
    <label>
      input:
      <input type="text" v-model="text" />
    </label>
    <hr />
    <label>
      first name:
      <input data-test="firstName" type="text" v-model="firstName" />
    </label>
    <label>
      last name:
      <input data-test="lastName" type="text" v-model="lastName" />
    </label>
  </div>
</template>
