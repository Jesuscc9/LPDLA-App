import { createGlobalStyle } from "styled-components";

import Roboto from "./Roboto/Roboto-Regular.ttf";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 300;
        src: url(${Roboto}) format('tff');
    }
`;
