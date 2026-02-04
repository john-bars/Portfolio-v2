"use client";

import Link from "next/link";
import ContactForm from "./ContactForm";
import { useSectionInView } from "./context/useSectionInView";

const ContactSection = () => {
  const ref = useSectionInView("contact");

  return (
    <section id="contact" ref={ref} className="section">
      <h1 className="heading-primary">contact.</h1>
      <h3 className="heading-tertiary">Looking for a Web Developer?</h3>

      <p className="italic text-primary text-lg mt-2 mb-5">
        Please drop me a message at<span className="sm:hidden">:</span>
        <Link
          href="mailto:john.barsq@gmail.com"
          className="text-center font-semibold text-blue-500  hover:text-blue-6000  max-sm:block hover:text-scale-125"
        >
          {" "}
          john.barsq@gmail.com
        </Link>
      </p>
      {/* <p className="text-xl text-primary mt-2">or use this Form</p> */}
      <hr className="border-[#dddddd] border-b" />
      <ContactForm />
    </section>
  );
};

export default ContactSection;
