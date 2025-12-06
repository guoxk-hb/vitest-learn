import { describe, it, test, expect } from 'vitest'

import { mount } from '@vue/test-utils'

import SubsAndShallowMountTesting from '../subsAndShallowMountTesting.vue'

describe('subsAndShallowMountTesting', () => {
  test('subbing a single child component', () => {
    const wrapper = mount(SubsAndShallowMountTesting, {
      global: {
        stubs: {
          View: {
            template: '<span></span>',
          },
        },
      },
    })
    console.log(wrapper.html())
    expect(wrapper.html()).toContain('this is subsAndShallowMountTesting.vue')
  })
})
