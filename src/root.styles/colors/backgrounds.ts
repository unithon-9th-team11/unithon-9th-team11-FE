import { pallete } from './pallete'

export const backgrounds = {
  base: pallete.white,
  elevated: pallete.white,

  grouped_base: pallete.grey020,
  grouped_contents: pallete.white,
} as const

export type Backgrounds = typeof backgrounds
