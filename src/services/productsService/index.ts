import { createProductRepo, deleteProductRepo, getProductRepoById, getProductsByVendorRepo, getProductsRepo, updateProductRepo } from "../../repositories";
import type { Product } from "../../types";

  
  export async function getAllProducts() {
    console.log("getAllProducts");
    const { data, error } = await getProductsRepo();
    console.log("data", data);
    console.log("error", error);
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
  
  export async function getProductById(id:string) {
    const { data, error } = await getProductRepoById(id);
    if (error) throw new Error("Cannot get product");
    return data;
  }
  
  export async function getProductsByVendor(vendorId:string) {
    const { data, error } = await getProductsByVendorRepo(vendorId);
    if (error) throw new Error("Cannot get products by vendor");
    return data;
  }