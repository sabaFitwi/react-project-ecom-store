import React from "react";
import * as S from "./index.styled";
import { Link } from "react-router-dom";
//import ProductDetail from "../../pages/ProductDetail";
import { useCart } from "../../hook/useCart";

function Product(props) {
  const { id, title, imageUrl, discountedPrice, price } = props.product;
  const discountPercentage = Math.round(
    ((price - discountedPrice) / price) * 100
  );
  const { addToCart } = useCart();

  return (
    <S.ProductItem key={id}>
      {discountPercentage > 0 && (
        <S.DiscountTag>{discountPercentage}% off</S.DiscountTag>
      )}
      <Link to={`../../ProductDetail/${id}`}>
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
      <S.AddToCartButton onClick={() => addToCart(id)}>
        Add to cart
      </S.AddToCartButton>
    </S.ProductItem>
  );
}

export default Product;
