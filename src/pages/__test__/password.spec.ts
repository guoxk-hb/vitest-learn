import { mount } from '@vue/test-utils'

import Password from '../password.vue'

import { expect, test } from 'vitest'

test('renders an error if length is too short', () => {
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

  expect(wrapper.html()).toContain('密码必须至少包含 10 个字符。')
})
