import { useEffect, useState } from "react";
import { useAuth } from "../../context/Auth.context";
import type { Product } from "../../types";
import { deleteProduct, getProductsByVendor } from "../../services";
import { ProductsCard } from "../shared";
import { Loader } from "../ui";


const Main = () => {
    const {state} = useAuth();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(()=>{
        if(!state.loading){
            getProductsByVendor(state.user?.id as string).then(setProducts).catch(console.error);
        }
    },[state])

    const handleDeleteProduct = async (id: string) => {
        try {
          // console.log("Deleting product with id:", id);
          await deleteProduct(id);
          // window.location.reload();
        } catch (error) {
          console.error("Failed to delete product:", error);
        }
      }
    
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {state.loading&&<Loader />}
        {products.map((product) => (
            <ProductsCard key={product.id} product={product} handleDeleteProduct={handleDeleteProduct} setProducts={setProducts} />
        ))}
    </main>
  )
}

export default Main