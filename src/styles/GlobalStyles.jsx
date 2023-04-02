import { createGlobalStyle } from "styled-components";
import { media } from "./media";

const GlobalStyle = createGlobalStyle`

body
{
    margin:0;
    padding:0;
    background-color:${({ theme }) => theme.color.default};
    min-height: 100vh;
   
  
  

} 
    *{
        font-family:  sans-serif;

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
    color:${({ theme }) => theme.color.primary};
   

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
