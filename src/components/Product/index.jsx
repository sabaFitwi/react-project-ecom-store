import React, { useState } from "react";
import * as S from "./index.styled";
import { Link } from "react-router-dom";
import { useCart } from "../../hook/useCart";

function Product(props) {
  const { id, title, imageUrl, discountedPrice, price } = props.product;
  const discountPercentage = Math.round(
    ((price - discountedPrice) / price) * 100
  );

  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  function onAddToCartClick() {
    addToCart(id);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  }

  return (
    <S.ProductItem key={id}>
      {discountPercentage > 0 && (
        <S.DiscountTag>{discountPercentage}% off</S.DiscountTag>
      )}
      <S.ProductImageWrapper>
        <S.ViewButtonOverlay>
          <S.ViewButton>View</S.ViewButton>
        </S.ViewButtonOverlay>
        <Link to={`../../ProductDetail/${id}`}>
          <S.ProductImage src={imageUrl} alt={title} />
        </Link>
      </S.ProductImageWrapper>
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
      <S.AddToCartButton added={isAdded} onClick={onAddToCartClick}>
        {isAdded ? "added to cart!" : "Add to cart"}
      </S.AddToCartButton>
    </S.ProductItem>
  );
}

export default Product;
