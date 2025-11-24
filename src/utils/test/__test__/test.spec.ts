import { expect, test } from 'vitest'

//基础test
test('should work as expected', () => {
  expect(Math.sqrt(9)).toBe(3)
})

let age = 24
let todos = []
//继承 生成一个新的test方法

const myTest = test.extend({
  todos: async ({}, use) => {
    // 在每次测试函数运行之前设置固定装置
    todos.push(1, 2, 3)

    // 使用固定装置的值
    await use(todos)

    // 在每次测试函数运行之后清除固定装置
    todos.length = 0
  },
  age,
})

myTest('test extend', ({}) => {
  // console.log('age:', age)
})

// 跳过
test.skip('should skip as expected', () => {
  //should be 3
  expect(Math.sqrt(9)).toBe(2)
})

const isDev = process.env.NODE_ENV === 'development'

// console.log('isDev:', isDev)
// 判读是否跳过
test.skipIf(isDev)('test skipIf', () => {
  //True 跳过 False 不跳过
  // expect(Math.sqrt(9)).toBe(2)
})

// 判断是否不跳过，与skipIf 相反，
test.runIf(isDev)('test skipIf', () => {
  //与之相反
  expect(Math.sqrt(9)).toBe(2)
})

// test.only('test only', () => {
//   console.log('有我在只跑我这里')
// })

//同时执行 并发测试 必须使用本地测试上下文中的expect
test.concurrent('concurrent test 1', async ({ expect }) => {
  /* ... */
  // console.log(1)
  expect(Math.sqrt(9)).toBe(3)
})
test.concurrent('concurrent test 2', async ({ expect }) => {
  /* ... */
  // console.log(2)
})

// test.skip、 test.only 和 test.todo 适用于并发测试。以下所有组合均有效：

// 顺序执行
test.sequential('sequential test 1', async () => {})
test.sequential('sequential test 2', async () => {})

// TODO: 这里要写注释

// 此测试将在报告中显示一个条目。
test.todo('unimplemented test')

//明确表示断言失败

function myAsyncFunc() {
  return new Promise((resolve) => resolve(1))
}
test.fails('fail test', async () => {
  await expect(myAsyncFunc()).rejects.toBe(1)
})
