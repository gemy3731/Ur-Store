import type { Cart } from "../../types";
import { supabase } from "../../utils";

type GetCartInput = Pick<Cart, "user_id" | "status">;
export async function getCartRepo({ user_id, status }: GetCartInput) {
  return await supabase.from("carts").select("*").eq("user_id", user_id).eq("status", status).single();
}


export async function createCartRepo(userId:string) {
  return await supabase.from("carts").insert({ user_id: userId, status: "open" }).select().single();
}


export async function updateCartRepo(cartId:string, status:string) {
  return await supabase.from("carts").update({ status }).eq("id", cartId);
}

export async function deleteCartRepo(id:string) {
  return await supabase.from("carts").delete().eq("id", id);
}
