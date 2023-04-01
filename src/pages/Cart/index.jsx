import React, { useEffect } from "react";
import CartBag from "../../components/Cart";

function Cart() {
  useEffect(() => {
    document.title = "Ecom | Cart";
  }, []);
  return (
    <div>
      <CartBag />
    </div>
  );
}

export default Cart;
