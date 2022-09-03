// export const colors = {
//   gray1: '#CCCCCC',
//   gray2: '#B8B8B8',
//   gray3: '#8F8F8F',

//   red1: '#fecaca',
//   red2: '#f87171',
//   red3: '#dc2626',

//   green1: '#7dd5ff',
//   green2: '#0088ff',
//   green3: '#009bef',

//   white: '#ffffff',
//   black: '#000000',
// } as const

// const backgrounds = {
//   bg_gray: colors.gray1,
//   bg_black: colors.black,
//   bg_white: colors.white,
// }

// const texts = {
//   primary: colors.green2,
//   sub: colors.gray2,
//   white: colors.white,
//   black: colors.black,
// }

// const borders = {
//   bd_active: colors.green2,
//   bd_warning: colors.red2,
//   bd_black: colors.black,
//   bd_light: colors.gray2,
// }

// const borderRadius = {
//   bd_radius1: '4px',
//   bd_radius2: '8px',
//   bd_radius3: '16px',
// } as const

// export const theme = {
//   colors,
//   backgrounds,
//   texts,
//   borders,
//   borderRadius,
// }

// export type ColorPallete = typeof colors
// export type Texts = typeof texts
// export type Borders = typeof borders
// export type BorderRadius = typeof borderRadius
// export type Theme = typeof theme

import {
  backgrounds,
  pallete,
  borders,
  shadows,
  dims,
  texts,
  buttons,
} from './colors'

export const theme = {
  pallete,
  backgrounds,
  texts,
  shadows,
  dims,
  buttons,
  borders,
} as const

export type Theme = typeof theme
