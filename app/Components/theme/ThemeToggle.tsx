'use client';

import { useTheme } from './ThemeContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { usePathname } from 'next/navigation';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const hide = pathname.startsWith('/resume');

  if (hide) return null;

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="fixed bottom-8 left-8 transform cursor-pointer transition-all duration-200 hover:scale-125"
    >
      {theme === 'light' ? (
        <DarkModeIcon
          sx={{ fontSize: { sm: 22, md: 24 } }}
          className="text-[#555] hover:text-black"
        />
      ) : (
        <LightModeIcon
          sx={{ fontSize: { sm: 22, md: 24 } }}
          className="text-white hover:text-yellow-500"
        />
      )}
    </button>
  );
};

export default ThemeToggle;
