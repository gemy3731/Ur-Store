import * as yup from "yup";

export const productInitialValues = {
  title: "",
  description: "",
  price: 0,
  stock: 0,
  image: null as File | null,
};

export const productSchema = yup.object({
  title: yup.string().required("Product title is required"),
  price: yup.number().required().min(10, "Price must be at least $10"),
  stock: yup.number().required().min(1, "Stock must be at least 1"),
  image: yup.mixed<File>().required("Product image is required"),
});