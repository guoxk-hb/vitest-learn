import { expect, test } from 'vitest'
import ConditionalRender from '../conditionalRender.vue'
import { mount } from '@vue/test-utils'

test('renders a profile link', () => {
  const wrapper = mount(ConditionalRender)

  const profileLink = wrapper.get('#profile')

  expect(profileLink.text()).toEqual('My Profile')
})

test('does not render an admin link', () => {
  const wrapper = mount(ConditionalRender)

  const adminLink = wrapper.find('#admin')

  expect(adminLink.exists()).toBe(false)
})

test('renders an admin link', async () => {
  const wrapper = mount(ConditionalRender, {})

  const button = wrapper.get('[data-test="button"]')
  await button.trigger('click')
  // Again, by using `get()` we are implicitly asserting that
  // the element exists.
  expect(wrapper.find('#admin').exists()).toBe(true)

  await button.trigger('click')
  expect(wrapper.find('#admin').exists()).toBe(false)
})
