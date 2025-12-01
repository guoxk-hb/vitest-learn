import { mount } from '@vue/test-utils'
import { test, describe, expect } from 'vitest'
import VModelTest from '../vModelTest.vue'

describe('v-model test', () => {
  test('v-model basic usage', async () => {
    let currentValue = 'initial value'
    const wrapper = mount(VModelTest, {
      props: {
        modelValue: currentValue,
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
      },
    })

    expect(wrapper.find('input').element.value).toBe('initial value')

    await wrapper.find('input').setValue('changed value')

    expect(wrapper.props('modelValue')).toBe('changed value')
  })

  test('v-model multiple updates', async () => {
    let currentValue = 'start'
    const wrapper = mount(VModelTest, {
      props: {
        modelValue: currentValue,
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
        firstName: 'John',
        'onUpdate:firstName': (e) => wrapper.setProps({ firstName: e }),
        lastName: 'Doe',
        'onUpdate:lastName': (e) => wrapper.setProps({ lastName: e }),
      },
    })

    const firstNameInput = wrapper.find('[data-test="firstName"]')
    const lastNameInput = wrapper.find('[data-test="lastName"]')

    expect(wrapper.props().firstName).toBe('John')
    expect(wrapper.props().lastName).toBe('Doe')

    await firstNameInput.setValue('Jane')
    await lastNameInput.setValue('Smith')

    expect(wrapper.props().firstName).toBe('Jane')
    expect(wrapper.props().lastName).toBe('Smith')
  })
})
