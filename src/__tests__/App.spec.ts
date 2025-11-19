import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('mounts renders properly', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('You did it!')
  })

  it('View is rendered properly', () => {
    const wrapper = mount(App)
    expect(wrapper.findComponent({ name: 'View' }).exists()).toBe(true)
    expect(wrapper.text()).toContain('This is View component')
  })
})
