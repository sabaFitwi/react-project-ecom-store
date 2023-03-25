import styled from "styled-components";
import { media } from "../../styles/media";

export const ProductDetailContainer = styled.div`
  display: flex;

  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  ${media.md} {
    flex-direction: column;
  }
`;

export const ProductImage = styled.img`
  width: 50%;
  height: 450px;
  margin-right: 1rem;
  object-fit: contain;

  ${media.xs} {
    width: 100%;
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
  flex-grow: 1;

  ${media.xs} {
    margin-left: 0;
  }
`;

export const ProductTitle = styled.h2`
  font-size: 1.5rem;

  ${media.xs} {
    font-size: 1.25rem;
  }
`;

export const ProductDescription = styled.p`
  font-size: 1rem;

  ${media.xs} {
    font-size: 0.875rem;
  }
`;

export const ProductRating = styled.p`
  font-size: 1rem;

  ${media.xs} {
    font-size: 0.875rem;
  }
`;

export const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;

  ${media.xs} {
    font-size: 1.25rem;
  }
`;

export const AddToCartButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #1a237e;
  }

  ${media.xs} {
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
`;
