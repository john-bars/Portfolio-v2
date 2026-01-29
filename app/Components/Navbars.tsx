"use client";

import { useActiveSection } from "./context/activeSectionContext";

const Navbars = () => {
  const { section, setSection } = useActiveSection();
  const navItems = ["about", "portfolio", "contact"] as const;
  return (
    <nav className="w-18 fixed top-8 bottom-8 right-8 z-50 flex flex-col justify-between">
      <div className="text-secondary text-right font-bold text-xl">bars.</div>
      <div className="flex flex-col gap-2 text-primary text-lg">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setSection(item)}
            className={`text-center transition-colors duration-800  ${section === item ? "text-primary text-lg" : "text-[#ddd] text-sm hover:scale-125"} `}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbars;
