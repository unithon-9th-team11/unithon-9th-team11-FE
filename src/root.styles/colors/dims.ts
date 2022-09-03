import { pallete } from './pallete'

export const dims = {
  // 70%
  thick: `${pallete.grey080}BF`,
  // 50%
  basic: `${pallete.grey080}80`,
  // 15%
  thin: `${pallete.grey080}26`,
} as const

export type Dims = typeof dims
