import { motion } from "framer-motion";

const phases = [
    {
        title: "Foundation",
        description: "Establishing our core team and setting the vision for the chapter.",
        icon: "🏛️",
        color: "bg-[var(--color-brand-cyan)]",
        borderColor: "border-[var(--color-brand-cyan)]"
    },
    {
        title: "Exploration",
        description: "Connecting with industry and research partners to identify key challenges.",
        icon: "🔭",
        color: "bg-[var(--color-brand-green)]",
        borderColor: "border-[var(--color-brand-green)]"
    },
    {
        title: "Innovation",
        description: "Developing prototypes and solutions for intelligent transportation.",
        icon: "💡",
        color: "bg-[var(--color-brand-pink)]",
        borderColor: "border-[var(--color-brand-pink)]"
    },
    {
        title: "Expansion",
        description: "Scaling our impact and fostering a larger community of thinkers.",
        icon: "🚀",
        color: "bg-[var(--color-brand-yellow)]",
        borderColor: "border-[var(--color-brand-yellow)]"
    }
];

export default function AboutCards() {
    return (
        <section id="about" className="py-24 bg-white px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
                        Chapter <span className="text-black/20">Phases</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {phases.map((phase, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className={`rounded-[40px] p-10 border-2 ${phase.borderColor} flex flex-col items-start text-left bg-white shadow-xl hover:shadow-2xl transition-all duration-300`}
                        >
                            <div className={`text-4xl mb-8 p-4 rounded-2xl ${phase.color} border border-black/10`}>
                                {phase.icon}
                            </div>
                            <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">
                                {phase.title}
                            </h3>
                            <p className="text-lg font-medium opacity-60 leading-relaxed">
                                {phase.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
