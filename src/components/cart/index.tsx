import { useCart } from "../../hooks/useCart";

import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";

const CartCollection = () => {
  const {items,addItem} = useCart();
  console.log("items");
  if (!items || items.length === 0) {
    return null;
  };
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <CartItem
                key={item.id}
                product={item.products}
                quantity={item.quantity}
                addItem={addItem}
              />
            ))}
          </div>
          <div>
            <OrderSummary total={859} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCollection;
