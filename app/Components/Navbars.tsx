"use client";

import Link from "next/link";
import { useActiveSection } from "./context/activeSectionContext";

const Navbars = () => {
  const { section, setSection } = useActiveSection();
  const navItems = ["about", "portfolio", "contact"] as const;
  return (
    <nav className="md:w-18 fixed top-8 bottom-8 right-8 z-50 flex flex-col justify-between">
      <div className="text-secondary text-right font-bold text-xl">bars.</div>
      <div className="flex flex-col md:gap-2 text-primary text-lg">
        {navItems.map((item) => (
          <Link
            key={item}
            href={`#${item}`}
            onClick={() => setSection(item)}
            className={`text-right md:text-center transition-all duration-300 ease-out  ${section === item ? "text-primary text-lg" : "text-secondary text-sm hover:scale-125"}`}
          >
            <span className="hidden md:block">{item}</span>
            <span
              className={`inline-block md:hidden w-1.5 h-1.5 rounded-full transition-all duration-300 ${section === item ? "bg-primary scale-125" : "bg-secondary opacity-50"}`}
            />
          </Link>
        ))}
      </div>
      {navItems.map(
        (item) =>
          section === item && (
            <div
              key={item}
              className="md:hidden text-secondary text-sm text-right transition-all transition-discrete ease-in duration-300"
            >
              {item}
            </div>
          ),
      )}
    </nav>
  );
};

export default Navbars;
