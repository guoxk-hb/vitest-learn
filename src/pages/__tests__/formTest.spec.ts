import { mount } from '@vue/test-utils'

import FormTest from '../formTest.vue'
import { expect, test } from 'vitest'

test('renders a todo', async () => {
  const wrapper = mount(FormTest)
  const input = wrapper.get('input')

  await input.setValue('my@email.com')

  await wrapper.get('button').trigger('click')

  expect(wrapper.emitted()).toHaveProperty('submit')
  expect(input.element.value).toEqual('my@email.com')
})
