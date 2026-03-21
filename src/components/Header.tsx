import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";

export default function Header() {
    const navLinks = ["Home", "Timeline", "Activities", "Impact"];

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <nav className="w-full bg-white border-b border-black flex items-center justify-between px-8 py-4">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img src="/assets/logo.jpg" alt="IEEE ITSS Logo" className="h-10 w-auto object-contain" />
                    <div className="flex flex-col">
                        <span className="text-xl font-black tracking-tighter text-black leading-none uppercase">IEEE ITSS</span>
                        <span className="text-[10px] font-bold text-black opacity-50 uppercase tracking-[0.2em]">IIIT Sri City</span>
                    </div>
                </div>

                {/* Links */}
                <div className="hidden md:flex items-center space-x-10 text-[11px] font-black uppercase tracking-[0.2em] text-black">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="hover:opacity-50 transition-opacity"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white text-black text-[11px] font-black px-8 py-3 rounded-full border border-black uppercase tracking-[0.2em] transition-all hover:bg-black hover:text-white"
                >
                    Join Chapter
                </motion.button>
            </nav>
        </header>
    );
}
