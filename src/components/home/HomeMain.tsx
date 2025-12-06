import { Package } from "lucide-react";
import { useState } from "react";
import ProductsCard from "../shared/ProductsCard";
import type { Product } from "../../types";

const products: Product[] = [
  {
    id: "1",
    title: "Product 1",
    description: "Description for Product 1",
    price: 19.99,
    brand: "Brand 1",
    category: "Category 1",
    image:
      "https://nqblbbkuwgirjcmcmckj.supabase.co/storage/v1/object/public/blog_images/1793a561-e4c9-4dda-8945-b64e338458f4",
  },
  {
    id: "2",
    title: "Product 2",
    description: "Description for Product 2",
    price: 29.99,
    brand:"Brand 2",
    category:"Category 2",
    image:
      "https://nqblbbkuwgirjcmcmckj.supabase.co/storage/v1/object/public/blog_images/1793a561-e4c9-4dda-8945-b64e338458f4",
  },
  {
    id: "3",
    title: "Product 3",
    description:
      "Ultimately, continuous improvement is a long-term commitment rather than a temporary initiative. It requires discipline, patience, and strategic effort. Through consistent practice, individuals and teams can achieve higher performance levels, increased adaptability, and meaningful personal and professional growth in a dynamic and competitive world.",
    price: 39.99,
    brand:"Brand 3",
    category:"Category 3",
    image:
      "https://nqblbbkuwgirjcmcmckj.supabase.co/storage/v1/object/public/blog_images/1793a561-e4c9-4dda-8945-b64e338458f4",
  },
];
const HomeMain = () => {
  const [productsState] = useState<Product[]>(products);
  return (
    <main className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        {productsState.length === 0 ? (
          <div className="text-center py-12">
            <Package className="text-muted-foreground mb-4 mx-auto" size={64} />
            <p className="text-muted-foreground">No products available yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsState.map((product) => (
              <ProductsCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default HomeMain;
