import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

html{
    box-sizing: border-box;
}

*, *::after,*::before{
    box-sizing: inherit;
} 

body, a, button{
    font-family: 'Montserrat', sans-serif;
}
body{
    margin: 0;
    padding: 0;
    overflow: hidden;
}
`;

export default GlobalStyle;
