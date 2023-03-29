import styled from "styled-components";
import { media } from "../../styles/media";

export const ProductDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  ${media.tablet} {
    gap: 20px;
  }

  ${media.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 16px;
    margin: 8px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 450px;
  margin-right: 16px;
  object-fit: cover;

  ${media.tablet} {
    height: 300px;
    margin-right: 0;
    margin-bottom: 16px;
  }

  ${media.mobile} {
    height: 450px;
  }
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 16px;
  flex-grow: 1;

  ${media.tablet} {
    margin-left: 0;
  }
`;

export const ProductTitle = styled.h1`
  font-size: 24px;

  ${media.tablet} {
    font-size: 20px;
  }
`;

export const ProductDescription = styled.p`
  font-size: 18px;
  margin-top: 0;
  ${media.tablet} {
    font-size: 16px;
  }
`;

export const ProductRating = styled.p`
  font-size: 16px;
  margin: 0;
  ${media.tablet} {
    font-size: 14px;
  }
`;

export const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0;

  ${media.tablet} {
    font-size: 20px;
  }
`;

export const AddToCartButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 16px;

  ${media.tablet} {
    margin-top: 40px;
  }
`;

export const Notification = styled.div`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: green;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;

  ${media.tablet} {
    top: 0;
  }
`;
