import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";

const CartCollection = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <CartItem
              img="https://nqblbbkuwgirjcmcmckj.supabase.co/storage/v1/object/public/blog_images/1793a561-e4c9-4dda-8945-b64e338458f4"
              title="T-Shirt"
              price={859}
              amount={1}
            />
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
