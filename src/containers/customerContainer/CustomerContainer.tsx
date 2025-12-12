
import { Route, Routes } from "react-router-dom";
import { Cart, Home, Products } from "../../pages";

export const CustomerContainer = () => {
  return (
    <Routes>
      <Route path="/products" element={<Products />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/*" element={<Home />}/>
    </Routes>
  );
};
