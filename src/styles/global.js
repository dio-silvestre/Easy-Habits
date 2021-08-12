import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root {
    --violetCore: #5965E0;
    --whiteText: #EEEFF3;
    --bkgdColor: #E5E5E5;
    --darkBlue: #2E384D;
    --green: #63E0D0;
    --yellow: #F1D161;
    --violetLight: #B3B9FF;
    --white: #fff;
}

body {
    background-color: var(--bkgdColor);
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased !important
}

h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
}

li {
    list-style-type: none;
}

@media only screen and (min-width: 320px) and (max-width: 768px) {
    body {
        padding: 20px;
    }
}

`;
