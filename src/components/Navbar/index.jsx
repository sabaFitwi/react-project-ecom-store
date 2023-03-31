// import React, { useState } from "react";
// import { GiShoppingBag } from "react-icons/gi";

// import * as S from "./indexStyle";

// const Nav = ({ cartCount }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     console.log("menu clicked");
//     setIsOpen(!isOpen);
//   };

//   return (
//     <S.NavigationBar>
//       <S.MenuIcon onClick={toggleMenu}>&#9776;</S.MenuIcon>

//       <S.MenuList open={isOpen}>
//         <S.NavigationItem to="/" onClick={toggleMenu}>
//           Home
//         </S.NavigationItem>
//         <S.NavigationItem to="/contact" onClick={toggleMenu}>
//           Contact
//         </S.NavigationItem>
//       </S.MenuList>

//       <S.ShoppingCartIcon to="/cart">
//         <S.ShoppingBag>
//           <GiShoppingBag />
//         </S.ShoppingBag>
//         {cartCount > 0 && <S.CartCount>{cartCount}</S.CartCount>}
//       </S.ShoppingCartIcon>
//     </S.NavigationBar>
//   );
// };

// export default Nav;
import React, { useState } from "react";
import { GiShoppingBag } from "react-icons/gi";

import * as S from "./indexStyle";

const Nav = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = (item) => {
    setActiveItem(item);
    toggleMenu();
  };

  return (
    <S.NavigationBar>
      <S.MenuIcon onClick={toggleMenu}>&#9776;</S.MenuIcon>

      <S.MenuList open={isOpen}>
        <S.NavigationItem
          to="/"
          onClick={() => handleNavItemClick("Home")}
          className={activeItem === "Home" ? "active" : ""}
        >
          Home
        </S.NavigationItem>
        <S.NavigationItem
          to="/contact"
          onClick={() => handleNavItemClick("Contact")}
          className={activeItem === "Contact" ? "active" : ""}
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
