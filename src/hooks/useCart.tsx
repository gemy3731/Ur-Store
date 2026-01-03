
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
  const [isLoading, setIsLoading] = useState(false);
  const {state} = useAuth();

  useEffect(() => {
    if (!state.user?.id) return;

    let isCancelled = false;
    
    const initCart = async () => {
      if (isLoading) return;
      if (!state.user?.id) return;
      
      setIsLoading(true);
      try {
        const c = await getOrCreateOpenCart(state.user.id);
        if (isCancelled) return;
        
        setCart(c);
        const cartItems = await getCartItems(c.id);
        if (isCancelled) return;
        
        setItems(cartItems);
      } catch (error) {
        console.error("Failed to initialize cart:", error);
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    };

    initCart();

    return () => {
      isCancelled = true;
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
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