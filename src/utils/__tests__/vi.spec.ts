import { vi, describe, test, it, expect, beforeEach, afterEach } from 'vitest'

import { sum } from '../calculator'

import { increment } from '../increment'

import * as example from '../example'

describe('vi', () => {
  test('mocking sum function', () => {
    // vi.mock('./calculator.ts', { spy: true })
    // const result = sum(2, 3)
    // expect(result).toBe(5)
    // expect(sum).toHaveBeenCalledOnce()
    // expect(sum).toHaveBeenCalledWith(2, 3)
    // expect(sum).toHaveReturnedWith(5)
  })

  // test('domock example', () => {
  //   vi.doMock('./calculator.ts', {
  //     spy: true,
  //   })
  //   const result = sum(2, 3)
  //   expect(result).toBe(5)
  //   expect(sum).toHaveBeenCalledOnce()
  //   expect(sum).toHaveBeenCalledWith(2, 3)
  //   expect(sum).toHaveReturnedWith(0)
  // })
  // 模块尚未模拟，是因为 vi.doMock没有调用
  // increment(1) === 2
  // console.log('original increment(1):', increment(1) === 2)

  const mockedIncrement = 100

  beforeEach(() => {
    // 你可以在工厂函数内部访问变量
    // vi.doMock('./increment', () => ({ increment: () => ++mockedIncrement }))
  })

  test('importing the next module imports mocked one', async () => {
    // 原始模块并未模拟，是因为 vi.doMock 是在导入语句之后执行的
    // expect(increment(1)).toBe(2)
    // const { increment: mockedIncrement } = await import('./increment')
    // // 新的动态导入，返回模拟模块
    // expect(mockedIncrement(1)).toBe(101)
    // expect(mockedIncrement(1)).toBe(102)
    // expect(mockedIncrement(1)).toBe(103)
  })
  // vi.mock('./example')

  test('1 + 1 equals 10', async () => {
    // vi.mocked(example.add).mockReturnValue(10)
    // expect(example.add(1, 1)).toBe(10)
  })

  test('mock return value with only partially correct typing', async () => {
    // vi.mocked(example.fetchSomething).mockResolvedValue(new Response('hello'))
    // // vi.mocked(example.fetchSomething, { partial: true, deep: true }).mockResolvedValue({
    // //   ok: false,
    // //   status: 404,
    // // })
    // const res = await example.fetchSomething()
    // const text = await res.text()
    // expect(text).toBe('hello')
    // vi.mocked(example.fetchSomething).mockResolvedValue({ ok: false }) // 这是一个错误类型
  })

  test('importActual', async () => {
    // vi.mock('./calculator', async (importActual) => {
    //   const actual = await importActual<typeof import('./calculator')>()
    //   return {
    //     ...actual,
    //     sum: vi.fn().mockImplementation((a: number, b: number) => a * b),
    //   }
    // })
    // const { sum: mockedSum } = await import('./calculator')
    // expect(mockedSum(2, 3)).toBe(6)
    // vi.mock('./calculator', async () => {
    //   const actual = await vi.importActual<typeof import('./calculator')>('./calculator')
    //   return {
    //     ...actual,
    //     sum: vi.fn().mockImplementation((a: number, b: number) => a * b),
    //   }
    // })
    // const { sum: mockedSum } = await import('./calculator')
    // expect(mockedSum(2, 3)).toBe(6)
    // expect(mockedSum(3, 3)).toBe(9)
  })

  test('importMock', async () => {
    // const { add: mockedAdd, fetchSomething: mockedFetchSomething } =
    //   await vi.importMock<typeof import('../example')>('../example')
    // mockedAdd.mockImplementation((a: number, b: number) => a * b)
    // 默认导入模拟模块，所有函数都被替换为 jest.fn()
    // const add = example.add
    // vi.mock('../example', () => ({
    //   add: vi.fn().mockImplementation((a: number, b: number) => a * b),
    // }))
    // expect(add(2, 3)).toBe(6)
    // // vi.doUnmock('../example')
    // vi.unmock('../example')
    // const { add: unmockedAdd } = await import('../example')
    // expect(unmockedAdd(2, 3)).toBe(5)
  })

  async function renderIncrease() {
    // return import('../components').then(({ render }) => {
    //   render()
    // })
  }
  test('dynamic mock settled', async () => {
    // await renderIncrease()
    // // await vi.dynamicImportSettled()
    // expect(document.querySelector('.component')?.textContent).toBe('Hello Component')
  })

  test('vi mockObject', () => {
    // const original = {
    //   sample: () => 'value',
    //   nested: {
    //     methods: () => 'real',
    //   },
    //   prop: 'foo',
    // }
    // const mocked = vi.mockObject(original)
    // expect(mocked.sample()).toBeUndefined()
    // expect(mocked.prop).toBe('foo')
    // mocked.nested.methods.mockReturnValue('mocked')
    // expect(mocked.nested.methods()).toBe('mocked')
    // expect(vi.isMockFunction(original.sample)).toBe(false)
    // expect(vi.isMockFunction(mocked.sample)).toBe(true)
    //   const original = {
    //     sample: () => 'value',
    //     nested: {
    //       methods: () => 'real',
    //     },
    //     prop: 'foo',
    //   }
    //   // const mocked = vi.mockObject(original, { spy:true })
    //   const mocked = vi.mockObject(original, { spy: true })
    //   expect(mocked.sample()).toBe('value')
    //   // }
  })

  test('vi mockObject spy true', () => {
    const original = {
      sample: () => 'value',
      nested: {
        methods: () => 'real',
      },
      prop: 'foo',
    }
    const mocked = vi.mockObject(original, { spy: true })
    expect(mocked.sample()).toBe('value')
  })
})
