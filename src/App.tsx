import Header from "./components/Header";
import Hero from "./components/Hero";
import ImageRow from "./components/ImageRow";
import Timeline from "./components/Timeline";
import Activities from "./components/Pricing"; // Renamed to Activities but kept filename to avoid complex rename logic
import AboutCards from "./components/AboutCards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen bg-[var(--color-brand-cyan)] overflow-x-hidden selection:bg-[var(--color-brand-green)] selection:text-black font-[var(--font-family-body)]">
      <Header />
      <main>
        <Hero />
        <ImageRow />
        <Timeline />
        <Activities />
        <AboutCards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
