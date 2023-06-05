import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Inter', sans-serif;
    }

    body{
        width: 100%;
        height: 100%;
        background-color: var(--color-grey-4);
    }

    #root{
        width: 100%;
        height: 100%
    }

    .App{
        width: 100%;
        height: 100%
    }

    button{
        cursor: pointer;
    }

    :root {
        --color-primary: #845ef7;
        --color-primary-hover: #5f3dc4;

        --color-grey-4: #121214;
        --color-grey-3: #212529;
        --color-grey-2: #343B41;
        --color-grey-1: #868E96;
        --color-grey-0: #F8F9FA;

        --color-white: #FFFFFF;
        --color-bubble-notification: #FDF3D3;
        --color-green: #1AAE9F;
        --color-red-heart: #c40233;
        --color-red-heart-hover: #450112;
    }
`;
