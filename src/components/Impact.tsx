import { motion } from "framer-motion";
import { Users, GraduationCap, Building2 } from "lucide-react";

export default function Impact() {
    const categories = [
        {
            title: "Students",
            description: "Skill development, hands-on projects, networking with industry leaders.",
            icon: <Users className="text-white" size={24} />,
            borderColor: "border-[var(--color-brand-cyan)]",
            bgColor: "bg-[var(--color-brand-cyan)]",
            shadowColor: "shadow-[var(--color-brand-cyan)]/20"
        },
        {
            title: "Researchers & Faculty",
            description: "Collaborations, knowledge exchange, cutting-edge research directions.",
            icon: <GraduationCap className="text-white" size={24} />,
            borderColor: "border-[var(--color-brand-pink)]",
            bgColor: "bg-[var(--color-brand-pink)]",
            shadowColor: "shadow-[var(--color-brand-pink)]/20"
        },
        {
            title: "Industry",
            description: "Talent pipeline, mentorship, problem-driven solutions for smart cities.",
            icon: <Building2 className="text-white" size={24} />,
            borderColor: "border-[var(--color-brand-yellow)]",
            bgColor: "bg-[var(--color-brand-yellow)]",
            shadowColor: "shadow-[var(--color-brand-yellow)]/20"
        }
    ];

    return (
        <section id="impact" className="py-24 bg-white px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
                        Impact & <span className="text-black/20">Audience</span>
                    </h2>
                    <p className="text-xl font-bold opacity-50 max-w-2xl leading-relaxed">
                        Our activities align with IEEE ITSS goals: providing information, helping students, and answering questions through events and training.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className={`p-10 rounded-[40px] border-2 ${item.borderColor} bg-white transition-all duration-300 ${item.shadowColor} hover:shadow-2xl flex flex-col items-start gap-6`}
                        >
                            <div className={`w-14 h-14 rounded-2xl ${item.bgColor} flex items-center justify-center shadow-lg`}>
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-lg font-medium opacity-60 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
