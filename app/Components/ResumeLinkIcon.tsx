'use client';

import DescriptionIcon from '@mui/icons-material/Description';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './theme/ThemeContext';

const ResumeLinkIcon = () => {
  const { theme } = useTheme();
  const pathname = usePathname();

  if (pathname.startsWith('/resume')) return null;

  return (
    <Link
      href="https://github.com/john-bars"
      target="_blank"
      rel="noreferrer noopener"
      className="fixed bottom-8 left-24 transition-opacity hover:opacity-100 md:hidden"
    >
      <DescriptionIcon
        sx={{ fontSize: { sm: 20 } }}
        className={`opacity-70 transition-colors ${theme === 'dark' ? 'text-white' : ''}`}
      />
    </Link>
  );
};

export default ResumeLinkIcon;
