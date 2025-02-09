import LoadingCardSkeleton from "@/components/loading-card";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAppStore } from "@/store/store";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";
import { useEffect } from "react";
import { useShallow } from "zustand/shallow";

export const Route = createFileRoute("/products/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { products, loadProducts, loading, addItemToCart } = useAppStore(
    useShallow((state) => ({
      products: state.products,
      loadProducts: state.loadProducts,
      loading: state.loading,
      addItemToCart: state.addItemToCart,
    })),
  );

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <div className="mt-11 grid grid-cols-3 gap-6">
      {loading ? (
        <LoadingCardSkeleton />
      ) : (
        products.map((product) => (
          <Card key={product.id}>
            <Link
              to="/products/$productId"
              params={{ productId: String(product.id) }}
            >
              <img
                src={product.images[0]}
                alt={product.title}
                className="aspect-3/2 h-48 w-full object-cover"
              />
            </Link>

            <CardHeader>
              <p className="my-4 text-2xl font-bold">${product.price}</p>
              <CardTitle>{product.title}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex items-center justify-between">
              <Button variant="default">Buy</Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => addItemToCart(product)}
                className="w-fit px-3"
              >
                <p className="flex items-center gap-2">
                  <ShoppingCart />
                  Add to cart
                </p>
              </Button>
            </CardFooter>
          </Card>
        ))
      )}
    </div>
  );
}
