import { DummyProductResponse } from "@/types/product";

export const fetchProducts = async (): Promise<DummyProductResponse> => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: DummyProductResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
};
