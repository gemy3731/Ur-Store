
import { Route, Routes } from "react-router";
import {  Dashboard } from "../../pages";

 const VendorContainer = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/*" element={<Dashboard />}/>
    </Routes>
  );
};

export default VendorContainer;