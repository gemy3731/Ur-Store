import type { authTypes, CartItem } from "../../types";
const baseUrl = import.meta.env.VITE_STIPE_URL
interface StripeProducts{
    name:string;
    quantity:number;
    price:number;
    description:string | undefined;
}
const handleCheckout = async (
  items: CartItem[] | null,
  user: authTypes.UserInfoI | null,
  products:StripeProducts[] | undefined,
) => {
  if (!items || items.length === 0) {
    throw new Error("Cart is empty");
  }
  if (!user) {
    throw new Error("User not logged in");
  }
  const res = await fetch(`${baseUrl}/api/stripe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      products,
      host: window.location.origin,
      cartId: items[0].cart_id,
    }),
  });
  if (!res.ok) {
    throw new Error("Failed to create Stripe session");
  }
  const data = await res.json();
  if (data.url) {
    window.location.href = data.url;
  }
};

export default handleCheckout;