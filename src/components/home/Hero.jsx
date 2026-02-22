import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
            {/* Background Image Placeholder with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
                <img
                    src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop"
                    alt="Premium Wedding Band"
                    className="w-full h-full object-cover scale-110"
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-20">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 mb-6"
                    >
                        <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        <span className="text-secondary text-xs md:text-sm font-bold tracking-widest uppercase">
                            Premium Wedding Band in Ghaziabad
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-playfair font-black text-white leading-tight mb-6"
                    >
                        The Great Bharat Band
                        <span className="block italic text-secondary mt-2">Make Your Wedding & Events Grand and Musical</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl leading-relaxed"
                    >
                        Experience the magic of traditional baraat bands and modern musical performances. We are the most trusted event planners and wedding band in Raj Nagar Extension & Ghaziabad.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap gap-5"
                    >
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-primary hover:bg-primary/80 text-white font-bold rounded-lg transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/30 flex items-center gap-2"
                        >
                            Book Now <ChevronRight size={20} />
                        </Link>
                        <Link
                            to="/services"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-all border border-white/20 flex items-center gap-2 backdrop-blur-md"
                        >
                            View Services
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Floating Element */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute bottom-10 right-10 hidden xl:flex flex-col items-center gap-4 z-20"
            >
                <div className="w-16 h-16 rounded-full border border-secondary/50 flex items-center justify-center animate-bounce">
                    <Play className="text-secondary fill-secondary ml-1" size={24} />
                </div>
                <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase origin-right rotate-90 absolute -translate-y-24">
                    Watch Performance
                </span>
            </motion.div>
        </section>
    );
};

export default Hero;

