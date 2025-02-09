import { StateCreator } from "zustand";
import { CartProduct, Product } from "../types/product";

export type CartState = {
  items: CartProduct[];
  total: number;
};

export type CartAction = {
  addItemToCart: (product: Product) => void;
  removeItemFromCart: (product: CartProduct) => void;
};

export type CartSlice = CartState & CartAction;

const initialState: CartState = {
  items: [],
  total: 0,
};

export const createCartSlice: StateCreator<CartSlice, [], [], CartSlice> = (
  set,
) => ({
  ...initialState,
  addItemToCart: (product) => {
    set((state) => ({
      ...state,
      items: [...state.items, { ...product, quantity: 1 }],
      total: state.total + product.price,
    }));
  },
  removeItemFromCart: (product) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== product.id),
    }));
  },
});
