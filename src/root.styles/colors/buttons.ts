import { pallete } from './pallete'

export const buttons = {
  blue: pallete.blue050,
  coral: pallete.coral050,
  gray: pallete.grey050,
}

export const presseds = {
  // 15%
  light: `${pallete.white}26`,
  // 5%
  dark: `${pallete.grey070}0D`,
} as const

export type Buttons = typeof buttons
export type Presseds = typeof presseds
