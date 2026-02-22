import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Star, MessageCircle, Heart, User, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const reviewsData = [
    {
        author: "Shadab Khan",
        rating: 5,
        comment: "Best band in Raj Nagar Extension Gzb. Their energy and synchronization are amazing.",
        date: "2 months ago",
    },
    {
        author: "Imran Saifi",
        text: "Best band in Raj Nagar Extension. Highly recommended for any wedding ceremony.",
        rating: 5,
        date: "3 months ago",
    },
    {
        author: "Fardeen Khan",
        text: "Best wedding band in Raj Nagar Ext. Their grand entry arrangements were the highlight of our event.",
        rating: 5,
        date: "1 month ago",
    },
    {
        author: "Akhtar Khan",
        text: "Best band in Raj Nagar Extension. They are punctual and professional in their work.",
        rating: 5,
        date: "4 months ago",
    },
    {
        author: "Sameer Ahmed",
        text: "Absolutely stunning performance. The Great Bharat Band made my brother's wedding truly spectacular!",
        rating: 5,
        date: "2 weeks ago",
    },
    {
        author: "Rahul Verma",
        text: "Great experience with their planning team. The music was royal and exactly what we wanted.",
        rating: 5,
        date: "5 months ago",
    },
];

const ReviewCard = ({ review, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-morphism p-8 rounded-[32px] border border-secondary/10 hover:border-secondary/30 transition-all flex flex-col gap-6 relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-secondary/10 transition-colors" />

            <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/20 border border-secondary/20 flex items-center justify-center text-secondary font-black text-xl">
                        {review.author.charAt(0)}
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg flex items-center gap-2">
                            {review.author}
                            <CheckCircle2 size={16} className="text-secondary" />
                        </h4>
                        <div className="flex gap-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="text-secondary fill-secondary" size={14} />
                            ))}
                        </div>
                    </div>
                </div>
                <span className="text-white/30 text-xs font-medium uppercase tracking-widest">{review.date}</span>
            </div>

            <p className="text-white/80 text-lg italic leading-relaxed">
                "{review.text || review.comment}"
            </p>

            {/* Owner Reply UI */}
            <div className="bg-white/5 p-6 rounded-2xl border-l-4 border-secondary">
                <div className="flex items-center gap-2 mb-2">
                    <MessageCircle size={16} className="text-secondary" />
                    <span className="text-secondary font-bold text-xs uppercase tracking-widest">The Great Bharat Band (Owner)</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                    Thank you for your wonderful review, {review.author}! We're happy you loved our service and it was a pleasure being part of your celebration.
                </p>
            </div>
        </motion.div>
    );
};

const Reviews = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 min-h-screen"
        >
            <Helmet>
                <title>Client Reviews – The Great Bharat Band | 5.0 Star Rated</title>
                <meta name="description" content="Read what our happy clients say about our wedding band and event planning services in Ghaziabad." />
            </Helmet>

            {/* Reviews Header */}
            <section className="py-20 bg-dark relative pb-10">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle
                        subtitle="Testimonials"
                        title="Voices of Satisfaction"
                        centered
                    />

                    {/* Rating Summary Card */}
                    <div className="max-w-4xl mx-auto glass-morphism rounded-[40px] p-10 md:p-16 mb-20 relative overflow-hidden text-center border border-secondary/20 shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-32 -mt-32" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -ml-32 -mb-32" />

                        <div className="relative z-10">
                            <div className="flex justify-center gap-2 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="text-secondary fill-secondary scale-125" size={32} />
                                ))}
                            </div>
                            <h2 className="text-6xl md:text-8xl font-black text-white mb-4">5.0</h2>
                            <p className="text-secondary font-bold text-xl uppercase tracking-[0.3em] mb-8">9+ Happy Reviews</p>
                            <div className="flex gap-4 justify-center flex-wrap">
                                <div className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 font-bold text-xs uppercase tracking-widest">Punctuality 100%</div>
                                <div className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 font-bold text-xs uppercase tracking-widest">Royal Attire 100%</div>
                                <div className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 font-bold text-xs uppercase tracking-widest">Performance 100%</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {reviewsData.map((review, index) => (
                            <ReviewCard key={index} review={review} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-darkLight">
                <div className="container mx-auto px-4 text-center">
                    <Heart className="text-primary mx-auto mb-6 fill-primary animate-pulse" size={48} />
                    <h2 className="text-3xl md:text-5xl font-playfair font-black text-white mb-6">Want to be our next <span className="text-secondary">Happy Story?</span></h2>
                    <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
                        We'd love to make your special day as perfect as it can be. Contact us today to discuss your event requirements.
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                        <Link to="/contact" className="px-10 py-5 bg-secondary text-black font-black rounded-full shadow-2xl hover:bg-white transition-all">Start Your Story</Link>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default Reviews;
