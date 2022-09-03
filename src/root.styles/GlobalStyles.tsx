import { createGlobalStyle } from 'styled-components';
import resetCss from 'styled-reset';

const GlobalStyles = createGlobalStyle`

  ${resetCss}

  * {
    box-sizing: border-box;
  }
  a {color: black; text-decoration: none; outline: none}
  a:hover, a:active {text-decoration: none; color:black; background-color:transparent}

  .css-flex-center{
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;

export default GlobalStyles;
