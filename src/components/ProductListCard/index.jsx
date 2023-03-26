import React, { useEffect } from "react";
import Product from "../Product";

import { ProductUrl } from "../../utility/Constants";
import { ProductCard } from "./index.styled";

import { useCart } from "../../hook/useCart";

function ProductList() {
  const { products, fetchProducts, isLoading, hasErrors } = useCart();

  useEffect(() => {
    fetchProducts(ProductUrl);
  }, [fetchProducts]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasErrors) {
    return <div>Error is occuring do some thing</div>;
  }

  return (
    <ProductCard>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductCard>
  );
}

export default ProductList;
