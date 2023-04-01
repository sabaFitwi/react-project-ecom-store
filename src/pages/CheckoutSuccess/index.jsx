import React, { useEffect } from "react";
import { useCart } from "../../hook/useCart";
import * as C from "./indexStyle";

const CheckoutSuccess = () => {
  useEffect(() => {
    document.title = "Ecom | Checkout Success";
  }, []);
  const { clearCart } = useCart();
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <C.Container>
      <C.SuccessMessage>Your order was successful!</C.SuccessMessage>
      <C.BackToStoreLink href="/">Go back to store</C.BackToStoreLink>
    </C.Container>
  );
};

export default CheckoutSuccess;
