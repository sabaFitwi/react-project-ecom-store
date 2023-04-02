import React from "react";
import Nav from "../../Navbar";
import { HeaderWrapper, Logo } from "./indexStyles";
import logo from "../../../assets/logo.png";
import { useCart } from "../../../hook/useCart";

function Header() {
  const { cart } = useCart();
  // const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartCount = Array.isArray(cart)
    ? cart.reduce((acc, item) => acc + item.quantity, 0)
    : 0;

  return (
    <HeaderWrapper>
      <Logo src={logo} alt="Logo" />

      <Nav cartCount={cartCount} />
    </HeaderWrapper>
  );
}

export default Header;
