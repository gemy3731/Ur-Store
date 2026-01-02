import * as yup from "yup";

export const productInitialValues = {
  title: "",
  description: "",
  price: 0,
  stock: 0,
  image: null as File | null,
  category: "",
  brand: "",
};

export const productSchema = yup.object({
  title: yup.string().min(3, "Title must be at least 3 characters").max(100, "Title must be less than 100 characters").required("Product title is required"),
  price: yup.number().required().min(10, "Price must be at least $10").positive("Price must be positive"),
  stock: yup.number().required().min(1, "Stock must be at least 1"),
  image: yup.mixed<File>().required("Product image is required"),
  description: yup.string().max(500, "Description must be less than 500 characters"),
  category: yup.string().required("Category is required"),
  brand: yup.string(),
});

export const productEditSchema = yup.object().shape({
  title: yup.string().min(3, "Title must be at least 3 characters").max(100, "Title must be less than 100 characters").required("Product title is required"),
  description: yup.string().max(500, "Description must be less than 500 characters"),
  price: yup.number().positive("Price must be positive").required("Price is required"),
  stock: yup.number().required().min(1, "Stock must be at least 1"),
  category: yup.string().required("Category is required"),
  brand: yup.string(),
  image: yup.mixed(),
});
