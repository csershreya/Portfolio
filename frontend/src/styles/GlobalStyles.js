import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0; padding: 0; box-sizing: border-box;
  }
  body {
    font-family: 'Segoe UI', sans-serif;
    background-color: #0f172a;
    color: white;
  }
  html {
  scroll-behavior: smooth;
  }  
`;

export default GlobalStyles;
