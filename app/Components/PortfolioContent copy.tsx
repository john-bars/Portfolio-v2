'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from './theme/ThemeContext';

const PortfolioContent = () => {
  const { theme } = useTheme();

  const items = [
    {
      id: 1,
      name: 'DevFlow',
      link: 'https://devflow-bars.vercel.app/',
      image: {
        light: '/images/devflow_light.png',
        dark: '/images/devflow_dark.png',
      },
      description:
        'It’s a full-stack, Stack Overflow–inspired Q&A platform featuring job API integration and AI-generated answers powered by OpenAI',
    },
    {
      id: 2,
      name: 'Filmpire',
      link: 'https://filmpire-bars.vercel.app/',
      image: {
        light: '/images/filmpire_light.png',
        dark: '/images/filmpire_dark.png',
      },
      description: 'A movie discovery app powered by the TMDB API.',
    },
  ];
  return (
    <div className="mx-8 my-16 flex flex-col justify-center gap-8 md:my-20 md:grid md:grid-cols-2 md:gap-10 lg:mx-10 lg:mt-24 lg:gap-12 xl:mx-40">
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group border-border w-full max-w-110 rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-gray-300 dark:hover:shadow-xs"
        >
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={theme === 'dark' ? item.image.dark : item.image.light}
              alt={item.name}
              fill
              loading="eager"
              sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/3" />
          </div>
          <div className="pt-4">
            <h4 className="text-primary mb-1 text-lg">{item.name}</h4>
            <p className="text-secondary text-md line-clamp-1 group-hover:line-clamp-3">
              {item.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PortfolioContent;
