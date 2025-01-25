import { CartProduct, Product } from "@/types/products";
import { StateCreator } from "zustand";

export type CartState = {
  items: CartProduct[];
  total: number;
};

export type CartAction = {
  addProduct: (product: Product) => void;
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
});
