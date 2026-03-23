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
            <div className="mb-24">
                <span className="italic-serif text-accent text-3xl mb-6 block">05 / The Institution</span>
                <h1 className="text-7xl font-bold mb-6 tracking-tighter">Academic <span className="text-accent lowercase italic-serif">rigor</span>. <br /> Design <span className="text-accent lowercase italic-serif">excellence</span>.</h1>
                <p className="text-muted/80 font-medium max-w-xl">Established in 2024, our chapter serves as a beacon for intelligent transportation research at IIIT Sri City.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32">
                <div className="md:col-span-12">
                    <div className="h-px w-full bg-foreground/5 mb-16" />
                </div>
                <div className="md:col-span-5">
                    <h2 className="text-3xl font-bold mb-8 text-accent">Our Mission</h2>
                    <p className="text-lg text-muted/80 leading-relaxed">To pioneer sustainable and intelligent mobility solutions through collaborative engineering and multidisciplinary research.</p>
                </div>
                <div className="md:col-span-7">
                    <img src="/assets/optimized/slide_1_image_89.jpg" alt="Lab" className="w-full rounded-3xl" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                </div>
            </div>

            <div className="mb-32">
                <h2 className="text-5xl font-bold mb-16 tracking-tight text-center uppercase font-sans">CORE DOMAINS</h2>
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

            <section className="mb-24">
                <h2 className="text-2xl font-bold mb-12 uppercase font-sans">Faculty Advisors</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {ADVISORS.map((advisor, i) => (
                        <Card key={i} className="text-center group">
                            <div className="w-20 h-20 bg-background rounded-full mx-auto mb-4 flex items-center justify-center text-accent font-bold text-2xl group-hover:bg-accent/10 transition-colors">
                                {advisor.name.charAt(0)}
                            </div>
                            <h4 className="font-bold text-lg">{advisor.name}</h4>
                            <p className="text-accent text-sm font-medium mb-2">{advisor.designation}</p>
                            <p className="text-xs text-muted mb-4">{advisor.department}</p>
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
            </section>

            <section className="mb-24">
                <h2 className="text-2xl font-bold mb-12 uppercase font-sans">Student Core Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {STUDENT_TEAM.map((member, i) => (
                        <Card key={i} className="text-center p-6">
                            <h4 className="font-bold">{member.name}</h4>
                            <p className="text-accent text-xs font-medium mb-1">{member.role}</p>
                            <p className="text-[11px] text-muted mb-4">{member.yearBranch}</p>
                            <a href={member.linkedin} className="text-muted hover:text-accent inline-block transition-colors"><Linkedin size={18} /></a>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="mb-32">
                <h2 className="text-3xl font-bold mb-16 italic-serif text-accent capitalize">Partners & Affiliations</h2>
                <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center hidden md:flex">
                        <svg width="100%" height="200" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                            <motion.path
                                d="M280 100 H520"
                                stroke="oklch(var(--accent))"
                                strokeWidth="1.5"
                                strokeDasharray="6 6"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 0.3 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                            <motion.circle
                                cx="400" cy="100" r="4"
                                fill="oklch(var(--accent))"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1, duration: 0.5 }}
                            />
                        </svg>
                    </div>

                    {/* IIIT Sri City Box */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-white/85 border border-foreground/5 p-10 rounded-[2.5rem] w-full max-w-[320px] aspect-square flex flex-col items-center justify-center hover:border-accent/20 transition-all duration-300 group shadow-sm hover:shadow-xl hover:-translate-y-1 block"
                    >
                        <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-accent/20 rounded-tl-xl group-hover:border-accent/40 transition-colors" />
                        <img
                            src="/assets/iiitlogo.png"
                            alt="IIIT Sri City"
                            className="w-40 mb-8 transition-all duration-500 scale-95 group-hover:scale-100"
                            referrerPolicy="no-referrer"
                        />
                        <div className="text-center">
                            <span className="block text-[10px] uppercase tracking-[0.3em] font-bold text-muted/40 mb-2">Host Institution</span>
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-sm font-bold text-foreground/80 group-hover:text-accent transition-colors">IIIT Sri City</span>
                                <div className="flex gap-4 mt-2">
                                    <a href={CHAPTER_CONFIG.institutionWebsite} target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-accent underline underline-offset-4 decoration-accent/30 font-medium transition-all">Website</a>
                                    <a href={CHAPTER_CONFIG.institutionLinkedin} target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-accent underline underline-offset-4 decoration-accent/30 font-medium transition-all">LinkedIn</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* IEEE ITSS Box */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-white/85 border border-foreground/5 p-10 rounded-[2.5rem] w-full max-w-[320px] aspect-square flex flex-col items-center justify-center hover:border-accent/20 transition-all duration-300 group shadow-sm hover:shadow-xl hover:-translate-y-1 block"
                    >
                        <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-accent/20 rounded-br-xl group-hover:border-accent/40 transition-colors" />
                        <div className="w-44 mb-8">
                            <svg viewBox="0 0 512 150" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto fill-foreground transition-all duration-500 scale-95 group-hover:scale-100">
                                <path d="M170.746 19.748h31.325v113.084h-31.325V19.748zm47.762 113.084V19.748h86.142v21.925h-54.818v23.334h50.429v21.929h-50.429v23.961h54.818v21.935h-86.142zm103.692 0V19.748h86.12v21.925h-54.803v23.334h50.412v21.929h-50.412v23.961h54.803v21.935H322.2zm103.66 0V19.748h86.141v21.925h-54.798v23.334h50.416v21.929h-50.416v23.961H512v21.935H425.86zM71.458 87.637c-.414 7.985-.516 15.375-1.107 23.38 3.16.287 6.727.563 10.097.072L79.44 88.774l-.177-1.062c-2.566.1-4.995.203-7.806-.075zM51.72 65.214c-3.893 1.951-9.62 4.9-8.988 10.239.834 2.915 3.99 4.799 6.488 5.997 13.805 6.083 32.132 6.29 46.707 1.75 3.598-1.387 8.429-3.398 9.09-7.807-.039-3.642-3.895-5.935-6.665-7.33v-.173c.966-.381 2.077-.725 3.077-.83v-.097c-4.881-.875-9.595-2.152-14.323-3.402.91 2.075 1.568 4.263 2.327 6.42 1.42-.455 2.877-.8 4.41-1.01 2.493.971 6.064 2.36 6.418 5.477.277 2.916-2.914 4.336-4.929 5.52-10.691 3.89-22.72 4.27-33.87 1.312-3.08-.97-7.524-2.216-7.906-6.138 2.186-5.162 7.84-6.237 12.562-7.49-2.427-1.564-4.895-2.948-7.247-4.688-2.54.14-4.86 1.252-7.151 2.25zm23.62-31.149l-1.384 4.443-6.94 19.879c1.738.177 3.89 0 5.596.177v.164l-1.015 22.486.175.236c2.22.218 4.992.329 7.255-.057v-.354l-.906-21.81.136-.738 6.106-.104c-3.045-8.047-6-16.175-8.844-24.322h-.18zm-3.225-9.988c5.106-3.478 9.687 1.385 13.643 4.164 15.296 12.312 29.73 26.405 40.73 42.32 1.385 2.053 2.012 5.242.769 7.566-2.851 4.756-6.699 9.097-10.346 13.505v.241c-9.094 9.68-18.698 19.632-29.076 27.83-5.065 3.082-9.714 9.813-16.238 5.643-14.855-10.855-29.07-24.351-41.12-38.826-2.043-3.182-5.233-5.79-6.654-9.4-1.983-4.887 2.389-8.394 4.89-12.075C41 49.892 56.26 35.033 72.116 24.077zM84.918 9.605l-5.654-8.013C78.57 1.17 77.707.47 76.94.265c-1.667-.723-3.465.152-4.826 1.184l-10.23 13.325C45.47 35.102 26.04 54.083 4.843 68.633 3.168 69.942.677 71.22.158 73.378c-.556 1.94.455 3.542 1.66 4.75 16.974 11.691 33.202 25.571 47.647 41.4 2.564 2.694 4.643 5.373 7.151 7.902 4.225 5.622 9.188 11.289 13.072 17.32 1.218 1.273 1.427 3.366 3.331 3.986 1.491.516 3.332.866 4.754 0l1.414-1.42c17.563-24.88 39.838-47.226 64.725-65.266 2.49-2.225 7.249-3.052 7.317-7.181-.177-1.905-1.286-3.782-2.922-4.822l-.407-.067c-12.807-8.712-24.74-18.565-35.982-29.743L99.495 27.26C94.462 21.68 89.571 15.5 84.918 9.605zM70.28 21.019c4.993-3.886 11.276-.659 15.477 2.916 4.4 3.363 8.983 7.174 13.006 11.068l.731.42c11.14 10.336 21.485 21.823 29.984 33.967 1.378 2.113 2.596 4.508 1.826 7.313-2.834 7.085-8.593 12.732-13.628 18.92-10.894 11.725-22.386 23.071-35.25 32.123-2.602 1.84-6.113 3.54-9.23 2.08-9.47-4.957-17.455-13.077-25.743-20.475-9.612-8.913-19.259-19.29-26.544-30.146-1.083-1.523-1.388-3.402-1.356-5.411.936-3.747 3.504-6.831 5.933-9.99 8.608-10.97 19.152-21.376 29.8-30.882.246-.243.7-.762 1.086-1.009 4.573-3.954 9.116-7.454 13.908-10.894z" />
                            </svg>
                        </div>
                        <div className="text-center">
                            <span className="block text-[10px] uppercase tracking-[0.3em] font-bold text-muted/40 mb-2">Society Chapter</span>
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-sm font-bold text-foreground/80 group-hover:text-accent transition-colors">IEEE ITSS</span>
                                <div className="flex gap-4 mt-2">
                                    <a href={CHAPTER_CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-accent underline underline-offset-4 decoration-accent/30 font-medium transition-all">LinkedIn</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
