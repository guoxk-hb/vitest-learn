import { mount } from '@vue/test-utils'

import EmittedEventsTest from '../emittedEventTest.vue'
import { expect, test } from 'vitest'

test('renders a todo', async () => {
  const wrapper = mount(EmittedEventsTest)

  wrapper.get('button').trigger('click')
  wrapper.get('button').trigger('click')

  expect(wrapper.emitted()).toHaveProperty('increment')

  const incrementEvent = wrapper.emitted('increment')!

  expect(incrementEvent).toHaveLength(2)
  // expect(incrementEvent[0]).toEqual([1])
  // expect(incrementEvent[1]).toEqual([2])

  expect(incrementEvent[0]).toEqual([
    {
      count: 1,
      isEven: false,
    },
  ])

  expect(incrementEvent[1]).toEqual([
    {
      count: 2,
      isEven: true,
    },
  ])
})
