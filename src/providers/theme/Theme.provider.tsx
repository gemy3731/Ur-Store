import { useEffect, useState } from "react";
import { ThemeContext, type Theme } from "../../context";

interface ProviderProps {
    children: React.ReactNode
}
const AuthProvider = ({ children }: ProviderProps) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const stored = localStorage.getItem("theme");
        return (stored as Theme) || "light";
      });
      useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
      }, [theme]);
    
      const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
      };
    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export default AuthProvider