import { create } from "zustand";
import { createUserSlice } from "./user-slice";
import { Store } from "@/types/store";

export const useAppStore = create<Store>()((...a) => ({
  ...createUserSlice(...a),
}));
