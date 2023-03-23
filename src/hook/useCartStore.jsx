// const useCartStore = create((set) => ({
//   products: [],
//   cart: [],
//   isLoading: false,
//   hasErrors: false,
//   addProductToCart: (id) => set((state) => ({ cart: [...state.cart, id] })),
//   clearCart: () => set({ cart: [] }),
//   fetchProducts: async (url) => {
//     set(() => ({ loading: true }));
//     try {
//       const response = await fetch(url);
//       const json = await response.json();
//       console.log(json);
//       set((state) => ({ products: (state.products = json), isLoading: false }));
//     } catch (error) {
//       set(() => ({ hasErrors: true, isLoading: false }));
//     }
//   },
// }));
// export default useCartStore;
