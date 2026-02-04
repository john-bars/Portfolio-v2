"use client";

import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "./theme/ThemeContext";

const GithubIcon = () => {
  const { theme } = useTheme();
  return (
    <Link
      href="https://github.com/john-bars"
      target="_blank"
      rel="noreferrer noopener"
      className="fixed bottom-8 left-16 md:hidden"
    >
      <GitHubIcon
        sx={{ fontSize: { sm: 20 } }}
        className={`opacity-70 ${theme === "dark" && "text-white"}`}
      />
    </Link>
  );
};

export default GithubIcon;
