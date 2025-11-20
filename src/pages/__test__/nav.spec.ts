import { mount } from '@vue/test-utils'

import Nav from '../nav.vue'

import { expect, test } from 'vitest'

test('renders an admin link', () => {
  const wrapper = mount(Nav, {
    data() {
      return {
        admin: true,
      }
    },
  })

  // Again, by using `get()` we are implicitly asserting that
  // the element exists.
  expect(wrapper.get('#admin').text()).toEqual('Admin')
})
