import { addCartItemRepo, createCartRepo, getCartItemRepo, getCartItemsRepo, getCartRepo, updateCartItemQtyRepo, updateCartRepo } from "../../repositories";

export async function getOrCreateOpenCart(userId: string) {
  try {
    const { data, error } = await getCartRepo({
      user_id: userId,
      status: "open",
    });

    if (data) return data;

    if (error && error.code !== "PGRST116") {
      throw error;
    }

    const res = await createCartRepo(userId);
    return res.data;
  } catch (error) {
    console.log(error)
    throw error;
  }
}

export async function addToCart(userId:string, productId:string, quantity = 1) {
    const cart = await getOrCreateOpenCart(userId);
  
    const { data: existingItem } = await getCartItemRepo(
      cart.id,
      productId
    );
  
    if (existingItem) {
      const newQuantity = Math.max(0,(existingItem.quantity + quantity) > existingItem?.products.stock ? existingItem?.products.stock : existingItem.quantity + quantity);
      await updateCartItemQtyRepo(
        existingItem.id,
        newQuantity
      );
    } else {
      await addCartItemRepo(cart.id, productId, quantity);
    }
  }
  
  export async function getCartItems(cartId: string) {
    const { data, error } = await getCartItemsRepo(cartId);
    console.log("data", data);
    if (error) throw error;
    return data;
  }
  
  export async function updateCartStatus(cartId: string, status: string) {
    await updateCartRepo(cartId, status);
  }