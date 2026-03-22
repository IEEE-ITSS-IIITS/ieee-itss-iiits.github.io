import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Navigation Components
import Navbar from './components/Navigation/Navbar';
import Footer from './components/Navigation/Footer';

// Section Components - Lazy loaded for performance
const Home = React.lazy(() => import('./components/Sections/Home'));
const About = React.lazy(() => import('./components/Sections/About'));
const Timeline = React.lazy(() => import('./components/Sections/Timeline'));
const Events = React.lazy(() => import('./components/Sections/Events'));
const Gallery = React.lazy(() => import('./components/Sections/Gallery'));
const Contact = React.lazy(() => import('./components/Sections/Contact'));

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Ensure scroll resets on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-none">
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <React.Suspense fallback={
              <div className="min-h-[60vh] flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
              </div>
            }>
              {activePage === 'home' && <Home setActivePage={setActivePage} />}
              {activePage === 'about' && <About />}
              {activePage === 'timeline' && <Timeline />}
              {activePage === 'events' && <Events />}
              {activePage === 'gallery' && <Gallery />}
              {activePage === 'contact' && <Contact />}
            </React.Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
