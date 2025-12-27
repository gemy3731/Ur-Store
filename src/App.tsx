import { BrowserRouter, Route, Routes } from "react-router";
import { Home, Auth, Callback, ProfileSetup } from "./pages";
import { AuthProvider, ThemeProvider } from "./providers";
import { Toaster } from "react-hot-toast";

import { Navbar } from "./components";
import { CustomerProtector } from "./protections";
import { CustomerContainer, VendorContainer } from "./containers";
import SetupProtector from "./protections/SetupProtector";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customer/*" element={ <CustomerProtector><CustomerContainer /></CustomerProtector>}/>
            <Route path="/vendor/*" element={ <VendorContainer />}/>
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
