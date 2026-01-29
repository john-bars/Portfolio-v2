import type { Metadata } from "next";
import "./globals.css";
import Navbars from "./Components/Navbars";
import { Toaster } from "react-hot-toast";
import ThemeProvider from "./Components/theme/ThemeContext";
import ThemeToggle from "./Components/theme/ThemeToggle";

export const metadata: Metadata = {
  title: "John Bars Quipia - JavaScript Developer",
  description:
    "Personal portfolio showcasing projects built with React,  Next.js, and modern web development practices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbars />
          {children}
          <ThemeToggle />
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
