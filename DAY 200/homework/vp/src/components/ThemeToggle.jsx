import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="m-4 bg-gray-800 text-white dark:bg-yellow-300 dark:text-black px-4 py-2 rounded-lg"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
