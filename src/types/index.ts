export type DummyProductResponse = {
  limit: number;
  skip: number;
  products: Product[];
  total: number;
};

export type Product = {
  id: number;
  title: string;
  images: string[];
  price: number;
  description: string;
};
