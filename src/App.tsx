import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import {
  Cpu, BrainCircuit, Radio, Zap, Waypoints, ShieldCheck,
  Layers, Calendar, Milestone, MapPin, Users, ArrowUpRight,
  Menu, X, Linkedin, Instagram, Twitter, Mail, ChevronDown, Wifi, Shield
} from 'lucide-react';
import { EVENTS, TIMELINE, ADVISORS, STUDENT_TEAM, CHAPTER_CONFIG } from './data';
import { Event, TeamMember } from './types';

// --- UI Components ---

// --- Constants & Data ---
const stats = {
  trained: 1400,
  events: 40,
  partners: 12
};

const domains = [
  { icon: <Cpu size={24} />, title: 'Edge AI', desc: 'Deploying deep learning on resource-constrained hardware.' },
  { icon: <Wifi size={24} />, title: 'V2X', desc: 'Vehicle-to-everything communication protocols.' },
  { icon: <Shield size={24} />, title: 'Safety', desc: 'Formal verification of autonomous decision systems.' },
  { icon: <Zap size={24} />, title: 'Efficiency', desc: 'Optimization of urban traffic flow via swarm intelligence.' }
];

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
  const baseStyles = "px-10 py-4 rounded-full font-semibold transition-all duration-500 active:scale-[0.98] focus:outline-none flex items-center justify-center gap-3 text-sm tracking-widest uppercase";
  const variants = {
    primary: "bg-accent text-white hover:shadow-[0_15px_30px_oklch(50%_0.2_250_/_0.25)] hover:-translate-y-1",
    secondary: "bg-transparent text-foreground border border-foreground/10 hover:bg-foreground/5"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

const Card = ({ children, className = "", ...props }: { children: React.ReactNode; className?: string;[key: string]: any }) => (
  <motion.div
    {...props}
    whileHover={{ y: -12, boxShadow: "0 30px 60px oklch(0% 0 0 / 0.03)" }}
    className={`bg-card border border-border-subtle rounded-3xl p-8 hover:border-accent/30 transition-all duration-500 ${className}`}
  >
    {children}
  </motion.div>
);

const Tag = ({ children, ...props }: { children: React.ReactNode;[key: string]: any }) => (
  <motion.span
    {...props}
    className="bg-foreground/5 text-foreground/60 border border-foreground/5 text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full inline-block cursor-default"
  >
    {children}
  </motion.span>
);

// --- Sections ---

const Navbar = ({
  activePage,
  setActivePage
}: {
  activePage: string;
  setActivePage: (p: string) => void;
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
    <nav className="fixed top-0 left-0 right-0 h-14 bg-background/90 backdrop-blur-sm border-b border-border-subtle z-50">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setActivePage('home')}
        >
          <img src="/assets/logo.jpg" alt="Logo" className="h-8 w-auto rounded" referrerPolicy="no-referrer" />
          <span className="font-bold text-foreground hidden sm:block">IEEE ITSS IIITS</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`group relative text-xs font-bold uppercase tracking-[0.15em] transition-all ${activePage === item.id ? 'text-accent' : 'text-foreground/60 hover:text-foreground'
                }`}
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full" />
              {activePage === item.id && (
                <span className="absolute -bottom-1 left-0 w-full h-px bg-accent" />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
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
                className={`text-left text-lg font-medium ${activePage === item.id ? 'text-accent' : 'text-muted'
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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth - 0.5) * 20, y: (e.clientY / window.innerHeight - 0.5) * 20 });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-background/50 relative"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-accent/30" />
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-accent/60">IEEE ITSS CHAPTER IIITS</span>
              </div>

              <h1 className="text-[clamp(3.5rem,10vw,7.5rem)] font-bold leading-[0.9] mb-10 text-foreground">
                Designing the <br />
                <span className="text-accent lowercase italic-serif">intelligent</span> <br />
                infrastructure <br />
                <span className="text-[0.6em] tracking-normal font-medium opacity-50 block mt-4">of tomorrow.</span>
              </h1>

              <p className="text-lg md:text-xl text-muted/80 mb-12 max-w-xl leading-relaxed font-medium">
                We are a collective of researchers and engineers bridging the gap between <span className="italic-serif text-foreground">autonomous systems</span> and urban mobility.
              </p>

              <div className="flex flex-wrap gap-8 items-center">
                <Button onClick={() => setActivePage('timeline')}>
                  View the Archive
                </Button>
                <button
                  onClick={() => setActivePage('events')}
                  className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-foreground/60 hover:text-accent transition-colors"
                >
                  Current Openings <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 relative flex justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transition-all duration-700"
            >
              <img
                src="/assets/slide_1_image_89.png"
                alt="Infrastructure Tech"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-accent/10 mix-blend-multiply" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <p className="text-[10px] text-white/80 font-bold uppercase tracking-widest mb-1">Featured Project</p>
                <p className="text-white font-medium italic-serif text-sm">V2X Communication Systems 2024</p>
              </div>
            </motion.div>

            {/* Decentered secondary element */}
            <div className="absolute -bottom-10 -left-20 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 relative overflow-hidden border-y border-foreground/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-20 relative z-10">
          <div>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-7xl font-light tracking-tighter text-foreground">{stats.trained}</span>
              <span className="text-accent italic-serif text-3xl mb-2">+</span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">Students Trained <br /> & Mentored</p>
          </div>
          <div>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-7xl font-light tracking-tighter text-foreground">{stats.events}</span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">Technical Events <br /> Since Inception</p>
          </div>
          <div>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-7xl font-light tracking-tighter text-foreground">{stats.partners}</span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">Collaborating <br /> Industry Partners</p>
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-12">
            <span className="italic-serif text-accent text-3xl mb-6 block">01 / The Mission</span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <h2 className="text-5xl font-bold mb-8 leading-[1.1]">Bridging academic <span className="lowercase text-accent">rigor</span> with real-world application.</h2>
            <p className="text-lg text-muted/80 leading-relaxed mb-8">
              The IEEE Intelligent Transportation Systems Society (ITSS) IIIT Sri City Student Chapter was formally constituted in 2024 to serve as a high-impact research hub.
            </p>
            <p className="text-muted leading-relaxed">
              We focus on the future of mobility, where IoT, AI, and autonomous coordination converge to create safer, more efficient urban environments.
            </p>
          </motion.div>
          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            {domains.map((d, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-foreground/5 bg-white/30 backdrop-blur-sm transition-all hover:border-accent/20">
                <div className="text-accent mb-4 transition-opacity">{d.icon}</div>
                <h4 className="font-bold text-xs uppercase tracking-widest mb-2">{d.title}</h4>
                <p className="text-[10px] text-muted leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work / Selected Projects */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="italic-serif text-accent text-3xl mb-6 block">02 / Selected Works</span>
              <h2 className="text-6xl font-bold mb-6 tracking-tighter">Recent research <br /> <span className="text-accent lowercase">highlights</span>.</h2>
              <p className="text-muted/80 leading-relaxed font-medium">Explore the latest breakthroughs from our lab, from computer vision to autonomous coordination.</p>
            </div>
            <button
              onClick={() => setActivePage('timeline')}
              className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/60 hover:text-accent flex items-center gap-3 transition-all"
            >
              The Full Archive <ArrowUpRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {EVENTS.slice(0, 3).map((event, i) => (
              <div key={event.id} className={`flex flex-col ${i === 1 ? 'md:mt-12' : ''}`}>
                <div className="mb-8 overflow-hidden rounded-3xl aspect-video transition-all duration-700 shadow-xl">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex justify-between items-start mb-6">
                  <Tag>{event.date}</Tag>
                  <span className="text-[10px] text-muted font-bold uppercase tracking-widest">{event.participants} Participants</span>
                </div>
                <h3 className="font-bold text-2xl mb-4 leading-tight">{event.title}</h3>
                <p className="text-sm text-muted/80 mb-8 flex-grow leading-relaxed">{event.description}</p>
                <button
                  onClick={() => setActivePage('timeline')}
                  className="italic-serif text-accent hover:text-foreground transition-colors text-left text-lg"
                >
                  Read the Paper →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const TimelineEvent = React.memo(({ event, idx }: { event: any, idx: number }) => (
  <motion.div
    initial={{ opacity: 0, x: idx % 2 === 0 ? -15 : 15 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ type: "spring", stiffness: 100, damping: 20 }}
    className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8 md:gap-0 will-change-transform`}
  >
    {/* Node */}
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 z-30 border-4 border-background shadow-[0_0_15px_oklch(55%_0.18_250_/_0.2)]"
    />

    {/* Content */}
    <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}>
      <Card className="overflow-hidden p-0 contain-content">
        {event.image && (
          <div className="h-48 overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
              loading="lazy"
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
              {event.summary.map((s: string, i: number) => <li key={i}>{s}</li>)}
            </ul>
          )}
        </div>
      </Card>
    </div>
  </motion.div>
));

