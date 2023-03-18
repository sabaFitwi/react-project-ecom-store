// import React, { useState } from 'react';
// import { useApi } from '../../hook/ApiHook';

// import { Link } from 'react-router-dom';
// import {
//   ProductList,
//   ProductItem,
//   ProductImage,
//   AddToCartButton,
//   DiscountTag,
//   Price,
//   DiscountedPrice,
// } from './ProductListStyle';

// const ProductListCard = ({ onAddToCart }) => {
//   const { data, isLoading, isError } = useApi();
//   const [cart, setCart] = useState([]);

//   const handleAddToCart = (product) => {
//     const newCart = [...cart, product];
//     setCart(newCart);

//     if (onAddToCart) {
//       onAddToCart(newCart);
//     }

//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error</div>;
//   }

//   return (
//     <ProductList>
//       {data.map((product) => {
//         const price = product.price;
//         const discountedPrice = product.discountedPrice;
//         const id = product.id;
//         const imageUrl = product.imageUrl;
//         const title = product.title;

//         const discountPercentage = Math.round(
//           ((price - discountedPrice) / price) * 100
//         );

//         return (
//           <ProductItem key={id}>
//             {discountPercentage > 0 && (
//               <DiscountTag>{discountPercentage}% off</DiscountTag>
//             )}
//             <ProductImage src={imageUrl} alt={title} />
//             <h3>{product.title}</h3>

//             <p>
//               {discountedPrice < price ? (
//                 <>
//                   <Price>${price}</Price>
//                   <DiscountedPrice>${discountedPrice}</DiscountedPrice>
//                 </>
//               ) : (
//                 `$${price}`
//               )}
//             </p>
//             <Link to={`/src/pages/Product/${id}`}>view product</Link>

//             <AddToCartButton onClick={() => handleAddToCart(product.id)}>
//               Add to cart
//             </AddToCartButton>
//           </ProductItem>
//         );
//       })}
//     </ProductList>
//   );
// };

// export default ProductListCard;

import React, { useEffect, useState } from 'react';
import Product from '../../pages/Product';

import {ProductUrl} from '../../utility/Constants'

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
    <ul>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default ProductList;
