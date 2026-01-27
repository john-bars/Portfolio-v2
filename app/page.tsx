import AboutSection from "./Components/AboutSection";
import PortfolioSection from "./Components/PortfolioSection";
import ContactSection from "./Components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="w-full">
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </div>
  );
}
