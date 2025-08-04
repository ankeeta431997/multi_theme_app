import React, { createContext, useContext, useState, useEffect } from "react";
import theme1 from "../themes/theme1";
import theme2 from "../themes/theme2";
import theme3 from "../themes/theme3";
import "./ThemeProvider.css"; // <-- Import the CSS file

type Theme = typeof theme1;

interface ThemeContextType {
  theme: Theme;
  setThemeByName: (name: string) => void;
}

const themes = { theme1, theme2, theme3 };

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(theme1);
  const [themeName, setThemeName] = useState<string>("theme1");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "theme1";
    setTheme(themes[saved as keyof typeof themes]);
    setThemeName(saved);
  }, []);

  const setThemeByName = (name: string) => {
    setTheme(themes[name as keyof typeof themes]);
    setThemeName(name);
    localStorage.setItem("theme", name);
  };

  const layoutClass = theme.layout === "sidebar" ? "flex" : "block";
  const containerClass = `theme-container ${layoutClass} ${themeName}`;

  return React.createElement(
    ThemeContext.Provider,
    { value: { theme, setThemeByName } },
    React.createElement("div", { className: containerClass }, children)
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be inside ThemeProvider");
  return context;
};
