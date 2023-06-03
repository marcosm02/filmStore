import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'DIN Next', sans-serif;
    }

    body{
        width: 100%;
        height: 100%;
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
        --color-primary: ##D1EFEC;
        --color-secundary: #6558F5;
        --color-secundary-hover: #5046C2;

        --color-grey-4: #293845;
        --color-grey-3: #4B5C6B;
        --color-grey-2: #9EADBA;
        --color-grey-1: #C3CFD9;
        --color-grey-0: #E3E8ED;

        --color-white: #FFFFFF
        --color-bubble-notification: #FDF3D3
        --color-green: #1AAE9F
        --color-red-heart: #c40233
    }
`;
