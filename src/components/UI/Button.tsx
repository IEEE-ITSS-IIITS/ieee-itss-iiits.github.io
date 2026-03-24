import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
    children,
    variant = 'primary',
    className = '',
    disabled,
    type = 'button',
    ...props
}: ButtonProps) => {
    const baseStyles = "px-10 py-4 rounded-full font-semibold transition-colors duration-200 focus:outline-none flex items-center justify-center gap-3 text-sm tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed";
    const variants = {
        primary: "bg-accent text-white hover:bg-accent/90",
        secondary: "bg-transparent text-foreground border border-foreground/10 hover:bg-foreground/5"
    };

    return (
        <button
            type={type}
            disabled={disabled}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
