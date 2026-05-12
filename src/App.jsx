import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import DownloadSection from "./components/DownloadSection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
