export const pallete = {
  // blue
  blue010: '#E1F5FF',
  blue020: '#B2E5FF',
  blue030: '#7DD5FF',
  blue040: '#44C4FF',
  blue050: '#00B8FF',
  blue060: '#00AAFE',
  blue070: '#009BEF',
  blue080: '#0088DA',

  // coral
  coral010: '#FFEEF1',
  coral020: '#FFD5D9',
  coral030: '#F8A8A5',
  coral040: '#F28882',
  coral050: '#FF6F61',
  coral060: '#FF6247',
  coral070: '#F75B48',
  coral080: '#E45141',

  // navy
  navy050: '#0069FF',
  navy060: '#1B56EC',

  // red
  red050: '#FF2C51',

  //yellow
  yellow050: '#FFF028',
  yellow060: '#FFD324',

  // grey
  grey005: '#FEFEFE',
  grey010: '#FDFDFD',
  grey020: '#F7F8F9',
  grey030: '#E9EBEE',
  grey040: '#C5C8CE',
  grey050: '#646F7C',
  grey060: '#374553',
  grey070: '#28323C',
  grey080: '#161D24',

  // black, white
  black: '#000000',
  white: '#FFFFFF',
} as const

export type Pallete = typeof pallete
