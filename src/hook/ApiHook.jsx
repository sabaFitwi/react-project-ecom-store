import { useEffect, useState } from "react";

import { ProductUrl } from "../utility/constants";

export function useApi(url) {
  const [product, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedData = await fetch(ProductUrl);
        const json = await fetchedData.json();

        setProducts(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [url]);

  return { product, isLoading, isError };
}
