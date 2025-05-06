import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-tr from-indigo-700 via-indigo-700 to-purple-800 text-gray-100 pt-12 pb-6 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-300 border-dashed pb-10">
                {/* Brand Column */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-2">EasySub</h2>
                    <p className="text-sm leading-relaxed">
                        Discover and manage your favorite subscription boxes in one place.
                    </p>
                </div>

                {/* Explore Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Explore</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-indigo-400 transition">Home</Link></li>
                        <li><Link to="/subscriptions" className="hover:text-indigo-400 transition">Subscriptions</Link></li>
                        <li><Link to="/local-business" className="hover:text-indigo-400 transition">Local Businesses</Link></li>
                        <li><Link to="/about" className="hover:text-indigo-400 transition">About</Link></li>
                    </ul>
                </div>

                {/* Legal Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Legal</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/terms" className="hover:text-indigo-400 transition">Terms & Conditions</Link></li>
                        <li><Link to="/privacy" className="hover:text-indigo-400 transition">Privacy Policy</Link></li>
                        <li><Link to="/contact" className="hover:text-indigo-400 transition">Contact</Link></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Connect With Us</h3>
                    <div className="flex space-x-4 text-xl">
                        <a href="https://facebook.com" className="hover:text-indigo-400 transition" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="https://instagram.com" className="hover:text-indigo-400 transition" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://twitter.com" className="hover:text-indigo-400 transition" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://linkedin.com" className="hover:text-indigo-400 transition" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

            <div className="mt-6 text-center text-sm ">
                &copy; {new Date().getFullYear()} EasySub. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
