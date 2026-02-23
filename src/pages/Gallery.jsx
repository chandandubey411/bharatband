import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { X, Maximize2, Camera, Play } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const galleryItems = [
    { id: 1, src: "/images/band2.jpeg", title: "Royal Wedding Entry", category: "Wedding", type: "image" },
    { id: 2, src: "/images/band3.jpeg", title: "Grand Baraat Performance", category: "Baraat", type: "image" },
    { id: 10, src: "/videos/vid1.mp4", title: "Live Performance", category: "Live", type: "video" },
    { id: 3, src: "/images/band1.jpeg", title: "Musical Night", category: "Event", type: "image" },
    { id: 11, src: "/videos/vid2.mp4", title: "Grand Wedding", category: "Wedding", type: "video" },
    { id: 4, src: "/images/band4.jpeg", title: "DJ Arrangements", category: "DJ", type: "image" },
    { id: 5, src: "/images/band5.jpeg", title: "Festive Celebration", category: "Cultural", type: "image" },
    { id: 6, src: "https://myeventcurator.com/public/images/1750931062Corporate-Event.jpg", title: "Corporate Event", category: "Event", type: "image" },
    { id: 7, src: "https://d1zpvjny0s6omk.cloudfront.net/media/fileupload/2015/09/28/PYE_3523.jpg", title: "Wedding Rituals", category: "Wedding", type: "image" },
    { id: 8, src: "https://static.toiimg.com/photo/msid-61830567,width-96,height-65.cms", title: "Party Celebration", category: "Event", type: "image" },
    { id: 9, src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop", title: "Outdoor Performance", category: "Baraat", type: "image" },
];

const Gallery = () => {
    const [selectedItem, setSelectedItem] = useState(null);

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
                        {galleryItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layoutId={`item-${item.id}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                onClick={() => setSelectedItem(item)}
                                className="group relative h-80 rounded-[32px] overflow-hidden cursor-pointer border border-white/10 shadow-xl"
                            >
                                {item.type === 'video' ? (
                                    <video
                                        src={item.src}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        muted
                                        loop
                                        playsInline
                                    />
                                ) : (
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-2 block translate-y-4 group-hover:translate-y-0 transition-transform">
                                        {item.category}
                                    </span>
                                    <h3 className="text-xl font-black text-white translate-y-4 group-hover:translate-y-0 transition-transform delay-75">
                                        {item.title}
                                    </h3>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center scale-0 group-hover:scale-100 transition-transform">
                                        {item.type === 'video' ? (
                                            <Play className="text-white fill-white" />
                                        ) : (
                                            <Maximize2 className="text-white" />
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.button
                            className="absolute top-10 right-10 text-white hover:text-secondary transition-colors"
                            onClick={() => setSelectedItem(null)}
                        >
                            <X size={40} />
                        </motion.button>

                        <motion.div
                            layoutId={`item-${selectedItem.id}`}
                            className="relative max-w-5xl w-full max-h-[80vh] rounded-[40px] overflow-hidden shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedItem.type === 'video' ? (
                                <video
                                    src={selectedItem.src}
                                    controls
                                    autoPlay
                                    className="w-full h-full max-h-[70vh] object-contain mx-auto"
                                />
                            ) : (
                                <img
                                    src={selectedItem.src}
                                    alt={selectedItem.title}
                                    className="w-full h-full object-contain"
                                />
                            )}
                            <div className="absolute bottom-6 left-6 right-6 p-8 glass-morphism rounded-3xl border border-white/10">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-2 block">{selectedItem.category}</span>
                                        <h3 className="text-2xl font-black text-white">{selectedItem.title}</h3>
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
