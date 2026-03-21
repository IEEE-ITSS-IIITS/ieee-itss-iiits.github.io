import { motion } from "framer-motion";

const images = [
    "/assets/slide_4_image_126.png",
    "/assets/slide_5_image_138.png",
    "/assets/slide_6_image_148.png",
    "/assets/slide_7_image_163.png",
    "/assets/slide_8_image_172.png",
    "/assets/slide_8_image_175.png"
];

export default function ImageRow() {
    return (
        <section className="py-32 bg-white overflow-hidden relative">
            <div className="flex relative">
                <motion.div
                    className="flex gap-16 px-8"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 50, repeat: Infinity }}
                >
                    {[...images, ...images, ...images].map((src, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
                            className="w-[300px] md:w-[450px] aspect-[4/3] rounded-[40px] border border-black overflow-hidden flex-shrink-0 bg-gray-50 shadow-xl transition-all duration-500"
                            style={{
                                rotate: index % 2 === 0 ? "4deg" : "-3deg",
                                marginTop: index % 3 === 0 ? "20px" : index % 3 === 1 ? "-20px" : "0px"
                            }}
                        >
                            <img
                                src={src}
                                alt="Event Highlights"
                                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
