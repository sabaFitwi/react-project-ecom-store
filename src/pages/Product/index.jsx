import React, { useEffect } from "react";
import ProductList from "../../components/ProductListCard";
function Product() {
  useEffect(() => {
    document.title = "Ecom | Product";
  }, []);
  return (
    <div>
      <ProductList />
    </div>
  );
}

export default Product;
