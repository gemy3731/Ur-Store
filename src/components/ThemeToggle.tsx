import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/Theme.context";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="rounded-full text-foreground"
        >
            {theme === "light" ? (
                <Moon className="h-5 w-5" />
            ) : (
                <Sun className="h-5 w-5" />
            )}
        </button>
    );
};

export default ThemeToggle;