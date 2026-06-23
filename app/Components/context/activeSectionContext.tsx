'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type Section = 'about' | 'portfolio' | 'contact';
interface SectionContextType {
  section: Section;
  setSection: Dispatch<SetStateAction<Section>>;
}

const ActiveSectionContext = createContext<SectionContextType | undefined>(
  undefined,
);

const ActiveSectionProvider = ({ children }: { children: ReactNode }) => {
  const [section, setSection] = useState<Section>('about');
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
      'useActiveSection must be used within ActiveSectionProvider',
    );
  }
  return context;
};

export default ActiveSectionProvider;
