import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    position: relative;
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100vw;
  }
  
  #root {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    background: #FAFBFC;
  }
`;
