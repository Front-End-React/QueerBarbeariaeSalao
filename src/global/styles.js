import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
    }

    body {
        background: black;
        color: #ffffff;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 16px Roboto, sans-serif;
    }

    #root {
        margin: 0 auto;
        padding: 0;
    }
    
    button {
        cursor: pointer;
    }
`;
