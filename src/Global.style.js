import { createGlobalStyle } from "styled-components";
import Cocogoose from "./fonts/Cocogoose/cocogoose-pro.semilight.ttf";
import CocogooseLight from "./fonts/Cocogoose/cocogoose-pro.light.ttf";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');

  @font-face {
      font-family: 'Cocogoose Pro Regular Trial';
      src: url(${Cocogoose}) format('truetype');
      font-weight: 100;
      font-style: normal;
      font-display: auto;
    }

  @font-face {
      font-family: 'Cocogoose Pro Regular Trial Light';
      src: url(${CocogooseLight}) format('truetype');
      font-weight: 300;
      font-style: normal;
      font-display: auto;
    }

  body {
    background-color: #1D1D41;
  }

`;
