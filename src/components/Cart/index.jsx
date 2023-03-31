import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductUrl } from "../../utility/Constants";
import { useCart } from "../../hook/useCart";

import { FaRegTrashAlt } from "react-icons/fa";

import * as C from "./indexStyle";

const CartBag = () => {
  const {
    cart,
    products,
    fetchProducts,
    isLoading,
    hasErrors,
    plusOne,
    minusOne,
    removeFromCart,
  } = useCart();

  useEffect(() => {
    fetchProducts(ProductUrl);
  }, [fetchProducts]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasErrors) {
    return <div>Error is occurring do some thing</div>;
  }
  /**
   * calculating the total price
   */
  const subtotal = cart.reduce((acc, item) => {
    const product = products.find((product) => product.id === item.id);
    if (!product) {
      return acc;
    }
    return acc + item.quantity * product.price;
  }, 0);
  const vat = 0.25 * subtotal;
  const total = subtotal + vat;

  return (
    <C.Wrapper>
      <C.Title>YOUR BAG</C.Title>

      <Link to={`/`}>
        <C.TopButton>CONTINUE SHOPPING</C.TopButton>
      </Link>

      <C.BottomSection>
        <div>
          {cart.length > 0 ? (
            cart.map((item) => {
              const { id, quantity } = item;
              const product = products.find(
                (currProduct) => currProduct.id === id
              );
              if (!product) {
                return null;
              }
              const { title, discountedPrice, imageUrl } = product;

              return (
                <C.Row key={id}>
                  <C.Image src={imageUrl} alt={title} key={id} />
                  <C.PriceQtyWrapper>
                    <C.ProductDetail>
                      <C.ProductName>{title}</C.ProductName>
                      <C.ProductPrice>{discountedPrice}</C.ProductPrice>
                    </C.ProductDetail>
                    <C.ProductAmountContainer>
                      <button onClick={() => minusOne(id)}>-</button>
                      <C.ProductAmount>{quantity}</C.ProductAmount>
                      <button onClick={() => plusOne(id)}>+</button>
                    </C.ProductAmountContainer>
                    <C.RemoveButton
                      onClick={() => removeFromCart(id, quantity)}
                    >
                      <FaRegTrashAlt />
                    </C.RemoveButton>
                  </C.PriceQtyWrapper>
                </C.Row>
              );
            })
          ) : (
            <C.EmptyItem>Your cart is empty.</C.EmptyItem>
          )}
        </div>
        <C.Summary>
          <C.SummaryTitle>ORDER SUMMARY</C.SummaryTitle>
          <C.SummaryItem>
            <p>Subtotal</p>
            <p>$ {subtotal.toFixed(2)}</p>
          </C.SummaryItem>
          <C.SummaryItem>
            <p>Tax(25%)</p>
            <p>$ {vat.toFixed(2)}</p>
          </C.SummaryItem>
          <C.SummaryItem type="total">
            <p>Total</p>
            <p>$ {total.toFixed(2)}</p>
          </C.SummaryItem>{" "}
          <Link to={`/checkoutSuccess`}>
            <C.Button>CHECKOUT NOW</C.Button>
          </Link>
        </C.Summary>
      </C.BottomSection>
    </C.Wrapper>
  );
};

export default CartBag;
