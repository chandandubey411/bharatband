import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { X, Maximize2, Camera } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop", title: "Royal Wedding Entry", category: "Wedding" },
    { id: 2, src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop", title: "Grand Baraat Performance", category: "Baraat" },
    { id: 3, src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop", title: "Musical Night", category: "Event" },
    { id: 4, src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop", title: "DJ Arrangements", category: "DJ" },
    { id: 5, src: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=2069&auto=format&fit=crop", title: "Festive Celebration", category: "Cultural" },
    { id: 6, src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop", title: "Corporate Event", category: "Event" },
    { id: 7, src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop", title: "Wedding Rituals", category: "Wedding" },
    { id: 8, src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop", title: "Party Celebration", category: "Event" },
    { id: 9, src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop", title: "Outdoor Performance", category: "Baraat" },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 min-h-screen"
        >
            <Helmet>
                <title>Gallery – The Great Bharat Band | Event Highlights</title>
                <meta name="description" content="View highlights from our grand baraat entries, wedding band performances, and managed events in Ghaziabad." />
            </Helmet>

            <section className="py-20 bg-dark">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle
                        subtitle="Our Portfolio"
                        title="Moments of Grandeur"
                        centered
                    />

                    <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
                        <div className="px-4 py-2 rounded-full glass-morphism border-secondary/30 text-secondary font-bold text-sm tracking-widest uppercase">
                            Highlighting Our Best Work
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {galleryImages.map((image) => (
                            <motion.div
                                key={image.id}
                                layoutId={`image-${image.id}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                onClick={() => setSelectedImage(image)}
                                className="group relative h-80 rounded-[32px] overflow-hidden cursor-pointer border border-white/10 shadow-xl"
                            >
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-2 block translate-y-4 group-hover:translate-y-0 transition-transform">
                                        {image.category}
                                    </span>
                                    <h3 className="text-xl font-black text-white translate-y-4 group-hover:translate-y-0 transition-transform delay-75">
                                        {image.title}
                                    </h3>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center scale-0 group-hover:scale-100 transition-transform">
                                        <Maximize2 className="text-white" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button
                            className="absolute top-10 right-10 text-white hover:text-secondary transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </motion.button>

                        <motion.div
                            layoutId={`image-${selectedImage.id}`}
                            className="relative max-w-5xl w-full max-h-[80vh] rounded-[40px] overflow-hidden shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="w-full h-full object-contain"
                            />
                            <div className="absolute bottom-6 left-6 right-6 p-8 glass-morphism rounded-3xl border border-white/10">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-2 block">{selectedImage.category}</span>
                                        <h3 className="text-2xl font-black text-white">{selectedImage.title}</h3>
                                    </div>
                                    <Camera className="text-white/20" size={40} />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Contact Banner */}
            <section className="py-20 bg-darkLight">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-playfair font-bold text-white mb-8 italic">Want to see more of our live performances?</h2>
                    <motion.a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="px-8 py-4 bg-secondary text-black font-black rounded-full inline-flex items-center gap-3 shadow-xl"
                    >
                        Follow us on Instagram <Maximize2 size={18} />
                    </motion.a>
                </div>
            </section>
        </motion.div>
    );
};

export default Gallery;
