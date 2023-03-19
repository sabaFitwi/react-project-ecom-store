import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 html 

 {  
    --color-primary:"red",
    --color-secondary:"tomato",
    --color-light:"black",
    --color-text:"snow",
    --color-textDark:"gray",
    --color-bgDefault:"white",
    --color-bgPrimary:"darkBlue",
    --color-bgSecondary:"darkBlue",
    --color-bgLight:"aliceBlue",
    --color-hoverColor:"aliceBlue",
    
 }
body
{
    margin:0;
    padding:0;
    background-color:#f2f2f2
} 
h1
{
    justify-content: center;}
`;

export default GlobalStyle;
