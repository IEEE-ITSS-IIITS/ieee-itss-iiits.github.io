import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, MoveUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";

const activities = [
    {
        name: "Winter School",
        date: "Dec 2023",
        participants: "105+",
        highlight: false,
        color: "bg-[var(--color-brand-cyan)]",
        borderColor: "border-[var(--color-brand-cyan)]",
        images: ["/assets/slide_4_image_126.png", "/assets/slide_3_image_114.png", "/assets/slide_3_image_117.png"],
        features: [
            "ICT, AI/ML, IoT for 2-wheelers",
            "e2W mobility safety",
            "Computer vision & analytics",
            "Sensors & Vehicle-to-X (V2X)"
        ],
        desc: "A comprehensive winter school focusing on the latest advancements in autonomous mobility, connectivity, and safety for two-wheelers."
    },
    {
        name: "Certificate Pg 1.0",
        date: "May 2024",
        participants: "89+",
        highlight: false,
        color: "bg-[var(--color-brand-green)]",
        borderColor: "border-[var(--color-brand-green)]",
        images: ["/assets/slide_5_image_138.png"],
        features: [
            "IoT & Autonomous systems",
            "Digital Twin technology",
            "50% hands-on project work",
            "Jointly certified by British Council"
        ],
        desc: "An intensive 2-week program combining theory and rigorous hands-on practice in Digital Twins and Autonomous IoT systems."
    },
    {
        name: "Certificate Pg 2.0",
        date: "May 2025",
        participants: "80+",
        highlight: true,
        color: "bg-[var(--color-brand-pink)]",
        borderColor: "border-[var(--color-brand-pink)]",
        images: ["/assets/slide_7_image_163.png", "/assets/slide_6_image_148.png"],
        features: [
            "Digital Twin for IoT (DigiT)",
            "Smart infrastructure",
            "Cyber-physical systems",
            "Industry-relevant skills"
        ],
        desc: "Building upon CP 1.0, this program dives deeper into DigiT technology and its implications for smart infrastructures."
    },
    {
        name: "Smart Mobility Pitch",
        date: "Mar 2025",
        participants: "25+",
        highlight: false,
        color: "bg-[var(--color-brand-yellow)]",
        borderColor: "border-[var(--color-brand-yellow)]",
        images: ["/assets/slide_6_image_151.png"],
        features: [
            "Deep-tech showcase",
            "Student startups",
            "Industry mentors",
            "Investors networking"
        ],
        desc: "Connecting student innovation in smart mobility with industry leaders and potential investors to bring ideas to reality."
    },
    {
        name: "NexSync Hackathon",
        date: "Nov 2025",
        participants: "40+",
        highlight: false,
        color: "bg-[var(--color-brand-orange)]",
        borderColor: "border-[var(--color-brand-orange)]",
        images: ["/assets/slide_6_image_154.png"],
        features: [
            "AI perception & tracking",
            "Autonomous decision-making",
            "Real-world mobility challenges",
            "Prototyping"
        ],
        desc: "A competitive hackathon focused on solving complex real-world transportation challenges using modern AI and sensor fusion."
    },
    {
        name: "Certificate Pg 3.0",
        date: "Jan 2026",
        participants: "65+",
        highlight: true,
        color: "bg-[var(--color-brand-cyan)]",
        borderColor: "border-[var(--color-brand-cyan)]",
        images: ["/assets/slide_8_image_172.png", "/assets/slide_8_image_175.png"],
        features: [
            "Hybrid workshop format",
            "AI for Robotics",
            "Interdisciplinary deployments",
            "Practical deployment trends"
        ],
        desc: "Our latest hybrid program hosted with NIT Manipur, emphasizing practical, cross-disciplinary approaches to autonomous robotics."
    }
];

