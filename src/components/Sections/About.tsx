import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Cpu, Wifi, Shield, Zap } from 'lucide-react';
import { ADVISORS, STUDENT_TEAM, DOMAINS, CHAPTER_CONFIG } from '../../data';
import Card from '../UI/Card';
import DomainCard from '../UI/DomainCard';

const About = () => {
    const domainIcons = {
        'edge-ai': <Cpu size={24} />,
        'v2x': <Wifi size={24} />,
        'safety': <Shield size={24} />,
        'efficiency': <Zap size={24} />
    };

    return (
        <div className="pt-32 pb-32 max-w-7xl mx-auto px-6">
            <div className="mb-24 text-center">
                <span className="italic-serif text-accent text-3xl mb-6 block">05 / The Institution</span>
                <h1 className="text-7xl font-bold mb-6 tracking-tighter mx-auto">Academic <span className="text-accent lowercase italic-serif">rigor</span>. <br /> Design <span className="text-accent lowercase italic-serif">excellence</span>.</h1>
                <p className="text-muted/80 font-medium max-w-xl mx-auto">Established in 2024, our chapter serves as a beacon for intelligent transportation research at IIIT Sri City.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32 items-center">
                <div className="md:col-span-12">
                    <div className="h-px w-full bg-foreground/5 mb-16" />
                </div>
                <div className="md:col-span-5 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-8 text-accent">Our Mission</h2>
                    <p className="text-lg text-muted/80 leading-relaxed">To pioneer sustainable and intelligent mobility solutions through collaborative engineering and multidisciplinary research.</p>
                </div>
                <div className="md:col-span-7">
                    <img src="/assets/optimized/slide_1_image_89.jpg" alt="Lab" className="w-full rounded-3xl" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                </div>
            </div>

            <div className="mb-32 text-center">
                <h2 className="text-5xl font-bold mb-16 tracking-tight font-sans">Core Domains</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {DOMAINS.map((d) => (
                        <DomainCard
                            key={d.id}
                            title={d.title}
                            desc={d.desc}
                            icon={domainIcons[d.id as keyof typeof domainIcons]}
                        />
                    ))}
                </div>
            </div>

            <section className="mb-24 text-center">
                <h2 className="text-2xl font-bold mb-12 font-sans">Faculty Advisor</h2>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-sm w-full">
                        {ADVISORS.map((advisor, i) => (
                            <Card key={i} className="text-center group">
                                <div className="w-20 h-20 bg-background rounded-full mx-auto mb-4 flex items-center justify-center text-accent font-bold text-2xl group-hover:bg-accent/10 transition-colors">
                                    {advisor.name.charAt(0)}
                                </div>
                                <h4 className="font-bold text-lg">{advisor.name}</h4>
                                <p className="text-accent text-sm font-medium mb-2">{advisor.role}</p>
                                <p className="text-xs text-muted mb-4">{advisor.designation}, {advisor.department}</p>
                                <p className="text-xs text-muted italic mb-6">"{advisor.bio}"</p>
                                {advisor.linkedin && (
                                    <a
                                        href={advisor.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted hover:text-accent inline-block transition-colors"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                )}
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mb-12 text-center">
                <h2 className="text-2xl font-bold mb-12 font-sans">Executive Office</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {STUDENT_TEAM.slice(0, 3).map((member, i) => (
                        <Card key={i} className="text-center p-6 flex flex-col justify-between">
                            <div>
                                <h4 className="font-bold text-sm h-10 flex items-center justify-center">{member.name}</h4>
                                <p className="text-accent text-[10px] font-bold uppercase tracking-wider mb-2">{member.role}</p>
                                <p className="text-[10px] text-muted mb-4">{member.yearBranch}</p>
                            </div>
                            <div className="mt-auto">
                                <a href={member.linkedin} className="text-muted hover:text-accent inline-block transition-colors"><Linkedin size={16} /></a>
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-2xl mx-auto mt-6">
                    {STUDENT_TEAM.slice(3, 5).map((member, i) => (
                        <Card key={i} className="text-center p-6 flex flex-col justify-between">
                            <div>
                                <h4 className="font-bold text-sm h-10 flex items-center justify-center">{member.name}</h4>
                                <p className="text-accent text-[10px] font-bold uppercase tracking-wider mb-2">{member.role}</p>
                                <p className="text-[10px] text-muted mb-4">{member.yearBranch}</p>
                            </div>
                            <div className="mt-auto">
                                <a href={member.linkedin} className="text-muted hover:text-accent inline-block transition-colors"><Linkedin size={16} /></a>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="mb-24 text-center">
                <h2 className="text-2xl font-bold mb-12 font-sans">Student Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {STUDENT_TEAM.slice(5).map((member, i) => (
                        <Card key={i} className="text-center p-6 flex flex-col justify-between">
                            <div>
                                <h4 className="font-bold text-sm h-10 flex items-center justify-center">Student Member {i + 1}</h4>
                                <p className="text-accent text-[10px] font-bold uppercase tracking-wider mb-2">Team Member</p>
                                <p className="text-[10px] text-muted mb-4">{member.yearBranch}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Partners & Affiliations - Commented out as requested 
            <section className="mb-32">
                <h2 className="text-3xl font-bold mb-16 italic-serif text-accent capitalize">Partners & Affiliations</h2>
                ...
            </section>
            */}
        </div>
    );
};

export default About;
