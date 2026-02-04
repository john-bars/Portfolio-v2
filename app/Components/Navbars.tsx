"use client";

import Link from "next/link";
import { useActiveSection } from "./context/activeSectionContext";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import { usePathname } from "next/navigation";
import { resume } from "react-dom/server";

const Navbars = () => {
  const { section, setSection } = useActiveSection();
  const navItems = ["about", "portfolio", "contact"] as const;
  const pathname = usePathname();
  const hide = pathname === "/resume";
  return (
    <nav className="md:w-18 fixed top-8 bottom-8 right-8 z-50 flex flex-col justify-between">
      <Link
        href="/"
        className="text-secondary text-right font-bold text-xl flex justify-end print:hidden"
      >
        bars.
      </Link>

      <div className="flex flex-col md:gap-2 text-primary text-lg">
        <Link
          href="https://github.com/john-bars"
          target="_blank"
          rel="noreferrer noopener"
          className="hidden md:block text-center hover:scale-110 transition-normal
          duration-300 "
        >
          <GitHubIcon
            sx={{ fontSize: { sm: 20 } }}
            className="text-gray-500 hover:scale-125 cursor-pointer opacity-70 hover:opacity-100"
          />
        </Link>
        {!hide && (
          <Link
            href="/resume"
            target="_blank"
            rel="noreferrer noopener"
            className="hidden md:block text-center hover:scale-110 transition-normal duration-300"
          >
            <DescriptionIcon
              sx={{ fontSize: { sm: 20 } }}
              className="text-gray-500 hover:scale-125 cursor-pointer opacity-70 hover:opacity-100"
            />
          </Link>
        )}

        {!hide &&
          navItems.map((item) => (
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
              className="md:hidden text-secondary text-sm text-right transition-all transition-discrete ease-in duration-300 print:hidden"
            >
              {item}
            </div>
          ),
      )}
    </nav>
  );
};

export default Navbars;
