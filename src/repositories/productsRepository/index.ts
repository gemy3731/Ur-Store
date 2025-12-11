import type { Product } from "../../types";
import { supabase } from "../../utils";


export async function getProductsRepo() {
  return await supabase.from("products").select("*");
}

export async function createProductRepo(data:Product) {
  return await supabase.from("products").insert(data);
}

export async function updateProductRepo(id:string, data:object) {
  return await supabase.from("products").update(data).eq("id", id);
}

export async function deleteProductRepo(id:string) {
  return await supabase.from("products").delete().eq("id", id);
}
