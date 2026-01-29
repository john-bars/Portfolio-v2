import PortfolioContent from "./PortfolioContent";
const PortfolioSection = () => {
  return (
    <section className="section bg-gray-100">
      <div className="mb-16 md:mb-10 lg:mb-20">
        <h1 className="heading-primary">portfolio.</h1>
        <h3 className="heading-tertiary">
          Check out some of my personal project studies.
        </h3>
        <p className="text-xl text-primary mt-6">
          I&apos;ve worked on this projects using Next.js, React, and Tailwind
          for styling
        </p>
      </div>

      <hr className="border-[#dddddd] border-b" />
      <PortfolioContent />
    </section>
  );
};

export default PortfolioSection;
