let count = 0
export function increment(num: number): number {
  return (count = count + num)
}
