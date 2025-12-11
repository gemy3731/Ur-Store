import { useEffect, useState } from "react";
import FilterSection from "./FilterSection";
import ProductsMain from "./ProductsMain";
import type { Product } from "../../types";
import { useDebounce, useProducts } from "../../hooks";


const ProductsCollection = () => {
  const products = useProducts();
  console.log(products)

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
  }, [selectedCategory, selectedBrand, products]);
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
  }, [debouncedSearch, products]);

  useEffect(() => {
    setProductsState(products);
  },[products]);
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
