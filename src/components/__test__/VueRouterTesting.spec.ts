import { describe, test, expect, vi } from 'vitest'

import { flushPromises, mount } from '@vue/test-utils'

import VueRouterTesting from '../VueRouterTesting.vue'
import { nextTick } from 'vue'
import router from '@/router'

const mockRoute = {
  params: {
    id: '1',
  },
}

const mockRouter = {
  push: vi.fn(),
}

describe('VueRouterTesting', () => {
  test('renders router links correctly  mocked router', async () => {
    const wrapper = mount(VueRouterTesting, {
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        },
      },
    })

    const piniaLink = wrapper.find('[data-test="Pinia"]')

    expect(piniaLink.exists()).toBe(true)

    // await piniaLink.trigger('click')

    // expect(mockRouter.push).toHaveBeenCalledTimes(1)
  })

  test('renders router links correctly  real router', async () => {
    const wrapper = mount(VueRouterTesting, {
      global: {
        plugins: [router],
      },
    })

    router.push('/pinia')
    await router.isReady()
    // expect(wrapper.get('[data-test="/pinia"]').text()).toBe('pinia')
  })
})
