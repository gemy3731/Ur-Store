import { useEffect, useState } from "react";
import { useAuth } from "../../context/Auth.context";
import type { Product } from "../../types";
import { getProductsByVendor } from "../../services";
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
    
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {state.loading&&<Loader />}
        {products.map((product) => (
            <ProductsCard key={product.id} product={product} />
        ))}
    </main>
  )
}

export default Main