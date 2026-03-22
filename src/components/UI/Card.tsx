import React from 'react';
import { motion } from 'motion/react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    [key: string]: any;
}

const Card = ({ children, className = "", ...props }: CardProps) => (
    <motion.div
        {...props}
        whileHover={{ y: -12, boxShadow: "0 30px 60px rgba(0,0,0,0.03)" }}
        className={`bg-card border border-border-subtle rounded-3xl p-8 hover:border-accent/30 transition-all duration-500 ${className}`}
    >
        {children}
    </motion.div>
);

export default Card;
