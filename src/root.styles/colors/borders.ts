import { pallete } from './pallete'

export const borders = {
  basic1: pallete.grey030,
  basic2: pallete.grey030,
} as const

export type Borders = typeof borders
