import React from "react";
import * as S from "./index.styled";
import { Link } from "react-router-dom";
//import ProductDetail from "../../pages/ProductDetail";

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
      <Link to={`/src/pages/ProductDetail/${id}`}>
        <S.ProductImage src={imageUrl} alt={title} />
      </Link>
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
