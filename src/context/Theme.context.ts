import { createContext, useContext } from "react";

export const InitialThemeState:ThemeContextType  = {
    theme: "light",
    toggleTheme: () => {},
}
export type Theme = "light" | "dark";
interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
  }
export const ThemeContext = createContext<ThemeContextType>(InitialThemeState);
export function useTheme() {
    return useContext(ThemeContext);
}