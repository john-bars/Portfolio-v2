import ThemeProvider from "../Components/theme/ThemeContext";

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <div className="bg-gray-800 text-white min-h-screen">{children}</div>
    </ThemeProvider>
  );
}
