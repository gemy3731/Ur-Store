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

export async function getProductRepoById(id:string) {
  return await supabase.from("products").select("*").eq("id", id).single();
}

export async function getProductsByVendorRepo(vendorId:string) {
  return await supabase.from("products").select("*").eq("vendor_id", vendorId);
}

export async function uploadProductImageRepo(file:File) {
  const { data, error } = await supabase.storage
    .from("products")
    .upload(`${Date.now()}_${file.name}`, file);
  if (error) {
    throw error;
  }
  const { data:urlData } = supabase.storage
    .from("products")
    .getPublicUrl(data.path);

  return urlData.publicUrl;
}
