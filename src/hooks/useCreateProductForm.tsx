import { useState } from "react";
import { useFormik } from "formik";
import toast from "react-hot-toast";

import { useAuth } from "../context/Auth.context";
import { createProduct } from "../services";
import { productInitialValues, productSchema } from "../components/dashboard/product.form";

 const useCreateProductForm = (
  onSuccess: () => void
) => {
  const { state } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const formik = useFormik({
    initialValues: productInitialValues,
    validationSchema: productSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        if (!selectedImage) return;
        
        await createProduct({ ...values, category: selectedCategory, brand: selectedBrand, vendor_id: state.user?.id, image: selectedImage as unknown as string });

        toast.success("Product created successfully");
        resetForm();
        window.location.reload();
        onSuccess();
      } catch (error) {
        toast.error("Failed to create product");
        console.error(error);
      }
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    if (!file) return;

    setSelectedImage(file);
    formik.setFieldValue("image", file);
  };

  return {
    formik,
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
    selectedImage,
    handleImageChange,
  };
};

export default useCreateProductForm;