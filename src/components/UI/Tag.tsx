import React from 'react';
import { motion } from 'motion/react';

interface TagProps {
    children: React.ReactNode;
    [key: string]: any;
}

const Tag = ({ children, ...props }: TagProps) => (
    <motion.span
        {...props}
        className="bg-foreground/5 text-foreground/60 border border-foreground/5 text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full inline-block cursor-default"
    >
        {children}
    </motion.span>
);

export default Tag;
