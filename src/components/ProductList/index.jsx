import React, { useEffect, useState } from "react";
import Product from "../Product";

import { ProductUrl } from "../../utility/Constants";
import { ProductCard } from "./index.styled";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  console.log(ProductUrl);

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedData = await fetch(url);
        const json = await fetchedData.json();

        setProducts(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData(ProductUrl);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error is occering do some thing</div>;
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
