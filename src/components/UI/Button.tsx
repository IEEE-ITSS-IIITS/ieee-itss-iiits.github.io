import React from 'react';

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
    const baseStyles = "px-10 py-4 rounded-full font-semibold transition-colors duration-200 focus:outline-none flex items-center justify-center gap-3 text-sm tracking-widest uppercase";
    const variants = {
        primary: "bg-accent text-white hover:bg-accent/90",
        secondary: "bg-transparent text-foreground border border-foreground/10 hover:bg-foreground/5"
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
