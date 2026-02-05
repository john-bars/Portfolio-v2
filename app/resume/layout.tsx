"use client";

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-800 text-white min-h-screen relative py-20 print:py-0">
      {children}

      <button
        onClick={() => window.print()}
        className="fixed bottom-4 right-4 z-50 px-4 py-2 bg-white text-gray-800 rounded-md hover:bg-gray-200 transition-colors print:hidden hover:cursor-pointer"
      >
        Print Resume
      </button>
    </div>
  );
}
