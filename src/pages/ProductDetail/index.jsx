import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ProductUrl as url } from "../../utility/Constants";

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

export default function ProductDetail() {
  const [product, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  console.log(url);
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedData = await fetch(url + id);
        const json = await fetchedData.json();

        setProducts(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error is occering do some thing</div>;
  }

  // const product = products.find((product) => product.id === Number(id));

  // if (!product) {
  //   return <div>Product not</div>;
  // }

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
