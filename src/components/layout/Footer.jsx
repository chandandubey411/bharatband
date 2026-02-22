import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, Music } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Our Services', path: '/services' },
        { name: 'Photo Gallery', path: '/gallery' },
        { name: 'Client Reviews', path: '/reviews' },
        { name: 'Contact Us', path: '/contact' },
    ];

    const services = [
        'Wedding Band',
        'Baraat Band',
        'Wedding Entry',
        'Event Planning',
        'DJ Arrangements',
        'Cultural Events',
    ];

    return (
        <footer className="bg-dark pt-16 pb-8 border-t border-secondary/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-6">
                        <Link to="/" className="flex items-center gap-3">
                            <img
                                src="/logo.png"
                                alt="Logo"
                                className="w-10 h-10 object-contain rounded"
                            />
                            <span className="text-xl font-playfair font-bold text-secondary">
                                The Great Bharat Band
                            </span>
                        </Link>
                        <p className="text-white/60 leading-relaxed">
                            Premium Wedding Band & Event Planner in Ghaziabad. We make your special moments truly grand and musical with our expert performances and planning.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-black transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-black transition-all">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-lg font-bold text-white uppercase tracking-wider">Quick Links</h4>
                        <ul className="flex flex-col gap-3">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="text-white/60 hover:text-secondary transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-lg font-bold text-white uppercase tracking-wider">Our Services</h4>
                        <ul className="flex flex-col gap-3">
                            {services.map((service) => (
                                <li key={service} className="text-white/60">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-lg font-bold text-white uppercase tracking-wider">Contact Info</h4>
                        <ul className="flex flex-col gap-4">
                            <li className="flex gap-3 text-white/60">
                                <Phone size={20} className="text-secondary shrink-0" />
                                <a href="tel:9310765743" className="hover:text-secondary">+91 9310765743</a>
                            </li>
                            <li className="flex gap-3 text-white/60">
                                <Mail size={20} className="text-secondary shrink-0" />
                                <a href="mailto:greatindianband@gmail.com" className="hover:text-secondary">greatindianband@gmail.com</a>
                            </li>
                            <li className="flex gap-3 text-white/60">
                                <MapPin size={20} className="text-secondary shrink-0" />
                                <span>Shop- 2, Noor Nagar, Sehani Khurd, Ghukna, Ghaziabad, UP 201003</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center">
                    <p className="text-white/40 text-sm">
                        Copyright &copy; {currentYear} <span className="text-secondary">The Great Bharat Band</span>. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
