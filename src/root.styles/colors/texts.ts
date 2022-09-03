import { pallete } from './pallete'

export const texts = {
  primary: pallete.grey060,
  secondary: pallete.grey050,
  disabled: pallete.grey040,
  placeholder: pallete.grey040,
  warning: pallete.yellow050,
  error: pallete.red050,
} as const

export type Texts = typeof texts
