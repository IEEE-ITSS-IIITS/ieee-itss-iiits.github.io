import { motion } from "framer-motion";

const timelineData = [
    {
        phase: "Pre-Formation",
        duration: "2023 – May 2024",
        events: ["Winter School (Dec 2023)", "Certificate Program 1.0 (May 2024)"],
        color: "bg-[var(--color-brand-cyan)]"
    },
    {
        phase: "Post-Formation",
        duration: "Dec 2024 – Jan 2026",
        events: ["CP 2.0 (May 2025)", "Smart Mobility Pitch Deck (Mar 2025)", "NexSync Hackathon (Nov 2025)", "CP 3.0 (Jan 2026)"],
        color: "bg-[var(--color-brand-green)]"
    }
];

export default function Timeline() {
    return (
        <section className="py-32 px-6 bg-white relative border-y border-black/10">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">Activity Timeline</h2>
                    <p className="text-black opacity-50 font-medium uppercase tracking-[0.2em] text-xs">Our journey of innovation and impact</p>
                </div>

                <div className="relative flex flex-col md:flex-row gap-16 items-start justify-center">
                    {/* Connecting Line (Horizontal on Desktop, Vertical on Mobile) */}
                    <div className="hidden md:block absolute top-[30px] left-0 w-full h-[1px] bg-black z-0"></div>

                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10 flex-1 flex flex-col items-center w-full"
                        >
                            {/* Dot */}
                            <div className={`w-16 h-16 rounded-full border border-black shadow-lg mb-12 flex items-center justify-center font-black text-xl text-black ${item.color}`}>
                                {index + 1}
                            </div>

                            {/* Content Card */}
                            <div className="bg-white border border-black rounded-[32px] p-10 w-full max-w-sm text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
                                <span className={`inline-block border border-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-8 ${item.color}`}>
                                    {item.duration}
                                </span>
                                <h3 className="text-2xl font-black mb-8 text-black opacity-80 group-hover:opacity-100 transition-opacity">{item.phase}</h3>
                                <ul className="space-y-4 font-medium text-black opacity-50 group-hover:opacity-100 transition-opacity text-base">
                                    {item.events.map((evt, i) => (
                                        <li key={i} className="flex items-center justify-center gap-3">
                                            <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                                            {evt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
