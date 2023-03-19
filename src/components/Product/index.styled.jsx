import styled from "styled-components";

export const ProductItem = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  position: relative;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
`;

export const AddToCartButton = styled.button`
  max-width: 100%;
  background-color: #4a4325;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  padding: 10px 30px;
  margin-top: 10px;
  cursor: pointer;
`;

export const DiscountTag = styled.span`
  background-color: #ff0000;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  padding: 4px 8px;
  position: absolute;
  top: 16px;
  right: 16px;
`;
export const Price = styled.span`
   {
    text-decoration: line-through;
    color: red;
    margin-right: 10px;
  }
`;
export const DiscountedPrice = styled.span`
   {
    font-weight: 600px;
  }
`;
