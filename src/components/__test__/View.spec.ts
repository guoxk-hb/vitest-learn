import { describe, it, expect, test } from 'vitest'

import { mount } from '@vue/test-utils'
import View from '../View.vue'

describe('View', () => {
  it('mounts renders properly', () => {
    const wrapper = mount(View)
    // expect(wrapper.text()).toContain('This is View component')
  })
})
