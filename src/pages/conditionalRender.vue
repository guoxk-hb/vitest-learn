<script setup lang="ts">
import { ref } from 'vue'

const admin = ref<boolean>(false)

function changeAdmin() {
  admin.value = !admin.value
}
</script>

<template>
  <nav>
    <a id="profile" href="/profile">My Profile</a>
    <a v-if="admin" id="admin" href="/admin">Admin</a>
  </nav>
  <div>
    <button data-test="button" @click="changeAdmin">{{ admin }}</button>
  </div>
</template>
