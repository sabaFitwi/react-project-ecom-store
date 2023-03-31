import { createGlobalStyle } from "styled-components";
import { media } from "./media";

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
p{
    font-size:20px
    
${media.tablet}{
    font-size: 18px; 
};
${media.mobile}{
    font-size: 16px; 
}
}
h1
{
    font-size: 30px;
    font-weight: 500;
    text-align:center;

${media.tablet}{
    font-size: 25px; 
};
${media.mobile}{
    font-size: 20px; 
}
}
`;

export default GlobalStyle;
