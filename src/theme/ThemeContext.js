import { createContext, useCallback } from "react";
import useTheme from "./useTheme";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const { theme, setTheme } = useTheme();
  const toggleTheme = useCallback(() => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [theme, setTheme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
