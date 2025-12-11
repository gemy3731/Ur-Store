import { createProductRepo, deleteProductRepo, getProductsRepo, updateProductRepo } from "../../repositories";
import type { Product } from "../../types";

  
  export async function getAllProducts() {
    const { data, error } = await getProductsRepo();
    if (error) throw new Error("Cannot fetch products");
    return data;
  }
  
  export async function createProduct(product: Product) {
    const { data, error } = await createProductRepo(product);
    if (error) throw new Error("Cannot create product");
    return data;
  }
  
  export async function updateProduct(id:string, product:object) {
    const { data, error } = await updateProductRepo(id, product);
    if (error) throw new Error("Cannot update product");
    return data;
  }
  
  export async function deleteProduct(id:string) {
    const { data, error } = await deleteProductRepo(id);
    if (error) throw new Error("Cannot delete product");
    return data;
  }
  