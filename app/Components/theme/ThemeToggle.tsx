"use client";

import { useTheme } from "./ThemeContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="fixed left-8 bottom-8">
      {theme === "light" ? (
        <DarkModeIcon
          sx={{ fontSize: { sm: 22, md: 24 } }}
          className="text-[#555] hover:text-black hover:scale-125 cursor-pointer"
        />
      ) : (
        <LightModeIcon
          sx={{ fontSize: { sm: 22, md: 24 } }}
          className="text-white hover:text-yellow-500 hover:scale-125 cursor-pointer"
        />
      )}
    </button>
  );
};

export default ThemeToggle;
