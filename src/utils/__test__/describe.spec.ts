// 当使用test或bench为顶层是，它们会作为隐式套件的一部分被收集起来。
//使用 describe 可以在当前上下文中定义一个新的测试套件，测试套件可让组织测试和基准，使报告更加清晰。

// basic.spec.ts
// 组织测试

import { assert, describe, expect, test } from 'vitest'

const person = {
  isActive: true,
  age: 32,
}

describe('person', () => {
  test('person is defined', () => {
    expect(person).toBeDefined()
  })

  test('is active', () => {
    expect(person.isActive).toBeTruthy()
  })

  test('age limit', () => {
    expect(person.age).toBeLessThanOrEqual(32)
  })
})

describe.skip('skipped suite', () => {
  // 这个测试套件及其所有测试都将被跳过
  test('this test will be skipped', () => {
    expect(true).toBe(false)
  })
})

const isDev = process.env.NODE_ENV === 'development'

describe.skipIf(!isDev)('prod only test suite', () => {
  // this test suite only runs in production
  test('this test will be skipped', () => {
    expect(true).toBe(false)
  })
})

describe.only('only test suite', () => {
  test('sqrt', () => {
    assert.equal(Math.sqrt(4), 2)
  })
})
