import { motion } from "framer-motion";
import { BookOpen, Zap, Target } from "lucide-react";

export default function Roadmap() {
    const steps = [
        {
            title: "Our Story",
            description: "From humble beginnings to a thriving chapter of innovators.",
            icon: <BookOpen size={24} />,
            color: "bg-[var(--color-brand-cyan)]",
            borderColor: "border-[var(--color-brand-cyan)]"
        },
        {
            title: "Our Machine",
            description: "Building the tools and technologies that drive smart mobility.",
            icon: <Zap size={24} />,
            color: "bg-[var(--color-brand-green)]",
            borderColor: "border-[var(--color-brand-green)]"
        },
        {
            title: "Our Mission",
            description: "To lead the way in sustainable and intelligent transportation solutions.",
            icon: <Target size={24} />,
            color: "bg-[var(--color-brand-pink)]",
            borderColor: "border-[var(--color-brand-pink)]"
        }
    ];

    return (
        <section id="roadmap" className="py-24 bg-[#F8F9FA] px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
                        The <span className="text-black/20">Roadmap</span>
                    </h2>
                    <p className="text-xl font-bold opacity-50 mx-auto max-w-2xl leading-relaxed">
                        Charting our path from inspiration to real-world impact.
                    </p>
                </div>

                <div className="relative">
                    {/* Roadmap Line */}
                    <div className="hidden lg:block absolute top-[60px] left-0 w-full h-[2px] bg-black/10 z-0" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className={`w-28 h-28 rounded-full ${step.color} border-2 border-black flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                                    <div className="text-black">{step.icon}</div>
                                </div>

                                <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="text-lg font-medium opacity-60 leading-relaxed max-w-sm">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
