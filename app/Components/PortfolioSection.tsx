'use client';

import { useSectionInView } from './context/useSectionInView';
import PortfolioContent from './PortfolioContent';

const PortfolioSection = () => {
  const ref = useSectionInView('portfolio');

  return (
    <section
      id="portfolio"
      ref={ref}
      className="shadow-secondary/5 min-h-screen w-full px-8 py-16 shadow-md md:px-16 xl:px-40"
      // className="min-h-screen w-full px-8 py-16 shadow-md md:px-16 xl:px-40"
    >
      <div className="mb-16 md:mb-10 md:max-w-100">
        <h1 className="text-primary dark:text-primary/85 text-[80px] leading-normal font-bold md:text-8xl">
          portfolio.
        </h1>

        <h3 className="text-secondary text-2xl">
          Check out some of my personal project studies.
        </h3>
        <p className="text-primary/65 text-md mt-3">
          I&apos;ve worked on this projects using Next.js, React, and Tailwind
          for styling
        </p>
      </div>

      <hr className="border-secondary/25 dark:border-secondary/60 dark:shadow-primary/30 shadow" />

      <PortfolioContent />
    </section>
  );
};

export default PortfolioSection;
