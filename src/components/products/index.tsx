import { useEffect, useState } from "react";
import FilterSection from "./FilterSection";
import ProductsMain from "./ProductsMain";
import type { Product } from "../../types";
import { useDebounce } from "../../hooks";

const products: Product[] = [
  {
    id: "1",
    title: "car",
    description: "Description for Product 1",
    price: 19.99,
    brand: "Nike",
    category: "Fashions",
    image:
      "https://nqblbbkuwgirjcmcmckj.supabase.co/storage/v1/object/public/blog_images/1793a561-e4c9-4dda-8945-b64e338458f4",
  },
  {
    id: "2",
    title: "t-shirt",
    description: "Description for Product 2",
    price: 29.99,
    brand: "Nike",
    category: "Electronics",
    image:
      "https://nqblbbkuwgirjcmcmckj.supabase.co/storage/v1/object/public/blog_images/1793a561-e4c9-4dda-8945-b64e338458f4",
  },
  {
    id: "3",
    title: "carateh",
    description:
      "Ultimately, continuous improvement is a long-term commitment rather than a temporary initiative. It requires discipline, patience, and strategic effort. Through consistent practice, individuals and teams can achieve higher performance levels, increased adaptability, and meaningful personal and professional growth in a dynamic and competitive world.",
    price: 39.99,
    brand: "Electronics",
    category: "Adidas",
    image:
      "https://nqblbbkuwgirjcmcmckj.supabase.co/storage/v1/object/public/blog_images/1793a561-e4c9-4dda-8945-b64e338458f4",
  },
];
const ProductsCollection = () => {
  const [productsState, setProductsState] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [searchedProducts, setSearchedProducts] = useState<Product[]|null>(null);
  const [searchValue, setSearchValue] = useState<string>("");

  const debouncedSearch = useDebounce(searchValue, 400);

  useEffect(() => {
    if (selectedCategory !== "" && selectedBrand !== "") {
      setProductsState(
        products.filter(
          (product) =>
            product.category === selectedCategory &&
            product.brand === selectedBrand
        )
      );
    }else if (selectedCategory !== "" && selectedBrand === "") {
      setProductsState(
        products.filter((product) => product.category === selectedCategory)
      );
    }else if (selectedCategory === "" && selectedBrand !== "") {
      setProductsState(
        products.filter((product) => product.brand === selectedBrand)
      );
    } else {
      setProductsState(products);
    }
  }, [selectedCategory, selectedBrand]);
  useEffect(() => {
    if (debouncedSearch !== "") {
      setSearchedProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
        )
      );
    } else {
      setSearchedProducts(null);
    }
  }, [debouncedSearch]);
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Browse Products</h1>
        <FilterSection
          setSelectedCategory={setSelectedCategory}
          setSelectedBrand={setSelectedBrand}
          setSearchValue={setSearchValue}
        />
        <ProductsMain products={productsState} searchedProducts={searchedProducts} />
      </div>
    </div>
  );
};

export default ProductsCollection;
