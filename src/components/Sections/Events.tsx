import React, { useCallback, useEffect, useState, memo } from 'react';
import { MapPin, ChevronDown, X, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Card from '../UI/Card';
import Tag from '../UI/Tag';
import Button from '../UI/Button';
import { PAST_EVENTS, UPCOMING_EVENTS } from '../../data';

const EVENT_ITEM_STYLE = {
    contentVisibility: 'auto',
    containIntrinsicSize: '320px'
} as const;

const preloadEventImages = () => {
    const urls = new Set<string>();

    PAST_EVENTS.forEach((event) => {
        event.images?.forEach((image) => urls.add(image));
        if (event.iconAsset) {
            urls.add(event.iconAsset);
        }
    });

    urls.forEach((src) => {
        const image = new Image();
        image.decoding = 'async';
        image.loading = 'eager';
        image.src = src;
    });
};

type PastEventItemProps = {
    event: any;
    isExpanded: boolean;
    onToggle: () => void;
};

const PastEventItem = memo(({ event, isExpanded, onToggle }: PastEventItemProps) => (
    <div className="border border-foreground/5 rounded-3xl bg-white overflow-hidden" style={EVENT_ITEM_STYLE}>
        <button
            type="button"
            onClick={onToggle}
            className="w-full p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 text-left"
            aria-expanded={isExpanded}
        >
            <div>
                <span className="text-xs text-accent font-bold uppercase tracking-widest block mb-2">{event.date}</span>
                <h3 className="text-2xl font-bold">{event.title}</h3>
            </div>
            <div className="flex items-center gap-4 text-muted">
                <span className="text-xs uppercase tracking-widest flex items-center gap-2"><MapPin size={14} /> {event.location}</span>
                <ChevronDown className={isExpanded ? 'rotate-180' : ''} />
            </div>
        </button>

        <div className={isExpanded ? 'block' : 'hidden'}>
            <div className="overflow-hidden">
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
                    <div className={`grid gap-4 ${event.images && event.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                        {event.images && event.images.map((img: string, idx: number) => (
                            <div key={idx} className="rounded-2xl overflow-hidden aspect-video bg-foreground/5">
                                <img
                                    src={img}
                                    alt={`${event.title} image ${idx + 1}`}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                    loading="eager"
                                    decoding="async"
                                />
                            </div>
                        ))}
                        {!event.images && event.image && (
                            <div className="rounded-2xl overflow-hidden aspect-video bg-foreground/5">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                    loading="eager"
                                    decoding="async"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
), (prevProps, nextProps) => prevProps.event === nextProps.event && prevProps.isExpanded === nextProps.isExpanded);

const Events = () => {
    const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
    const [expandedEvent, setExpandedEvent] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    useEffect(() => {
        const preload = () => preloadEventImages();

        if ('requestIdleCallback' in window) {
            const idleId = window.requestIdleCallback(preload, { timeout: 1500 });
            return () => window.cancelIdleCallback(idleId);
        }

        const timeoutId = globalThis.setTimeout(preload, 250);
        return () => globalThis.clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsModalOpen(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    const toggleEvent = useCallback((eventId: string) => {
        setExpandedEvent((currentEvent) => currentEvent === eventId ? null : eventId);
    }, []);

    const handleFeedbackSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStatus('success');
        setTimeout(() => setStatus('idle'), 3000);
    };

    return (
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-32">
            <div className="mb-24">
                <div className="flex justify-between items-start">
                    <div>
                        <span className="italic-serif text-accent text-3xl mb-6 block">04 / Currents</span>
                        <h1 className="text-7xl font-bold mb-6 tracking-tighter">Event history & <br /> <span className="text-accent lowercase italic-serif">upcoming</span>.</h1>
                    </div>
                    {/* Prototype Pop-up Trigger */}
                    <button 
                        onClick={() => setIsModalOpen(true)}
                        className="bg-accent/10 hover:bg-accent/20 text-accent px-6 py-4 rounded-3xl text-xs font-bold uppercase tracking-widest transition-all"
                    >
                        View Latest Breakdown
                    </button>
                </div>

                <div className="flex gap-8 mt-12 border-b border-foreground/5">
                    <button
                        type="button"
                        onClick={() => setActiveTab('upcoming')}
                        className={`pb-4 text-sm font-bold uppercase tracking-widest transition-colors relative ${activeTab === 'upcoming' ? 'text-accent' : 'text-muted hover:text-foreground'}`}
                    >
                        Upcoming
                        {activeTab === 'upcoming' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />}
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveTab('past')}
                        className={`pb-4 text-sm font-bold uppercase tracking-widest transition-colors relative ${activeTab === 'past' ? 'text-accent' : 'text-muted hover:text-foreground'}`}
                    >
                        Previous
                        {activeTab === 'past' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />}
                    </button>
                </div>
            </div>

            {activeTab === 'upcoming' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {UPCOMING_EVENTS.map((event) => (
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
                                <Button variant="secondary">Registration Closed</Button>
                            </div>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className="space-y-6">
                    {PAST_EVENTS.map((event) => (
                        <PastEventItem
                            key={event.id}
                            event={event}
                            isExpanded={expandedEvent === event.id}
                            onToggle={() => toggleEvent(event.id)}
                        />
                    ))}
                </div>
            )}

            {/* Prototype Form */}
            <div className="mt-32 pt-24 border-t border-foreground/5">
                <div className="max-w-2xl mx-auto text-center">
                    <MessageSquare size={40} className="text-accent mx-auto mb-6 opacity-30" />
                    <h2 className="text-4xl font-bold mb-6">Suggestions?</h2>
                    <p className="text-muted mb-12">What kind of events would you like to see next? Let us know.</p>
                    <form onSubmit={handleFeedbackSubmit} className="flex gap-4">
                        <input 
                            required
                            type="text" 
                            placeholder="Your idea..." 
                            className="flex-grow bg-foreground/5 rounded-2xl px-6 py-4 focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                        />
                        <Button type="submit" disabled={status === 'submitting'}>
                            {status === 'submitting' ? '...' : (status === 'success' ? 'SENT' : 'SUBMIT')}
                        </Button>
                    </form>
                </div>
            </div>

            {/* Modal Pop-up */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                        />
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-5xl max-h-[85vh] overflow-hidden flex flex-col"
                        >
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-6 right-6 p-2 hover:bg-foreground/5 rounded-full transition-colors z-10"
                            >
                                <X size={24} />
                            </button>
                            
                            <div className="p-12 overflow-y-auto scrollbar-hide">
                                <span className="text-accent font-bold uppercase tracking-[0.2em] text-[10px] block mb-4">Event Breakdown</span>
                                <h2 className="text-4xl font-bold mb-8 leading-tight">Certificate Program 3.0 in Jan 2026 in NIT Manipur</h2>
                                
                                <div className="space-y-6 text-muted leading-relaxed text-lg">
                                    <p>
                                        Certificate Program 3.0 – 5-Day Workshop on IoT and Autonomous Systems is a focused, hybrid training program designed to build practical and conceptual skills in IoT applications, Digital Twin concepts, and Autonomous Systems. Conducted from 14–18 January 2026 at NIT Manipur, the program brings together academia and practitioners to explore how AI-driven methods enable intelligent sensing, modeling, and autonomous decision-making.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                                        <div className="rounded-2xl overflow-hidden aspect-video bg-foreground/5 shadow-inner">
                                            <img src="/assets/slide_8_image_172.png" alt="Workshop Session 1" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="rounded-2xl overflow-hidden aspect-video bg-foreground/5 shadow-inner">
                                            <img src="/assets/slide_8_image_175.png" alt="Workshop Session 2" className="w-full h-full object-cover" />
                                        </div>
                                    </div>

                                    <p>
                                        Participants gained exposure through expert lectures, case studies, and hands-on discussions covering system architectures, real-world deployments, and emerging trends in robotics and autonomy. The workshop emphasizes interdisciplinary learning and applications relevant to smart infrastructure, cyber-physical systems, and next-generation autonomous technologies.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-12">
                                    <div className="bg-foreground/5 p-6 rounded-3xl">
                                        <span className="block text-foreground font-bold text-2xl mb-1">5 Days</span>
                                        <span className="text-[10px] uppercase font-bold text-muted tracking-widest">Duration</span>
                                    </div>
                                    <div className="bg-foreground/5 p-6 rounded-3xl">
                                        <span className="block text-foreground font-bold text-2xl mb-1">65+</span>
                                        <span className="text-[10px] uppercase font-bold text-muted tracking-widest">Participants</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Events;
