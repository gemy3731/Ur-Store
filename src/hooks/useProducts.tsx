import { useEffect, useState } from "react";
import { getAllProducts } from "../services";
import type { Product } from "../types";


const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getAllProducts().then(setProducts).catch(console.error);
      }, []);
  return products
}

export default useProducts