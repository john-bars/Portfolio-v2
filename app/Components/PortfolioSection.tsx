import Image from "next/image";
import PortfolioContent from "./PortfolioContent";

const PortfolioSection = () => {
  return (
    <div className="min-h-screen w-full">
      <section className="py-16 md:py-10 lg:py-30 px-8 md:px-16 xl:mx-40 xl:px-0">
        <h1 className="">portfolio.</h1>
        <p className="text-2xl text-secondary mb-6">
          Check out some of my personal project studies.
        </p>
        <p className="text-xl text-primary">
          I&apos;ve worked on this projects using Next.js, React, and Tailwind
          for styling
        </p>
      </section>

      <hr className="border-[#dddddd] border-b" />

      <PortfolioContent />

      {/* <section className="py-10 border-b border-divider flex justify-items-center justify-center gap-5">
        <div className="max-w-102.5">
          <h1 className="text-5xl font-bold mb-2">FilmPire</h1>
          <p className="text-secondary mb-6">
            Check out some of my personal project studies.
          </p>
          <p className="text-primary">
            I&apos;ve worked on this projects using Next.js, React, and Tailwind
            for styling
          </p>
        </div>
        <Image
          src="/images/devflow_image.png"
          alt="DevFlow Image"
          width={300}
          height={300}
          className="w-full rounded-lg max-w-110"
        />
      </section> */}
    </div>
  );
};

export default PortfolioSection;
