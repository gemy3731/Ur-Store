import { BrowserRouter, Route, Routes } from "react-router"
import { Home, Auth } from "./pages"
import { AuthProvider } from "./providers"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
