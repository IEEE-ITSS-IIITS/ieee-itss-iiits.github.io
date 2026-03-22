import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, BrainCircuit, Radio, Zap, Waypoints, ShieldCheck, 
  Layers, Calendar, Milestone, MapPin, Users, ArrowUpRight, 
  Menu, X, Linkedin, Instagram, Twitter, Mail, ChevronDown,
  Sun, Moon
} from 'lucide-react';
import { EVENTS, TIMELINE, ADVISORS, STUDENT_TEAM, CHAPTER_CONFIG } from './data';
import { Event, TeamMember } from './types';

// --- UI Components ---

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary'; 
  className?: string;
  onClick?: () => void;
}) => {
  const baseStyles = "px-8 py-3.5 rounded-lg font-bold transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-accent text-white hover:bg-blue-700 shadow-lg shadow-accent/20 border-none",
    secondary: "bg-white/5 text-foreground border border-border-subtle backdrop-blur-sm hover:bg-white/10"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

const Card = ({ children, className = "", ...props }: { children: React.ReactNode; className?: string; [key: string]: any }) => (
  <motion.div 
    {...props} 
    whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
    className={`bg-card border border-border-subtle rounded-lg p-6 hover:border-accent transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

const Tag = ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => (
  <motion.span 
    {...props} 
    whileHover={{ scale: 1.05 }}
    className="bg-background text-foreground border border-border-subtle text-[12px] font-medium px-2.5 py-1 rounded inline-block cursor-default"
  >
    {children}
  </motion.span>
);

// --- Sections ---

const Navbar = ({ 
  activePage, 
  setActivePage, 
  isDarkMode, 
  toggleDarkMode 
}: { 
  activePage: string; 
  setActivePage: (p: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Timeline', id: 'timeline' },
    { label: 'Events', id: 'events' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-background/80 backdrop-blur-md border-b border-border-subtle z-50">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => setActivePage('home')}
        >
          <img src="/assets/logo.jpg" alt="Logo" className="h-8 w-auto rounded" referrerPolicy="no-referrer" />
          <span className="font-bold text-foreground hidden sm:block">IEEE ITSS IIITS</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                activePage === item.id ? 'text-accent border-b-2 border-accent pt-0.5' : 'text-muted'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-border-subtle transition-colors text-muted hover:text-accent"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-border-subtle transition-colors text-muted"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-14 left-0 right-0 bg-background border-b border-border-subtle md:hidden p-6 flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setIsOpen(false);
                }}
                className={`text-left text-lg font-medium ${
                  activePage === item.id ? 'text-accent' : 'text-muted'
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-card border-t border-border-subtle py-12 mt-20">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <h3 className="font-bold text-lg mb-4">IEEE ITSS IIIT Sri City</h3>
        <p className="text-muted text-sm leading-relaxed">
          Representing IEEE ITSS, providing information, helping students, and answering questions about intelligent transportation systems.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Quick Links</h4>
        <div className="flex flex-col gap-2 text-sm text-muted">
          <a href="#" className="hover:text-accent">IEEE ITSS Global</a>
          <a href="#" className="hover:text-accent">IIIT Sri City</a>
          <a href="#" className="hover:text-accent">Membership Info</a>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Connect</h4>
        <div className="flex gap-4 mb-4">
          <a href={CHAPTER_CONFIG.socials.linkedin} className="text-muted hover:text-accent"><Linkedin size={20} /></a>
          <a href={CHAPTER_CONFIG.socials.instagram} className="text-muted hover:text-accent"><Instagram size={20} /></a>
          <a href={CHAPTER_CONFIG.socials.twitter} className="text-muted hover:text-accent"><Twitter size={20} /></a>
          <a href={`mailto:${CHAPTER_CONFIG.email}`} className="text-muted hover:text-accent"><Mail size={20} /></a>
        </div>
        <p className="text-xs text-muted">© 2025 IEEE ITSS IIIT Sri City Student Chapter</p>
      </div>
    </div>
  </footer>
);

// --- Page Components ---

const Home = ({ setActivePage }: { setActivePage: (p: string) => void }) => {
  const [stats, setStats] = useState({ trained: 0, events: 0, partners: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const duration = 1400;
    const steps = 60;
    const interval = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setStats({
        trained: Math.floor(progress * 400),
        events: Math.floor(progress * 6),
        partners: Math.floor(progress * 3),
      });
      if (currentStep >= steps) clearInterval(timer);
    }, interval);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth - 0.5) * 20, y: (e.clientY / window.innerHeight - 0.5) * 20 });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const domains = [
    { icon: <Cpu />, title: 'Autonomous Systems', desc: 'Self-driving tech and robotics.' },
    { icon: <BrainCircuit />, title: 'AI/ML', desc: 'Computer vision and predictive analytics.' },
    { icon: <Radio />, title: 'IoT', desc: 'Connected infrastructure and sensors.' },
    { icon: <Zap />, title: 'EV Technology', desc: 'Sustainable mobility and electrification.' },
    { icon: <Waypoints />, title: 'V2X', desc: 'Vehicle-to-everything communication.' },
    { icon: <Layers />, title: 'Digital Twin', desc: 'Cyber-physical system modeling.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col"
    >
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-foreground">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 iot-grid opacity-20" />
        <motion.div 
          animate={{ 
            x: mousePos.x,
            y: mousePos.y
          }}
          className="absolute inset-0 overflow-hidden pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-accent/10 text-accent border border-accent/20 rounded-full">
              Advancing Intelligent Transportation
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
              IEEE ITSS Student Chapter <br />
              <span className="text-accent">IIIT Sri City</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Empowering the next generation of engineers through IoT, AI, and Autonomous Systems research and development.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button onClick={() => setActivePage('timeline')}>
                Explore Our Work <ArrowUpRight size={20} />
              </Button>
              <Button variant="secondary" onClick={() => setActivePage('events')}>
                Upcoming Events
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-card border-b border-border-subtle relative overflow-hidden">
        <div className="absolute inset-0 iot-dots opacity-20" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center relative z-10">
          <div>
            <div className="text-5xl font-bold text-accent mb-2">{stats.trained}+</div>
            <div className="text-muted font-medium uppercase tracking-wider text-xs">Students Trained</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-accent mb-2">{stats.events}</div>
            <div className="text-muted font-medium uppercase tracking-wider text-xs">Events Held</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-accent mb-2">{stats.partners}</div>
            <div className="text-muted font-medium uppercase tracking-wider text-xs">Partner Institutions</div>
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-24 max-w-7xl mx-auto px-6 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-3xl rounded-full -z-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">About the Chapter</h2>
            <p className="text-muted leading-relaxed mb-4">
              The IEEE Intelligent Transportation Systems Society (ITSS) IIIT Sri City Student Chapter was formally constituted on 8 December 2024. Our mission is to provide a platform for students to engage with cutting-edge ITS technologies.
            </p>
            <p className="text-muted leading-relaxed">
              We focus on bridging the gap between academic research and industry application through workshops, hackathons, and certificate programs.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-6">
            {domains.map((d, i) => (
              <Card key={i} className="flex flex-col items-center text-center p-4">
                <div className="text-accent mb-3">{d.icon}</div>
                <h4 className="font-semibold text-sm mb-1">{d.title}</h4>
                <p className="text-[11px] text-muted">{d.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Recent Work</h2>
              <p className="text-muted">Highlights from our latest activities.</p>
            </div>
            <button 
              onClick={() => setActivePage('timeline')}
              className="text-accent font-medium flex items-center gap-1 hover:underline"
            >
              View Full Timeline <ArrowUpRight size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EVENTS.slice(0, 3).map((event) => (
              <Card key={event.id} className="flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <Tag>{event.date}</Tag>
                  <span className="text-xs text-muted font-medium">{event.participants} Participants</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                <p className="text-sm text-muted mb-6 flex-grow">{event.description}</p>
                <button 
                  onClick={() => setActivePage('timeline')}
                  className="text-sm font-semibold text-accent hover:underline text-left"
                >
                  View in Timeline
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const Timeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="absolute inset-0 iot-grid opacity-10 pointer-events-none" />
        <div className="text-center mb-20 relative z-10">
          <h1 className="text-4xl font-bold mb-4">Event History</h1>
          <p className="text-muted">A chronological record of our journey since 2023.</p>
        </div>

        <div className="relative z-10">
          {/* Vertical Rail Background */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border-subtle -translate-x-1/2" />
          
          {/* Animated Progress Rail */}
          <motion.div 
            style={{ height: `${scrollProgress}%` }}
            className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-accent -translate-x-1/2 z-10 origin-top"
          />

          <div className="space-y-24">
            {TIMELINE.map((yearGroup) => (
              <div key={yearGroup.year}>
                <div className="relative z-20 flex justify-center mb-12">
                  <motion.span 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-card px-6 py-2 border border-border-subtle rounded-full text-2xl font-bold text-accent shadow-sm"
                  >
                    {yearGroup.year}
                  </motion.span>
                </div>
                
                <div className="space-y-16">
                  {yearGroup.events.map((event, idx) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8 md:gap-0`}
                    >
                      {/* Node */}
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 z-30 border-4 border-background shadow-[0_0_10px_rgba(0,102,204,0.3)]" 
                      />
                      
                      {/* Content */}
                      <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}>
                        <Card className="overflow-hidden p-0">
                          {event.image && (
                            <div className="h-48 overflow-hidden">
                              <img 
                                src={event.image} 
                                alt={event.title}
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          )}
                          <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-bold text-xl">{event.title}</h3>
                              <Tag>{event.date}</Tag>
                            </div>
                            <div className="flex items-center gap-4 text-xs text-muted mb-4">
                              <span className="flex items-center gap-1"><MapPin size={12} /> {event.location}</span>
                              <span className="flex items-center gap-1"><Users size={12} /> {event.participants} Participants</span>
                            </div>
                            <p className="text-sm text-muted mb-4">{event.description}</p>
                            {event.summary && (
                              <ul className="text-xs text-muted space-y-1 list-disc pl-4">
                                {event.summary.map((s, i) => <li key={i}>{s}</li>)}
                              </ul>
                            )}
                          </div>
                        </Card>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const [filter, setFilter] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const categories = ['All', 'Workshop', 'Hackathon', 'Certificate Program', 'Seminar'];
  
  const upcomingEvents: Event[] = [
    {
      id: 'UP-01',
      title: 'Smart Mobility Workshop 2026',
      date: '15 Apr 2026, 10:00 AM IST',
      mode: 'In-person',
      location: 'IIIT Sri City',
      participants: 0,
      description: 'A deep dive into next-gen mobility solutions and urban planning using AI.',
      tags: ['Workshop', 'AI'],
      isUpcoming: true
    }
  ];

  const filteredEvents = filter === 'All' 
    ? upcomingEvents 
    : upcomingEvents.filter(e => e.tags.includes(filter));

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12">Upcoming Events</h1>

        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat ? 'bg-accent text-white' : 'bg-card border border-border-subtle text-muted hover:border-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map(event => (
            <Card key={event.id} className="flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <Tag>{event.date}</Tag>
                <span className="text-xs font-semibold text-accent">{event.mode}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
              <p className="text-muted mb-6 flex-grow">{event.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {event.tags.map(t => <Tag key={t}>{t}</Tag>)}
              </div>
              <Button onClick={() => setSelectedEvent(event)}>Register Now</Button>
            </Card>
          ))}
        </div>

        {/* Registration Panel */}
        <AnimatePresence>
          {selectedEvent && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedEvent(null)}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
              />              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-card z-[70] shadow-2xl p-8 overflow-y-auto border-l border-border-subtle"
              >
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">Register</h2>
                  <button onClick={() => setSelectedEvent(null)} className="text-muted hover:text-foreground"><X /></button>
                </div>
                <div className="mb-8 p-4 bg-background rounded-lg border border-border-subtle">
                  <h4 className="font-bold text-sm mb-1">{selectedEvent.title}</h4>
                  <p className="text-xs text-muted">{selectedEvent.date}</p>
                </div>
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Registration submitted!'); setSelectedEvent(null); }}>
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input type="text" required className="w-full px-4 py-2 bg-background border border-border-subtle rounded-md focus:ring-2 focus:ring-accent outline-none text-foreground" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input type="email" required className="w-full px-4 py-2 bg-background border border-border-subtle rounded-md focus:ring-2 focus:ring-accent outline-none text-foreground" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Institution / Roll Number</label>
                    <input type="text" required className="w-full px-4 py-2 bg-background border border-border-subtle rounded-md focus:ring-2 focus:ring-accent outline-none text-foreground" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Year of Study</label>
                    <select className="w-full px-4 py-2 bg-background border border-border-subtle rounded-md focus:ring-2 focus:ring-accent outline-none text-foreground">
                      <option>1st Year</option>
                      <option>2nd Year</option>
                      <option>3rd Year</option>
                      <option>4th Year</option>
                      <option>PG / PhD</option>
                    </select>
                  </div>
                  <Button className="w-full">Submit Registration</Button>
                </form>
              </motion.div>

            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const About = () => (
  <div className="pt-24 pb-24">
    <div className="max-w-7xl mx-auto px-6">
      <section className="mb-24">
        <h1 className="text-4xl font-bold mb-8">About the Chapter</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              The IEEE Intelligent Transportation Systems Society (ITSS) is a technical society under IEEE focused on the research, development, and standardization of intelligent transportation systems.
            </p>
            <p>
              The IIIT Sri City Student Chapter was formally constituted on 8 December 2024, though our activities began as early as 2023. We serve as a hub for students interested in the intersection of mobility and technology.
            </p>
          </div>
          <div className="bg-card p-8 border border-border-subtle rounded-xl">
            <h3 className="font-bold mb-4">Our Purpose</h3>
            <ul className="space-y-4 text-sm text-muted">
              <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" /> Providing information on the ITS field to students and faculty</li>
              <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" /> Supporting student participation in research, events, and training</li>
              <li className="flex gap-3"><div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" /> Serving as a point of contact for queries related to IEEE ITSS activities</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <h2 className="text-2xl font-bold mb-12">Faculty Advisors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ADVISORS.map((advisor, i) => (
            <Card key={i} className="text-center">
              <div className="w-20 h-20 bg-background rounded-full mx-auto mb-4 flex items-center justify-center text-accent font-bold text-2xl">
                {advisor.name.charAt(0)}
              </div>
              <h4 className="font-bold text-lg">{advisor.name}</h4>
              <p className="text-accent text-sm font-medium mb-2">{advisor.designation}</p>
              <p className="text-xs text-muted mb-4">{advisor.department}</p>
              <p className="text-xs text-muted italic">"{advisor.bio}"</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-24">
        <h2 className="text-2xl font-bold mb-12">Student Core Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {STUDENT_TEAM.map((member, i) => (
            <Card key={i} className="text-center p-6">
              <h4 className="font-bold">{member.name}</h4>
              <p className="text-accent text-xs font-medium mb-1">{member.role}</p>
              <p className="text-[11px] text-muted mb-4">{member.yearBranch}</p>
              <a href={member.linkedin} className="text-muted hover:text-accent inline-block"><Linkedin size={18} /></a>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-12">Partners & Affiliations</h2>
        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          <span className="font-bold text-xl">IEEE ITSS</span>
          <span className="font-bold text-xl">IIIT Sri City</span>
          <span className="font-bold text-xl">British Council</span>
          <span className="font-bold text-xl">NIT Manipur</span>
        </div>
      </section>
    </div>
  </div>
);

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState<number | null>(null);
  
  const galleryImages = [
    { id: 1, title: 'IIIT Sri City Entrance', src: '/assets/slide_1_image_89.png' },
    { id: 2, title: 'Winter School 2023', src: '/assets/slide_3_image_114.png' },
    { id: 3, title: 'Certificate Program 1.0', src: '/assets/slide_5_image_138.png' },
    { id: 4, title: 'Smart Mobility Pitch Deck', src: '/assets/slide_6_image_151.png' },
    { id: 5, title: 'NexSync Hackathon', src: '/assets/slide_6_image_154.png' },
    { id: 6, title: 'CP 3.0 NIT Manipur', src: '/assets/slide_8_image_175.png' },
    { id: 7, title: 'Winter School Session', src: '/assets/slide_3_image_117.png' },
    { id: 8, title: 'CP 2.0 Group Photo', src: '/assets/slide_6_image_148.png' },
    { id: 9, title: 'NIT Manipur Workshop', src: '/assets/slide_8_image_172.png' },
    { id: 10, title: 'Autonomous Systems Workshop', src: '/assets/slide_10_image_208.png' },
    { id: 11, title: 'IoT Training', src: '/assets/slide_4_image_126.png' },
    { id: 12, title: 'V2X Research', src: '/assets/slide_7_image_163.png' },
  ];

  return (
    <div className="pt-24 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 iot-dots opacity-10" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h1 className="text-4xl font-bold mb-12">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <motion.div 
              key={img.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-video bg-card border border-border-subtle rounded-lg overflow-hidden group cursor-pointer relative"
              onClick={() => setSelectedImg(i)}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                <span className="text-white font-bold text-lg mb-2">{img.title}</span>
                <span className="text-white/80 text-sm">View Full Image</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImg !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-6"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-accent transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={galleryImages[selectedImg].src}
              alt={galleryImages[selectedImg].title}
              className="max-w-full max-h-full rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center">
              <h3 className="text-xl font-bold">{galleryImages[selectedImg].title}</h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Contact = () => (
  <div className="pt-24 pb-24">
    <div className="max-w-7xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-12">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <p className="text-muted mb-12 leading-relaxed">
            Have questions about our upcoming events, membership, or collaboration opportunities? Reach out to us using the form or the contact details below.
          </p>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded flex items-center justify-center text-accent shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">Email Address</h4>
                <a href={`mailto:${CHAPTER_CONFIG.email}`} className="text-muted hover:text-accent">{CHAPTER_CONFIG.email}</a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded flex items-center justify-center text-accent shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">Location</h4>
                <p className="text-muted">{CHAPTER_CONFIG.location}</p>
              </div>
            </div>
          </div>
        </div>
        <Card className="p-8">
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input type="text" required className="w-full px-4 py-2 bg-background border border-border-subtle rounded-md focus:ring-2 focus:ring-accent outline-none text-foreground" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" required className="w-full px-4 py-2 bg-background border border-border-subtle rounded-md focus:ring-2 focus:ring-accent outline-none text-foreground" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <select className="w-full px-4 py-2 bg-background border border-border-subtle rounded-md focus:ring-2 focus:ring-accent outline-none text-foreground">
                <option>General Inquiry</option>
                <option>Event Participation</option>
                <option>Collaboration</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea required rows={4} className="w-full px-4 py-2 bg-background border border-border-subtle rounded-md focus:ring-2 focus:ring-accent outline-none resize-none text-foreground" />
            </div>
            <Button className="w-full">Send Message</Button>
          </form>
        </Card>
      </div>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
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
            {activePage === 'home' && <Home setActivePage={setActivePage} />}
            {activePage === 'about' && <About />}
            {activePage === 'timeline' && <Timeline />}
            {activePage === 'events' && <Events />}
            {activePage === 'gallery' && <Gallery />}
            {activePage === 'contact' && <Contact />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
