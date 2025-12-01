import { mount } from '@vue/test-utils'

import TodoList from '../todoList.vue'
import { expect, test } from 'vitest'

test('renders a todo', async () => {
  const wrapper = mount(TodoList)
  const todoList = wrapper.get('[data-test="todo"]')
  expect(todoList.text()).toBe('Learn Vue.js 3')

  await wrapper.get('[data-test="new-todo"]').setValue('New Todo')
  await wrapper.get('[data-test="form"]').trigger('submit.prevent')

  expect(wrapper.findAll('[data-test="todo"')).toHaveLength(2)

  await wrapper.get('[data-test="todo-checkbox"]').setValue(true)

  expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed')
})
