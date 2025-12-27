
import { useEffect, useState } from "react";
import {
  getOrCreateOpenCart,
  getCartItems,
  addToCart,
  updateCartStatus,
  deleteCartItem,
} from "../services/cartService";
import type { Cart, CartItem } from "../types";
import { useAuth } from "../context/Auth.context";
import toast from "react-hot-toast";

 function useCart() {
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
    if (!cart) return;
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

  const deleteItem = async (productId:string) => {
    if (!cart) return;
    await deleteCartItem(productId);
    const updated = await getCartItems(cart.id);
    setItems(updated);
  };

  return {
    cart,
    items,
    addItem,
    updateStatus,
    deleteItem,
  };
}

export default useCart;