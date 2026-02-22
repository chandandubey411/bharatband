import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Music, PartyPopper, CalendarDays, Rocket, Disc, Tent, Star, Users } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const services = [
    {
        title: "Wedding Band Services",
        description: "Our signature royal wedding band performance featuring traditional brass instruments and high-energy drums for a grand celebration.",
        icon: Music,
        color: "from-secondary to-yellow-600",
    },
    {
        title: "Baraat Band Performance",
        description: "Make your Baraat entry spectacular with our professional band players and dancers. We bring the energy that sets the stage for a lifetime.",
        icon: PartyPopper,
        color: "from-primary to-maroon-700",
    },
    {
        title: "Event Planning & Management",
        description: "Expert planning services for weddings, corporate events, and parties. We handle the logistics so you can enjoy your special day.",
        icon: CalendarDays,
        color: "from-blue-600 to-indigo-700",
    },
    {
        title: "Wedding Entry Band",
        description: "Create a magical moment with our specialized entry band services. Perfect for the bride and groom's grand entrance.",
        icon: Rocket,
        color: "from-purple-600 to-pink-600",
    },
    {
        title: "DJ & Music Arrangements",
        description: "Modern sound systems and professional DJs to keep the party going. A perfect blend of traditional and contemporary music.",
        icon: Disc,
        color: "from-green-600 to-emerald-700",
    },
    {
        title: "Cultural & Festive Events",
        description: "Musical performances tailored for religious festivals, community gatherings, and cultural celebrations across Ghaziabad.",
        icon: Tent,
        color: "from-orange-500 to-red-600",
    },
];

const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 min-h-screen"
        >
            <Helmet>
                <title>Our Services – The Great Bharat Band | Premium Event Planning</title>
                <meta name="description" content="Explore our premium wedding band, baraat performance, event planning, and musical arrangement services in Ghaziabad." />
            </Helmet>

            {/* Services Header */}
            <section className="py-20 bg-dark relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <SectionTitle
                        subtitle="What We Offer"
                        title="Premium Event Services"
                        centered
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative h-full"
                            >
                                {/* Background Shadow Effect */}
                                <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-[32px] blur opacity-25 group-hover:opacity-75 transition duration-500 group-hover:duration-200`} />

                                <div className="relative h-full glass-morphism p-10 rounded-[32px] flex flex-col items-center text-center hover:bg-black/40 transition-all">
                                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 transition-transform shadow-2xl`}>
                                        <service.icon className="text-white" size={40} />
                                    </div>

                                    <h3 className="text-2xl font-black text-white mb-6 group-hover:text-secondary transition-colors leading-tight">
                                        {service.title}
                                    </h3>

                                    <p className="text-white/60 text-lg leading-relaxed mb-8 flex-grow">
                                        {service.description}
                                    </p>

                                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-auto">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5, duration: 1 }}
                                            className={`h-full bg-gradient-to-r ${service.color}`}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-darkLight">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto glass-morphism p-12 md:p-16 rounded-[40px] border border-secondary/20 relative overflow-hidden">
                        <Star className="text-secondary/10 absolute top-0 -right-10" size={200} />

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-playfair font-black text-white mb-6">Experience the <span className="text-secondary">Royal</span> Touch</h2>
                                <p className="text-white/60 text-lg mb-8 leading-relaxed">
                                    With over 500+ events managed and 100+ weddings covered, we bring unmatched expertise to every celebration. Our band is not just about music; it's about creating memories that last a lifetime.
                                </p>
                                <div className="flex flex-col gap-4">
                                    {[
                                        "Professional Band Players",
                                        "Authentic Traditional Outfits",
                                        "Modern Sound Equipment",
                                        "Punctual & Disciplined Team"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                                                <Users className="text-secondary" size={14} />
                                            </div>
                                            <span className="text-white font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="w-64 h-64 rounded-full border-[20px] border-primary flex items-center justify-center relative shadow-2xl">
                                    <div className="absolute inset-0 rounded-full border-4 border-secondary animate-ping opacity-20" />
                                    <div className="text-center">
                                        <span className="block text-5xl font-black text-white">100%</span>
                                        <span className="text-secondary font-bold uppercase tracking-widest text-xs">Satisfaction</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Services;
