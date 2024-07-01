import { createGlobalStyle } from "styled-components";
import './reset.css'

export const GlobalStyled = createGlobalStyle`
    &:root {
    --font: 'Montserrat', sans-serif;
    --branco: #efefef;
    --preto: #000;
    --cinza: #e2e2e2;
    }
    
    

    .black{
        font-family: var(--font);
        background-color: var(--preto);
        color: var(--branco);
        a{
            color: var(--branco);
            text-decoration: none;
            
        }
    }

    body {

        font-family: var(--font);
        background-color: var(--branco);
    }
`