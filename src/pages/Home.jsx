import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import ServicesPreview from '../components/home/ServicesPreview';
import TestimonialsPreview from '../components/home/TestimonialsPreview';
import CTASection from '../components/home/CTASection';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
        >
            <Helmet>
                <title>The Great Bharat Band – Premium Wedding Band & Event Planner in Ghaziabad</title>
                <meta name="description" content="Experience the magic of traditional baraat bands and modern musical performances. The most trusted event planners and wedding band in Raj Nagar Extension & Ghaziabad." />
            </Helmet>

            <Hero />
            <Stats />
            <ServicesPreview />
            <TestimonialsPreview />
            <CTASection />
        </motion.div>
    );
};

export default Home;
