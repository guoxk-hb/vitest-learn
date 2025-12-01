// 当使用test或bench为顶层是，它们会作为隐式套件的一部分被收集起来。
//使用 describe 可以在当前上下文中定义一个新的测试套件，测试套件可让组织测试和基准，使报告更加清晰。

// basic.spec.ts
// 组织测试

import { assert, beforeEach, describe, expect, test } from 'vitest'

beforeEach(async () => {
  // 每次执行测试前，先重置所有 mock，然后准备好需要用到的测试数据。
  console.log('Resetting mocks and preparing test data')
})
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

// 此测试套件中的所有测试套件和测试将并行运行。
describe.concurrent('suite', () => {
  test('concurrent test 1', async () => {
    /* ... */
  })
  describe('concurrent suite 2', async () => {
    test('concurrent test inner 1', async () => {
      /* ... */
    })
    test('concurrent test inner 2', async () => {
      /* ... */
    })
  })
  test.concurrent('concurrent test 3', async () => {
    /* ... */
  })
})

// 顺序执行
describe.concurrent('suite', () => {
  test('concurrent test 1', async () => {
    /* ... */
  })
  test('concurrent test 2', async () => {
    /* ... */
  })

  describe.sequential('', () => {
    test('sequential test 1', async () => {
      /* ... */
    })
    test('sequential test 2', async () => {
      /* ... */
    })
  })
})

//describe.shuffle 随机运行所有测试套件

describe.shuffle('shuffled suite', () => {
  test('1', async () => {})
  test('2', async () => {})
  test('3', async () => {})
  describe('shuffled', () => {
    test('4', async () => {})
    test('5', async () => {})
  })
  // 禁用内部的 shuffle
  describe('not random', { shuffle: false }, () => {
    test('in order 5.1', async () => {
      /* ... */
    })
    test('in order 5.2', async () => {
      /* ... */
    })
  })
  // .skip、.only和.todo适用于随机测试套件
})

describe.each([
  [1, 2, 3],
  [2, 3, 5],
  [4, 5, 9],
])('%i + %i = %i', (a, b, c) => {
  test(`${a} + ${b} should equal ${c}`, () => {
    expect(a + b).toBe(c)
  })
})

describe.for([
  [1, 2, 3],
  [2, 3, 5],
  [4, 5, 9],
])('%i + %i = %i', (arr) => {
  test(`${arr[0]} + ${arr[1]} should equal ${arr[2]}`, () => {
    expect(arr[0]! + arr[1]!).toBe(arr[2]!)
  })
})
