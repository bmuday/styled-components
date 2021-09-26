import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body { 
        background: ${({ theme }) => theme.colors.body};
        color: hsl(192, 100%, 9%);
        font-size: 1.2rem;
        margin: 0
    }

    p {
        opacity: 0.6;
        line-height: 1.5;
    }

    img {
        max-width: 100%;
    }
`;

export default GlobalStyle;
