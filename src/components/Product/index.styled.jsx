import styled from "styled-components";

export const ProductItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-button: 20px;
  border: 1px solid ${({ theme }) => theme.color.lightgray};
  padding-button: 20px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  overflow: hidden;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  }
`;

export const ProductImageWrapper = styled.div`
  position: relative;
`;

export const ProductImage = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ViewButtonOverlay = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;

  ${ProductImageWrapper}:hover & {
    opacity: 1;
  }
`;

export const ViewButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.color.default};
  font-size: 18px;
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.color.default};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.default};
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const AddToCartButton = styled.button`
  max-width: 100%;
  background-color: ${(props) =>
    props.added
      ? ({ theme }) => theme.color.green
      : ({ theme }) => theme.color.button};
  color: ${({ theme }) => theme.color.default};
  border: none;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px 30px;
  margin: 25px;
  cursor: pointer;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.7);
  }
`;

export const DiscountTag = styled.span`
  background-color: ${({ theme }) => theme.color.red};
  color: ${({ theme }) => theme.color.default};
  font-weight: bold;
  font-size: 16px;
  padding: 4px 8px;
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 1;
`;
export const Price = styled.span`
   {
    text-decoration: line-through;
    color: ${({ theme }) => theme.color.red};
    margin-right: 10px;
  }
`;
export const DiscountedPrice = styled.span`
   {
    font-weight: 600px;
  }
`;
