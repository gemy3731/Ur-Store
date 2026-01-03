import { Route, Routes } from "react-router";
import { lazy } from "react";
const Dashboard = lazy(() => import("../../pages/dashboard"));

 const VendorContainer = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/*" element={<Dashboard />}/>
    </Routes>
  );
};

export default VendorContainer;