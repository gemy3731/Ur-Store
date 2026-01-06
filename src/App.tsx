import { BrowserRouter, Route, Routes } from "react-router";
import { AuthProvider, ThemeProvider } from "./providers";
import { Toaster } from "react-hot-toast";

import { Navbar } from "./components";
import { CustomerProtector, SetupProtector, VendorProtector } from "./protections";


import { lazy } from "react";
const Home = lazy(() => import("./pages/home"));
const Auth = lazy(() => import("./pages/auth"));
const Callback = lazy(() => import("./pages/callback"));
const ProfileSetup = lazy(() => import("./pages/profile-setup"));
const CustomerContainer = lazy(() => import("./containers/customerContainer/CustomerContainer"));
const VendorContainer = lazy(() => import("./containers/vendorContainer/VendorContainer"));


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customer/*" element={ <CustomerProtector><CustomerContainer /></CustomerProtector>}/>
            <Route path="/vendor/*" element={<VendorProtector><VendorContainer /></VendorProtector>}/>
            <Route path="/auth" element={<Auth />} />
            <Route path="/callback" element={<Callback />} />
            <Route path="/profile-setup" element={<SetupProtector><ProfileSetup /></SetupProtector>}/>
            <Route path="/*" element={<Home />} />
          </Routes>
        </AuthProvider>
        <Toaster />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
