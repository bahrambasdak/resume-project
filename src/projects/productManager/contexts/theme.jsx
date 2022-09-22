import { useState } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { useContext } from "react";
import { createContext } from "react";

const themeContext = createContext(undefined);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({ mode: "light" });

  const toggleThemeMode = useCallback(
    () =>
      setTheme((prev) => ({
        ...prev,
        mode: prev.mode === "light" ? "dark" : "light",
      })),
    []
  );

  const value = useMemo(
    () => ({ theme, toggleThemeMode }),
    [theme, toggleThemeMode]
  );

  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(themeContext);
  if (context === undefined)
    throw new Error("useTheme must be within ThemProvider!");
  return context;
};

export { useTheme,ThemeProvider };
