import React from 'react';

function Product(props) {
  console.log(props.product);
  return <li>{props.product.title}</li>;
}

export default Product;