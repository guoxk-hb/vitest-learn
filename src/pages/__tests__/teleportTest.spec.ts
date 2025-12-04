import { test, expect, describe, beforeEach, afterEach } from 'vitest'

import TeleportTest from '../teleportTest.vue'
import { mount } from '@vue/test-utils'
import TodoList from '../todoList.vue'

describe('TeleportTest.vue', () => {
  beforeEach(() => {
    // 创建 teleport 的目标
    const el = document.createElement('div')
    el.id = 'modal'
    document.body.appendChild(el)
  })
  afterEach(() => {
    // 清理
    document.body.innerHTML = ''
  })
  test('renders correctly and teleports content', async () => {
    const wrapper = mount(TeleportTest)

    expect(wrapper.findComponent(TodoList).exists()).toBe(true)

    const todoList = wrapper.findComponent(TodoList)
    console.log(todoList.text())
    expect(todoList.get('[data-test="todo"]').text()).toBe('Learn Vue.js 3')
    todoList.get('[data-test="new-todo"]').setValue('Write tests')
    await todoList.get('[data-test="form"]').trigger('submit.prevent')
    console.log(todoList?.findAll('[data-test="todo"]')[1].text())
    expect(todoList?.findAll('[data-test="todo"]')[1].text()).toContain('Write tests')
  })
})
