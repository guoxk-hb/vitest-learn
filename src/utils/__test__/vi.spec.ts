import { vi, describe, test, expect } from 'vitest'

describe('mock', () => {
  //vi.fn监视函数
  //vi.spy监视对象的属性
  const mockFn = vi.fn((num: number) => num).mockImplementation((num: number) => num)
  test('test mock name', () => {
    mockFn.mockName('myMock')
    expect(mockFn.getMockName()).toBe('myMock')
  })
  test('test mock implementation', () => {
    mockFn.mockImplementation((num: number) => num)
    expect(mockFn(1)).toBe(1)
    expect(mockFn(2)).toBe(2)
    expect(mockFn.mock.calls[0]?.[0]).toBe(1)
    expect(mockFn.mock.calls[1]?.[0]).toBe(2)
  })
  test('test mock clear', () => {
    mockFn.mockImplementation((num: number) => num + 1)
    expect(mockFn(2)).toBe(3)
    mockFn.mockClear()
    expect(mockFn.mock.calls.length).toBe(0)
    expect(mockFn.mock.calls[0]).toBe(undefined)
  })

  test('test mock implementation once', () => {
    //顺序执行完成之后执行默认的fn(()=>'default')或执行mockImplementation
    // mockFn
    //   .mockImplementationOnce((num: number) => num + 1)
    //   .mockImplementationOnce((num: number) => num - 1)
    mockFn.mockImplementationOnce((num) => num + 1).mockImplementationOnce((num) => num - 1)
    expect(mockFn(1)).toBe(2)
    expect(mockFn(2)).toBe(1)
    expect(mockFn(2)).toBe(2)
  })
})
// - Expected
// + Received

// - 2
// + 3
