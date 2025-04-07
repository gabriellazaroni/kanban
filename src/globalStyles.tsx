import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
    --white: #fff;
    --black: #000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      border: 2px solid transparent;
    }
  }

  html, body, #root {
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    font-family: "Inter", sans-serif;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.3;
      z-index: 1;
      pointer-events: none;
      background-image: url("https://www.transparenttextures.com/patterns/black-orchid.png");
      background-repeat: repeat;
    }
  }

  button {
    cursor: pointer;
  }

  button::-moz-focus-inner {
    border: 0;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-border-radius: 0;
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: var(--white) !important;
  }
`