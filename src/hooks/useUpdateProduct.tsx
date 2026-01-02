import toast from "react-hot-toast";
import { updateProduct } from "../services";
import type { AuthStateI } from "../types/auth.types";
import type { Product } from "../types";

interface Props {
    selectedImage?: File | null;
    selectedCategory?: string;
    selectedBrand?: string;
    state:AuthStateI,
    values:Product
}
const useUpdateProduct = (id:string) => {
  return async ({ selectedImage, selectedCategory, selectedBrand,state,values }: Props) => {
    try {
              await updateProduct(id,{ ...values, category: selectedCategory || values.category || "", brand: selectedBrand || values.brand || "", vendor_id: state.user?.id, image: (selectedImage || values.image) as unknown as string });
              toast.success("Product created successfully");
              window.location.reload();
            } catch (error) {
              toast.error("Failed to create product");
              console.error(error);
            }
          }
 

}

export default useUpdateProduct