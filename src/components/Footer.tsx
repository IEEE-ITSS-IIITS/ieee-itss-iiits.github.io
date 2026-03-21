import { motion } from "framer-motion";
import { MoveUpRight, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-black pt-24 pb-12 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
                    {/* Left: Branding */}
                    <div className="max-w-md">
                        <div className="flex items-center gap-3 mb-8">
                            <img src="/assets/logo.jpg" alt="IEEE ITSS Logo" className="h-12 w-auto object-contain" />
                            <div className="flex flex-col">
                                <span className="text-2xl font-black tracking-tighter text-black leading-none uppercase">IEEE ITSS</span>
                                <span className="text-xs font-bold text-black opacity-50 uppercase tracking-[0.2em]">IIIT Sri City</span>
                            </div>
                        </div>
                        <p className="text-xl font-medium text-black leading-relaxed opacity-60">
                            Driving the future of smart mobility through innovation, collaboration, and student excellence.
                        </p>
                    </div>

                    {/* Middle: Links */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
                        <div className="flex flex-col gap-6">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30">Explore</span>
                            <div className="flex flex-col gap-4 font-black uppercase tracking-[0.2em] text-[11px] text-black">
                                <a href="#home" className="hover:opacity-50 transition-opacity">Home</a>
                                <a href="#activities" className="hover:opacity-50 transition-opacity">Activities</a>
                                <a href="#timeline" className="hover:opacity-50 transition-opacity">Timeline</a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30">Connect</span>
                            <div className="flex flex-col gap-4 font-black uppercase tracking-[0.2em] text-[11px] text-black">
                                <a href="#" className="hover:opacity-50 transition-opacity flex items-center gap-2">Connect <MoveUpRight size={14} /></a>
                                <a href="#" className="hover:opacity-50 transition-opacity flex items-center gap-2">YouTube <MoveUpRight size={14} /></a>
                                <a href="#" className="hover:opacity-50 transition-opacity flex items-center gap-2">LinkedIn <MoveUpRight size={14} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Part */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/10 gap-8">
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-black/50">
                        &copy; 2024 IEEE ITSS IIIT SRI CITY. ALL RIGHTS RESERVED.
                    </p>

                    <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-black/50">
                        MADE WITH <Heart size={14} className="text-red-500 fill-red-500" /> BY STUDENT CHAPTER
                    </div>
                </div>
            </div>
        </footer>
    );
}
