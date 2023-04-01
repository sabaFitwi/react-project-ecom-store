import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./indexStyled";
import { ProductUrl as url } from "../../utility/Constants";
import { useCart } from "../../hook/useCart";
import createStars from "../../utility/RatingStars";
import { FaStarHalfAlt } from "react-icons/fa";

export default function ProductDetailCard() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const { id } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedData = await fetch(url + id);
        const json = await fetchedData.json();
        setProduct(json);
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
    return <div>Error is occurring do some thing</div>;
  }

  const {
    title,
    description,
    rating,
    price,
    imageUrl,
    reviews,
    discountedPrice,
  } = product;

  function onAddToCartClick() {
    addToCart(id);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  }

  return (
    <>
      <S.ProductDetailContainer>
        <S.ProductImage src={imageUrl} alt={title} />
        <S.ProductInfoContainer>
          <S.ProductTitle>{title}</S.ProductTitle>
          <S.ProductDescription>{description}</S.ProductDescription>
          <p>
            {discountedPrice < price ? (
              <>
                <S.ProductPrice>${price}</S.ProductPrice>
                <S.DiscountedPrice>${discountedPrice}</S.DiscountedPrice>
              </>
            ) : (
              `$${price}`
            )}
          </p>

          <S.ProductRating>
            {createStars(rating)}({rating})
            {reviews && reviews.length > 0 && (
              <>
                <span>({reviews.length} reviews)</span>
              </>
            )}
          </S.ProductRating>
          <S.AddToCartButton added={isAdded} onClick={onAddToCartClick}>
            {isAdded ? "Item Added to cart!" : "Add to cart"}
          </S.AddToCartButton>
        </S.ProductInfoContainer>
      </S.ProductDetailContainer>
      <S.ReviewContainer>
        <S.ReviewHeader> Reviews</S.ReviewHeader>
        {reviews && reviews.length > 0 ? (
          reviews.map((review) => (
            <S.ReviewItem key={review.id}>
              <S.Review>
                <S.ReviewAvatar>{review.username.charAt(0)}</S.ReviewAvatar>
                <S.ReviewUserName>{review.username}</S.ReviewUserName>
                <S.ReviewRating>
                  {review.rating % 1 === 0 ? (
                    <>{createStars(review.rating)}</>
                  ) : (
                    <>
                      {createStars(Math.floor(review.rating))}
                      <FaStarHalfAlt />
                      {createStars(5 - Math.ceil(review.rating))}
                    </>
                  )}
                  ({review.rating})
                </S.ReviewRating>
              </S.Review>

              <S.ReviewDescription>{review.description}</S.ReviewDescription>
            </S.ReviewItem>
          ))
        ) : (
          <S.NoReviewText>No reviews yet.</S.NoReviewText>
        )}
      </S.ReviewContainer>
    </>
  );
}
