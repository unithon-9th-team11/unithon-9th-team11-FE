import { pallete } from './pallete'

export const shadows = {
  // 25%
  basic: `${pallete.grey070}40`,
  // 10%
  thin: `${pallete.grey070}1A`,
} as const

export type Shadows = typeof shadows
