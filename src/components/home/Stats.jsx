import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const StatCounter = ({ value, label, suffix = "", delay = 0 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = parseInt(value);
            const duration = 2000;
            let timer;

            const run = () => {
                const increment = end / (duration / 16);
                if (start < end) {
                    start += increment;
                    setCount(Math.min(Math.floor(start), end));
                    timer = requestAnimationFrame(run);
                } else {
                    setCount(end);
                }
            };

            setTimeout(() => {
                run();
            }, delay * 1000);

            return () => cancelAnimationFrame(timer);
        }
    }, [isInView, value, delay]);

    return (
        <div ref={ref} className="flex flex-col items-center text-center p-6 glass-morphism rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-full blur-3xl -mr-12 -mt-12 group-hover:bg-secondary/20 transition-colors" />
            <motion.span
                className="text-4xl md:text-5xl font-black text-secondary mb-2"
            >
                {count}{suffix}
            </motion.span>
            <span className="text-white/60 font-medium tracking-wide uppercase text-sm md:text-base">
                {label}
            </span>
        </div>
    );
};

const Stats = () => {
    const stats = [
        { value: "100", label: "Weddings Covered", suffix: "+" },
        { value: "500", label: "Events Managed", suffix: "+" },
        { value: "5.0", label: "Star Rating", suffix: "" },
        { value: "9", label: "Happy Reviews", suffix: "+" },
    ];

    return (
        <section className="py-20 relative overflow-hidden bg-darkLight">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                    {stats.map((stat, index) => (
                        <StatCounter
                            key={index}
                            value={stat.value}
                            label={stat.label}
                            suffix={stat.suffix}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/10 to-transparent -translate-y-1/2" />
        </section>
    );
};

export default Stats;
