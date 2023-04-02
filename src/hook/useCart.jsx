import useCartStore from "./useCartStore";

function useCart() {
  const addProductToCart = useCartStore((state) => state.addProductToCart);
  const products = useCartStore((state) => state.products);
  const fetchProducts = useCartStore((state) => state.fetchProducts);
  const isLoading = useCartStore((state) => state.isLoading);
  const hasErrors = useCartStore((state) => state.hasErrors);
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const plusOne = useCartStore((state) => state.plusOne);
  const minusOne = useCartStore((state) => state.minusOne);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  function addToCart(id) {
    const product = products.find((product) => product.id === id);
    const isInCart = cart.some((product) => product.id === id);

    if (isInCart) {
      alert(`${product.title} is already in the cart!`);
      return;
    }

    addProductToCart(id);
  }

  return {
    products,
    cart,
    isLoading,
    hasErrors,
    addToCart,
    clearCart,
    fetchProducts,
    plusOne,
    minusOne,
    removeFromCart,
  };
}

export { useCart };
