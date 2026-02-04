"use client";

import DescriptionIcon from "@mui/icons-material/Description";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./theme/ThemeContext";

const ResumeIcon = () => {
  const { theme } = useTheme();
  const pathname = usePathname();
  const hide = pathname === "/resume";
  return (
    <>
      {!hide && (
        <Link
          href="https://github.com/john-bars"
          target="_blank"
          rel="noreferrer noopener"
          className="fixed bottom-8 left-24 md:hidden"
        >
          <DescriptionIcon
            sx={{ fontSize: { sm: 20 } }}
            className={`opacity-70 ${theme === "dark" && "text-white"}`}
          />
        </Link>
      )}
    </>
  );
};

export default ResumeIcon;
