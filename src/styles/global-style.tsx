import { createGlobalStyle, css } from 'styled-components';

import pxToRem from './functions/pxToRem';

const Resets = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  *:not(dialog) {
    margin: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
`;

const Base = css`
  .no-js body > *:not(noscript) {
    display: none;
  }

  noscript {
    color: red;
  }

  .sr-only {
    position: absolute !important;
    clip-path: inset(50%) !important;
    margin: -1px !important;
    border: 0 !important;
    padding: 0 !important;
    width: 1px !important;
    height: 1px !important;
    overflow: hidden !important;
    white-space: nowrap !important;
  }

  //Added style to all focusable elements when using tab or keyboard selection
  *:focus-visible {
    outline: ${pxToRem(1)} solid ${({ theme }) => theme.color.accent.main};
    outline-offset: 3px;
  }

  *,
  *::before,
  *::after {
    transition:
      color ${({ theme }) => theme.transition.color.delay} ${({ theme }) => theme.transition.color.timingFunc},
      background-color ${({ theme }) => theme.transition.color.delay}
        ${({ theme }) => theme.transition.color.timingFunc},
      fill ${({ theme }) => theme.transition.color.delay} ${({ theme }) => theme.transition.color.timingFunc},
      stroke ${({ theme }) => theme.transition.color.delay} ${({ theme }) => theme.transition.color.timingFunc},
      box-shadow ${({ theme }) => theme.transition.color.delay} ${({ theme }) => theme.transition.color.timingFunc},
      border-color ${({ theme }) => theme.transition.color.delay} ${({ theme }) => theme.transition.color.timingFunc};
  }
`;

const GlobalStyle = createGlobalStyle`
  ${Resets}
  ${Base}
`;

export default GlobalStyle;
