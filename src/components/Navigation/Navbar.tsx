import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
    activePage: string;
    setActivePage: (p: string) => void;
}

const Navbar = ({
    activePage,
    setActivePage
}: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        { label: 'Home', id: 'home' },
        { label: 'About', id: 'about' },
        { label: 'Timeline', id: 'timeline' },
        { label: 'Events', id: 'events' },
        { label: 'Gallery', id: 'gallery' },
        { label: 'Contact', id: 'contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 h-14 bg-background/90 backdrop-blur-sm border-b border-border-subtle z-50">
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                <div
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => setActivePage('home')}
                >
                    <img src="/assets/logo.jpg" alt="Logo" className="h-8 w-auto rounded" referrerPolicy="no-referrer" />
                    <span className="font-bold text-foreground hidden sm:block">IEEE ITSS IIITS</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActivePage(item.id)}
                            className={`group relative text-xs font-bold uppercase tracking-[0.15em] transition-all ${activePage === item.id ? 'text-accent' : 'text-foreground/60 hover:text-foreground'
                                }`}
                        >
                            <span className="relative z-10">{item.label}</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full" />
                            {activePage === item.id && (
                                <span className="absolute -bottom-1 left-0 w-full h-px bg-accent" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <button className="text-foreground" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-14 left-0 right-0 bg-background border-b border-border-subtle md:hidden p-6 flex flex-col gap-4"
                    >
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActivePage(item.id);
                                    setIsOpen(false);
                                }}
                                className={`text-left text-lg font-medium ${activePage === item.id ? 'text-accent' : 'text-muted'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
