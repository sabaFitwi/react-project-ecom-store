import React, { useState } from "react";
import { GiShoppingBag } from "react-icons/gi";
//import { useLocation } from "react-router-dom";

import {
  NavigationBar,
  NavigationItem,
  ShoppingCartIcon,
  ShoppingBag,
  CartCount,
  MenuIcon,
  MenuList,
} from "./NavbarStyle";
//import SearchBar from "../Search";

const Nav = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("menu clicked");
    setIsOpen(!isOpen);
  };

  return (
    <NavigationBar>
      <MenuIcon onClick={toggleMenu}>&#9776;</MenuIcon>

      <MenuList open={isOpen}>
        <NavigationItem to="/" onClick={toggleMenu}>
          <li> Home</li>
        </NavigationItem>
        <NavigationItem to="/contact" onClick={toggleMenu}>
          Contact
        </NavigationItem>
        <NavigationItem to="/about" onClick={toggleMenu}>
          About
        </NavigationItem>
        <NavigationItem to="/products" onClick={toggleMenu}>
          Product List
        </NavigationItem>
      </MenuList>

      <ShoppingCartIcon to="/cart">
        <ShoppingBag>
          <GiShoppingBag />
        </ShoppingBag>
        {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
      </ShoppingCartIcon>
    </NavigationBar>
  );
};

export default Nav;
