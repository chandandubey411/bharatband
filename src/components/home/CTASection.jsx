import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[40px] overflow-hidden maroon-gradient p-12 md:p-20 text-center shadow-2xl shadow-primary/30"
                >
                    {/* Decorative background circle */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 backdrop-blur-md border border-white/20"
                        >
                            <Calendar className="text-secondary" size={40} />
                        </motion.div>

                        <h2 className="text-4xl md:text-6xl font-playfair font-black text-white mb-6 leading-tight">
                            Ready to Make Your Celebration <span className="text-secondary">Unforgettable?</span>
                        </h2>

                        <p className="text-white/80 text-xl mb-10 leading-relaxed">
                            Book the finest wedding band and event planners in Ghaziabad today. Let's create magic together!
                        </p>

                        <div className="flex flex-wrap justify-center gap-6">
                            <Link
                                to="/contact"
                                className="px-10 py-5 bg-secondary hover:bg-white text-black font-black text-lg rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl flex items-center gap-3"
                            >
                                Book Now <ArrowRight size={24} />
                            </Link>
                            <a
                                href="tel:9310765743"
                                className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-full transition-all border border-white/20 backdrop-blur-md"
                            >
                                Call +91 9310765743
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
