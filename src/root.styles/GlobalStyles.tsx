import { createGlobalStyle } from 'styled-components';
import resetCss from 'styled-reset';

const GlobalStyles = createGlobalStyle`

  ${resetCss}

  * {
    box-sizing: border-box;
  }
  
  .css-flex-center{
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;

export default GlobalStyles;
