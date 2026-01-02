import toast from "react-hot-toast";
import { createProduct } from "../services";
import type { AuthStateI } from "../types/auth.types";
import type { Product } from "../types";

export interface Props {
    selectedImage: File | null;
    selectedCategory: string;
    selectedBrand: string;
    state:AuthStateI
    values:Product
}
const useCreateProduct = () => {
    return async ({ selectedImage, selectedCategory, selectedBrand,state,values }: Props) => {
            try {
              if (!selectedImage) return;
              await createProduct({ ...values, category: selectedCategory, brand: selectedBrand, vendor_id: state.user?.id, image: selectedImage as unknown as string });
              toast.success("Product created successfully");
              window.location.reload();
            } catch (error) {
              toast.error("Failed to create product");
              console.error(error);
            }
          }
 

}

export default useCreateProduct