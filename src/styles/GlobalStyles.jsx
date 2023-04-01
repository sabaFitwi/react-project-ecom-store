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
    background-color: white;
    min-height: 100vh;
} 
p{
    font-size:20px;
    margin:0;
    
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
    font-weight: 400;
    text-align:center;
    letter-spacing: 1.5px;
   

${media.tablet}{
    font-size: 25px; 
};
${media.mobile}{
    font-size: 20px; 
}
}
h2
{
    font-size: 20px;
    font-weight: 500;
   

${media.tablet}{
    font-size: 18px; 
};
${media.mobile}{
    font-size: 16px; 
}
}
h3
{
    font-size: 18px;
    font-weight: 400;
   

${media.tablet}{
    font-size: 16px; 
};
${media.mobile}{
    font-size: 15px; 
}
}
`;

export default GlobalStyle;
