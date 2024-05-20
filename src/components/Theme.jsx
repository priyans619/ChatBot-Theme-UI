import React, { createContext, useState, useContext } from "react";

const themes = [
  { background: "bg-blue-300", bubble: "bg-indigo-100" },
  { background: "bg-green-300", bubble: "bg-green-100" },
  { background: "bg-yellow-300", bubble: "bg-yellow-100" },
  { background: "bg-red-300", bubble: "bg-red-100" },
];

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeIndex, setThemeIndex] = useState(0);

  const cycleTheme = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  const value = {
    theme: themes[themeIndex],
    cycleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
