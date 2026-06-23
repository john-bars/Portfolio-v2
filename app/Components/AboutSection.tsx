'use client';

import { useSectionInView } from './context/useSectionInView';

const AboutSection = () => {
  const ref = useSectionInView('about');
  return (
    <section
      id="about"
      ref={ref}
      className="shadow-secondary/5 grid min-h-screen w-full px-8 py-32 shadow-md md:px-16 xl:px-40"
    >
      <div>
        <h1 className="text-primary dark:text-primary/80 mb-2 text-4xl font-bold tracking-tight md:text-4xl lg:text-6xl">
          John Bars Quipia
        </h1>
        <p className="text-secondary dark:text-secondary/80 mb-6 text-xl">
          JavaScript Developer
        </p>
      </div>

      <p className="text-primary dark:text-primary/60 text-xl leading-relaxed md:max-w-90 md:self-end md:justify-self-end">
        Hi, I&apos;m Bars. An Electrical Engineer turned Software Engineer. I
        love building and experimenting, which naturally led me to web
        development.
      </p>
    </section>
  );
};

export default AboutSection;
