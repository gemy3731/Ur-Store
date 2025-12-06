import { Package } from "lucide-react";
import type { Product } from "../../types";
import ProductsCard from "../shared/ProductsCard";

interface ProductsMainProps {
    products: Product[];
    searchedProducts: Product[] | null;
}
const ProductsMain = ({ products,searchedProducts }: ProductsMainProps) => {
  return (
    <>
      {products.length === 0 ? (
        <div className="text-center py-12">
          <Package className="text-muted-foreground mb-4 mx-auto" size={64} />
          <p className="text-muted-foreground">No products available yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
          {searchedProducts?(
            searchedProducts.map((product) => (
              <ProductsCard key={product.id} product={product} />
            ))
          ):(
            products.map((product) => (
              <ProductsCard key={product.id} product={product} />
            ))
          )}
        </div>
      )}
    </>
  );
};

export default ProductsMain;
