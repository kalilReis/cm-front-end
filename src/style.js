import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600&display=swap');
   
    /**CSS reset */
    html {
        box-sizing: border-box;
        font-size: 16px;
        color: rgb(102, 102, 102);
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body, h1, h2, h3, h4, h5, h6, p, ol, ul {
        margin: 0;
        padding: 0;
        font-weight: normal;
        font-family: 'Source Sans Pro';
    }

    ol, ul {
        list-style: none;
    }

    *:focus {
        outline: 0 !important;
    }


`

