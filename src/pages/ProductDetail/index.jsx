import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ProductDetailContainer = styled.div`
  display: flex;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
`;

const ProductImage = styled.img`
  width: 50%;
  height: auto;
`;

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
`;

const ProductTitle = styled.h2`
  font-size: 1.5rem;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
`;

const ProductRating = styled.p`
  font-size: 1rem;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

const AddToCartButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }
`;

export default function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return <div>Product not</div>;
  }

  const { title, description, rating, price } = product;

  return (
    <ProductDetailContainer>
      <ProductImage src={product.imageUrl} alt={title} />
      <ProductInfoContainer>
        <ProductTitle>{title}</ProductTitle>
        <ProductDescription>{description}</ProductDescription>
        <ProductRating>{rating} out of 5 stars</ProductRating>
        <ProductPrice>${price}</ProductPrice>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </ProductInfoContainer>
    </ProductDetailContainer>
  );
}
