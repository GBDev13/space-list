import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 3px;
      height: 3px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.purple};
      border-radius: 0.8rem;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => theme.currentLine};
      border-radius: 0.8rem;
    }
  }

  html {
    min-height: 30rem;
    max-height: 30rem;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.50s linear;
    color:${({ theme }) => theme.foreground};
  }

  body, html, #root {
    width: 100%;
    height: 100%;
  }

  body,
  input,
  textarea,
  button {
    font: 400 1rem "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  ul{
    list-style:none;
  }
`;
