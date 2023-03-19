// import React, { useState } from 'react';
// import { GiShoppingBag } from 'react-icons/gi';

// import {
//   NavigationBar,
//   NavigationItem,
//   ShoppingCartIcon,
//   ShoppingBag,
//   CartCount,
//   MenuIcon,
//   MenuList,
// } from './NavbarStyle';
// import SearchBar from '../Search';
// //import { icons } from 'react-icons/lib';

// const Nav = ({ cartCount }) => {

//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <NavigationBar>
//       <SearchBar />
//       <MenuIcon onClick={toggleMenu}>&#9776;</MenuIcon>

//       <MenuList open={menuOpen}>
//         <NavigationItem to="/" onClick={toggleMenu}>
//           Home
//         </NavigationItem>
//         <NavigationItem to="/contact" onClick={toggleMenu}>
//           Contact
//         </NavigationItem>
//         <NavigationItem to="/about" onClick={toggleMenu}>
//           About
//         </NavigationItem>
//         <NavigationItem to="/products" onClick={toggleMenu}>
//           Product List
//         </NavigationItem>
//       </MenuList>
//       <ShoppingCartIcon to="/cart"  >
//         <ShoppingBag >
//           <GiShoppingBag />
//         </ShoppingBag>
//         {cartCount > 0 && <CartCount >{cartCount}</CartCount>}
//       </ShoppingCartIcon>
//     </NavigationBar>
//   );
// };

// export default Nav;

import React, { useState } from "react";
import { GiShoppingBag } from "react-icons/gi";

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
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavigationBar>
      <MenuIcon onClick={toggleMenu}>&#9776;</MenuIcon>

      <MenuList open={menuOpen}>
        <NavigationItem to="/" onClick={toggleMenu}>
          Home
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
