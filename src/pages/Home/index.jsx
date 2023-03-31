import React, { useEffect } from "react";

import Banner from "../../components/Banner";

import ProductList from "../../components/ProductListCard";

function Home() {
  useEffect(() => {
    document.title = "Ecom | Home";
  }, []);
  return (
    <div>
      <Banner />

      <ProductList />
    </div>
  );
}
export default Home;
