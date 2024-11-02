import React, { createContext, useContext, useState } from "react";


type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  setThemeFromStorage: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>({} as ThemeContextType);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const setThemeFromStorage = () => {
    const storage: Theme = localStorage.getItem("theme") as Theme;

    if (!storage) {
        return;
    }

    setTheme(storage)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, setThemeFromStorage }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};