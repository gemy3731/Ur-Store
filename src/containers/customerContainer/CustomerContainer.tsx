
import { Route, Routes } from "react-router-dom";
import { Cart, Checkout, Home, Products } from "../../pages";

export const CustomerContainer = () => {
  return (
    <Routes>
      <Route path="/products" element={<Products />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/checkout" element={<Checkout />}/>
      <Route path="/*" element={<Home />}/>
    </Routes>
  );
};
