import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import { useAuth } from "../../context/Auth.context";

const HomeHeader = () => {
  const {state} = useAuth();
  const isCustomer = state.isAuth && state.user?.role === 'customer';
  return (
    <header className="relative py-20 px-4 bg-linear-to-br from-primary/10 via-background to-accent/5">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
          Welcome to Ur Store
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Discover amazing products from trusted sellers worldwide
        </p>
       {isCustomer&& <Link
          to="/customer/products"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 shadow-lg hover:shadow-xl transition-shadow"
        >
            <ShoppingCart size={24} />Browse Products
        </Link>}
      </div>
    </header>
  );
};

export default HomeHeader;
