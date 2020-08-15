import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  const setMode = (mode: string): void => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    savedTheme && setTheme(savedTheme);
  }, []);

  return [theme, toggleTheme];
};
