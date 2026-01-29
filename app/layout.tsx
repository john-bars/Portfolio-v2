import type { Metadata } from "next";
import "./globals.css";
import Navbars from "./Components/Navbars";
import { Toaster } from "react-hot-toast";

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
        <Navbars />
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
