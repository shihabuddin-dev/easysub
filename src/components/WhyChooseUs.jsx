import React from 'react';
import { FaBolt, FaShieldAlt, FaThumbsUp } from 'react-icons/fa';

const WhyChooseUs = () => {
    return (
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-indigo-700 mb-10">Why Choose Us?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                <div className="bg-white shadow-md rounded-xl p-6 duration-700 transform hover:-translate-y-1">
                    <FaBolt className="text-indigo-500 text-4xl mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast & Reliable</h3>
                    <p className="text-gray-600">Our services are designed for speed, efficiency, and guaranteed uptime to keep your work seamless.</p>
                </div>
                <div className="bg-white shadow-md rounded-xl p-6 duration-700 transform hover:-translate-y-1">
                    <FaShieldAlt className="text-indigo-500 text-4xl mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Platform</h3>
                    <p className="text-gray-600">We ensure your data is protected with top-level encryption and privacy standards.</p>
                </div>
                <div className="bg-white shadow-md rounded-xl p-6 duration-700 transform hover:-translate-y-1">
                    <FaThumbsUp className="text-indigo-500 text-4xl mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Trusted by Users</h3>
                    <p className="text-gray-600">Thousands of users rely on us daily for their subscription needs. Join our happy community!</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
