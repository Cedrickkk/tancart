import { fetchProducts } from "@/api";
import { Product } from "@/types/product";
import { StateCreator } from "zustand";

type ProductState = {
  products: Product[];
  loading: boolean;
};

type ProductAction = {
  loadProducts: () => Promise<Product[]>;
};

export type ProductSlice = ProductState & ProductAction;

export const createProductSlice: StateCreator<
  ProductSlice,
  [],
  [],
  ProductSlice
> = (set) => ({
  products: [],
  loading: false,
  loadProducts: async () => {
    set({ loading: true });
    const { products } = await fetchProducts();
    set({ products, loading: false });
    return products;
  },
});
