import { motion } from "framer-motion";

const cards = [
    {
        number: "01",
        title: "Our Story",
        desc: "Every great initiative begins with a story, and ours is fueled by a passion for smart mobility and student empowerment.",
        image: "/assets/slide_3_image_114.png",
        color: "bg-[var(--color-brand-pink)]"
    },
    {
        number: "02",
        title: "Our Mission",
        desc: "To create seamless, innovative, and memorable learning experiences that connect students, researchers, and the industry.",
        image: "/assets/slide_3_image_117.png",
        color: "bg-[var(--color-brand-green)]"
    },
    {
        number: "03",
        title: "Our Vision",
        desc: "We envision a future where mobility events are more than just gatherings—they are catalysts for sustainable innovation.",
        image: "/assets/slide_6_image_151.png",
        color: "bg-[var(--color-brand-yellow)]"
    }
];

export default function AboutCards() {
    return (
        <section className="py-32 px-6 bg-white relative">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, duration: 0.8 }}
                        className="rounded-[32px] p-10 border border-black flex flex-col items-start text-left bg-white shadow-sm"
                    >
                        <div className={`inline-block border border-black text-[11px] font-black uppercase tracking-[0.2em] py-1 px-4 rounded-full mb-8 ${card.color}`}>
                            Phase {card.number}
                        </div>

                        <h3 className="text-3xl font-black mb-8 text-black">
                            {card.title}
                        </h3>

                        <div className="w-full aspect-video rounded-[24px] overflow-hidden mb-8 border border-black shadow-lg">
                            <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                        </div>

                        <p className="text-black font-medium text-lg leading-relaxed opacity-60">
                            {card.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
