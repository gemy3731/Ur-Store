import { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  productEditSchema,
  productInitialValues,
  productSchema,
} from "../components/dashboard/product.form";

import type { Props } from "./useCreateProduct";
import { useAuth } from "../context/Auth.context";
import type { Product } from "../types";

const useProductFormState = (
  onSubmit: ({
    selectedImage,
    selectedCategory,
    selectedBrand,
    state,
    values,
  }: Props & {values:Product}) => Promise<void>,
  onSuccess: () => void,
  initialData?: Product
) => {
  const { state } = useAuth();
  const isEditMode = Boolean(initialData?.id);

  const [selectedCategory, setSelectedCategory] = useState(
    initialData?.category ?? ""
  );
  const [selectedBrand, setSelectedBrand] = useState(initialData?.brand ?? "");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const formik = useFormik({
    initialValues: initialData
      ? {
          title: initialData.title,
          description: initialData.description || "",
          price: initialData.price,
          stock: initialData.stock,
          category: initialData.category,
          brand: initialData.brand || "",
          image: initialData.image,
        }
      : productInitialValues,
    validationSchema: isEditMode ? productEditSchema : productSchema,
    enableReinitialize: true,
    onSubmit: async (values: Product) => {
      const imageToSubmit = selectedImage || values.image;
      await onSubmit({
        selectedImage,
        selectedCategory: selectedCategory || values.category,
        selectedBrand: selectedBrand || values.brand || "",
        state,
        values: {
          ...values,
          image: imageToSubmit,
        } as Product,
      });
      onSuccess();
    },
  });

  useEffect(() => {
    if (initialData) {
      setSelectedCategory(initialData.category ?? "");
      setSelectedBrand(initialData.brand ?? "");
    }
  }, [initialData]);

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

export default useProductFormState;
