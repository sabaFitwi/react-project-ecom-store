import React from "react";
import * as S from "./index.styled";

function Product(props) {
  const { id, title, imageUrl, discountedPrice, price } = props.product;
  const discountPercentage = Math.round(
    ((price - discountedPrice) / price) * 100
  );
  return (
    <S.ProductItem key={id}>
      {discountPercentage > 0 && (
        <S.DiscountTag>{discountPercentage}% off</S.DiscountTag>
      )}
      <S.ProductImage src={imageUrl} alt={title} />
      <h3>{title}</h3>

      <p>
        {discountedPrice < price ? (
          <>
            <S.Price>${price}</S.Price>
            <S.DiscountedPrice>${discountedPrice}</S.DiscountedPrice>
          </>
        ) : (
          `$${price}`
        )}
      </p>
      <S.AddToCartButton>Add to cart</S.AddToCartButton>
    </S.ProductItem>
  );
}

export default Product;
