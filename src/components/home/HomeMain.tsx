import { Package } from "lucide-react";
import ProductsCard from "../shared/ProductsCard";
import { useProducts } from "../../hooks";


const HomeMain = () => {
  const products = useProducts();
  return (
    <main className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        {products.length === 0 ? (
          <div className="text-center py-12">
            <Package className="text-muted-foreground mb-4 mx-auto" size={64} />
            <p className="text-muted-foreground">No products available yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductsCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default HomeMain;
