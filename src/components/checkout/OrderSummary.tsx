import { memo } from "react";
import type { CartItem } from "../../types";

interface OrderSummaryProps {
  items: CartItem[] | null;
}

const OrderSummary = memo(({ items }: OrderSummaryProps) => {
  const totalCost = items?.reduce(
    (acc, item) => (acc += item.products.price * item.quantity),
    0
  );
  return (
    <div className="rounded-lg border border-border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Order Summary
        </h3>
      </div>
      <div className="p-6 pt-0 space-y-4">
        {items?.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <span>
              {item.products.title} * {item.quantity}
            </span>
            <span className="font-semibold">
              ${item.products.price * item.quantity}
            </span>
          </div>
        ))}
        <div className="border-t border-border pt-4 mt-4">
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-primary">${totalCost || 0}</span>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>• Payment will be collected on delivery</p>
          <p>• Estimated delivery: 3-5 business days</p>
        </div>
      </div>
    </div>
  );
});

export default OrderSummary;
