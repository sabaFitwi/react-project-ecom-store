// import React from 'react';
// import ProductList from './components/ProductList';

// function App() {
//   return (
//     <>
//       <h1>Product List</h1>
//       <ProductList />
//     </>
//   );
// }
// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import RouteNotFound from "./pages/RouteNotFound";
import Layout from "./components/Layout";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import CheckoutSuccess from "./pages/Checkout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Product />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkoutSuccess" element={<CheckoutSuccess />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
