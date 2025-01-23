import { fetchProducts } from "@/api";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DummyProductResponse } from "@/types";
import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";

export const Route = createFileRoute("/products/")({
  loader: () => fetchProducts(),
  component: RouteComponent,
});

function RouteComponent() {
  const { products } = useLoaderData({
    from: "/products/",
  }) as DummyProductResponse;

  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id}>
          <img
            src={product.images[0]}
            alt={product.description}
            className="aspect-3/2 h-48 w-full object-cover"
          />
          <CardHeader>
            <CardTitle>{product.title}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
          </CardHeader>
          <CardFooter className="flex items-center justify-between">
            <Button variant="default">Buy</Button>
            <Button variant="secondary">
              <ShoppingCart />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
