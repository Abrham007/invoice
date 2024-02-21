import { useEffect, useState } from "react";

function checkTheme() {
  let localStorageTheme;
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    localStorageTheme = "dark";
  } else {
    localStorage.setItem("theme", "light");
    localStorageTheme = "light";
  }

  return localStorageTheme;
}

export default function useTheme() {
  let localStorageTheme = checkTheme();
  const [theme, setTheme] = useState(localStorageTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [theme]);

  return { theme, setTheme };
}
