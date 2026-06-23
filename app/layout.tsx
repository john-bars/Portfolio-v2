import type { Metadata } from 'next';
import './globals.css';

import Navbars from './Components/Navbars';
import { Toaster } from 'react-hot-toast';
import ThemeProvider from './Components/theme/ThemeContext';
import ThemeToggle from './Components/theme/ThemeToggle';
import ActiveSectionProvider from './Components/context/activeSectionContext';
import GithubLinkIcon from './Components/GithubIcon';
import ResumeLinkIcon from './Components/ResumeLinkIcon';

export const metadata: Metadata = {
  title: 'John Bars Quipia - JavaScript Developer',
  description:
    'Personal portfolio showcasing projects built with React,  Next.js, and modern web development practices.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <ActiveSectionProvider>
            <Navbars />
            {children}
            <ThemeToggle />
            <GithubLinkIcon />
            <ResumeLinkIcon />
            <Toaster position="top-right" />
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
