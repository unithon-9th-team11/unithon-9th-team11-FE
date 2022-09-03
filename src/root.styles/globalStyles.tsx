import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyles = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }
  *:before {
    box-sizing: border-box;
  }
  *:after {
    box-sizing: border-box;
  }
`
