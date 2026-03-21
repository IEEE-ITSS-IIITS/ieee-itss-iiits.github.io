import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles, Building2 } from "lucide-react";

export default function Hero() {
    const tags = [
        { text: "Sricity", icon: <Building2 size={14} />, color: "bg-[var(--color-brand-cyan)]", top: "20%", left: "15%", rotate: "-6deg" },
        { text: "Andhra Pradesh", icon: <MapPin size={14} />, color: "bg-[var(--color-brand-green)]", top: "25%", right: "12%", rotate: "8deg" },
        { text: "IIT", icon: <GraduationCap size={14} />, color: "bg-[var(--color-brand-pink)]", bottom: "35%", left: "10%", rotate: "12deg" },
        { text: "University", icon: <Sparkles size={14} />, color: "bg-[var(--color-brand-yellow)]", bottom: "30%", right: "15%", rotate: "-8deg" },
    ];

    return (
        <section id="home" className="pt-56 pb-32 px-6 min-h-[95vh] flex flex-col items-center justify-center bg-[#E3F2FD] relative overflow-hidden text-center">

            {/* Floating Tags */}
            {tags.map((tag, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className={`absolute hidden lg:flex items-center gap-2 border border-black px-4 py-2 rounded-full shadow-lg font-black text-[10px] uppercase tracking-widest ${tag.color}`}
                    style={{
                        top: tag.top,
                        bottom: tag.bottom,
                        left: tag.left,
                        right: tag.right,
                        rotate: tag.rotate
                    }}
                >
                    {tag.icon}
                    {tag.text}
                </motion.div>
            ))}

            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-6xl relative z-10"
            >
                <div className="inline-block bg-white text-black text-[11px] font-black uppercase tracking-[0.4em] py-2 px-8 rounded-full border border-black mb-12 shadow-sm">
                    Est. Dec 2024
                </div>

                <h1 className="text-8xl md:text-[120px] lg:text-[180px] mb-8 font-black leading-[0.8] tracking-tighter uppercase text-black">
                    IEEE ITSS
                </h1>

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-16 tracking-tight text-gray-800 uppercase">
                    Inspiring young minds today,<br />
                    <span className="opacity-40">for a better tomorrow</span>
                </h2>

            </motion.div>

        </section>
    );
}
