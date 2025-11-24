<script setup lang="ts">
// 发送http请求 测试
import axios from 'axios'
import { ref } from 'vue'

const posts = ref<{ title: string; id: number }[]>([])
const loading = ref(false)

const getPosts = async () => {
  loading.value = true
  const response = await axios.get('/api/posts')
  posts.value = response.data
  loading.value = false
}
</script>

<template>
  <button :disabled="loading" @click="getPosts">Get posts</button>
  <p v-if="loading" role="alert">Loading your posts…</p>
  <ul v-else>
    <li v-for="post in posts" :key="post.id" data-test="post">
      {{ post.title }}
    </li>
  </ul>
</template>
