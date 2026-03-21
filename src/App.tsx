import Header from "./components/Header";
import Hero from "./components/Hero";
import ImageRow from "./components/ImageRow";
import Impact from "./components/Impact";
import Activities from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import AboutCards from "./components/AboutCards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden selection:bg-[var(--color-brand-green)] selection:text-black font-[var(--font-family-body)]">
      <Header />
      <main>
        <Hero />
        <ImageRow />
        <Impact />
        <Activities />
        <Roadmap />
        <AboutCards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
