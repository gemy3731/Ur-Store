
import type { CartItem, supabaseReturnedError } from "../../types";
import { supabase } from "../../utils";



export async function getCartItemRepo(cart_id:string,productId:string):Promise<{data: CartItem | null,error:supabaseReturnedError}> {
    return await supabase.from("cart_items").select("*").eq("cart_id", cart_id).eq("product_id", productId).maybeSingle();
}


export async function addCartItemRepo(cart_id:string, product_id:string, quantity:number):Promise<{error:supabaseReturnedError}> {
  return await supabase.from("cart_items").insert({cart_id,product_id,quantity});
}


export async function updateCartItemQtyRepo(id:string,quantity:number):Promise<{error:supabaseReturnedError}> {
    return await supabase.from("cart_items").update({quantity}).eq("id", id);
}

export async function getCartItemsRepo(cartId:string):Promise<{data:CartItem[] | null,error:supabaseReturnedError}> {
    return await supabase.from("cart_items").select("*, products(*)").eq("cart_id", cartId);
  }

export async function deleteCartItemsRepo(id:string):Promise<{error:supabaseReturnedError}> {
    return await supabase.from("cart_items").delete().eq("id", id);
}