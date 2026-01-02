import { createProductRepo, deleteProductRepo, getProductRepoById, getProductsByVendorRepo, getProductsRepo, updateProductRepo, uploadProductImageRepo } from "../../repositories";
import type { Product } from "../../types";

  
  export async function getAllProducts() {
    const { data, error } = await getProductsRepo();
    if (error) throw new Error("Cannot fetch products");
    return data;
  }
  
  export async function createProduct(product: Product) {
    const imageUrl = await uploadProductImageRepo(product.image as unknown as File);
    const { data, error } = await createProductRepo({...product, image: imageUrl });
    if (error) throw new Error("Cannot create product");
    return data;
  }
  
  export async function updateProduct(id:string, product:Product) {
    let imageUrl = product.image;
  if (product.image && product.image instanceof File) {
    imageUrl = await uploadProductImageRepo(product.image);
  }
    const { data, error } = await updateProductRepo(id, {...product, image: imageUrl });
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