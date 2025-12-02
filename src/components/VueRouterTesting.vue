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
    >
      {{ item.name }}
    </router-link>
  </div>
</template>
