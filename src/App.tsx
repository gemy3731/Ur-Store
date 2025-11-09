import { BrowserRouter, Route, Routes } from "react-router"
import { Home, Auth } from "./pages"
import { AuthProvider, ThemeProvider } from "./providers"

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
