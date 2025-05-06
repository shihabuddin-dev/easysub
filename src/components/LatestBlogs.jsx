// components/LatestBlogs.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const blogData = [
    {
        id: 1,
        title: "Top 5 Subscription Tools for Developers in 2025",
        excerpt: "Stay updated with the best tools that can boost your productivity...",
        date: "May 2, 2025"
    },
    {
        id: 2,
        title: "Why SaaS Subscriptions Are the Future",
        excerpt: "Explore how the SaaS model is revolutionizing the tech world...",
        date: "April 20, 2025"
    },
    {
        id: 3,
        title: "Managing Tech Subscriptions Smartly",
        excerpt: "Learn how to manage multiple tools efficiently without losing track...",
        date: "April 5, 2025"
    }
];

const LatestBlogs = () => {
    return (
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-indigo-700 mb-10">Latest From Our Blog</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogData.map((blog) => (
                    <div key={blog.id} className="bg-white p-6 rounded-xl shadow duration-700 transform hover:-translate-y-1">
                        <p className="text-sm text-gray-400 mb-2">{blog.date}</p>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
                        <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                        <Link to="/" className="text-indigo-600 hover:underline font-medium">Read More</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestBlogs;
