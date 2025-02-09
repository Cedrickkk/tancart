import { fetchProductById } from "@/api";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/store/store";
import {
  createFileRoute,
  useLoaderData,
  useNavigate,
} from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/products/$productId")({
  loader: ({ params }) => fetchProductById(Number(params.productId)),
  component: RouteComponent,
});

function RouteComponent() {
  const product = useLoaderData({ from: "/products/$productId" });
  const addToCart = useAppStore((state) => state.addToCart);
  const navigate = useNavigate({ from: "/products/$productId" });

  return (
    <div className="mt-9 min-h-screen">
      <Button
        variant="ghost"
        className="flex items-center gap-2"
        onClick={() => navigate({ to: "/products" })}
      >
        <ArrowLeft />
        Go Back
      </Button>
      <div className="flex items-center justify-between gap-3">
        <div>
          <img
            src={product.images[0]}
            alt={product.title}
            className="aspect-16/9 h-1/2 scale-x-[-1] object-cover"
          />
        </div>
        <div className="flex flex-col justify-between space-y-4">
          <h3 className="text-2xl font-semibold tracking-tight">
            {product.title}
          </h3>
          <p className="text-3xl font-bold tracking-tight">${product.price}</p>
          <div className="my-2">
            <p className="text-xs font-medium uppercase text-muted-foreground">
              Description
            </p>
            <p>{product.description}</p>
          </div>
          <Button onClick={() => addToCart(product)}>Add to cart</Button>
        </div>
      </div>
    </div>
  );
}
