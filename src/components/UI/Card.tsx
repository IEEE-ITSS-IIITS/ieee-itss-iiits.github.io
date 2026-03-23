import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    [key: string]: any;
}

const Card = ({ children, className = "", ...props }: CardProps) => (
    <div
        {...props}
        className={`bg-card border border-border-subtle rounded-3xl p-8 transition-colors duration-200 hover:border-accent/30 ${className}`}
    >
        {children}
    </div>
);

export default Card;
