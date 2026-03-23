import React from 'react';
import { MapPin, Users } from 'lucide-react';
import { TIMELINE } from '../../data';
import Card from '../UI/Card';
import Tag from '../UI/Tag';

const TIMELINE_ITEM_STYLE = {
    contentVisibility: 'auto',
    containIntrinsicSize: '520px'
} as const;

const TimelineEvent = React.memo(({ event, idx }: { event: any, idx: number }) => {
    const side = idx % 2 === 0 ? 'left' : 'right'; // Card side

    return (
        <div
            className="relative"
            style={TIMELINE_ITEM_STYLE}
        >
            <div
                className={`relative flex items-center ${side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8 md:gap-0`}
            >
                {/* Node */}
                <div
                    className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 z-30 border-4 border-background"
                />

                {/* Content */}
                <div className={`w-full md:w-[45%] ${side === 'left' ? 'md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}>
                    <Card className="overflow-hidden p-0 bg-background/85 border-white/5">
                        {(event.image || (event.images && event.images.length > 0)) && (
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={event.images ? event.images[0] : event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    decoding="async"
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
            </div>
        </div>
    );
});

const Timeline = () => {
    return (
        <div className="pt-24 pb-24">
            <div className="max-w-7xl mx-auto px-6 relative">
                <div className="mb-32">
                    <span className="italic-serif text-accent text-3xl mb-6 block">03 / Timeline</span>
                    <h1 className="text-7xl font-bold mb-6 tracking-tighter">Event history & <br /> <span className="text-accent lowercase italic-serif">milestones</span>.</h1>
                    <p className="text-muted/80 font-medium max-w-xl">A chronological record of our journey since 2023, meticulously documented for the future.</p>
                </div>

                <div className="relative z-10">
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/20 -translate-x-1/2" />

                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent -translate-x-1/2 z-10" />

                    <div className="space-y-24">
                        {TIMELINE.map((yearGroup) => (
                            <div key={yearGroup.year}>
                                <div className="relative z-20 flex justify-center mb-20">
                                    <span
                                        className="text-8xl font-black text-foreground/5 italic-serif pointer-events-none absolute -top-12"
                                    >
                                        {yearGroup.year}
                                    </span>
                                    <span className="relative z-10 px-6 py-2 border border-foreground/10 rounded-full text-xs font-bold tracking-[0.4em] uppercase text-accent bg-background/90">
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

export default Timeline;
