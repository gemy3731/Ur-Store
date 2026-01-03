import { useCart } from "../../hooks";
import OrderSummary from "./OrderSummary"
import ShippingInfo from "./ShippingInfo"


const CheckoutCollection = () => {
  const {items} = useCart();
  return (
    <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl text-foreground font-bold mb-8">Checkout</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ShippingInfo items={items} />
                <OrderSummary items={items} />
            </div>
        </div>
    </div>
  )
}

export default CheckoutCollection