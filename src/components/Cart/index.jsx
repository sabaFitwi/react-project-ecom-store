import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductUrl } from "../../utility/Constants";
import { useCart } from "../../hook/useCart";

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

  const total = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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
          {""}
          {cart.map((item) => {
            const { id, quantity } = item;
            const { title, price, imageUrl } = products.find(
              (currProduct) => currProduct.id === id
            );
            console.log("currProduct");
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
                  x
                </RemoveButton>
              </Row>
            );
          })}
        </Info>
        <Summary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          <SummaryItem>
            <p>Subtotal</p>
            <p>$ 80</p>
          </SummaryItem>
          <SummaryItem>
            <p>Estimated Shipping</p>
            <p>$ 5.90</p>
          </SummaryItem>
          <SummaryItem>
            <p>Shipping Discount</p>
            <p>$ -5.90</p>
          </SummaryItem>
          <SummaryItem type="total">
            <p>Total</p>
            <p>$ {total}</p>
          </SummaryItem>
          <Button>CHECKOUT NOW</Button>
        </Summary>
      </Bottom>
    </Wrapper>
  );
};

export default CartBag;