const Timeline = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="mb-32">
          <span className="italic-serif text-accent text-3xl mb-6 block">03 / Timeline</span>
          <h1 className="text-7xl font-bold mb-6 tracking-tighter">Event history & <br /> <span className="text-accent lowercase italic-serif">milestones</span>.</h1>
          <p className="text-muted/80 font-medium max-w-xl">A chronological record of our journey since 2023, meticulously documented for the future.</p>
        </div>

        <div className="relative z-10">
          {/* Vertical Rail Background */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border-subtle -translate-x-1/2" />

          {/* Animated Progress Rail */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-accent -translate-x-1/2 z-10 origin-top"
          />

          <div className="space-y-24">
            {TIMELINE.map((yearGroup) => (
              <div key={yearGroup.year}>
                <div className="relative z-20 flex justify-center mb-20">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-8xl font-black text-foreground/5 italic-serif pointer-events-none absolute -top-12"
                  >
                    {yearGroup.year}
                  </motion.span>
                  <span className="relative z-10 px-6 py-2 border border-foreground/10 rounded-full text-xs font-bold tracking-[0.4em] uppercase text-accent bg-background/80 backdrop-blur-sm">
                    ANNO DOMINI {yearGroup.year}
                  </span>
                </div>

                <div className="space-y-16">
                  {yearGroup.events.map((event, idx) => (
                    <TimelineEvent key={event.id} event={event} idx={idx} />
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

const PastEventItem = React.memo(({ event, isExpanded, onToggle }: { event: any, isExpanded: boolean, onToggle: () => void }) => (
  <div className="border border-foreground/5 rounded-3xl bg-white/30 backdrop-blur-sm overflow-hidden transition-all hover:border-accent/20 contain-content">
    <button
      onClick={onToggle}
      className="w-full p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 text-left"
    >
      <div>
        <span className="text-xs text-accent font-bold uppercase tracking-widest block mb-2">{event.date}</span>
        <h3 className="text-2xl font-bold">{event.title}</h3>
      </div>
      <div className="flex items-center gap-4 text-muted">
        <span className="text-xs uppercase tracking-widest flex items-center gap-2"><MapPin size={14} /> {event.location}</span>
        <ChevronDown className={`transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`} />
      </div>
    </button>

    <AnimatePresence initial={false}>
      {isExpanded && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="overflow-hidden"
        >
          <div className="p-8 pt-0 border-t border-foreground/5 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-muted mb-8 text-lg leading-relaxed">{event.description}</p>
              <ul className="space-y-3">
                {event.details.map((detail: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video bg-foreground/5">
              <img src={event.image} alt={event.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
));

const Events = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);

  const pastEvents = React.useMemo(() => [
    {
      id: 'PAST-01',
      title: 'Certificate Program 3.0: IoT and Autonomous Systems',
      date: '14 - 18 Jan 2026',
      location: 'NIT Manipur (Hybrid)',
      image: '/assets/slide_8_image_172.png',
      description: 'A 5-day national level workshop focusing on AI for Robotics and Autonomous Systems. Jointly organized by NIT Manipur and IIIT Sri City.',
      details: [
        'Themes: IoT and Application, Digital Twin Concepts, Autonomous Systems',
        'Special Focus: AI for Robotics',
        'In collaboration with Anusandhan National Research Foundation'
      ]
    },
    {
      id: 'PAST-02',
      title: 'Certificate Program 2.0: IoT and Autonomous Systems',
      date: 'Dec 2025',
      location: 'IIIT Sri City',
      image: '/assets/slide_6_image_148.png',
      description: 'Second edition of the successful certificate program focusing on Digital Twins for Intelligent Transportation Systems (DigIT).',
      details: [
        'Theme: Digital Twin for ITS (DigIT)',
        'Hands-on training with IoT sensor networks',
        'Collaborative research sessions'
      ]
    },
    {
      id: 'PAST-03',
      title: 'IEEE ITSS Winter School',
      date: '2025',
      location: 'IIIT Sri City',
      image: '/assets/slide_3_image_114.png',
      description: 'An intensive Winter School program covering modern research technologies in the field of Intelligent Transportation.',
      details: [
        'Advanced sessions on ITS infrastructure',
        'Expert lectures from industry and academia',
        'Strategic research methodology workshop'
      ]
    }
  ], []);

  const upcomingEvents = React.useMemo(() => [
    {
      id: 'UP-01',
      title: 'Smart Mobility Workshop 2026',
      date: '15 Apr 2026, 10:00 AM IST',
      type: 'Workshop',
      image: '/assets/slide_1_image_89.png',
      location: 'IIIT Sri City',
      description: 'A deep dive into next-gen mobility solutions and urban planning using AI.',
      participants: '50+'
    }
  ], []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-6 pt-24 pb-32"
    >
      <div className="mb-24">
        <span className="italic-serif text-accent text-3xl mb-6 block">04 / Currents</span>
        <h1 className="text-7xl font-bold mb-6 tracking-tighter">Event history & <br /> <span className="text-accent lowercase italic-serif">upcoming</span>.</h1>

        <div className="flex gap-8 mt-12 border-b border-foreground/5">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all relative ${activeTab === 'upcoming' ? 'text-accent' : 'text-muted hover:text-foreground'}`}
          >
            Upcoming
            {activeTab === 'upcoming' && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />}
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all relative ${activeTab === 'past' ? 'text-accent' : 'text-muted hover:text-foreground'}`}
          >
            Previous
            {activeTab === 'past' && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />}
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'upcoming' ? (
          <motion.div
            key="upcoming"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="p-10">
                <div className="flex justify-between items-start mb-6">
                  <Tag>{event.date}</Tag>
                  <span className="text-[10px] text-accent font-bold uppercase tracking-widest">Workshop</span>
                </div>
                <h3 className="text-2xl font-bold mb-6">{event.title}</h3>
                <p className="text-muted mb-8 leading-relaxed">{event.description}</p>
                <div className="flex items-center justify-between pt-6 border-t border-foreground/5">
                  <div className="flex items-center gap-2 text-xs text-muted/60">
                    <MapPin size={14} /> <span>{event.location}</span>
                  </div>
                  <Button variant="secondary" onClick={() => { }}>Registration Closed</Button>
                </div>
              </Card>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="past"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {pastEvents.map((event) => (
              <PastEventItem
                key={event.id}
                event={event}
                isExpanded={expandedEvent === event.id}
                onToggle={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const About = () => (
  <div className="pt-32 pb-32 max-w-7xl mx-auto px-6">
    <div className="mb-24">
      <span className="italic-serif text-accent text-3xl mb-6 block">05 / The Institution</span>
      <h1 className="text-7xl font-bold mb-6 tracking-tighter">Academic <span className="text-accent lowercase italic-serif">rigor</span>. <br /> Design <span className="text-accent lowercase italic-serif">excellence</span>.</h1>
      <p className="text-muted/80 font-medium max-w-xl">Established in 2024, our chapter serves as a beacon for intelligent transportation research at IIIT Sri City.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32">
      <div className="md:col-span-12">
        <div className="h-px w-full bg-foreground/5 mb-16" />
      </div>
      <div className="md:col-span-5">
        <h2 className="text-3xl font-bold mb-8 text-accent">Our Mission</h2>
        <p className="text-lg text-muted/80 leading-relaxed">To pioneer sustainable and intelligent mobility solutions through collaborative engineering and multidisciplinary research.</p>
      </div>
      <div className="md:col-span-7">
        <img src="/assets/slide_1_image_89.png" alt="Lab" className="w-full rounded-3xl shadow-2xl" referrerPolicy="no-referrer" />
      </div>
    </div>

    <div className="mb-32">
      <h2 className="text-5xl font-bold mb-16 tracking-tight text-center">CORE DOMAINS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {domains.map((d, i) => (
          <div key={i} className="p-8 border border-foreground/5 rounded-3xl hover:border-accent/20 transition-all bg-white/30 backdrop-blur-sm">
            <div className="text-accent mb-6">{d.icon}</div>
            <h3 className="font-bold text-lg mb-4">{d.title}</h3>
            <p className="text-sm text-muted/70 leading-relaxed">{d.desc}</p>
          </div>
        ))}
      </div>
    </div>

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

    <section className="mb-32">
      <h2 className="text-3xl font-bold mb-16 italic-serif text-accent">Partners & Affiliations</h2>
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
        {/* Connecting Line (Desktop) */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center hidden md:flex">
          <svg width="100%" height="200" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <motion.path
              d="M280 100 H520"
              stroke="oklch(var(--accent))"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.circle
              cx="400" cy="100" r="4"
              fill="oklch(var(--accent))"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.5 }}
            />
          </svg>
        </div>

        {/* IIIT Sri City Box */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="group relative bg-white/40 backdrop-blur-xl border border-foreground/5 p-10 rounded-[2.5rem] w-full max-w-[320px] aspect-square flex flex-col items-center justify-center hover:border-accent/20 transition-all duration-700 shadow-sm hover:shadow-2xl"
        >
          <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-accent/20 rounded-tl-xl transition-all group-hover:w-12 group-hover:h-12 group-hover:border-accent" />
          <img
            src="/assets/iiitlogo.png"
            alt="IIIT Sri City"
            className="w-40 mb-8 transition-all duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="text-center">
            <span className="block text-[10px] uppercase tracking-[0.3em] font-bold text-muted/40 mb-1">Host Institution</span>
            <span className="text-sm font-bold text-foreground/80">IIIT Sri City</span>
          </div>
        </motion.div>

        {/* IEEE ITSS Box */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="group relative bg-white/40 backdrop-blur-xl border border-foreground/5 p-10 rounded-[2.5rem] w-full max-w-[320px] aspect-square flex flex-col items-center justify-center hover:border-accent/20 transition-all duration-700 shadow-sm hover:shadow-2xl"
        >
          <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-accent/20 rounded-br-xl transition-all group-hover:w-12 group-hover:h-12 group-hover:border-accent" />
          <div className="w-44 mb-8 transition-all duration-1000 group-hover:scale-105">
            <svg viewBox="0 0 512 150" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto fill-foreground">
              <path d="M170.746 19.748h31.325v113.084h-31.325V19.748zm47.762 113.084V19.748h86.142v21.925h-54.818v23.334h50.429v21.929h-50.429v23.961h54.818v21.935h-86.142zm103.692 0V19.748h86.12v21.925h-54.803v23.334h50.412v21.929h-50.412v23.961h54.803v21.935H322.2zm103.66 0V19.748h86.141v21.925h-54.798v23.334h50.416v21.929h-50.416v23.961H512v21.935H425.86zM71.458 87.637c-.414 7.985-.516 15.375-1.107 23.38 3.16.287 6.727.563 10.097.072L79.44 88.774l-.177-1.062c-2.566.1-4.995.203-7.806-.075zM51.72 65.214c-3.893 1.951-9.62 4.9-8.988 10.239.834 2.915 3.99 4.799 6.488 5.997 13.805 6.083 32.132 6.29 46.707 1.75 3.598-1.387 8.429-3.398 9.09-7.807-.039-3.642-3.895-5.935-6.665-7.33v-.173c.966-.381 2.077-.725 3.077-.83v-.097c-4.881-.875-9.595-2.152-14.323-3.402.91 2.075 1.568 4.263 2.327 6.42 1.42-.455 2.877-.8 4.41-1.01 2.493.971 6.064 2.36 6.418 5.477.277 2.916-2.914 4.336-4.929 5.52-10.691 3.89-22.72 4.27-33.87 1.312-3.08-.97-7.524-2.216-7.906-6.138 2.186-5.162 7.84-6.237 12.562-7.49-2.427-1.564-4.895-2.948-7.247-4.688-2.54.14-4.86 1.252-7.151 2.25zm23.62-31.149l-1.384 4.443-6.94 19.879c1.738.177 3.89 0 5.596.177v.164l-1.015 22.486.175.236c2.22.218 4.992.329 7.255-.057v-.354l-.906-21.81.136-.738 6.106-.104c-3.045-8.047-6-16.175-8.844-24.322h-.18zm-3.225-9.988c5.106-3.478 9.687 1.385 13.643 4.164 15.296 12.312 29.73 26.405 40.73 42.32 1.385 2.053 2.012 5.242.769 7.566-2.851 4.756-6.699 9.097-10.346 13.505v.241c-9.094 9.68-18.698 19.632-29.076 27.83-5.065 3.082-9.714 9.813-16.238 5.643-14.855-10.855-29.07-24.351-41.12-38.826-2.043-3.182-5.233-5.79-6.654-9.4-1.983-4.887 2.389-8.394 4.89-12.075C41 49.892 56.26 35.033 72.116 24.077zM84.918 9.605l-5.654-8.013C78.57 1.17 77.707.47 76.94.265c-1.667-.723-3.465.152-4.826 1.184l-10.23 13.325C45.47 35.102 26.04 54.083 4.843 68.633 3.168 69.942.677 71.22.158 73.378c-.556 1.94.455 3.542 1.66 4.75 16.974 11.691 33.202 25.571 47.647 41.4 2.564 2.694 4.643 5.373 7.151 7.902 4.225 5.622 9.188 11.289 13.072 17.32 1.218 1.273 1.427 3.366 3.331 3.986 1.491.516 3.332.866 4.754 0l1.414-1.42c17.563-24.88 39.838-47.226 64.725-65.266 2.49-2.225 7.249-3.052 7.317-7.181-.177-1.905-1.286-3.782-2.922-4.822l-.407-.067c-12.807-8.712-24.74-18.565-35.982-29.743L99.495 27.26C94.462 21.68 89.571 15.5 84.918 9.605zM70.28 21.019c4.993-3.886 11.276-.659 15.477 2.916 4.4 3.363 8.983 7.174 13.006 11.068l.731.42c11.14 10.336 21.485 21.823 29.984 33.967 1.378 2.113 2.596 4.508 1.826 7.313-2.834 7.085-8.593 12.732-13.628 18.92-10.894 11.725-22.386 23.071-35.25 32.123-2.602 1.84-6.113 3.54-9.23 2.08-9.47-4.957-17.455-13.077-25.743-20.475-9.612-8.913-19.259-19.29-26.544-30.146-1.083-1.523-1.388-3.402-1.356-5.411.936-3.747 3.504-6.831 5.933-9.99 8.608-10.97 19.152-21.376 29.8-30.882.246-.243.7-.762 1.086-1.009 4.573-3.954 9.116-7.454 13.908-10.894z" />
            </svg>
          </div>
          <div className="text-center">
            <span className="block text-[10px] uppercase tracking-[0.3em] font-bold text-muted/40 mb-1">Society Chapter</span>
            <span className="text-sm font-bold text-foreground/80">IEEE ITSS</span>
          </div>
        </motion.div>
      </div>

      {/* Tertiary Partners Removed as per request */}
    </section>
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
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <span className="italic-serif text-accent text-3xl mb-6 block">06 / Imagery</span>
          <h1 className="text-7xl font-bold mb-6 tracking-tighter">Visual <span className="text-accent lowercase italic-serif">archive</span>.</h1>
          <p className="text-muted/80 font-medium max-w-xl">A curated collection of moments from our workshops, labs, and collaborative sessions.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group aspect-[4/5] bg-card border border-foreground/5 rounded-[2rem] overflow-hidden cursor-pointer relative shadow-lg hover:shadow-2xl transition-all duration-700"
              onClick={() => setSelectedImg(i)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-10">
                <span className="text-accent font-bold italic-serif text-2xl mb-2">{img.title}</span>
                <span className="text-foreground/60 text-[10px] uppercase tracking-widest font-bold">See Project</span>
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
            className="fixed inset-0 bg-foreground/90 backdrop-blur-xl z-[100] flex items-center justify-center p-6"
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
    <div className="pt-32 pb-32 max-w-7xl mx-auto px-6">
      <div className="mb-24">
        <span className="italic-serif text-accent text-3xl mb-6 block">06 / Get in Touch</span>
        <h1 className="text-7xl font-bold mb-6 tracking-tighter">Connect <span className="text-accent lowercase italic-serif">with</span> <br /> <span className="text-accent lowercase italic-serif">us</span>.</h1>
        <p className="text-muted/80 font-medium max-w-xl">Have questions about our upcoming events, membership, or collaboration opportunities? Reach out to us using the form or the contact details below.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-5">
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
        <Card className="p-8 md:col-span-7 bg-foreground/5 border-foreground/10">
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
