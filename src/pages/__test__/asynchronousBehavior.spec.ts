import { flushPromises, mount } from '@vue/test-utils'

import asynchronousBehavior from '../asynchronousBehavior.vue'

import { expect, test } from 'vitest'

test('renders an admin link', async () => {
  const wrapper = mount(asynchronousBehavior)
  await flushPromises()
  expect(wrapper.text()).toContain('done')
})
