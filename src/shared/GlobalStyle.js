import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    html {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        -webkit-box-sizing: inherit;
           -moz-box-sizing: inherit;
                box-sizing: inherit;
    }

    body {
        color: ${({ theme }) => theme.colors.text};
        background-color: ${({ theme }) => theme.colors.background};
    }
`;
