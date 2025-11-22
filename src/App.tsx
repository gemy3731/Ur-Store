import { BrowserRouter, Route, Routes } from "react-router"
import { Home, Auth, Callback, ProfileSetup } from "./pages"
import { AuthProvider, ThemeProvider } from "./providers"
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/callback" element={<Callback />} />
            <Route path="/profile-setup" element={<ProfileSetup />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </AuthProvider>
        <Toaster />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
