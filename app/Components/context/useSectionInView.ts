"use client";

import { useEffect, useRef } from "react";
import { useActiveSection } from "./activeSectionContext";

export const useSectionInView = (
  sectionName: "about" | "portfolio" | "contact",
) => {
  const ref = useRef<HTMLElement | null>(null);
  const { setSection } = useActiveSection();

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSection(sectionName);
        }
      },
      { threshold: 0.6 },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [sectionName, setSection]);

  return ref;
};
