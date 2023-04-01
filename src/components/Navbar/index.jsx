import React, { useState } from "react";
import { GiShoppingBag } from "react-icons/gi";
import { useLocation } from "react-router-dom";

import * as S from "./indexStyle";

const Nav = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.NavigationBar>
      <S.MenuIcon onClick={toggleMenu}>&#9776;</S.MenuIcon>

      <S.MenuList open={isOpen}>
        <S.NavigationItem
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Home
        </S.NavigationItem>
        <S.NavigationItem
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          Contact
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
