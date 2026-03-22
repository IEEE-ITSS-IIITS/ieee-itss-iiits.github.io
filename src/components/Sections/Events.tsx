import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ChevronDown } from 'lucide-react';
import Card from '../UI/Card';
import Tag from '../UI/Tag';
import Button from '../UI/Button';
import { PAST_EVENTS, UPCOMING_EVENTS } from '../../data';

const PastEventItem = memo(({ event, isExpanded, onToggle }: { event: any, isExpanded: boolean, onToggle: () => void }) => (
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
                            <img src={event.image} alt={event.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
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
                        {PAST_EVENTS.map((event) => (
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

export default Events;
