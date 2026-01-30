"use client";

import ContactForm from "./ContactForm";
import { useSectionInView } from "./context/useSectionInView";

const ContactSection = () => {
  const ref = useSectionInView("contact");

  return (
    <section id="contact" ref={ref} className="section">
      <h1 className="heading-primary">contact.</h1>
      <h3 className="heading-tertiary pb-10">Send me an email</h3>
      <hr className="border-[#dddddd] border-b" />
      <ContactForm />
    </section>
  );
};

export default ContactSection;
