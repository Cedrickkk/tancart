import { Button } from "@/components/ui/button";
import { useAppStore } from "@/store/store";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useShallow } from "zustand/shallow";

export const Route = createFileRoute("/cart")({
  component: RouteComponent,
});

function RouteComponent() {
  const { items, removeItemFromCart } = useAppStore(
    useShallow((state) => ({
      items: state.items,
      removeItemFromCart: state.removeItemFromCart,
    })),
  );

  const navigate = useNavigate();

  if (!items.length) return <p>Cart is empty</p>;

  return (
    <div className="mt-6">
      <p className="text-xl font-semibold">Your Cart</p>
      {items.map((item) => (
        <div className="mt-4 space-y-7 border-b-2 px-3 py-4" key={item.id}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <p>{item.quantity}x</p>
              <p
                className="hover:cursor-pointer hover:underline"
                onClick={() =>
                  navigate({
                    to: "/products/$productId",
                    params: { productId: String(item.id) },
                  })
                }
              >
                {item.title}
              </p>
            </div>
            <div className="flex items-center justify-between gap-6">
              <p>${item.price}</p>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => removeItemFromCart(item)}
              >
                Remove
              </Button>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-7 flex justify-end">
        <p className="uppercase">
          Total:
          <span className="me-2 ms-2 inline-block text-lg font-semibold">
            ${items.reduce((prev, curr) => prev + curr.price, 0).toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
}
