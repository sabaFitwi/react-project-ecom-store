// import { create } from "zustand";
// const useCartStore = create((set) => ({
//   products: [],
//   cart: JSON.parse(localStorage.getItem("cart")) || [],
//   isLoading: false,
//   hasErrors: false,

//   addProductToCart: (id, quantity = 1) => {
//     set((state) => {
//       const itemIndex = state.cart.findIndex((item) => item.id === id);
//       const itemExists = itemIndex !== -1;
//       const updatedCart = [...state.cart];
//       if (itemExists) {
//         const updatedItem = {
//           ...updatedCart[itemIndex],
//           quantity: updatedCart[itemIndex].quantity + quantity,
//         };
//         updatedCart.splice(itemIndex, 1, updatedItem);
//       } else {
//         updatedCart.push({ id, quantity });
//       }
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       return { cart: updatedCart };
//     });
//   },

//   removeFromCart: (id) => {
//     set((state) => {
//       const updatedCart = state.cart.filter((item) => item.id !== id);

//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       return { cart: updatedCart };
//     });
//   },
//   clearCart: () => {
//     localStorage.removeItem("cart");
//     set({ cart: [] });
//   },
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
//   plusOne: (id) => {
//     set((state) => {
//       const index = state.cart.findIndex((item) => item.id === id);
//       if (index !== -1) {
//         const updatedItem = {
//           ...state.cart[index],
//           quantity: state.cart[index].quantity + 1,
//         };
//         const updatedCart = [...state.cart];
//         updatedCart.splice(index, 1, updatedItem);
//         return { cart: updatedCart };
//       }
//     });
//   },

//   minusOne: (id) => {
//     set((state) => {
//       const index = state.cart.findIndex((item) => item.id === id);
//       if (index !== -1) {
//         const updatedItem = {
//           ...state.cart[index],
//           quantity: Math.max(state.cart[index].quantity - 1, 1),
//         };
//         const updatedCart = [...state.cart];
//         updatedCart.splice(index, 1, updatedItem);
//         return { cart: updatedCart };
//       }
//     });
//   },
// }));
// export default useCartStore;

import { create } from "zustand";

const useCartStore = create((set) => ({
  products: [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  isLoading: false,
  hasErrors: false,

  addProductToCart: (id, quantity = 1) => {
    set((state) => {
      const itemIndex = state.cart.findIndex((item) => item.id === id);
      const itemExists = itemIndex !== -1;
      const updatedCart = [...state.cart];
      if (itemExists) {
        const updatedItem = {
          ...updatedCart[itemIndex],
          quantity: updatedCart[itemIndex].quantity + quantity,
        };
        updatedCart.splice(itemIndex, 1, updatedItem);
      } else {
        updatedCart.push({ id, quantity });
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    });
  },

  removeFromCart: (id) => {
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id);

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    });
  },

  isInCart: (id, state) => {
    const itemIndex = state.cart.findIndex((item) => item.id === id);
    return itemIndex !== -1;
  },

  clearCart: () => {
    localStorage.removeItem("cart");
    set({ cart: [] });
  },

  fetchProducts: async (url) => {
    set(() => ({ loading: true }));
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      set((state) => ({ products: (state.products = json), isLoading: false }));
    } catch (error) {
      set(() => ({ hasErrors: true, isLoading: false }));
    }
  },

  plusOne: (id) => {
    set((state) => {
      const index = state.cart.findIndex((item) => item.id === id);
      if (index !== -1) {
        const updatedItem = {
          ...state.cart[index],
          quantity: state.cart[index].quantity + 1,
        };
        const updatedCart = [...state.cart];
        updatedCart.splice(index, 1, updatedItem);
        return { cart: updatedCart };
      }
    });
  },

  minusOne: (id) => {
    set((state) => {
      const index = state.cart.findIndex((item) => item.id === id);
      if (index !== -1) {
        const updatedItem = {
          ...state.cart[index],
          quantity: Math.max(state.cart[index].quantity - 1, 1),
        };
        const updatedCart = [...state.cart];
        updatedCart.splice(index, 1, updatedItem);
        return { cart: updatedCart };
      }
    });
  },
}));

export default useCartStore;
