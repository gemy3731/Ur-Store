import { ShoppingCart } from "lucide-react";
import type { Product } from "../../types";
import { useCart } from "../../hooks/useCart";
import { useAuth } from "../../context/Auth.context";

const ProductsCard = ({ product }: { product: Product }) => {
  const {addItem} = useCart();
  const {state} = useAuth();
  const isAuthorized = state.isAuth && state.user?.role === 'customer';
  return (
    <div className="rounded-lg border border-border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-lg transition-all group">
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="flex justify-between items-center gap-2">
        <h3 className="font-semibold text-lg line-clamp-1">{product.title}</h3>
        {product.stock == 0 &&<span className="text-sm text-destructive rounded-md  px-2 py-1">Out of stock</span>}
        </div>
        <p className="text-muted-foreground text-sm line-clamp-1">
          {product.description}
        </p>
      </div>
      <div className="p-6 pt-0 flex justify-between items-center">
        <span className="text-2xl font-bold text-primary">
          ${product.price}
        </span>
        {isAuthorized&&<button
          type="button"
          onClick={() => addItem(product.id!)}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          <ShoppingCart size={24} /> Add to cart
        </button>}
      </div>
    </div>
  );
};

export default ProductsCard;
