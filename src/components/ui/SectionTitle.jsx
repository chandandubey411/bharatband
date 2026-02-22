import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, centered = false }) => {
    return (
        <div className={`mb-16 ${centered ? 'text-center mx-auto' : ''} max-w-3xl`}>
            <motion.div
                initial={{ opacity: 0, x: centered ? 0 : -30, y: centered ? 20 : 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-4 justify-center"
            >
                <div className="w-12 h-[2px] bg-secondary" />
                <span className="text-secondary font-bold tracking-[0.3em] uppercase text-sm">
                    {subtitle}
                </span>
                {centered && <div className="w-12 h-[2px] bg-secondary" />}
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, x: centered ? 0 : -30, y: centered ? 20 : 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-playfair font-black text-white leading-tight"
            >
                {title}
            </motion.h2>
        </div>
    );
};

export default SectionTitle;
