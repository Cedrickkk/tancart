import { create } from "zustand";
import { createUserSlice } from "./user-slice";
import { Store } from "@/types/store";
import { createProductSlice } from "./product-slice";
import { createCartSlice } from "./cart-slice";

export const useAppStore = create<Store>()((...a) => ({
  ...createUserSlice(...a),
  ...createProductSlice(...a),
  ...createCartSlice(...a),
}));
