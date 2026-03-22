import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Cpu, Wifi, Shield, Zap } from 'lucide-react';
import { EVENTS, STATS, DOMAINS } from '../../data';
import Button from '../UI/Button';
import Tag from '../UI/Tag';

interface HomeProps {
    setActivePage: (p: string) => void;
}

const Home = ({ setActivePage }: HomeProps) => {
    const domainIcons = {
        'edge-ai': <Cpu size={24} />,
        'v2x': <Wifi size={24} />,
        'safety': <Shield size={24} />,
        'efficiency': <Zap size={24} />
    };

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
                    <div className="lg:col-span-10 relative z-10">
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

                </div>
            </section>

            {/* Stats */}
            <section className="py-32 relative overflow-hidden border-y border-foreground/5">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-20 relative z-10">
                    <div>
                        <div className="flex items-end gap-2 mb-4">
                            <span className="text-7xl font-light tracking-tighter text-foreground">{STATS.trained}</span>
                            <span className="text-accent italic-serif text-3xl mb-2">+</span>
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">Students Trained <br /> & Mentored</p>
                    </div>
                    <div>
                        <div className="flex items-end gap-2 mb-4">
                            <span className="text-7xl font-light tracking-tighter text-foreground">{STATS.events}</span>
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">Technical Events <br /> Since Inception</p>
                    </div>
                    <div>
                        <div className="flex items-end gap-2 mb-4">
                            <span className="text-7xl font-light tracking-tighter text-foreground">{STATS.partners}</span>
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
                        <h2 className="text-5xl font-bold mb-8 leading-[1.1]">Bridging academic <span className="lowercase text-accent italic-serif">rigor</span> with real-world application.</h2>
                        <p className="text-lg text-muted/80 leading-relaxed mb-8">
                            The IEEE Intelligent Transportation Systems Society (ITSS) IIIT Sri City Student Chapter was formally constituted in 2024 to serve as a high-impact research hub.
                        </p>
                        <p className="text-muted leading-relaxed">
                            We focus on the future of mobility, where IoT, AI, and autonomous coordination converge to create safer, more efficient urban environments.
                        </p>
                    </motion.div>
                    <div className="md:col-span-5 grid grid-cols-2 gap-4">
                        {DOMAINS.map((d) => (
                            <div key={d.id} className="group p-6 rounded-2xl border border-foreground/5 bg-white/30 backdrop-blur-sm transition-all hover:border-accent/20">
                                <div className="text-accent mb-4 transition-opacity">
                                    {domainIcons[d.id as keyof typeof domainIcons]}
                                </div>
                                <h4 className="font-bold text-xs uppercase tracking-widest mb-2">{d.title}</h4>
                                <p className="text-[10px] text-muted leading-relaxed">{d.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Work */}
            <section className="py-32 bg-background relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
                        <div className="max-w-2xl">
                            <span className="italic-serif text-accent text-3xl mb-6 block">02 / Selected Works</span>
                            <h2 className="text-6xl font-bold mb-6 tracking-tighter">Recent organizational <br /> <span className="text-accent lowercase italic-serif">highlights</span>.</h2>
                            <p className="text-muted/80 leading-relaxed font-medium">Explore the latest milestones from our chapter, from technical workshops to collaborative industrial sessions.</p>
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
                                    <img
                                        src={event.images ? event.images[0] : event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover"
                                        referrerPolicy="no-referrer"
                                        loading="lazy"
                                    />
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

export default Home;
