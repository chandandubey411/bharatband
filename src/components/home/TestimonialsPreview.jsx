import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Shadab Khan",
        text: "Best band in Raj Nagar Extension Gzb. Their performance was energetic and professional.",
        rating: 5,
    },
    {
        name: "Imran Saifi",
        text: "Truly the best band in Raj Nagar Extension. They made our family wedding memorable.",
        rating: 5,
    },
    {
        name: "Fardeen Khan",
        text: "Excellent service and grand entry. Best wedding band in Raj Nagar Ext without a doubt.",
        rating: 5,
    },
];

const TestimonialsPreview = () => {
    return (
        <section className="py-24 bg-darkLight relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 left-0 w-64 h-64 border-[40px] border-secondary rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 border-[60px] border-secondary rounded-full translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-playfair font-black text-white mb-6"
                    >
                        What Our <span className="text-secondary">Clients</span> Say
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/60 text-lg"
                    >
                        Trusted by hundreds of families in Ghaziabad for our exceptional musical performances and event planning.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-dark p-8 rounded-3xl border border-secondary/10 relative group hover:border-secondary/30 transition-all shadow-2xl"
                        >
                            <Quote className="text-secondary/20 absolute top-8 right-8" size={60} />

                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="text-secondary fill-secondary" size={18} />
                                ))}
                            </div>

                            <p className="text-white/80 text-lg italic leading-relaxed mb-8 relative z-10">
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-xl uppercase">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                                    <p className="text-secondary/60 text-sm uppercase tracking-widest font-bold">Verified Review</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link to="/reviews" className="text-secondary hover:underline font-bold text-lg inline-flex items-center gap-2">
                            See All 9+ Reviews
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsPreview;
