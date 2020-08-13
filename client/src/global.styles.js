import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    max-width: 1400px;
    margin: auto;
    font-family: 'Oswald';
    padding: 20px 40px;

    @media screen and (max-width: 800px){
        padding: 10px
    }
}
a {
    text-decoration: none;
    color: black;
}

* {
    box-sizing: border-box;
}

`;
