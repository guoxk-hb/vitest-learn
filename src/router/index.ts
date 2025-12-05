import path from 'path'
import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/nav.vue'),
  },
  {
    path: '/pinia',
    name: 'Pinia',
    component: () => import('../pages/piniaTest.vue'),
  },
  {
    path: '/todoList/:id?',
    name: 'TodoList',
    component: () => import('../pages/todoList.vue'),
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
