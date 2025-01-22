import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { ShoppingCart, UserRound } from "lucide-react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="container mx-auto my-9 max-w-screen-xl">
      <header className="flex items-center justify-between py-6">
        <p className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
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
        <div className="flex items-center gap-3">
          <UserRound />
          <ShoppingCart />
        </div>
      </header>
      <Outlet />
    </div>
  );
}
