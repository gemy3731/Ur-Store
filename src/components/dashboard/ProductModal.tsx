import { brands, categories } from "../../data";
import { Button, Input, Label, Modal, Textarea } from "../ui";
import SelectButton from "../ui/SelectButton";
import { useCreateProductForm } from "../../hooks";

interface ProductModalProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

const ProductModal = ({ setIsModalOpen }: ProductModalProps) => {
  const {formik,setSelectedCategory,setSelectedBrand,selectedImage,handleImageChange} = useCreateProductForm(() => setIsModalOpen(false));

  return (
    <Modal setIsOpen={setIsModalOpen}>
      <div className="flex flex-col space-y-1.5 text-center sm:text-left">
        <h2 className="text-lg font-semibold leading-none tracking-tight">
          Add New Product
        </h2>
      </div>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Product Title *</Label>
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Enter product title"
            required
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.title && formik.errors.title && (
            <p className="text-sm text-red-500">{formik.errors.title}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Enter product description"
            rows={3}
            value={formik.values.description}
            onChange={formik.handleChange}
          ></Textarea>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="price">Price *</Label>
            <Input
              type="number"
              id="price"
              placeholder="Enter product price"
              required
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.price && formik.errors.price && (
              <p className="text-sm text-red-500">{formik.errors.price}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="stock">Stock Quantity *</Label>
            <Input
              type="number"
              id="stock"
              placeholder="Enter stock quantity"
              required
              value={formik.values.stock}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.stock && formik.errors.stock && (
              <p className="text-sm text-red-500">{formik.errors.stock}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <SelectButton
              defaultValue="All Categories"
              id="category"
              listItems={categories}
              setCurrentValue={setSelectedCategory}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="brand">Brand</Label>
            <SelectButton
              defaultValue="All Brands"
              id="brand"
              listItems={brands}
              setCurrentValue={setSelectedBrand}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="image">Image *</Label>
          <Input
            type="file"
            id="image"
            placeholder="Upload product image"
            accept="image/*"
            required
            onChange={handleImageChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.image && formik.errors.image && (
            <p className="text-sm text-red-500">{formik.errors.image}</p>
          )}
        </div>
        <Button
          type="submit"
          disabled={
            formik.isSubmitting ||
            !formik.isValid ||
            !formik.dirty ||
            !selectedImage
          }
        >
          Create Product
        </Button>
      </form>
    </Modal>
  );
};

export default ProductModal;
