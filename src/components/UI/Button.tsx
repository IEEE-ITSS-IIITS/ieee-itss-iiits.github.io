import React from 'react';
import { motion } from 'motion/react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
    onClick?: () => void;
}

const Button = ({
    children,
    variant = 'primary',
    className = '',
    onClick
}: ButtonProps) => {
    const baseStyles = "px-10 py-4 rounded-full font-semibold transition-all duration-500 active:scale-[0.98] focus:outline-none flex items-center justify-center gap-3 text-sm tracking-widest uppercase";
    const variants = {
        primary: "bg-accent text-white hover:shadow-[0_15px_30px_oklch(50%_0.2_250_/_0.25)] hover:-translate-y-1",
        secondary: "bg-transparent text-foreground border border-foreground/10 hover:bg-foreground/5"
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </motion.button>
    );
};

export default Button;
