'use client';

import Link from 'next/link';
import { useActiveSection } from './context/activeSectionContext';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useEffect } from 'react';

const navItems = ['about', 'portfolio', 'contact'] as const;

const Navbars = () => {
  const { section, setSection } = useActiveSection();
  const pathname = usePathname();
  const hide = pathname?.startsWith('/resume') ?? false;
  const smoothScrollTo = (targetY: number, duration = 600) => {
    const startY = window.scrollY;
    const diff = targetY - startY;
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);

      window.scrollTo(0, startY + diff * easeInOutQuad(progress));

      if (progress < 1) requestAnimationFrame(step);
    };

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    requestAnimationFrame(step);
  };

  const setActiveSection = (section: string) => {
    const el = document.getElementById(section);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY;
    smoothScrollTo(top, 700); // duration here
  };

  useEffect(() => {
    if (!section) return;
    window.history.replaceState(null, '', `#${section}`);
  }, [section]);
  return (
    <nav className="fixed top-8 right-8 bottom-8 z-50 flex flex-col justify-between md:w-18">
      <Link
        href="/"
        onClick={() => setActiveSection('about')}
        className="text-secondary flex justify-end text-right text-xl font-bold print:hidden"
      >
        bars.
      </Link>

      <div className="text-primary flex flex-col text-lg md:gap-2">
        {!hide && (
          <Link
            href="https://github.com/john-bars"
            target="_blank"
            rel="noreferrer noopener"
            className="hidden text-center transition-normal duration-300 hover:scale-110 md:block"
          >
            <GitHubIcon
              sx={{ fontSize: { sm: 20 } }}
              className="cursor-pointer text-gray-500 opacity-70 hover:scale-125 hover:opacity-100"
            />
          </Link>
        )}

        {!hide && (
          <Link
            href="/resume"
            target="_blank"
            rel="noreferrer noopener"
            className="hidden text-center transition-normal duration-300 hover:scale-110 md:block"
          >
            <DescriptionIcon
              sx={{ fontSize: { sm: 20 } }}
              className="cursor-pointer text-gray-500 opacity-70 hover:scale-125 hover:opacity-100"
            />
          </Link>
        )}

        {!hide &&
          navItems.map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              onClick={() => setActiveSection(item)}
              className={clsx(
                'text-right transition-all duration-300 ease-out md:text-center',
                section === item
                  ? 'text-primary text-lg'
                  : 'text-secondary text-sm hover:scale-125',
              )}
            >
              <span className="hidden md:block">{item}</span>
              <span
                className={clsx(
                  'inline-block h-1.5 w-1.5 rounded-full md:hidden',
                  section === item
                    ? 'bg-primary scale-125'
                    : 'bg-secondary opacity-50',
                )}
              />
            </Link>
          ))}
      </div>

      {/* Nav for mobile, hidden for 768px */}
      {!hide &&
        navItems.map(
          (item) =>
            section === item && (
              <div
                key={item}
                className="text-secondary text-right text-sm transition-all transition-discrete duration-300 ease-in md:hidden print:hidden"
              >
                {item}
              </div>
            ),
        )}
    </nav>
  );
};

export default Navbars;
