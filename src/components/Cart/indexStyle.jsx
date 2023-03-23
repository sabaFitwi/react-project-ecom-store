import styled from "styled-components";

export const Wrapper = styled.div`
width:90%;
margin:auto;
 
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 16px;
  border-bottom: 1px solid #ddd;
`;


export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
`;





export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;


export const Bottom = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap :10px;
  justify-content: space-between;

 `;

export const Info = styled.div`
  flex: 4;
`;



export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

export const Image = styled.img`
  width: 150px;
  height:150px;
  object-fit: cover;
  margin:10px;
`;

export const ProductName = styled.span``;

export const PriceDetail = styled.div`
 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;

`;

export const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 200;

`;


export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 100vh;
  position:sticky;
  top: 0;
`;

export const SummaryTitle = styled.h1`
  font-weight: 200;
`;

export const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;



export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

