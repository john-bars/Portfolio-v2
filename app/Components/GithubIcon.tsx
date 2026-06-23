'use client';

import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from './theme/ThemeContext';
import { usePathname } from 'next/navigation';

const GithubLinkIcon = () => {
  const { theme } = useTheme();
  const pathname = usePathname();
  const hide = pathname.startsWith('/resume');

  if (hide) return null;

  return (
    <Link
      href="https://github.com/john-bars"
      target="_blank"
      rel="noreferrer noopener"
      className="fixed bottom-8 left-16 transition-opacity hover:opacity-100 md:hidden"
    >
      <GitHubIcon
        sx={{ fontSize: { sm: 20 } }}
        className={`opacity-70 transition-colors ${theme === 'dark' && 'text-white'}`}
      />
    </Link>
  );
};

export default GithubLinkIcon;
