import { Plus } from "lucide-react";
import { Button } from "../ui";
import { useState } from "react";
import ProductModal from "./ProductModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <Button type="button" className="w-fit! px-8!" onClick={() => setIsModalOpen(true)}>
        <Plus className="h-5 w-5" size={20} /> Add Product
      </Button>
      {isModalOpen && <ProductModal setIsModalOpen={setIsModalOpen} />}
    </header>
  );
};

export default Header;
