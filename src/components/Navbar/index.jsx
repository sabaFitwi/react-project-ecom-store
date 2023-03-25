import React, { useState } from "react";
import { GiShoppingBag } from "react-icons/gi";
//import { useLocation } from "react-router-dom";

import * as S from "./indexStyle";
//import SearchBar from "../Search";

const Nav = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("menu clicked");
    setIsOpen(!isOpen);
  };

  return (
    <S.NavigationBar>
      <S.MenuIcon onClick={toggleMenu}>&#9776;</S.MenuIcon>

      <S.MenuList open={isOpen}>
        <S.NavigationItem to="/" onClick={toggleMenu}>
          <li> Home</li>
        </S.NavigationItem>
        <S.NavigationItem to="/contact" onClick={toggleMenu}>
          Contact
        </S.NavigationItem>
        <S.NavigationItem to="/about" onClick={toggleMenu}>
          About
        </S.NavigationItem>
        <S.NavigationItem to="/products" onClick={toggleMenu}>
          Product List
        </S.NavigationItem>
      </S.MenuList>

      <S.ShoppingCartIcon to="/cart">
        <S.ShoppingBag>
          <GiShoppingBag />
        </S.ShoppingBag>
        {cartCount > 0 && <S.CartCount>{cartCount}</S.CartCount>}
      </S.ShoppingCartIcon>
    </S.NavigationBar>
  );
};

export default Nav;
