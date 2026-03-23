import React from 'react';
import { Linkedin, Instagram, Twitter, Mail } from 'lucide-react';
import { CHAPTER_CONFIG } from '../../data';

const Footer = () => (
    <footer className="bg-black border-t border-white/10 py-16 mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
                <h3 className="font-bold text-lg mb-4 text-white uppercase tracking-wider">IEEE ITSS IIIT Sri City</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                    Representing IEEE ITSS, providing information, helping students, and answering questions about intelligent transportation systems.
                </p>
            </div>
            <div>
                <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-widest">Quick Links</h4>
                <div className="flex flex-col gap-3 text-sm text-white/60">
                    <a href="#" className="hover:text-accent transition-colors">IEEE ITSS Global</a>
                    <a href="https://iiits.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">IIIT Sri City</a>
                    <a href="#" className="hover:text-accent transition-colors">Membership Info</a>
                </div>
            </div>
            <div>
                <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-widest">Connect</h4>
                <div className="flex gap-6 mb-8">
                    <a href={CHAPTER_CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-all hover:scale-110"><Linkedin size={22} /></a>
                    <a href={CHAPTER_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-all hover:scale-110"><Instagram size={22} /></a>
                    <a href={CHAPTER_CONFIG.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-all hover:scale-110"><Twitter size={22} /></a>
                    <a href={`mailto:${CHAPTER_CONFIG.email}`} className="text-white/40 hover:text-accent transition-all hover:scale-110"><Mail size={22} /></a>
                </div>
                <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">© 2025 IEEE ITSS IIIT Sri City Student Chapter</p>
            </div>
        </div>
    </footer>
);

export default Footer;
