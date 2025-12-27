import { brands, categories } from "../../data";
import { Button, Input, Label, Modal, Textarea } from "../ui";
import SelectButton from "../ui/SelectButton";

interface ProductModalProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

const ProductModal = ({ setIsModalOpen }: ProductModalProps) => {
  const setSelectedCategory = (value: string) => {
    console.log("Selected Category:", value);
  }
  const setSelectedBrand = (value: string) => {
    console.log("Selected Brand:", value);
  }
  return (
    <Modal setIsOpen={setIsModalOpen}>
      <div className="flex flex-col space-y-1.5 text-center sm:text-left">
        <h2 className="text-lg font-semibold leading-none tracking-tight">
          Add New Product
        </h2>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="productTitle">Product Title *</Label>
          <Input type="text" id="productTitle" placeholder="Enter product title" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" placeholder="Enter product description" rows={3} ></Textarea>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="price">Price *</Label>
            <Input type="number" id="price" placeholder="Enter product price" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="stock">Stock Quantity *</Label>
            <Input type="number" id="stock" placeholder="Enter stock quantity" required />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <SelectButton defaultValue="All Categories" id="category" listItems={categories} setCurrentValue={setSelectedCategory} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="brand">Brand</Label>
            <SelectButton defaultValue="All Brands" id="brand" listItems={brands} setCurrentValue={setSelectedBrand} />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="image">Image</Label>
          <Input type="file" id="image" placeholder="Upload product image" accept="image/*" />
        </div>
        <Button type="submit">Create Product</Button>
      </form>
    </Modal>
  )
}

export default ProductModal