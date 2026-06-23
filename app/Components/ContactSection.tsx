'use client';

import Link from 'next/link';
import ContactForm from './ContactForm';
import { useSectionInView } from './context/useSectionInView';

const ContactSection = () => {
  const ref = useSectionInView('contact');

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen w-full px-8 py-16 shadow-xl md:px-16 xl:px-40"
    >
      <div className="mb-16 md:mb-10 md:max-w-110">
        <h1 className="text-primary dark:text-primary/85 text-[80px] leading-normal font-bold md:text-8xl">
          contact.
        </h1>
        <h3 className="text-secondary text-2xl">
          Looking for a Web Developer?
        </h3>
        <p className="text-primary/65 text-md mt-3">
          Please drop me a message at<span className="sm:hidden">:</span>
          <Link
            href="mailto:johnbars.dev@gmail.com"
            className="hover:text-blue-6000 hover:text-scale-125 text-center font-semibold text-blue-500 max-sm:block"
          >
            {' '}
            johnbars.dev@gmail.com
          </Link>
        </p>
      </div>

      {/* <p className="text-primary mt-2 text-xl">or use this Form</p> */}

      <hr className="border-secondary/25 dark:border-secondary/60 dark:shadow-primary/30 shadow" />

      <ContactForm />
    </section>
  );
};

export default ContactSection;
