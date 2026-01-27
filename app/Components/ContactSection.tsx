import React from "react";

const ContactSection = () => {
  return (
    <div>
      <section className="py-10 border-b border-divider">
        <div className="max-w-102.5 px-16">
          <h1 className="text-5xl font-bold mb-2">contact.</h1>
          <p className="text-secondary mb-6">
            Get in touch with me via social media
          </p>
          <p className="text-primary">
            I&apos;ve worked on this projects using Next.js, React, and Tailwind
            for styling
          </p>
        </div>
      </section>
      <section className="py-10 border-b border-divider">
        <div className="max-w-102.5 px-16">
          <h1 className="text-3xl mb-2">Send me an email</h1>
          <p className="text-secondary mb-6">
            Get in touch with me via social media
          </p>
          <p className="text-primary">
            I&apos;ve worked on this projects using Next.js, React, and Tailwind
            for styling
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
