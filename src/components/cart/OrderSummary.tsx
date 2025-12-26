import { useNavigate } from "react-router-dom";
import type { CartItem } from "../../types";

interface OrderSummaryProps {
  items: CartItem[];
}
const OrderSummary = ({ items }: OrderSummaryProps) => {
  const navigate = useNavigate();
  const totalCost:number = items.reduce((acc, item) =>  acc += item.products.price * item.quantity,0);
  return (
    <div className="rounded-lg border border-border bg-card text-card-foreground shadow-sm sticky top-20">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Order Summary
        </h3>
      </div>
      <div className="p-6 pt-0 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-semibold">${totalCost}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span className="font-semibold">Calculated at checkout</span>
        </div>
        <div className="border-t border-border pt-2 mt-2">
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-primary">${totalCost}</span>
          </div>
        </div>
      </div>
        <div className="flex items-center p-6 pt-0">
          <button
            type="button"
            onClick={() => navigate("/customer/checkout")}
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full"
          >
            Proceed to Checkout
          </button>
        </div>
    </div>
  );
};

export default OrderSummary;
