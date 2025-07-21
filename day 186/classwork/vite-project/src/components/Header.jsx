import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="./public/logo.svg" alt="Extensions" className="w-80 h-9" />
        <span className="text-xl font-semibold">Extensions</span>
      </div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-red-500 transition-colors"
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </button>
    </header>
  );
}

export default Header;
