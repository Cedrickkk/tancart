import { useAppStore } from "@/store/store";
import {
  Link,
  Outlet,
  createRootRoute,
  useNavigate,
} from "@tanstack/react-router";
import { ShoppingCart, UserRound } from "lucide-react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const navigate = useNavigate();
  const items = useAppStore((state) => state.items);

  return (
    <div className="container mx-auto my-9 max-w-screen-xl">
      <header className="flex items-center justify-between py-6">
        <p
          className="cursor-pointer scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl"
          onClick={() => navigate({ to: "/" })}
        >
          <span>Tan</span>
          <span className="text-green-500">Cart</span>
        </p>
        <nav className="flex items-center gap-5 text-sm font-medium uppercase">
          <Link to="/" className="[&.active]:text-green-500/90">
            Home
          </Link>
          <Link to="/products" className="[&.active]:text-green-500/90">
            Products
          </Link>
          <Link to="/about" className="[&.active]:text-green-500/90">
            About
          </Link>
        </nav>
        <div className="flex cursor-pointer items-center gap-3">
          <UserRound />
          {items.length ? (
            <Link to="/cart" className="[&.active]:text-green-500/90">
              <div className="relative">
                <ShoppingCart className="z-100 block" />
                <div className="absolute -right-2 -top-2 z-0">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                    <span>{items.length}</span>
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            <Link to="/cart" className="[&.active]:text-green-500/90">
              <ShoppingCart />
            </Link>
          )}
        </div>
      </header>
      <Outlet />
    </div>
  );
}
