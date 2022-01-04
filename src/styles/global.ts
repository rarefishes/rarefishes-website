import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
    
    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: #F5F5F5;
    }
`
