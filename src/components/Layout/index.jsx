import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };
  return (
    <div>
      <Header cartCount={cartCount} />
      <Outlet handleAddToCart={handleAddToCart} />
      <Footer />
    </div>
  );
}
export default Layout;
