
import { useEffect, useState } from "react";
import {
  getOrCreateOpenCart,
  getCartItems,
  addToCart,
  updateCartStatus,
} from "../services/cartService";
import type { Cart, CartItem } from "../types";
import { useAuth } from "../context/Auth.context";
import toast from "react-hot-toast";

export function useCart() {
  const [cart, setCart] = useState<Cart | null>(null);
  const [items, setItems] = useState<CartItem[] | null>([]);
  const {state} = useAuth();

  useEffect(() => {
    if (!state.user?.id) return;

    getOrCreateOpenCart(state.user?.id).then((c) => {
      setCart(c);
      return getCartItems(c.id);
    }).then(setItems);
  }, [state.user?.id]);

  const addItem = async (productId:string, qty = 1) => {
    console.log("first")
    if (!cart) return;
    console.log("second")
    await addToCart(state.user?.id as string, productId, qty);
    const updated = await getCartItems(cart.id);
    setItems(updated);
    toast.success("Item added to cart");
  };

  const updateStatus = async (status:string) => {
    if (!cart) return;
    await updateCartStatus(cart.id, status);
    setCart(null);
    setItems([]);
  };

  return {
    cart,
    items,
    addItem,
    updateStatus,
  };
}