export default function Activities() {
    const [selectedActivity, setSelectedActivity] = useState<typeof activities[0] | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
    const carouselRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carouselRef.current && containerRef.current) {
            const carouselWidth = carouselRef.current.scrollWidth;
            const containerWidth = containerRef.current.offsetWidth;
            setDragConstraints({ left: -(carouselWidth - containerWidth + 48), right: 0 });
        }
    }, [carouselRef.current?.scrollWidth]);

    const openModal = (activity: typeof activities[0]) => {
        setSelectedActivity(activity);
        setCurrentImageIndex(0);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setSelectedActivity(null);
        document.body.style.overflow = "auto";
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedActivity) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedActivity.images.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedActivity) {
            setCurrentImageIndex((prev) => (prev - 1 + selectedActivity.images.length) % selectedActivity.images.length);
        }
    };

    return (
        <>
            <section id="activities" className="py-32 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <div className="inline-block bg-[var(--color-brand-green)] text-black text-[10px] font-black uppercase tracking-[0.3em] py-2 px-6 rounded-full border border-black mb-8 shadow-sm">
                            Join Our Events
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter">
                            An Exciting And<br /><span className="text-black/20">Inspiring Output</span>
                        </h2>
                    </div>
                </div>

                <div ref={containerRef} className="w-full relative cursor-grab active:cursor-grabbing pb-12 overflow-visible">
                    <motion.div
                        ref={carouselRef}
                        className="flex gap-10 px-6 pb-8"
                        drag="x"
                        dragConstraints={dragConstraints}
                        dragElastic={0.1}
                    >
                        {activities.map((activity) => (
                            <motion.div
                                key={activity.name}
                                className={`relative flex-shrink-0 w-[350px] md:w-[420px] flex flex-col rounded-[40px] border-2 ${activity.borderColor} p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 select-none bg-white shadow-xl`}
                            >
                                <div className="w-full h-56 mb-8 rounded-[24px] overflow-hidden relative pointer-events-none border border-black/10 shadow-inner">
                                    <img src={activity.images[0]} alt={activity.name} className="w-full h-full object-cover grayscale-[0.2]" />
                                    {activity.images.length > 1 && (
                                        <div className="absolute bottom-4 right-4 bg-white text-black text-[10px] font-black px-4 py-1.5 rounded-full border border-black shadow-md">
                                            {activity.images.length} PHOTOS
                                        </div>
                                    )}
                                </div>

                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-3xl font-black text-black leading-none uppercase tracking-tight">{activity.name}</h3>
                                    {activity.highlight && (
                                        <span className="bg-black text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap">
                                            Latest
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center gap-6 mb-8 pb-8 border-b border-black/10">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase font-black tracking-widest opacity-40 mb-1">Date</span>
                                        <span className="text-xl font-black truncate">{activity.date}</span>
                                    </div>
                                    <div className="h-10 w-px bg-black/10"></div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase font-black tracking-widest opacity-40 mb-1">Participants</span>
                                        <span className="text-xl font-black">{activity.participants}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => openModal(activity)}
                                    className={`w-full mt-auto py-5 rounded-full border border-black font-black text-xs uppercase tracking-widest flex justify-center items-center gap-2 transition-all active:scale-95 ${activity.color} text-black hover:bg-black hover:text-white shadow-lg`}>
                                    View Details
                                    <MoveUpRight size={18} strokeWidth={2.5} />
                                </button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <AnimatePresence>
                {selectedActivity && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50, opacity: 0 }}
                            className={`bg-white text-black border-2 ${selectedActivity.borderColor} rounded-[48px] shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-8 md:p-16 flex flex-col lg:flex-row gap-16 relative">
                                <button onClick={closeModal} className="absolute top-8 right-8 p-4 bg-white hover:bg-black hover:text-white rounded-full transition-all z-10 border border-black shadow-xl active:scale-90">
                                    <X size={24} />
                                </button>

                                <div className="flex-1 select-none relative">
                                    <div className="w-full aspect-square rounded-[32px] overflow-hidden border border-black/10 relative shadow-2xl">
                                        <img
                                            key={currentImageIndex}
                                            src={selectedActivity.images[currentImageIndex]}
                                            alt={`${selectedActivity.name} photo ${currentImageIndex + 1}`}
                                            className="w-full h-full object-cover"
                                        />

                                        {selectedActivity.images.length > 1 && (
                                            <>
                                                <button onClick={prevImage} className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white text-black rounded-full flex items-center justify-center border border-black shadow-2xl hover:bg-black hover:text-white transition-all active:scale-90">
                                                    <ChevronLeft size={28} />
                                                </button>
                                                <button onClick={nextImage} className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white text-black rounded-full flex items-center justify-center border border-black shadow-2xl hover:bg-black hover:text-white transition-all active:scale-90">
                                                    <ChevronRight size={28} />
                                                </button>
                                                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                                                    {selectedActivity.images.map((_, i) => (
                                                        <div key={i} className={`w-3 h-3 rounded-full border border-black transition-all ${i === currentImageIndex ? 'w-10 bg-black' : 'bg-white'}`} />
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 mb-8">
                                        <span className={`text-black text-[12px] font-black px-6 py-2 rounded-full border border-black uppercase tracking-widest ${selectedActivity.color}`}>
                                            {selectedActivity.date}
                                        </span>
                                        <span className="bg-gray-100 text-black text-[12px] font-black px-6 py-2 rounded-full border border-black uppercase tracking-widest">
                                            {selectedActivity.participants} Participants
                                        </span>
                                    </div>

                                    <h3 className="text-5xl lg:text-7xl font-black uppercase leading-none mb-10 tracking-tighter">
                                        {selectedActivity.name}
                                    </h3>

                                    <p className="text-2xl text-black/60 font-bold mb-12 leading-relaxed tracking-tight">
                                        {selectedActivity.desc}
                                    </p>

                                    <h4 className="text-[12px] font-black uppercase tracking-[0.4em] mb-8 opacity-30">Key Deliverables</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                                        {selectedActivity.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-4 text-xl font-black uppercase tracking-tight">
                                                <span className={`p-1.5 rounded-full border border-black ${selectedActivity.color}`}>
                                                    <Check size={18} strokeWidth={4} />
                                                </span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <button onClick={closeModal} className={`mt-auto py-6 rounded-full border border-black text-black font-black text-sm uppercase tracking-widest flex justify-center items-center hover:bg-black hover:text-white transition-all w-full shadow-2xl active:scale-[0.98] ${selectedActivity.color}`}>
                                        Exit Experience
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
