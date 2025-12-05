import { flushPromises, mount } from '@vue/test-utils'

import ComponentsInstance from '../componentsInstance.vue'
import View from '@/components/View.vue'

import { expect, test } from 'vitest'

// 访问组件实例
test('访问组件实例', async () => {
  const wrapper = mount(ComponentsInstance)

  // console.log(wrapper.vm)
  expect(wrapper.getComponent(View).vm.components).toBe('span')
  expect(wrapper.getComponent(View).props()).toEqual({
    components: 'span',
    isDisabled: false,
    ariaLabel: 'span',
  })

  const view = wrapper.findComponent(View)
  expect(view.attributes().name).toBe('view')
})
