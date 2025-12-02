import { expect, describe, test, vi } from 'vitest'

import { mount } from '@vue/test-utils'

import PiniaTest from '../piniaTest.vue'

import { useSetupStore } from '@/stores/setup'

import { createTestingPinia } from '@pinia/testing'
import { nextTick } from 'vue'
import { count } from 'console'
import { useOptionsStore } from '@/stores/options'

describe('PiniaTest', () => {
  test('uses pinia store correctly', async () => {
    const wrapper = mount(PiniaTest, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            stubActions: false,
            initialState: {
              setup: {
                count: 2,
              },
              options: {
                count: 4,
              },
            },
          }),
        ],
      },
    })

    const setupStore = useSetupStore()
    const optionsStore = useOptionsStore()
    // store.$patch({ count: 2 })
    // store.count = 2
    expect(setupStore.count).toBe(2)
    expect(optionsStore.count).toBe(4)
    await nextTick()
    expect(wrapper.get('[data-test="setupCount"]').text()).toBe('2')
    expect(wrapper.get('[data-test="setupDoubleCount"]').text()).toBe('4')
    expect(wrapper.get('[data-test="optionsCount"]').text()).toBe('4')
    expect(wrapper.get('[data-test="optionsDoubleCount"]').text()).toBe('8')

    setupStore.increment()

    await nextTick()

    expect(setupStore.count).toBe(3)
    expect(wrapper.get('[data-test="setupCount"]').text()).toBe('3')
    expect(wrapper.get('[data-test="setupDoubleCount"]').text()).toBe('6')
  })
})
