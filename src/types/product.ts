export type DummyProductResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
};

export type CartProduct = {
  id: number;
  quantity: number;
  title: string;
  price: number;
};
