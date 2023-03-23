import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./indexStyled";
import { ProductUrl as url } from "../../utility/Constants";
//import { useCart } from "../../hook/useCart";

export default function ProductDetailCard() {
  const [product, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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

  function onAddTOCartClick() {
    console.log(id);
  }
  {
    const { title, description, rating, price, imageUrl } = product;

    return (
      <S.ProductDetailContainer>
        <S.ProductImage src={imageUrl} alt={title} />
        <S.ProductInfoContainer>
          <S.ProductTitle>{title}</S.ProductTitle>
          <S.ProductDescription>{description}</S.ProductDescription>
          <S.ProductRating>{rating} out of 5 stars</S.ProductRating>
          <S.ProductPrice>${price}</S.ProductPrice>
          <S.AddToCartButton onClick={onAddTOCartClick}>
            Add to Cart
          </S.AddToCartButton>
        </S.ProductInfoContainer>
      </S.ProductDetailContainer>
    );
  }
}
