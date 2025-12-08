import { vi, describe, test, expect } from 'vitest'

describe('mock', () => {
  //vi.fn监视函数
  //vi.spy监视对象的属性
  const mockFn = vi.fn((num: number) => num)
  // .mockImplementation((num: number) => num)
  test('test mock name', () => {
    // mockFn.mockName('myMock')
    // expect(mockFn.getMockName()).toBe('myMock')
  })
  test('test mock implementation', () => {
    // mockFn.mockImplementation((num: number) => num)
    // expect(mockFn(1)).toBe(1)
    // expect(mockFn(2)).toBe(2)
    // expect(mockFn.mock.calls[0]?.[0]).toBe(1)
    // expect(mockFn.mock.calls[1]?.[0]).toBe(2)
  })
  test('test mock clear', () => {
    // mockFn.mockImplementation((num: number) => num + 1)
    // expect(mockFn(2)).toBe(3)
    // mockFn.mockClear()
    // expect(mockFn.mock.calls.length).toBe(0)
    // expect(mockFn.mock.calls[0]).toBe(undefined)
  })

  test('test mock implementation once', () => {
    //顺序执行完成之后执行默认的fn(()=>'default')或执行mockImplementation
    // mockFn
    //   .mockImplementationOnce((num: number) => num + 1)
    //   .mockImplementationOnce((num: number) => num - 1)
    // mockFn.mockImplementationOnce((num) => num + 1).mockImplementationOnce((num) => num - 1)
    // expect(mockFn(1)).toBe(2)
    // expect(mockFn(2)).toBe(1)
    // expect(mockFn(2)).toBe(2)
  })

  test('test mock with default', () => {
    const myMockFn = vi.fn(() => 'original')

    myMockFn.withImplementation(
      () => 'temp',
      () => {
        myMockFn() // 'temp'
      },
    )

    // myMockFn() // 'original'
    expect(myMockFn()).toBe('original')
  })

  test('test mockRejectedValue', async () => {
    // const asyncMock = vi.fn().mockRejectedValue(new Error('Async error'))
    // const asyncMock = vi.fn().mockRejectedValue(new Error('Async error'))
    // await asyncMock()
  })

  test('test mockRejectedValueOnce', async () => {
    // const asyncMock = vi.fn().mockRejectedValue(new Error('Async error'))
    const asyncMock = vi
      .fn()
      .mockResolvedValueOnce('first call')
      .mockRejectedValueOnce(new Error('Async error'))
    await asyncMock()
    // await asyncMock()
  })

  test('test mockReset', () => {
    const person = {
      greet: (name: string) => `Hello ${name}`,
    }

    const spy = vi.spyOn(person, 'greet').mockImplementation(() => 'mocked')
    expect(person.greet('Alice')).toBe('mocked')
    expect(spy.mock.calls).toEqual([['Alice']])

    // 清空历史和重置实现，但是方法依然是被监视
    spy.mockReset()
    expect(spy.mock.calls).toEqual([])
    expect(person.greet).toBe(spy)
    expect(person.greet('Bob')).toBe('Hello Bob')
    expect(spy.mock.calls).toEqual([['Bob']])
  })

  test('test mockRestore', () => {
    const person = {
      greet: (name: string) => `Hello ${name}`,
    }
    const spy = vi.spyOn(person, 'greet').mockImplementation(() => 'mocked')
    expect(person.greet('Alice')).toBe('mocked')
    expect(spy.mock.calls).toEqual([['Alice']])

    // 清空调用历史和恢复被监视对象方法
    spy.mockRestore()
    expect(spy.mock.calls).toEqual([])
    expect(person.greet).not.toBe(spy)
    expect(person.greet('Bob')).toBe('Hello Bob')
    expect(spy.mock.calls).toEqual([])
  })

  test('test mockResolvedValue', async () => {
    const asyncMock = vi.fn().mockResolvedValue('42')
    const val = await asyncMock()
    expect(val).toBe('42')
  })

  test('test mockResolvedValueOnce', async () => {
    const asyncMock = vi
      .fn()
      .mockResolvedValue('default')
      .mockResolvedValueOnce('first call')
      .mockResolvedValueOnce('second call')
    const firstVal = await asyncMock()
    expect(firstVal).toBe('first call')
    const secondVal = await asyncMock()
    expect(secondVal).toBe('second call')

    expect(await asyncMock()).toBe('default')
    expect(await asyncMock()).toBe('default')
  })
  test('test mockReturnThis', () => {
    const obj = {
      greet() {
        return this
      },
    }
    const myMock = vi.spyOn(obj, 'greet').mockReturnThis()
    expect(obj.greet().greet()).toBe(obj)
    // expect(myMock.mock.calls.length).toBe(2)
  })
  test('test mockReturnValueOnce', () => {
    const myMock = vi
      .fn()
      .mockReturnValue('default')
      .mockReturnValueOnce('first call')
      .mockReturnValueOnce('second call')
    expect(myMock()).toBe('first call')
    expect(myMock()).toBe('second call')
    expect(myMock()).toBe('default')
    expect(myMock()).toBe('default')
  })

  test('test mockCalls', () => {
    const fn = vi.fn()
    fn(1, 2)
    fn(3, 4)
    expect(fn.mock.calls).toEqual([
      [1, 2],
      [3, 4],
    ])
  })

  test('test mockLastCall', () => {
    const fn = vi.fn()
    fn(1, 2)
    fn(3, 4)
    expect(fn.mock.lastCall).toEqual([3, 4])
  })

  test('test mock results', async () => {
    const fn = vi
      .fn()
      .mockReturnValueOnce(12)
      .mockResolvedValueOnce('async value')
      .mockImplementationOnce(() => {
        throw new Error('error')
      })
    try {
      fn()
      fn()
      fn()
    } catch {}
    const results = fn.mock.results
    expect(results[0]).toEqual({ type: 'return', value: 12 })
    expect(results[1]).toEqual({ type: 'return', value: Promise.resolve('async value') })
    expect(results[2]).toEqual({ type: 'throw', value: new Error('error') })
    expect(results[2]?.value.message).toBe('error')
    // console.log(results)
  })

  test('test mock settled results', async () => {
    const fn = vi.fn().mockResolvedValueOnce('result')
    const results = fn()
    // expect(fn.mock.settledResults[0]).toEqual({ type: 'pending', value: undefined })
    // console.log(fn.mock.settledResults)
    await results
    expect(fn.mock.settledResults[0]).toEqual({ type: 'fulfilled', value: 'result' })
  })

  // test('test mock invocationCallOrder', () => {
  //   const fn1 = vi.fn()
  //   const fn2 = vi.fn()
  //   fn1()
  //   fn2()
  //   fn1()
  //   expect(fn1.mock.invocationCallOrder).toEqual([1, 3])
  //   expect(fn2.mock.invocationCallOrder).toBe(2)
  // })
})
