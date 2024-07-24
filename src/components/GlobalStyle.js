import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    overflow-x: hidden;
  }
  .content {
    padding: 2rem;
  }
`;

export default GlobalStyle;
