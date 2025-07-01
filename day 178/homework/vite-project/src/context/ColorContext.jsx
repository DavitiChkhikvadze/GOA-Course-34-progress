import { createContext, useContext, useState } from "react";

const ColorContext = createContext();

export function useColor() {
  return useContext(ColorContext);
}

export function ColorProvider({ children }) {
  const [isDark, setIsDark] = useState(true);
  const toggleColor = () => setIsDark((prev) => !prev);

  return (
    <ColorContext.Provider value={{ isDark, toggleColor }}>
      {children}
    </ColorContext.Provider>
  );
}
