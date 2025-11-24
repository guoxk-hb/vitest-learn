import { mount } from '@vue/test-utils'

import Password from '../password.vue'

import { expect, test } from 'vitest'

test('renders an error if length is too short', async () => {
  const wrapper = mount(Password, {
    props: {
      minLength: 10,
    },
    data() {
      return {
        password: 'short',
      }
    },
  })

  await wrapper.setData({ password: '1234567890' })

  expect(wrapper.html()).toContain('密码必须至少包含 10 个字符。')

  expect(wrapper.html()).not.toContain('Show')

  // await wrapper.setData({ show: true })
  // expect(wrapper.html()).toContain('Show')

  // await wrapper.setData({ show: false })
  // expect(wrapper.html()).not.toContain('Show')
})
