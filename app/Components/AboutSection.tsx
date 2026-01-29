const AboutSection = () => {
  return (
    <section className="section grid">
      <div>
        <h1 className="text-primary mb-2 font-bold text-4xl md:text-4xl lg:text-6xl tracking-tight">
          John Bars Quipia
        </h1>
        <p className="text-secondary text-xl mb-6">JavaScript Developer</p>
      </div>

      <p className="text-primary text-xl md:max-w-80 md:justify-self-end md:self-end">
        {/* <p className="text-primary text-xl md:max-w-80 md:absolute md:right-20 md:bottom-32 md:justify-self-end"> */}
        Hi, I&apos;m Bars. An Electrical Engineer turned Software Engineer, I
        love building and experimenting, which naturally led me to web
        development.
      </p>
    </section>
  );
};

export default AboutSection;
