import { defineStore } from 'pinia'
import { ref, computed, inject } from 'vue'
import { useRouter } from 'vue-router'

//推荐用哪种写法，那当然是setup模式了
export const useSetupStore = defineStore('setup', () => {
  //ref 即state

  //必须返回所有state属性，否则SSR会出问题。

  // 相对于options store 更灵活，更多灵活性。

  const count = ref(0)
  //computed 即getter
  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  function $reset() {
    count.value = 0
  }

  return { count, doubleCount, increment, $reset }
})

export const useGlobalStore = defineStore('global', () => {
  const router = useRouter()

  const appProvided = inject('appProvided')

  //!不要直接返回router 或 appProvided，因为他们不属于store里的内容，并且在外部可以直接调用。
  // return { router, appProvided }
})
