<script setup lang="ts">
import { routes } from '@/router'
</script>

<template>
  <div>
    <router-link
      v-for="item in routes"
      :key="item.name"
      :to="{ name: item.name! }"
      style="margin-right: 16px"
      :data-test="item.name"
      activeClass="active"
      exactActiveClass="exact"
    >
      {{ item.name }}
    </router-link>

    <router-link :to="{ path: '/todoList/123' }" data-test="todoListWithId">
      TodoList with ID
    </router-link>
  </div>
</template>

<style scoped>
.active {
  font-weight: bold;
  color: red;
}
.exact {
  text-decoration: underline;
}
</style>
