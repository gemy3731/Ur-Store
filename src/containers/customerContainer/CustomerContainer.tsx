
import { Route, Routes } from "react-router-dom";
import { Home, Products } from "../../pages";

export const CustomerContainer = () => {
  return (
    <Routes>
      {/* <Route path="/cart" element={<Cart />}/>*/}
      <Route path="/products" element={<Products />}/>
      <Route path="/*" element={<Home />}/>
    </Routes>
  );
};
