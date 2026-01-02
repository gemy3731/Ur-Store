import { brands, categories } from "../../data";
import {
  useCreateProduct,
  useProductFormState,
  useUpdateProduct,
} from "../../hooks";
import type { Product } from "../../types";
import { Button, Input, Label, Modal, Textarea } from "../ui";
import SelectButton from "../ui/SelectButton";

interface ProductModalProps {
  setIsModalOpen: (isOpen: boolean) => void;
  mode: "create" | "edit";
  product?: Product;
}

const ProductModal = ({ setIsModalOpen, mode, product }: ProductModalProps) => {
  const isEditMode = mode === "edit";

  const submitCreate = useCreateProduct();
  const submitUpdate = useUpdateProduct(product?.id || "");
  const onSubmit = isEditMode ? submitUpdate : submitCreate;

  const {
    formik,
    setSelectedCategory,
    setSelectedBrand,
    selectedImage,
    handleImageChange,
  } = useProductFormState(onSubmit, () => setIsModalOpen(false), product);

  return (
    <Modal setIsOpen={setIsModalOpen}>
      <div className="flex flex-col space-y-1.5 text-center sm:text-left">
        <h2 className="text-lg font-semibold leading-none tracking-tight">
          {isEditMode ? "Edit Product" : "Add New Product"}
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
            value={formik.values.description || ""}
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
            <Label htmlFor="category">Category *</Label>
            <SelectButton
              id="category"
              listItems={categories}
              setCurrentValue={(value) => {
                setSelectedCategory(value);
                formik.setFieldValue("category", value);
              }}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="brand">Brand</Label>
            <SelectButton
              id="brand"
              listItems={brands}
              setCurrentValue={(value) => {
                setSelectedBrand(value);
                formik.setFieldValue("brand", value);
              }}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="image">Image {isEditMode ? "(Leave empty to keep current)" : "*"}</Label>
          <Input
            type="file"
            id="image"
            placeholder="Upload product image"
            accept="image/*"
            required={!isEditMode}
            onChange={handleImageChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.image && formik.errors.image && (
            <p className="text-sm text-red-500">{formik.errors.image}</p>
          )}
          {isEditMode && product?.image && typeof product.image === "string" && (
            <p className="text-sm text-gray-500">
              Current: {product.image.split('/').pop()}
            </p>
          )}
        </div>
        <Button
          type="submit"
          disabled={
            formik.isSubmitting ||
            !formik.isValid ||
            (!isEditMode && (!formik.dirty || !selectedImage))
          }
        >
          {isEditMode ? "Update Product" : "Create Product"}
        </Button>
      </form>
    </Modal>
  );
};

export default ProductModal;
