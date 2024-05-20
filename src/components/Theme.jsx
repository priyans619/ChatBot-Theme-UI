import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

const themes = [
  { background: "linear-gradient(239.26deg, #DDEEED 63.17%, #FDF1E0 94.92%)", bubble: "bg-white" },
  { background: "bg-blue-300", bubble: "bg-indigo-100" },
  { background: "bg-green-300", bubble: "bg-green-100" },
  { background: "bg-yellow-300", bubble: "bg-yellow-100" },
  { background: "bg-red-300", bubble: "bg-red-100" },
  { background: "bg-orange-300", bubble: "bg-orange-100" },
  
];

export const ThemeProvider = ({ children }) => {
  const [themeIndex, setThemeIndex] = useState(() => {
    const savedThemeIndex = sessionStorage.getItem('themeIndex');
    return savedThemeIndex !== null ? parseInt(savedThemeIndex, 10) : 0;
  });

  useEffect(() => {
    sessionStorage.setItem('themeIndex', themeIndex);
  }, [themeIndex]);

  const cycleTheme = () => {
    setThemeIndex((prevThemeIndex) => (prevThemeIndex + 1) % themes.length);
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[themeIndex], cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
