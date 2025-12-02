import { describe, it, expect, beforeEach, test } from 'vitest'

import { flushPromises, mount } from '@vue/test-utils'
import App from '../App.vue'
import { createPinia } from 'pinia'
import { routes } from '@/router'
import { createRouter, createWebHistory } from 'vue-router'

let router: ReturnType<typeof createRouter>
beforeEach(async () => {
  router = createRouter({
    history: createWebHistory(),
    routes: routes,
  })
  router.push('/')
  await router.isReady()
})

describe('App', () => {
  let pinia: ReturnType<typeof createPinia>

  beforeEach(() => {
    pinia = createPinia()
  })

  it('mounts renders properly', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router, pinia],
      },
    })
    expect(wrapper.text()).toContain('You did it!')
  })
  // it('View is rendered properly', () => {
  //   const wrapper = mount(App, {})
  //   expect(wrapper.findComponent({ name: 'View' }).exists()).toBe(true)
  //   expect(wrapper.text()).toContain('This is View component')
  // })
})

describe('VueRouterTesting', () => {
  let pinia: ReturnType<typeof createPinia>

  beforeEach(() => {
    pinia = createPinia()
  })

  test('renders router links correctly  mocked router', async () => {})

  test('renders router links correctly  real router', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router, pinia],
      },
    })

    expect(wrapper.html()).not.toContain('Setup Store')
    const piniaLink = wrapper.find('[data-test="Pinia"]')

    // expect(piniaLink.exists()).toBe(true)

    // 直接使用 router.push 而不是 trigger click
    // await router.push('/pinia')
    // piniaLink.trigger('click')
    await piniaLink.trigger('click')
    // await flushPromises()

    expect(wrapper.html()).toContain('Setup Store')
  })
})
