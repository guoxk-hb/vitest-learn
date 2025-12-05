<!-- Nav.vue -->
<script setup lang="ts">
import { ref } from 'vue'

const admin = ref<boolean>(false)

const porps = defineProps<{
  propNumber: number
}>()
</script>

<template>
  <nav>
    <a id="profile" href="/profile">My Profile</a>
    <a v-if="admin" id="admin" href="/admin">Admin</a>
    <div>propsNumber : {{ porps.propNumber }}</div>
  </nav>
</template>
