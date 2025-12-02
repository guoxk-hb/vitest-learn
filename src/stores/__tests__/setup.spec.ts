import { expect, describe, test, beforeEach, it } from 'vitest'

import { useSetupStore } from '../setup'
import { createPinia, setActivePinia } from 'pinia'

describe('setupStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('increments', () => {
    const counter = useSetupStore()
    expect(counter.count).toBe(0)
    counter.increment()
    expect(counter.count).toBe(1)
  })
  it('increments by amount', () => {
    const counter = useSetupStore()
    counter.increment()
    expect(counter.count).toBe(1)
  })
})
