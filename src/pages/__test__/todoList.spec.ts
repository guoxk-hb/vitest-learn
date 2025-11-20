import { mount } from '@vue/test-utils'

import TodoList from '../todoList.vue'
import { expect, test } from 'vitest'

test('renders a todo', () => {
  const wrapper = mount(TodoList)
  const todoList = wrapper.get('[data-test="todo"]')
  expect(todoList.text()).toContain('Learn Vue.js 3')
})
