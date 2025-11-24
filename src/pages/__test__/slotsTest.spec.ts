import { mount } from '@vue/test-utils'

import slotsTest from '../slotsTest.vue'
import { expect, test } from 'vitest'
import Counter from '@/components/Counter.vue'
import { h } from 'vue'

test('renders a todo', async () => {
  const wrapper = mount(slotsTest, {
    slots: {
      default: [
        '<div id="one">Default Slot Content1!</div>',
        '<div id="two">Default Slot Content2!</div>',
        h('div', { id: 'three' }, 'Default Slot Content3!'),
      ],
      header: Counter,
      // header: '<div>Header Slot Content!</div>',
      footer: {
        template: '<div id="footer">Footer Slot Content!</div>',
      },
    },
  })

  // expect(wrapper.html()).toContain('Default Slot Content!')

  expect(wrapper.find('div#one').text()).toContain('Default Slot Content1!')
  expect(wrapper.find('div#two').text()).toContain('Default Slot Content2!')
  expect(wrapper.find('div#three').text()).toContain('Default Slot Content3!')
  expect(wrapper.findComponent(Counter).exists()).toBe(true)
  // expect(wrapper.getComponent(Counter).vm).toBe(0)
  // expect(wrapper.find('header').text()).toContain('Header Slot Content!')
  expect(wrapper.find('footer').text()).toContain('Footer Slot Content!')
})
