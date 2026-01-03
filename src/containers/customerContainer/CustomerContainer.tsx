
import { Route, Routes } from "react-router";

import { lazy } from "react";
const Home = lazy(() => import("../../pages/home"));
const Cart = lazy(() => import("../../pages/cart"));
const Checkout = lazy(() => import("../../pages/checkout"));
const Products = lazy(() => import("../../pages/products"));

 const CustomerContainer = () => {
  return (
    <Routes>
      <Route path="/products" element={<Products />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/checkout" element={<Checkout />}/>
      <Route path="/*" element={<Home />}/>
    </Routes>
  );
};

export default CustomerContainer;