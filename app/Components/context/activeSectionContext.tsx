"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type Section = "about" | "portfolio" | "contact";
interface SectionContextType {
  section: Section;
  setSection: (section: Section) => void;
}

const ActiveSectionContext = createContext<SectionContextType | undefined>(
  undefined,
);

const ActiveSectionProvider = ({ children }: { children: ReactNode }) => {
  const [section, setSection] = useState<Section>("about");
  return (
    <ActiveSectionContext.Provider value={{ section, setSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error(
      "useActiveSection must be used within ActiveSectionProvider",
    );
  }
  return context;
};

export default ActiveSectionProvider;
