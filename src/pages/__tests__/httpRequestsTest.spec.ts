import { flushPromises, mount } from '@vue/test-utils'

import HttpRequestsTest from '../httpRequestsTest.vue'

import { expect, test, vi } from 'vitest'

import axios from 'axios'
import { nextTick } from 'vue'

const mockPostList = [
  { id: 1, title: 'title1' },
  { id: 2, title: 'title2' },
]

// 以下代码告诉 Jest 模拟任何对 `axios.get` 的调用并返回 `mockPostList`
vi.spyOn(axios, 'get').mockResolvedValue({ data: mockPostList })

test('Http request test', async () => {
  const wrapper = mount(HttpRequestsTest)

  expect(wrapper.find('[role="alert"]').exists()).toBe(false)
  expect(wrapper.get('button').attributes()).not.toHaveProperty('disabled')

  const clickPromise = wrapper.get('button').trigger('click')

  // 等待 DOM 更新以捕获加载状态
  await nextTick()

  // 我们在等待所有承诺完成之前，断言"加载状态"。
  expect(wrapper.find('[role="alert"]').exists()).toBe(true)
  expect(wrapper.get('button').attributes()).toHaveProperty('disabled')

  // // 断言我们已正确调用 axios.get 的次数和参数。
  // expect(axios.get).toHaveBeenCalledTimes(1)
  // expect(axios.get).toHaveBeenCalledWith('/api/posts')

  // 等待 DOM 更新。
  await flushPromises()

  // 最后，确保我们已渲染 API 的内容。
  const posts = wrapper.findAll('[data-test="post"]')

  expect(posts).toHaveLength(2)
  expect(posts[0]!.text()).toContain('title1')
  expect(posts[1]!.text()).toContain('title2')
})
