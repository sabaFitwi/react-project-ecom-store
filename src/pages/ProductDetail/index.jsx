import React, { useEffect } from "react";
import ProductDetailCard from "../../components/ProductDetailCard";

function ProductDetail() {
  useEffect(() => {
    document.title = "Ecom | Product Detail";
  }, []);
  return (
    <div>
      <ProductDetailCard />
    </div>
  );
}

export default ProductDetail;
