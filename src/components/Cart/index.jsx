import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductUrl } from "../../utility/Constants";
import { useCart } from "../../hook/useCart";

import { FaRegTrashAlt } from "react-icons/fa";

import {
  Wrapper,
  Row,
  RemoveButton,
  Title,
  Top,
  TopButton,
  Bottom,
  Info,
  PriceDetail,
  Image,
  ProductName,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Summary,
  SummaryItem,
  SummaryTitle,
  Button,
  EmptyItem,
} from "./indexStyle";

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
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasErrors) {
    return <div>Error is occering do some thing</div>;
  }
  /**
   * calculating the total price
   */
  const subtotal = cart.reduce(
    (acc, item) =>
      acc +
      item.quantity * products.find((product) => product.id === item.id).price,
    0
  );
  const vat = 0.25 * subtotal;
  const total = subtotal + vat;

  return (
    <Wrapper>
      <Title>YOUR BAG</Title>
      <Top>
        <Link to={`/`}>
          <TopButton>CONTINUE SHOPPING</TopButton>
        </Link>
        <TopButton type="filled">CHECKOUT NOW</TopButton>
      </Top>
      <Bottom>
        <Info>
          {cart.length > 0 ? (
            cart.map((item) => {
              const { id, quantity } = item;
              const { title, price, imageUrl } = products.find(
                (currProduct) => currProduct.id === id
              );

              return (
                <Row key={id}>
                  <Image src={imageUrl} alt={title} key={id} />
                  <PriceDetail>
                    <ProductName>{title}</ProductName>
                    <ProductPrice>{price}</ProductPrice>
                  </PriceDetail>
                  <ProductAmountContainer>
                    <button onClick={() => minusOne(id)}>-</button>
                    <ProductAmount>{quantity}</ProductAmount>
                    <button onClick={() => plusOne(id)}>+</button>
                  </ProductAmountContainer>
                  <RemoveButton onClick={() => removeFromCart(id, quantity)}>
                    <FaRegTrashAlt />
                  </RemoveButton>
                </Row>
              );
            })
          ) : (
            <EmptyItem>Your cart is empty.</EmptyItem>
          )}
        </Info>
        <Summary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          <SummaryItem>
            <p>Subtotal</p>
            <p>$ {subtotal.toFixed(2)}</p>
          </SummaryItem>
          <SummaryItem>
            <p>Tax(25%)</p>
            <p>$ {vat.toFixed(2)}</p>
          </SummaryItem>

          <SummaryItem type="total">
            <p>Total</p>
            <p>$ {total.toFixed(2)}</p>
          </SummaryItem>
          <Button>CHECKOUT NOW</Button>
        </Summary>
      </Bottom>
    </Wrapper>
  );
};

export default CartBag;
