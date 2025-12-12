import { ShoppingBag, ShoppingCart, User } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import { NavLink, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();
  if (
    location.pathname.startsWith("/auth") ||
    location.pathname.startsWith("/callback") ||
    location.pathname.startsWith("/profile-setup")
  ) {
    return null;
  }
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="p-2 rounded-lg bg-linear-to-br from-primary to-accent">
            <ShoppingBag className="h-8 w-8 text-white" />
          </div>
          <span className="text-xl font-bold">Ur Store</span>
        </a>
        <div className="flex items-center gap-4">
          <NavLink
            to="/"
            className="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-black hover:bg-primary/90! hover:text-accent-foreground h-10 px-4 py-2 hidden sm:flex"
          >
            <button type="button">Home</button>
          </NavLink>
          <NavLink
            to="/customer/products"
            className="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-black hover:bg-primary/90! hover:text-accent-foreground h-10 px-4 py-2 hidden sm:flex"
          >
            <button type="button">Products</button>
          </NavLink>
          <NavLink
            to="/customer/cart"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:bg-accent hover:text-accent-foreground h-10 w-10 relative"
          >
            <button type="button">
              <ShoppingCart size={24} />
            </button>
          </NavLink>
          <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full">
            <ThemeToggle />
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:bg-accent hover:text-accent-foreground h-10 w-10"
          >
            <User size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
