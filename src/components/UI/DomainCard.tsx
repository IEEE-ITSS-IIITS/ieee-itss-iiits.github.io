import React from 'react';

interface DomainCardProps {
    title: string;
    desc: string;
    icon: React.ReactNode;
    key?: string | number;
}

const DomainCard = ({ title, desc, icon }: DomainCardProps) => {
    return (
        <div className="group p-8 rounded-[2.5rem] border border-foreground/5 bg-white/70 backdrop-blur-sm transition-all hover:border-accent/20 relative overflow-hidden h-full flex flex-col min-h-[280px] justify-center">
            <div className="relative z-10 flex flex-col">
                <h4 className="font-bold text-3xl mb-4 tracking-tight">{title}</h4>
                <p className="text-base text-muted/70 leading-relaxed max-w-[80%]">{desc}</p>
            </div>
            {/* Tilted Background Icon Overlay */}
            <div className="absolute -bottom-8 -right-8 text-accent/[0.08] -rotate-12 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-[15deg] pointer-events-none select-none">
                {React.cloneElement(icon as React.ReactElement, { size: 200 })}
            </div>
        </div>
    );
};

export default DomainCard;
