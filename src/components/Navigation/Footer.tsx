import React from 'react';
import { Linkedin, Instagram, Twitter, Mail } from 'lucide-react';
import { CHAPTER_CONFIG } from '../../data';

const Footer = () => (
    <footer className="bg-card border-t border-border-subtle py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
                <h3 className="font-bold text-lg mb-4">IEEE ITSS IIIT Sri City</h3>
                <p className="text-muted text-sm leading-relaxed">
                    Representing IEEE ITSS, providing information, helping students, and answering questions about intelligent transportation systems.
                </p>
            </div>
            <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="flex flex-col gap-2 text-sm text-muted">
                    <a href="#" className="hover:text-accent">IEEE ITSS Global</a>
                    <a href="#" className="hover:text-accent">IIIT Sri City</a>
                    <a href="#" className="hover:text-accent">Membership Info</a>
                </div>
            </div>
            <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <div className="flex gap-4 mb-4">
                    <a href={CHAPTER_CONFIG.socials.linkedin} className="text-muted hover:text-accent"><Linkedin size={20} /></a>
                    <a href={CHAPTER_CONFIG.socials.instagram} className="text-muted hover:text-accent"><Instagram size={20} /></a>
                    <a href={CHAPTER_CONFIG.socials.twitter} className="text-muted hover:text-accent"><Twitter size={20} /></a>
                    <a href={`mailto:${CHAPTER_CONFIG.email}`} className="text-muted hover:text-accent"><Mail size={20} /></a>
                </div>
                <p className="text-xs text-muted">© 2025 IEEE ITSS IIIT Sri City Student Chapter</p>
            </div>
        </div>
    </footer>
);

export default Footer;
