import { describe, test, expect, vi } from 'vitest'

describe('fake', () => {
  vi.useFakeTimers()
  test('a fake timer', () => {
    let i = 0
    setInterval(() => console.log(++i), 50)

    vi.advanceTimersByTime(3000)
  })
})
