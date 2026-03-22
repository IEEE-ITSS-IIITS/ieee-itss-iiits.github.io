import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { GALLERY_IMAGES } from '../../data';

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState<number | null>(null);

    return (
        <div className="pt-32 pb-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-24">
                    <span className="italic-serif text-accent text-3xl mb-6 block">06 / Imagery</span>
                    <h1 className="text-7xl font-bold mb-6 tracking-tighter">Visual <span className="text-accent lowercase italic-serif">archive</span>.</h1>
                    <p className="text-muted/80 font-medium max-w-xl">A curated collection of moments from our workshops, labs, and collaborative sessions.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {GALLERY_IMAGES.map((img, i) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="group aspect-[4/5] bg-card border border-foreground/5 rounded-[2rem] overflow-hidden cursor-pointer relative shadow-lg hover:shadow-2xl transition-all duration-700"
                            onClick={() => setSelectedImg(i)}
                        >
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                                referrerPolicy="no-referrer"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-10">
                                <span className="text-accent font-bold italic-serif text-2xl mb-2">{img.title}</span>
                                <span className="text-foreground/60 text-[10px] uppercase tracking-widest font-bold">See Project</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedImg !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-foreground/90 backdrop-blur-xl z-[100] flex items-center justify-center p-6"
                        onClick={() => setSelectedImg(null)}
                    >
                        <button
                            className="absolute top-8 right-8 text-white hover:text-accent transition-colors"
                            onClick={() => setSelectedImg(null)}
                        >
                            <X size={32} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={GALLERY_IMAGES[selectedImg].src}
                            alt={GALLERY_IMAGES[selectedImg].title}
                            className="max-w-full max-h-full rounded-lg shadow-2xl"
                            referrerPolicy="no-referrer"
                            decoding="async"
                        />
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center">
                            <h3 className="text-xl font-bold">{GALLERY_IMAGES[selectedImg].title}</h3>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
