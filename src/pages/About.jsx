import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Clock, MapPin, Target, Eye, Award } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const About = () => {
    const missionVision = [
        {
            title: "Our Mission",
            description: "To bring joy and grandeur to every celebration through exceptional musical performances and meticulous event planning.",
            icon: Target,
        },
        {
            title: "Our Vision",
            description: "To be the most recognized and trusted wedding band and event planner brand across India, starting from our roots in Ghaziabad.",
            icon: Eye,
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 min-h-screen"
        >
            <Helmet>
                <title>About Us – The Great Bharat Band | Event Planner Ghaziabad</title>
                <meta name="description" content="Learn about The Great Bharat Band, the most trusted wedding band and event planner in Raj Nagar Extension & Ghaziabad." />
            </Helmet>

            {/* Intro Section */}
            <section className="py-20 bg-dark">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <SectionTitle
                                subtitle="Who We Are"
                                title="The Great Bharat Band – Event Planner in Ghaziabad"
                            />
                            <p className="text-white/70 text-lg leading-relaxed mb-8">
                                The Great Bharat Band is a name synonymous with celebration, music, and grandeur. Based in Ghaziabad, we have established ourselves as the most trusted wedding band and event planner in Raj Nagar Extension and surrounding areas.
                            </p>
                            <p className="text-white/70 text-lg leading-relaxed mb-10">
                                Known for our grand baraat bands, stunning wedding entries, and soulful musical event performances, we take pride in turning every event into a royal celebration. Whether it's a festive gathering or a grand wedding, our team ensures every musical note and planning detail is perfect.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="flex gap-4 p-6 glass-morphism rounded-2xl">
                                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                                        <Clock className="text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1 uppercase tracking-wider text-xs">Working Hours</h4>
                                        <p className="text-white/60 text-sm">Sun - Sat: 9 AM – 10 PM</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-6 glass-morphism rounded-2xl">
                                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                                        <MapPin className="text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1 uppercase tracking-wider text-xs">Our Location</h4>
                                        <p className="text-white/60 text-sm">Shop- 2, Noor Nagar, Ghaziabad</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-[40px] overflow-hidden border border-secondary/20 shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
                                alt="About The Great Bharat Band"
                                className="w-full h-[600px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                            <div className="absolute bottom-10 left-10 right-10 p-8 glass-morphism rounded-3xl">
                                <div className="flex items-center gap-4 mb-2">
                                    <Award className="text-secondary" size={32} />
                                    <span className="text-2xl font-black text-white">Trusted Excellence</span>
                                </div>
                                <p className="text-white/60">Serving Ghaziabad with passion and music for years.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-darkLight">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle
                        subtitle="Our Purpose"
                        title="Mission & Vision"
                        centered
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                        {missionVision.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-morphism p-10 rounded-[40px] border border-secondary/10 hover:border-secondary/30 transition-all text-center group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="text-secondary" size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-secondary transition-colors">{item.title}</h3>
                                <p className="text-white/60 leading-relaxed text-lg italic">"{item.description}"</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default About;
