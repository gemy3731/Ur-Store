import { useEffect, useState } from "react";
import { getAllProducts } from "../services";
import type { Product } from "../types";
import { useAuth } from "../context/Auth.context";


const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const {state} = useAuth();

    useEffect(() => {
      if(!state.loading){
        getAllProducts().then(setProducts).catch(console.error);
      }
    }, [state.loading]);
  return products
}

export default useProducts