import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const Contact = () => {
    const [formState, setFormState] = useState('idle'); // idle, sending, success

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormState('sending');

        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setFormState('success');
                e.target.reset();
                setTimeout(() => setFormState('idle'), 5000);
            } else {
                console.error("Error", data);
                setFormState('idle');
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Submit Error:", error);
            setFormState('idle');
            alert("Network error. Please try again later.");
        }
    };

    const contactDetails = [
        {
            icon: Phone,
            title: "Call Us",
            value: "+91 9310765743",
            link: "tel:9310765743",
        },
        {
            icon: Mail,
            title: "Email Us",
            value: "greatindianband@gmail.com",
            link: "mailto:greatindianband@gmail.com",
        },
        {
            icon: MapPin,
            title: "Visit Us",
            value: "Shop- 2, Noor Nagar, Sehani Khurd, Ghukna, Ghaziabad, UP 201003",
            link: "https://maps.google.com",
        },
        {
            icon: Clock,
            title: "Working Hours",
            value: "Sun - Sat: 9 AM – 10 PM",
            link: "#",
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
                <title>Contact Us – Book The Great Bharat Band | Ghaziabad</title>
                <meta name="description" content="Get in touch with The Great Bharat Band for your wedding entries, baraat performances, and event planning needs in Ghaziabad." />
            </Helmet>

            {/* Contact Header */}
            <section className="py-20 bg-dark">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle
                        subtitle="Get In Touch"
                        title="Start Your Celebration"
                        centered
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2 glass-morphism p-10 md:p-16 rounded-[40px] border border-secondary/20 shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-32 -mt-32" />

                            <h3 className="text-3xl font-playfair font-black text-white mb-8 relative z-10">Send Us a Message</h3>

                            <form onSubmit={handleSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                                <input type="hidden" name="access_key" value="3a0ccf64-2e0e-4bb9-acea-7a73b3f08caf" />

                                <div className="flex flex-col gap-2">
                                    <label className="text-white/60 text-sm font-bold uppercase tracking-widest ml-1">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        className="bg-white/5 border border-white/10 p-5 rounded-2xl text-white focus:border-secondary focus:outline-none transition-all placeholder:text-white/20"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-white/60 text-sm font-bold uppercase tracking-widest ml-1">Phone Number</label>
                                    <input
                                        required
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter your number"
                                        className="bg-white/5 border border-white/10 p-5 rounded-2xl text-white focus:border-secondary focus:outline-none transition-all placeholder:text-white/20"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-white/60 text-sm font-bold uppercase tracking-widest ml-1">Event Date</label>
                                    <input
                                        required
                                        type="date"
                                        name="event_date"
                                        className="bg-white/5 border border-white/10 p-5 rounded-2xl text-white focus:border-secondary focus:outline-none transition-all placeholder:text-white/20"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-white/60 text-sm font-bold uppercase tracking-widest ml-1">Event Address / Venue</label>
                                    <input
                                        required
                                        type="text"
                                        name="event_address"
                                        placeholder="Location of the event"
                                        className="bg-white/5 border border-white/10 p-5 rounded-2xl text-white focus:border-secondary focus:outline-none transition-all placeholder:text-white/20"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 md:col-span-2">
                                    <label className="text-white/60 text-sm font-bold uppercase tracking-widest ml-1">Your Message (Optional)</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        placeholder="Any special requirements?"
                                        className="bg-white/5 border border-white/10 p-5 rounded-2xl text-white focus:border-secondary focus:outline-none transition-all placeholder:text-white/20 resize-none"
                                    ></textarea>
                                </div>
                                <div className="md:col-span-2">
                                    <button
                                        disabled={formState !== 'idle'}
                                        className={`w-full py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 ${formState === 'success'
                                            ? 'bg-green-600 text-white'
                                            : 'bg-secondary text-black hover:bg-white hover:scale-[1.02] shadow-xl shadow-secondary/10'
                                            }`}
                                    >
                                        {formState === 'idle' && <><Send size={24} /> Send Message</>}
                                        {formState === 'sending' && <div className="w-6 h-6 border-4 border-black border-t-transparent rounded-full animate-spin" />}
                                        {formState === 'success' && <><CheckCircle size={24} /> Message Sent Successfully!</>}
                                    </button>
                                </div>
                            </form>
                        </motion.div>

                        {/* Contact Details Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col gap-6"
                        >
                            {contactDetails.map((detail, index) => (
                                <div
                                    key={index}
                                    className="glass-morphism p-8 rounded-[32px] border border-secondary/10 flex items-start gap-6 hover:border-secondary/30 transition-all group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-black transition-all">
                                        <detail.icon size={28} className="text-secondary group-hover:text-black transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] mb-1">{detail.title}</h4>
                                        <a
                                            href={detail.link}
                                            className={`text-lg font-bold text-white leading-tight ${detail.link !== '#' ? 'hover:text-secondary' : ''} transition-colors`}
                                        >
                                            {detail.value}
                                        </a>
                                    </div>
                                </div>
                            ))}

                            {/* WhatsApp Floating (Visual indicator of premium service) */}
                            <div className="mt-4 p-8 rounded-[32px] maroon-gradient border border-white/10 shadow-xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <h4 className="text-white font-black text-2xl mb-2">Need a Quick Quote?</h4>
                                    <p className="text-white/70 mb-6">Chat with our event specialist directly on WhatsApp.</p>
                                    <a href="https://wa.me/919310765743" className="inline-block px-8 py-3 bg-white text-primary font-black rounded-xl hover:bg-secondary hover:text-black transition-all">WhatsApp Now</a>
                                </div>
                                <Phone className="absolute bottom-0 right-0 text-white/5 -rotate-12 translate-y-1/4 translate-x-1/4" size={200} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 relative bg-darkLight">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle
                        subtitle="Find Us"
                        title="Our Office Location"
                        centered
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full h-[500px] rounded-[40px] overflow-hidden border border-secondary/20 shadow-2xl"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13994.484214436034!2d77.43387795!3d28.7308316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf303126780c1%3A0xe6bf44a1939ba39a!2sThe%20Great%20Bharat%20Band!5e0!3m2!1sen!2sin!4v1716382100000!5m2!1sen!2sin"
                            className="w-full h-full border-0 grayscale invert contrast-125"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default Contact;
