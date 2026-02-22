import React from 'react';
import { motion } from 'framer-motion';
import { Music, Star, PartyPopper, Mic2, Disc, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        title: "Wedding Band Services",
        description: "Traditional and royal wedding band performances for a grand celebration.",
        icon: Music,
        color: "from-secondary to-yellow-600",
    },
    {
        title: "Baraat Band Performance",
        description: "High-energy drums and brass band to make your Baraat entry unforgettable.",
        icon: PartyPopper,
        color: "from-primary to-maroon-700",
    },
    {
        title: "Event Planning & Management",
        description: "Complete event solutions from concept to execution for all occasions.",
        icon: Map,
        color: "from-blue-600 to-indigo-700",
    },
];

const ServicesPreview = () => {
    return (
        <section className="py-24 bg-dark">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-playfair font-black text-white mb-4"
                        >
                            Our <span className="text-secondary">Premium</span> Services
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-white/60 text-lg"
                        >
                            We provide top-notch musical and planning services to ensure your celebrations are filled with joy and grandeur.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to="/services"
                            className="px-6 py-3 border border-secondary/50 text-secondary font-bold rounded-lg hover:bg-secondary hover:text-black transition-all"
                        >
                            Explore All Services
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group glass-morphism p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`} />

                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                                <service.icon className="text-white" size={28} />
                            </div>

                            <h3 className="text-2xl font-black text-white mb-4 group-hover:text-secondary transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-white/60 leading-relaxed mb-6">
                                {service.description}
                            </p>

                            <div className="flex items-center gap-2 text-secondary font-bold text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                                Learn More <div className="w-8 h-[2px] bg-secondary" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
